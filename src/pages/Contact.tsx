import { SiteLayout } from "@/components/site/SiteLayout";
import { Marquee } from "@/components/site/Marquee";
import { SectionHead } from "@/components/site/SectionHead";
import { Reveal } from "@/components/site/Reveal";
import {
  CONTACT_MARQUEE,
  CONTACT_PROCESS,
  CONTACT_CHANNELS,
  CONTACT_POINTS,
  COMPANY_EMAIL,
} from "@/data/site";

export default function Contact() {
  return (
    <SiteLayout title="Contact Us — Techish Innovations">
      {/* ============ PAGE HERO ============ */}
      <header className="tk-page-hero">
        <p className="tk-eyebrow">Contact Us</p>
        <h1>
          Tell Us About <span>Your Problem</span>
        </h1>
        <p>
          Tell Techish Innovations about the real-world problem you're looking
          at — our team will get back to you within one business day.
        </p>
      </header>

      <Marquee items={CONTACT_MARQUEE} />

      {/* ============ EMAIL + DETAILS ============ */}
      <section>
        <div className="tk-section-inner contact-grid">
          <Reveal>
            <div className="tk-window">
              <div className="tk-window-bar">
                <span className="tk-dot r" />
                <span className="tk-dot y" />
                <span className="tk-dot g" />
                <span>Contact Techish Innovations</span>
              </div>
              <div className="contact-form-body">
                <p className="tk-eyebrow">email — direct</p>
                <p className="contact-form-lead">
                  The fastest way to reach us is by email. Tell us the
                  real-world problem you're looking at — a real engineer reads
                  every message, and we reply within one business day.
                </p>
                <a
                  className="tk-window-email"
                  href={`mailto:${COMPANY_EMAIL}`}
                >
                  {COMPANY_EMAIL}
                </a>
                <a
                  className="tk-pill solid"
                  href={`mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent(
                    "Problem worth solving",
                  )}`}
                >
                  Email Us
                </a>
                <p className="contact-afternote">
                  No forms, no spam — your message goes straight to the team
                  building the products.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="contact-side">
            <h3>Contact Details</h3>
            <p className="contact-side-note">
              Email is the fastest channel — reach us directly at{" "}
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                style={{ color: "var(--tk-accent)" }}
              >
                {COMPANY_EMAIL}
              </a>{" "}
              and we'll get back to you within one business day.
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
            title="Your Problem, Our Process"
            description="A clear, no-nonsense path from the first conversation to a plan in motion."
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

      {/* ============ CTA ============ */}
      <section className="tk-cta">
        <p className="tk-eyebrow">Get Started</p>
        <h2>Start the Conversation With Confidence</h2>
        <p>
          Every conversation starts with the problem — no pressure, no pitch.
          Your information stays confidential throughout.
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
