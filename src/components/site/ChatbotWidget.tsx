import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { Send, X } from "lucide-react";

interface ChatMessage {
  role: "bot" | "user";
  text: string;
  link?: { label: string; to: string };
}

const SUGGESTIONS = [
  "What does Techish build?",
  "Which problems do you focus on?",
  "What products are you building?",
  "How do I apply for a job?",
];

const ANSWERS: Array<{
  keywords: string[];
  text: string;
  link?: { label: string; to: string };
}> = [
  {
    keywords: ["service", "offer", "build", "product", "web", "mobile", "ai", "tech"],
    text: "Techish Innovations is a technology product company. We build AI, software, and emerging technology products designed to solve complex problems across business, civic infrastructure, sustainability, and industry.",
    link: { label: "Explore our products →", to: "/our-craft" },
  },
  {
    keywords: ["problem", "focus", "domain", "industr", "civic", "sustain"],
    text: "Our products concentrate on four domains: business, civic infrastructure, sustainability, and industry. Every product starts from a real problem worth solving.",
    link: { label: "Where we build →", to: "/" },
  },
  {
    keywords: ["process", "how", "work", "steps", "research"],
    text: "Every product runs through four steps: Research → Prototype → Build → Ship & Iterate. Applied research and production engineering sit in the same team.",
    link: { label: "How we build →", to: "/" },
  },
  {
    keywords: ["product", "platform", "roadmap"],
    text: "We build our own technology — AI, software, and emerging technology products, plus collaborations with organizations on shared problems.",
    link: { label: "See our work →", to: "/our-work" },
  },
  {
    keywords: ["job", "career", "apply", "hiring", "role", "open"],
    text: "We're currently hiring an AI Engineer, a Product Engineer, and a Technology Researcher — all remote, all full-time.",
    link: { label: "See open roles →", to: "/careers" },
  },
  {
    keywords: ["contact", "email", "call", "reach", "talk"],
    text: "The fastest way to reach us is the contact form — tell us the problem you're looking at and we'll reply within one business day.",
    link: { label: "Contact us →", to: "/contact" },
  },
];

const FALLBACK: ChatMessage = {
  role: "bot",
  text: "Great question! For anything specific, the team can give you a proper answer — tell us the problem you're looking at through the contact form and we'll reply within one business day.",
  link: { label: "Contact us →", to: "/contact" },
};

function answerFor(input: string): ChatMessage {
  const q = input.toLowerCase();
  const match = ANSWERS.find((a) => a.keywords.some((k) => q.includes(k)));
  if (match) {
    return { role: "bot", text: match.text, link: match.link };
  }
  return FALLBACK;
}

/** Floating assistant launcher + rule-based chat panel. */
export function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "bot",
      text: "Hi! I'm the Techish assistant. Ask me about our products, focus areas, or how we build — or pick a topic below.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const msgsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    msgsRef.current?.scrollTo({ top: msgsRef.current.scrollHeight });
  }, [messages, typing]);

  const send = (raw?: string) => {
    const text = (raw ?? input).trim();
    if (!text || typing) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages((m) => [...m, answerFor(text)]);
      setTyping(false);
    }, 700);
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
            {typing && (
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
              placeholder="Ask something…"
              aria-label="Message the assistant"
            />
            <button type="button" aria-label="Send" onClick={() => send()}>
              <Send className="size-4" />
            </button>
          </div>

          <p className="tk-ai-note">AI answers are illustrative — for anything specific, reach out via the contact page.</p>
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
