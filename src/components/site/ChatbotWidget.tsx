import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { Send, X } from "lucide-react";
import { COMPANY_EMAIL } from "@/components/site/email";

interface ChatMessage {
  role: "bot" | "user";
  text: string;
  link?: { label: string; to: string };
}

const SUGGESTIONS = [
  "What does Techish build?",
  "What is Civic Alert?",
  "How do I apply for a job?",
  "How can I contact the team?",
];

const FALLBACK: ChatMessage = {
  role: "bot",
  text: "Connection issue — please try again in a moment. For anything specific, email us and we'll reply within one business day.",
  link: { label: "Contact us →", to: "/contact" },
};

/** Site knowledge injected into every AI request. */
const SITE_KNOWLEDGE = `
You are the official assistant for Techish Innovations (techishinnovation.com), a technology product company founded by experienced engineers. You build your OWN products in-house — you are not an agency/consultancy.

PRODUCTS (4, built in-house):
1. AI Employees — AI systems that understand the business, execute workflows end to end, and surface the right decision at the right time. Works alongside your team, not replaces it. Chips: AI Agents, Automation, Business Intelligence.
2. Civic Alert — real-time incident & road alert infrastructure that helps cities communicate critical road/incident/public-safety information to residents in real time. Chips: GovTech, Geospatial, Real-Time Alerts.
3. EV Circular — technology for the full lifecycle of electric vehicle batteries: collection, diagnostics, second life, recycling — recovering value and keeping EVs in circulation instead of landfill. Chips: Circular Economy, EV Lifecycle, Sustainability.
4. Skill-Based Networks — professional networks built around what people can actually do: connecting verified skills to real opportunities without the noise of traditional platforms. Chips: Skill-Based Networks, Skills, Emerging Technology.

DOMAINS: business, civic infrastructure, sustainability, industry.
PROCESS: Research → Prototype → Build → Ship & Iterate. Applied research and production engineering sit in the same team.
PRINCIPLES: standards never skipped; consistent framework from real problem to working solution; built for long-term technology.

CONTACT: email ${COMPANY_EMAIL} (fastest channel, reply within one business day) — contact page at /contact.
CAREERS: currently hiring AI Engineer, Product Engineer, Technology Researcher — remote, full-time. Apply via the careers page at /careers or by email.
PAGES: Home /, Products /products, About /about, Careers /careers, Contact /contact.

RULES: Answer ANY question helpfully and briefly (2-5 sentences). If asked about Techish, use ONLY the facts above. If asked something unrelated to Techish (general knowledge, coding, anything else), still answer helpfully as a general assistant. When the question relates to a product/page, append on its own line exactly one suggestion like: "Explore: /products" (or /careers, /contact, /about, /) matching the most relevant page.`.trim();

/** Deterministic answers used when the AI endpoint is unreachable. */
const ANSWERS: Array<{
  keywords: string[];
  text: string;
  link?: { label: string; to: string };
}> = [
  {
    keywords: ["service", "offer", "build", "product", "web", "mobile", "ai", "tech"],
    text: "Techish Innovations builds its own products: AI Employees, Civic Alert, EV Circular, and Skill-Based Networks — AI, software, and emerging technology for real-world problems.",
    link: { label: "Explore our products →", to: "/products" },
  },
  {
    keywords: ["civic", "alert", "road", "incident"],
    text: "Civic Alert is our real-time incident & road alert infrastructure — helping cities communicate critical road and public-safety information with residents instantly.",
    link: { label: "See products →", to: "/products" },
  },
  {
    keywords: ["ev", "battery", "circular", "sustain"],
    text: "EV Circular covers the full EV battery lifecycle — collection, diagnostics, second life, and recycling — recovering value instead of landfill.",
    link: { label: "See products →", to: "/products" },
  },
  {
    keywords: ["skill", "network", "hire", "freelanc"],
    text: "Skill-Based Networks connects verified skills to real opportunities — a professional network built around what people can actually do.",
    link: { label: "See products →", to: "/products" },
  },
  {
    keywords: ["job", "career", "apply", "hiring", "role", "open"],
    text: "We're hiring an AI Engineer, a Product Engineer, and a Technology Researcher — all remote, all full-time.",
    link: { label: "See open roles →", to: "/careers" },
  },
  {
    keywords: ["contact", "email", "call", "reach", "talk"],
    text: `The fastest way to reach us is email: ${COMPANY_EMAIL} — we reply within one business day.`,
    link: { label: "Contact us →", to: "/contact" },
  },
];

