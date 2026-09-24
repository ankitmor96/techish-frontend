import { SiteLayout } from "@/components/site/SiteLayout";
import { Marquee } from "@/components/site/Marquee";
import { SectionHead } from "@/components/site/SectionHead";
import { TerminalWindow, type TerminalLine } from "@/components/site/TerminalWindow";
import { CTABand } from "@/components/site/CTABand";
import { Reveal } from "@/components/site/Reveal";
import {
  WORK_MARQUEE,
  WORK_PROJECTS,
  WORK_STATS,
  WORK_INCLUSIONS,
  WORK_PORTFOLIO_POINTS,
} from "@/data/site";

const PROJECT_LINES: TerminalLine[] = [
  {
    segments: [
      { t: "plain", s: "$ " },
      { t: "white", s: "techish projects --list" },
    ],
  },
  { segments: [{ t: "plain", s: "$ sorted by impact" }] },
  {
    segments: [
      { t: "plain", s: "→ web platform ............ " },
      { t: "accent", s: "[live]" },
    ],
  },
  {
    segments: [
      { t: "plain", s: "→ mobile app .............. " },
      { t: "accent", s: "[live]" },
    ],
  },
  {
    segments: [
      { t: "plain", s: "→ internal tool ........... " },
      { t: "accent", s: "[live]" },
    ],
  },
  {
    segments: [
      { t: "plain", s: "→ ai integration .......... " },
      { t: "accent", s: "[live]" },
    ],
  },
];

export default function OurWork() {
  return (
    <SiteLayout title="Our Work — Techish Innovations">
      {/* ============ PAGE HERO ============ */}
      <header className="tk-page-hero">
        <p className="tk-eyebrow">Our Work</p>
        <h1>
          Products Built for <span>Real Problems</span>
        </h1>
        <p>
          A look at the technology Techish Innovations builds — AI, software,
          and emerging technology products aimed at problems worth solving.
        </p>
      </header>

      <Marquee items={WORK_MARQUEE} />

      {/* ============ PROJECT SHOWCASE ============ */}
      <section>
        <div className="tk-section-inner">
          <div className="tk-grid tk-grid-3">
            {WORK_PROJECTS.map((project) => (
              <Reveal key={project.caption} className="tk-card">
                <div className="tk-card-img">
                  <img
                    src={project.image}
                    alt={`${project.caption} project preview`}
                    loading="lazy"
                  />
                </div>
                <h3>{project.caption}</h3>
                <span className="tk-step">{project.tag}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROJECT TERMINAL ============ */}
      <section>
        <div className="tk-section-inner window-wrap">
          <TerminalWindow
            title="project — demo"
            lines={PROJECT_LINES}
            startDelay={300}
            lineDelay={360}
          />
        </div>
      </section>

      {/* ============ TRACK RECORD ============ */}
      <section>
        <div className="tk-section-inner">
          <SectionHead
            eyebrow="Track Record"
            title="How We Measure Ourselves"
            description="The principles we hold every product to — not vanity metrics."
          />
          <div className="tk-hero-stats tk-stats-4" style={{ marginTop: 0 }}>
            {WORK_STATS.map((stat) => (
              <div className="tk-stat" key={stat.label}>
                <b>{stat.value}</b>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHAT'S INCLUDED ============ */}
      <section>
        <div className="tk-section-inner">
          <SectionHead
            eyebrow="What's Included"
            title="Every Product Gets More Than Code"
            description="These aren't add-ons — they're part of how we build every product, regardless of size."
          />
          <div className="tk-grid tk-grid-4">
            {WORK_INCLUSIONS.map((item) => (
              <Reveal key={item.title} className="tk-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BEHIND THE PORTFOLIO ============ */}
      <section>
        <div className="tk-section-inner">
          <SectionHead
            eyebrow="Behind the Products"
            title="From Problem to Product: A Typical Build"
          />
          <Reveal>
            <p className="tk-lede">
              Every product follows the same rhythm: research the problem in
              its real context, prototype to validate that technology can
              solve it, then build with production engineering and iterate on
              what real-world use reveals. The problem leads — the technology
              follows.
            </p>
          </Reveal>
          <div className="tk-hero-stats" style={{ marginTop: 48 }}>
            <div className="tk-stat">
              <b>4</b>
              <span>Focus domains: business, civic, sustainability, industry</span>
            </div>
            <div className="tk-stat">
              <b>Research</b>
              <span>Before every build</span>
            </div>
            <div className="tk-stat">
              <b>Zero</b>
              <span>Tolerance for solving non-problems</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PORTFOLIO PRINCIPLES ============ */}
      <section>
        <div className="tk-section-inner">
          <SectionHead
            eyebrow="Our Portfolio"
            title="A Product Portfolio Built Across AI, Software & Emerging Technology"
          />
          <div className="tk-grid tk-grid-2">
            {WORK_PORTFOLIO_POINTS.map((point) => (
              <Reveal key={point.title} className="tk-card">
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <CTABand
        eyebrow="See It For Yourself"
        title="Let's Build Technology That Solves"
        description="Tell us about the problem you're looking at and get a real conversation with the people who'd build the solution."
        ctaLabel="Start a Conversation"
      />
    </SiteLayout>
  );
}
