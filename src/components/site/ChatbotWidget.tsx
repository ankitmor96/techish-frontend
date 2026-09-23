import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { Send, X } from "lucide-react";

interface ChatMessage {
  role: "bot" | "user";
  text: string;
  link?: { label: string; to: string };
}

const SUGGESTIONS = [
  "What services do you offer?",
  "Tell me about your process",
  "How do engagements work?",
  "How do I apply for a job?",
];

const ANSWERS: Array<{
  keywords: string[];
  text: string;
  link?: { label: string; to: string };
}> = [
  {
    keywords: ["service", "offer", "build", "web", "mobile", "ai", "cloud", "design"],
    text: "We build custom web platforms, mobile apps, internal tools, AI & automation systems, UI/UX design, and cloud & DevOps foundations. Six core disciplines, one senior team.",
    link: { label: "Explore our craft →", to: "/our-craft" },
  },
  {
    keywords: ["process", "how", "work", "steps", "sprint"],
    text: "Every engagement runs through four steps: Discover → Design → Build → Launch & Grow. Short sprints, weekly demos, and visible progress from week one.",
    link: { label: "How we work →", to: "/" },
  },
  {
    keywords: ["engagement", "pricing", "cost", "budget", "fixed", "dedicated", "quote"],
    text: "Two engagement models: Fixed-Scope Projects (clear brief, fixed timeline & price) or a Dedicated Team that scales with your roadmap. We recommend what fits your goals.",
    link: { label: "Start a project →", to: "/contact" },
  },
  {
    keywords: ["nda", "confidential", "security", "secure"],
    text: "Happy to sign an NDA before any detailed discussion. Security-by-default architecture and code review are baked into every engagement.",
    link: { label: "Contact us →", to: "/contact" },
  },
  {
    keywords: ["job", "career", "apply", "hiring", "role", "open"],
    text: "We're currently hiring a Senior Full-Stack Engineer, a Product Designer, and a Cloud & DevOps Engineer — all remote, all full-time.",
    link: { label: "See open roles →", to: "/careers" },
  },
  {
    keywords: ["contact", "email", "call", "reach", "talk"],
    text: "The fastest way to reach us is the contact form — a real engineer reviews every inquiry and replies within one business day.",
    link: { label: "Contact us →", to: "/contact" },
  },
];

const FALLBACK: ChatMessage = {
  role: "bot",
  text: "Great question! For anything specific, the team can give you a proper answer — drop your question in the contact form and we'll reply within one business day.",
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
      text: "Hi! I'm the Techish assistant. Ask me about our services, process, or engagement models — or pick a topic below.",
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

          <p className="tk-ai-note">AI answers are illustrative — no data leaves your browser.</p>
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