function keywordAnswer(input: string): ChatMessage {
  const q = input.toLowerCase();
  const match = ANSWERS.find((a) => a.keywords.some((k) => q.includes(k)));
  if (match) return { role: "bot", text: match.text, link: match.link };
  return FALLBACK;
}

const AI_ENDPOINT = "https://text.pollinations.ai/";
const GEMINI_KEY = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;

interface AiParsedChoice {
  message?: { content?: string };
}
interface AiParsed {
  choices?: AiParsedChoice[];
  content?: string;
}

/** Primary: Gemini (if a key is configured). Returns null when unusable. */
async function geminiReply(question: string): Promise<string | null> {
  if (!GEMINI_KEY) return null;
  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SITE_KNOWLEDGE }] },
          contents: [{ role: "user", parts: [{ text: question }] }],
          generationConfig: { temperature: 0.6, maxOutputTokens: 300 },
        }),
      },
    );
    if (!res.ok) return null;
    const data = await res.json();
    const text: string =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
    return text.trim() ? text : null;
  } catch {
    return null;
  }
}

/** Maps a trailing "Explore: /path" line from the AI reply to a chat link. */
function extractLink(text: string): {
  text: string;
  link?: { label: string; to: string };
} {
  const known = ["/products", "/careers", "/contact", "/about", "/"];
  const match = text.match(/Explore:\s*(\/\S*)/i);
  if (match) {
    const to = known.find((p) => p === match[1]) ?? "/products";
    const labels: Record<string, string> = {
      "/products": "Explore our products →",
      "/careers": "See open roles →",
      "/contact": "Contact us →",
      "/about": "About us →",
      "/": "Back to home →",
    };
    return {
      text: text.replace(match[0], "").trim(),
      link: { label: labels[to], to },
    };
  }
  return { text: text.trim() };
}

/** Streams an AI reply chunk-by-chunk into the given updater. */
async function streamAiReply(
  question: string,
  onChunk: (full: string) => void,
): Promise<string> {
  // 1) Gemini first (most reliable when a key is configured).
  const gemini = await geminiReply(question);
  if (gemini) {
    await revealText(gemini, onChunk);
    return gemini;
  }

  // 2) Pollinations (free, key-less) with retries — it rate-limits per IP.
  // Knowledge is prefixed into the prompt itself (GET path has no system param).
  const url = `${AI_ENDPOINT}${encodeURIComponent(
    `${SITE_KNOWLEDGE}\n\nUser question: ${question}`,
  )}`;
  let content = "";
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`AI ${res.status}`);
      const raw = await res.text();
      let parsed: unknown = raw;
      try {
        parsed = JSON.parse(raw);
      } catch {
        /* plain text response */
      }
      if (typeof parsed === "string") {
        content = parsed;
      } else {
        const obj = parsed as AiParsed;
        content = obj.choices?.[0]?.message?.content ?? obj.content ?? "";
      }
      if (content.trim()) break;
      throw new Error("AI empty");
    } catch {
      if (attempt === 1) throw new Error("AI unavailable");
      await new Promise((r) => setTimeout(r, 2500));
    }
  }
  await revealText(content, onChunk);
  return content;
}

