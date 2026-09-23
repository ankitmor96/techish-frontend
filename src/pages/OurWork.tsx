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
    <SiteLayout title="Our Work — Techish Innovation">
      {/* ============ PAGE HERO ============ */}
      <header className="tk-page-hero">
        <p className="tk-eyebrow">Our Work</p>
        <h1>
          A Portfolio of Software That <span>Performs</span>
        </h1>
        <p>
          A selection of projects where Techish Innovation partnered with
          founders and product teams to build software that performs.
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
            title="Outcomes We Hold Ourselves To"
            description="Numbers we track internally on every engagement — not vanity metrics."
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
            title="Every Project Ships With More Than Code"
            description="These aren't add-ons — they're part of how we deliver every engagement, regardless of size."
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
            eyebrow="Behind the Portfolio"
            title="From Brief to Launch: A Typical Engagement"
          />
          <Reveal>
            <p className="tk-lede">
              Most projects in our portfolio follow the same rhythm: a focused
              discovery phase to nail down scope, a design sprint to validate
              the experience, and short weekly build cycles with visible
              progress the whole way through. Clients see working software
              early — often within the first two weeks — instead of waiting
              until launch day.
            </p>
          </Reveal>
          <div className="tk-hero-stats" style={{ marginTop: 48 }}>
            <div className="tk-stat">
              <b>2</b>
              <span>Weeks to first working build</span>
            </div>
            <div className="tk-stat">
              <b>Weekly</b>
              <span>Progress demos</span>
            </div>
            <div className="tk-stat">
              <b>Zero</b>
              <span>Surprise scope changes</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PORTFOLIO PRINCIPLES ============ */}
      <section>
        <div className="tk-section-inner">
          <SectionHead
            eyebrow="Our Portfolio"
            title="A Software Development Portfolio Built Across Web, Mobile & Cloud"
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
        title="Let's Build Software That Performs"
        description="Tell us about your project and get a real conversation with the engineers who'd build it."
        ctaLabel="Start a Project"
      />
    </SiteLayout>
  );
}
