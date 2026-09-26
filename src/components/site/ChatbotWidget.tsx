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
  text: `My AI brain is briefly unreachable. I can still answer instantly about Techish — products, roles, contact — or email ${COMPANY_EMAIL} and we'll reply within one business day.`,
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

RULES: ALWAYS answer the question itself first — a direct, helpful answer in 2-5 sentences. Never reply with just a page suggestion. For non-Techish questions (general knowledge, coding, advice, anything), answer normally as a capable assistant and do NOT add any page link. Only when the question clearly maps to one of the pages above AND visiting it would genuinely help the user, append as the very last line exactly one: Explore: /path (only /products, /careers, /contact, /about, or /).`.trim();

/** Compact knowledge for the key-less GET endpoint (URL length + speed). */
const SITE_KNOWLEDGE_SHORT = `You are the official assistant of Techish Innovations (techishinnovation.com), a product company building in-house: AI Employees (AI agents, automation, business intelligence), Civic Alert (real-time road & public-safety alert infrastructure for cities), EV Circular (EV battery lifecycle: collection, diagnostics, second life, recycling), Skill-Based Networks (professional networks built on verified skills). Process: Research, Prototype, Build, Ship & Iterate. Contact: ${COMPANY_EMAIL} (reply within one business day). Hiring: AI Engineer, Product Engineer, Technology Researcher (remote, full-time). RULES: Answer the question directly in 2-5 sentences — always give a real answer, never only a page suggestion. Non-Techish questions: answer normally, no page link. If the question clearly maps to a page, end with one line like: Explore: /products (or /careers, /contact, /about, /)`.trim();

/** Deterministic answers used when the AI endpoint is unreachable. */
const ANSWERS: Array<{
  keywords: string[];
  text: string;
  link?: { label: string; to: string };
}> = [
  {
    keywords: ["hi", "hello", "hey", "namaste", "kem cho", "good morning", "good evening"],
    text: "Hi! I'm the Techish AI assistant. Ask me anything — our products (AI Employees, Civic Alert, EV Circular, Skill-Based Networks), open roles, contact details, or any other question at all.",
  },
  {
    keywords: ["who are you", "what can you do", "your name", "what do you do"],
    text: "I'm the Techish Innovations assistant — a mini AI chat that also knows our company inside out. Ask about our products, careers, or contact info, or anything else you're curious about.",
  },
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
    keywords: ["skill", "network", "hire", "freelance", "freelancing"],
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
  const match = ANSWERS.find((a) =>
    a.keywords.some((k) => new RegExp(`\\b${k}\\b`).test(q)),
  );
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

/** fetch() with a hard timeout so a slow provider can't stall the chat. */
async function fetchWithTimeout(
  url: string,
  ms: number,
  init?: RequestInit,
): Promise<Response> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), ms);
  try {
    return await fetch(url, { ...init, signal: ctrl.signal });
  } finally {
    clearTimeout(timer);
  }
}

/** Primary: Gemini (if a key is configured). Returns null when unusable. */
async function geminiReply(question: string): Promise<string | null> {
  if (!GEMINI_KEY) return null;
  try {
    const res = await fetchWithTimeout(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_KEY}`,
      12000,
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

/** Strips markdown decorations some models add (plain-text chat bubble). */
function cleanAiText(text: string): string {
  return text
    .replace(/\*\*/g, "")
    .replace(/(^|\n)#+\s*/g, "$1")
    .replace(/`/g, "")
    .trim();
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

  // 2) Pollinations (free, key-less) — quick attempts with hard timeouts.
  // Short prompts succeed far more often on this free endpoint, so the
  // retry uses a minimal knowledge line instead of the full prompt.
  const ask = async (prompt: string, ms: number): Promise<string> => {
    const res = await fetchWithTimeout(
      `${AI_ENDPOINT}${encodeURIComponent(prompt)}`,
      ms,
    );
    if (!res.ok) throw new Error(`AI ${res.status}`);
    const raw = await res.text();
    let parsed: unknown = raw;
    try {
      parsed = JSON.parse(raw);
    } catch {
      /* plain text response */
    }
    const text =
      typeof parsed === "string"
        ? parsed
        : ((parsed as AiParsed).choices?.[0]?.message?.content ??
          (parsed as AiParsed).content ??
          "");
    if (!text.trim()) throw new Error("AI empty");
    return text;
  };

  let content = "";
  try {
    content = await ask(
      `${SITE_KNOWLEDGE_SHORT}\n\nUser question: ${question}`,
      10000,
    );
  } catch {
    try {
      content = await ask(
        `Techish Innovations (techishinnovation.com) builds in-house: AI Employees, Civic Alert, EV Circular, Skill-Based Networks. Contact ${COMPANY_EMAIL}. Answer directly in 2-5 sentences, no page links. Question: ${question}`,
        8000,
      );
    } catch {
      throw new Error("AI unavailable");
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
    if (i % 3 === 0) onChunk(full);
    if (i % 10 === 0) await new Promise((r) => setTimeout(r, 12));
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
      const { text: clean, link } = extractLink(cleanAiText(full));
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