/** Reveals text progressively for a live-typing feel. */
async function revealText(
  text: string,
  onChunk: (full: string) => void,
): Promise<void> {
  const words = text.split(/(\s+)/);
  let full = "";
  for (let i = 0; i < words.length; i++) {
    full += words[i];
    if (i % 2 === 0) onChunk(full);
    if (i % 6 === 0) await new Promise((r) => setTimeout(r, 15));
  }
  onChunk(full);
}

/** Floating AI assistant launcher + fully working AI chat panel. */
export function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "bot",
      text: "Hi! I'm the Techish AI assistant. Ask me anything — about our products, Techish in general, or any other question.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const msgsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    msgsRef.current?.scrollTo({ top: msgsRef.current.scrollHeight });
  }, [messages, typing]);

  const send = async (raw?: string) => {
    const text = (raw ?? input).trim();
    if (!text || typing) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    setTyping(true);

    // Track the streaming bot message by index.
    let botIndex = -1;
    const updateBot = (full: string) => {
      setMessages((m) => {
        if (botIndex < 0) {
          botIndex = m.length;
          return [...m, { role: "bot", text: full }];
        }
        const copy = [...m];
        copy[botIndex] = { ...copy[botIndex], text: full };
        return copy;
      });
    };

    try {
      const full = await streamAiReply(text, updateBot);
      const { text: clean, link } = extractLink(full);
      setMessages((m) => {
        const copy = [...m];
        if (botIndex >= 0 && botIndex < copy.length) {
          copy[botIndex] = { role: "bot", text: clean, link };
        }
        return copy;
      });
    } catch {
      setMessages((m) => {
        if (botIndex >= 0) {
          const copy = [...m];
          copy[botIndex] = keywordAnswer(text);
          return copy;
        }
        return [...m, keywordAnswer(text)];
      });
    } finally {
      setTyping(false);
    }
  };

  return (
    <>
      <button
        type="button"
        className="tk-ai-launcher"
        aria-label="Open AI assistant"
        onClick={() => setOpen(true)}
      >
        <BotIcon />
      </button>

      {open && (
        <div className="tk-ai-bot" role="dialog" aria-label="Techish assistant">
          <div className="tk-ai-head">
            <span className="hdot" />
            <b>Techish Assistant</b>
            <span>online</span>
            <button
              type="button"
              className="tk-ai-close"
              aria-label="Close assistant"
              onClick={() => setOpen(false)}
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="tk-ai-msgs" ref={msgsRef}>
            {messages.map((m, i) => (
              <div key={i} className={`tk-ai-msg ${m.role}`}>
                {m.text}
                {m.link && (
                  <div style={{ marginTop: 6 }}>
                    <Link to={m.link.to} onClick={() => setOpen(false)}>
                      {m.link.label}
                    </Link>
                  </div>
                )}
              </div>
            ))}
            {typing && messages[messages.length - 1]?.role === "user" && (
              <div className="tk-ai-msg bot">
                <span className="tk-ai-typing">
                  <i />
                  <i />
                  <i />
                </span>
              </div>
            )}
          </div>

          <div className="tk-ai-chips">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                type="button"
                className="tk-ai-chip"
                onClick={() => send(s)}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="tk-ai-bar">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask anything…"
              aria-label="Message the assistant"
            />
            <button type="button" aria-label="Send" onClick={() => send()}>
              <Send className="size-4" />
            </button>
          </div>

          <p className="tk-ai-note">
            Powered by AI — answers may vary. For anything official, reach us
            via the contact page.
          </p>
        </div>
      )}
    </>
  );
}

/** Inline SVG icon (no extra dependency). */
function BotIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="4"
        y="7"
        width="16"
        height="12"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="9.5" cy="13" r="1.4" fill="currentColor" />
      <circle cx="14.5" cy="13" r="1.4" fill="currentColor" />
      <path d="M12 7V4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="3" r="1.2" fill="currentColor" />
    </svg>
  );
}
