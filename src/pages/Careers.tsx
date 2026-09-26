import { SiteLayout } from "@/components/site/SiteLayout";
import { Marquee } from "@/components/site/Marquee";
import { SectionHead } from "@/components/site/SectionHead";
import { TerminalWindow, type TerminalLine } from "@/components/site/TerminalWindow";
import { CTABand } from "@/components/site/CTABand";
import { Reveal } from "@/components/site/Reveal";
import {
  CAREERS_MARQUEE,
  CAREERS_LOOKFOR,
  CAREERS_WHY,
  CAREERS_BENEFITS,
  JOBS,
  CAREERS_PROCESS,
  CAREERS_FAQS,
  CAREERS_CULTURE,
} from "@/data/site";
import { handleEmailClick } from "@/components/site/email";

const POLICY_LINES: TerminalLine[] = [
  {
    segments: [
      { t: "plain", s: "$ " },
      { t: "white", s: "techish hire --criterion diverse" },
    ],
  },
  {
    segments: [
      { t: "plain", s: "→ evaluated by ........ " },
      { t: "accent", s: "[skill, judgment, character]" },
    ],
  },
  {
    segments: [
      { t: "plain", s: "→ background .......... " },
      { t: "accent", s: "[never a factor]" },
    ],
  },
  {
    segments: [
      { t: "plain", s: "→ status .............. " },
      { t: "accent", s: "[equal opportunity employer]" },
    ],
  },
];

export default function Careers() {
  return (
    <SiteLayout title="Careers — Techish Innovations">
      {/* ============ PAGE HERO ============ */}
      <header className="tk-page-hero">
        <p className="tk-eyebrow">Careers</p>
        <h1>
          Build Technology for Real-World Problems, <span>With a Small Team</span>
        </h1>
        <p>
          Do your best work at Techish Innovations — a technology product
          company building AI, software, and emerging technology products.
        </p>
      </header>

      <Marquee items={CAREERS_MARQUEE} />

      {/* ============ WHAT WE LOOK FOR ============ */}
      <section>
        <div className="tk-section-inner">
          <SectionHead
            eyebrow="Who Thrives Here"
            title="What We Look For"
            description="Skills can be taught. These traits are what actually make someone a fit."
          />
          <div className="tk-grid tk-grid-4">
            {CAREERS_LOOKFOR.map((item) => (
              <Reveal key={item.title} className="tk-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY WORK HERE ============ */}
      <section>
        <div className="tk-section-inner">
          <SectionHead
            eyebrow="Why Techish Innovations"
            title="Why Engineers and Researchers Choose to Work Here"
            description="We built the kind of company we'd want to work at ourselves — small enough to matter, ambitious enough to build real products."
          />
          <div className="tk-grid tk-grid-4">
            {CAREERS_WHY.map((item) => (
              <Reveal key={item.title} className="tk-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BENEFITS ============ */}
      <section>
        <div className="tk-section-inner">
          <SectionHead
            eyebrow="What We Offer"
            title="Benefits That Actually Matter"
          />
          <div className="tk-grid tk-grid-4">
            {CAREERS_BENEFITS.map((item) => (
              <Reveal key={item.title} className="tk-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ OPEN POSITIONS ============ */}
      <section>
        <div className="tk-section-inner">
          <SectionHead
            eyebrow="Open Positions"
            title="Current Opportunities"
          />
          <div className="tk-grid tk-grid-3">
            {JOBS.map((job) => (
              <Reveal key={job.title} className="tk-card">
                <span className="tk-step">{job.category}</span>
                <h3>{job.title}</h3>
                <p>{job.description}</p>
                <div className="job-meta">
                  <span className="tk-chip">{job.location}</span>
                  <span className="tk-chip">{job.type}</span>
                </div>
                <a
                  href="mailto:careers@techishinnovation.com"
                  className="tk-arrowlink"
                  onClick={(e) =>
                    handleEmailClick(e, `Application: ${job.title}`)
                  }
                >
                  Apply Now
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HIRING PROCESS ============ */}
      <section>
        <div className="tk-section-inner">
          <SectionHead
            eyebrow="Our Hiring Process"
            title="A Straightforward Path to Joining the Team"
            description="No lengthy panel interviews or take-home tests that eat your weekend — just honest conversations."
          />
          <div className="tk-grid tk-grid-4">
            {CAREERS_PROCESS.map((step) => (
              <Reveal key={step.title} className="tk-card">
                <span className="tk-step">{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CANDIDATE FAQ ============ */}
      <section>
        <div className="tk-section-inner">
          <SectionHead
            eyebrow="Candidate FAQ"
            title="Questions Candidates Often Ask"
            center
          />
          <div className="tk-faq">
            {CAREERS_FAQS.map((faq, i) => (
              <Reveal key={faq.question} delay={i * 0.05}>
                <details className="tk-details" open={i === 0}>
                  <summary>{faq.question}</summary>
                  <div className="tk-details-body">{faq.answer}</div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LIFE AT TECHISH ============ */}
      <section>
        <div className="tk-section-inner">
          <SectionHead
            eyebrow="Life at Techish"
            title="A Team That Cares How the Products Get Built"
            description="We're intentionally small so every voice matters. Here's what that looks like day to day."
          />
          <div className="tk-grid tk-grid-4">
            {CAREERS_CULTURE.map((item) => (
              <Reveal key={item.title} className="tk-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="quote-wrap">
            <TerminalWindow
              title="policy — equal opportunity"
              lines={POLICY_LINES}
              startDelay={300}
              lineDelay={380}
            />
          </Reveal>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <CTABand
        eyebrow="Don't See the Right Role?"
        title="We're Always Open to Meeting Talented People"
        description="Reach out and tell us the problems you'd like to help solve."
        ctaLabel="Get in Touch"
      />
    </SiteLayout>
  );
}
