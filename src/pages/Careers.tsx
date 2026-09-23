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
  CAREERS_POLICY_LINES,
} from "@/data/site";

const CAREERS_IMAGES = [
  { image: "/images/12.jpg", caption: "Team", tag: "ALL" },
  { image: "/images/4.jpg", caption: "Focus", tag: "DEV" },
  { image: "/images/2.jpg", caption: "Sync", tag: "MEET" },
] as const;

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
    <SiteLayout title="Careers — Techish Innovation">
      {/* ============ PAGE HERO ============ */}
      <header className="tk-page-hero">
        <p className="tk-eyebrow">Careers</p>
        <h1>
          Do the Best Work of Your Career, <span>With a Small Senior Team</span>
        </h1>
        <p>
          Build your best work with Techish Innovation — a small, senior team
          that cares about craftsmanship and ownership.
        </p>
      </header>

      <Marquee items={CAREERS_MARQUEE} />

      {/* ============ MEET THE TEAM ============ */}
      <section>
        <div className="tk-section-inner">
          <SectionHead
            eyebrow="Meet the Team"
            title="The People Behind the Product"
          />
          <div className="tk-imgband">
            {CAREERS_IMAGES.map((item) => (
              <figure key={item.caption}>
                <img
                  src={item.image}
                  alt={`Life at Techish — ${item.caption}`}
                  loading="lazy"
                />
                <figcaption>
                  <span>{item.caption}</span>
                  <em>{item.tag}</em>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

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
            eyebrow="Why Techish Innovation"
            title="Why Engineers and Designers Choose to Work Here"
            description="We built the kind of company we'd want to work at ourselves — small enough to matter, ambitious enough to challenge you."
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
            title="A Team That Cares How the Work Gets Done"
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
        description="Reach out and tell us how you'd like to contribute."
        ctaLabel="Get in Touch"
      />
    </SiteLayout>
  );
}
