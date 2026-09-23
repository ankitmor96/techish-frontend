import { useState, type FormEvent } from "react";
import { Link } from "react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Marquee } from "@/components/site/Marquee";
import { SectionHead } from "@/components/site/SectionHead";
import { TerminalWindow, type TerminalLine } from "@/components/site/TerminalWindow";
import { Reveal } from "@/components/site/Reveal";
import {
  CONTACT_MARQUEE,
  CONTACT_PROCESS,
  CONTACT_CHANNELS,
  CONTACT_POINTS,
  CONTACT_LOOKING,
} from "@/data/site";

const SENT_LINES: TerminalLine[] = [
  {
    segments: [
      { t: "plain", s: "$ " },
      { t: "white", s: "techish message --send" },
    ],
  },
  {
    segments: [
      { t: "plain", s: "→ received ............. " },
      { t: "accent", s: "[ok]" },
    ],
  },
  {
    segments: [
      { t: "plain", s: "→ response time ........ " },
      { t: "accent", s: "[within 24h]" },
    ],
  },
  {
    segments: [
      { t: "plain", s: "→ status ................ " },
      { t: "accent", s: "✓ we'll be in touch" },
    ],
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <SiteLayout title="Contact Us — Techish Innovation">
      {/* ============ PAGE HERO ============ */}
      <header className="tk-page-hero">
        <p className="tk-eyebrow">Contact Us</p>
        <h1>
          Tell Us About <span>Your Project</span>
        </h1>
        <p>
          Tell Techish Innovation about your project and our team will get back
          to you within one business day.
        </p>
      </header>

      <Marquee items={CONTACT_MARQUEE} />

      {/* ============ FORM + DETAILS ============ */}
      <section>
        <div className="tk-section-inner contact-grid">
          <Reveal>
            <div className="tk-window">
              <div className="tk-window-bar">
                <span className="tk-dot r" />
                <span className="tk-dot y" />
                <span className="tk-dot g" />
                <span>Send Us a Message</span>
              </div>
              <div className="contact-form-body">
                {sent ? (
                  <>
                    <p className="tk-eyebrow">message — sent</p>
                    <TerminalWindow
                      title="message — sent"
                      lines={SENT_LINES}
                      startDelay={150}
                      lineDelay={320}
                    />
                    <p className="contact-afternote">
                      Thanks for reaching out — a real engineer reviews every
                      message. Expect a reply within one business day.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="contact-form-lead">
                      Fill out the form and we'll be in touch shortly. Replies
                      within 24h. No spam, ever. We only use this to reply to
                      your inquiry.
                    </p>
                    <form className="tk-form" onSubmit={handleSubmit}>
                      <div className="tk-form-row">
                        <div className="tk-field">
                          <label htmlFor="name">Name</label>
                          <input
                            id="name"
                            name="name"
                            required
                            placeholder="Jane Doe"
                          />
                        </div>
                        <div className="tk-field">
                          <label htmlFor="email">Email</label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="jane@company.com"
                          />
                        </div>
                      </div>
                      <div className="tk-form-row">
                        <div className="tk-field">
                          <label htmlFor="company">Company</label>
                          <input
                            id="company"
                            name="company"
                            placeholder="Company Inc."
                          />
                        </div>
                        <div className="tk-field">
                          <label htmlFor="budget">Budget Range</label>
                          <select id="budget" name="budget" defaultValue="">
                            <option value="" disabled>
                              Select a range
                            </option>
                            <option>Under $10k</option>
                            <option>$10k – $50k</option>
                            <option>$50k – $150k</option>
                            <option>$150k+</option>
                            <option>Not sure yet</option>
                          </select>
                        </div>
                      </div>
                      <div className="tk-field">
                        <label htmlFor="message">Project Details</label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          placeholder="Tell us what you're building, your timeline, and any constraints…"
                        />
                      </div>
                      <button type="submit" className="tk-pill solid">
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </Reveal>

          <div className="contact-side">
            <h3>Contact Details</h3>
            <p className="contact-side-note">
              Prefer a different channel? Contact details are being updated —
              please use the message form and we'll get back to you shortly.
            </p>
            <ul className="tk-comp-list good">
              {CONTACT_POINTS.map((point) => (
                <li key={point.title}>
                  <b style={{ color: "var(--tk-ink)" }}>{point.title}</b> —{" "}
                  {point.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section>
        <div className="tk-section-inner">
          <SectionHead
            eyebrow="How It Works"
            title="Your Idea, Our Process"
            description="A clear, no-nonsense path from the first hello to a project in motion."
          />
          <div className="tk-grid tk-grid-3">
            {CONTACT_PROCESS.map((step) => (
              <Reveal key={step.title} className="tk-card">
                <span className="tk-step">{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CHANNELS ============ */}
      <section>
        <div className="tk-section-inner">
          <SectionHead
            eyebrow="Communication"
            title="How We Prefer to Connect"
            description="Different conversations call for different channels — here's what works best for each."
          />
          <div className="tk-grid tk-grid-3">
            {CONTACT_CHANNELS.map((channel) => (
              <Reveal key={channel.title} className="tk-card">
                <h3>{channel.title}</h3>
                <p>{channel.description}</p>
                {channel.tag && <span className="tk-step">{channel.tag}</span>}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ OTHER PLACES ============ */}
      <section>
        <div className="tk-section-inner">
          <SectionHead
            eyebrow="Looking for Something Else?"
            title="A Few Other Places to Look"
          />
          <div className="tk-grid tk-grid-3">
            {CONTACT_LOOKING.map((item) => (
              <Reveal key={item.title} className="tk-card">
                <span className="tk-step">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link to={item.href} className="tk-arrowlink">
                  Explore
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="tk-cta">
        <p className="tk-eyebrow">Get Started</p>
        <h2>Start Your Software Development Project With Confidence</h2>
        <p>
          Every inquiry starts with a short, no-pressure discovery call. Your
          information stays confidential — we're happy to sign an NDA before
          any deeper conversation.
        </p>
        <button
          type="button"
          className="tk-pill"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to Top
        </button>
      </section>
    </SiteLayout>
  );
}
