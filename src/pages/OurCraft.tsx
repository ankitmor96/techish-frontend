import { useEffect, useRef, useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Marquee } from "@/components/site/Marquee";
import { SectionHead } from "@/components/site/SectionHead";
import { TerminalWindow, type TerminalLine } from "@/components/site/TerminalWindow";
import { CTABand } from "@/components/site/CTABand";
import { Reveal } from "@/components/site/Reveal";
import {
  CRAFT_MARQUEE,
  CRAFT_SERVICES,
  CRAFT_SKILLS,
  CRAFT_PROCESS,
  CRAFT_STANDARDS,
  CRAFT_PITFALLS,
  CRAFT_DELIVERY,
} from "@/data/site";

const CRAFT_IMAGES = [
  { image: "/images/12.jpg", caption: "Design Workshop", tag: "DESIGN" },
  { image: "/images/6.jpg", caption: "Engineering Review", tag: "ENG" },
  { image: "/images/9.jpg", caption: "Collaboration", tag: "TEAM" },
] as const;

const CAPABILITIES_LINES: TerminalLine[] = [
  {
    segments: [
      { t: "plain", s: "frontend_rigor ........ " },
      { t: "accent", s: "high" },
    ],
  },
  {
    segments: [
      { t: "plain", s: "api_design ............ " },
      { t: "accent", s: "high" },
    ],
  },
  {
    segments: [
      { t: "plain", s: "cloud_ops .............. " },
      { t: "accent", s: "high" },
    ],
  },
  {
    segments: [
      { t: "plain", s: "product_ux ............ " },
      { t: "accent", s: "high" },
    ],
  },
  {
    segments: [
      { t: "plain", s: "ai_integration ......... " },
      { t: "accent", s: "high" },
    ],
  },
  {
    segments: [
      { t: "plain", s: "stack_depth ............ " },
      { t: "accent", s: "full" },
    ],
  },
  {
    segments: [
      { t: "plain", s: "→ status " },
      { t: "accent", s: "[production-ready]" },
    ],
  },
];

/** Skill bar that animates to its target width when scrolled into view. */
function SkillBar({ name, pct }: { name: string; pct: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="tk-skill" ref={ref}>
      <div className="tk-skill-top">
        <b>{name}</b>
        <span>{pct}%</span>
      </div>
      <div className="tk-skill-bar">
        <i style={{ width: visible ? `${pct}%` : "0%" }} />
      </div>
    </div>
  );
}

export default function OurCraft() {
  return (
    <SiteLayout title="Our Craft — Techish Innovation">
      {/* ============ PAGE HERO ============ */}
      <header className="tk-page-hero">
        <p className="tk-eyebrow">Our Craft</p>
        <h1>
          Engineering, Design &amp; Strategy — <span>Under One Roof</span>
        </h1>
        <p>
          Six core disciplines, one senior team. Every engagement draws on the
          same capabilities — mixed and matched to fit your project.
        </p>
      </header>

      <Marquee items={CRAFT_MARQUEE} />

      {/* ============ INSIDE OUR PROCESS ============ */}
      <section>
        <div className="tk-section-inner">
          <SectionHead
            eyebrow="Inside Our Process"
            title="From Workshop to Production"
          />
          <div className="tk-imgband">
            {CRAFT_IMAGES.map((item) => (
              <figure key={item.caption}>
                <img
                  src={item.image}
                  alt={`Techish Innovation team — ${item.caption}`}
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

      {/* ============ WHAT WE OFFER ============ */}
      <section>
        <div className="tk-section-inner">
          <SectionHead
            eyebrow="What We Offer"
            title="Six Disciplines, One Team"
            description="Every engagement draws on the same core capabilities — mixed and matched to fit your project."
          />
          <div className="tk-grid tk-grid-3">
            {CRAFT_SERVICES.map((service) => (
              <Reveal key={service.title} className="tk-card">
                <span className="tk-step">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="tk-chips">
                  {service.chips?.map((chip) => (
                    <span key={chip} className="tk-chip">
                      {chip}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SKILL BARS + CAPABILITIES REPORT ============ */}
      <section>
        <div className="tk-section-inner skills-grid">
          <div>
            <SectionHead
              eyebrow="Where We're Strongest"
              title="Depth Across the Full Stack"
              description="We don't specialize in a single layer of the stack. Our team carries deep, hands-on capability across every discipline a modern product needs."
            />
            {CRAFT_SKILLS.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} pct={skill.pct} />
            ))}
          </div>
          <Reveal>
            <TerminalWindow
              title="capabilities.report"
              lines={CAPABILITIES_LINES}
              startDelay={300}
              lineDelay={340}
            />
          </Reveal>
        </div>
      </section>

      {/* ============ DELIVERY PROCESS ============ */}
      <section>
        <div className="tk-section-inner">
          <SectionHead
            eyebrow="Delivery Process"
            title="How Every Engagement Runs"
            description="A consistent, transparent framework that keeps every project on time and on scope."
          />
          <div className="tk-grid tk-grid-4">
            {CRAFT_PROCESS.map((step) => (
              <Reveal key={step.title} className="tk-card">
                <span className="tk-step">{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ QUALITY STANDARDS ============ */}
      <section>
        <div className="tk-section-inner">
          <SectionHead
            eyebrow="How We Build"
            title="Quality Standards We Never Skip"
            description="The tools change project to project. These standards don't."
          />
          <div className="tk-grid tk-grid-4">
            {CRAFT_STANDARDS.map((standard) => (
              <Reveal key={standard.title} className="tk-card">
                <h3>{standard.title}</h3>
                <p>{standard.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ COMPARE ============ */}
      <section>
        <div className="tk-section-inner">
          <SectionHead
            eyebrow="Why It Matters"
            title="What Sets Our Approach Apart"
          />
          <div className="tk-grid tk-grid-2">
            <Reveal className="tk-card">
              <h3>Common Pitfalls We Avoid</h3>
              <ul className="tk-comp-list bad">
                {CRAFT_PITFALLS.bad.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="tk-card">
              <h3>Our Standard Approach</h3>
              <ul className="tk-comp-list good">
                {CRAFT_PITFALLS.good.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ HOW WE DELIVER ============ */}
      <section>
        <div className="tk-section-inner">
          <SectionHead
            eyebrow="How We Deliver"
            title="Why Businesses Choose Techish Innovation for Software Development"
            description="Our craft goes beyond writing code — it's a disciplined approach to building software that performs in production, not just in a demo."
          />
          <div className="tk-grid tk-grid-2">
            {CRAFT_DELIVERY.map((item) => (
              <Reveal key={item.title} className="tk-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="quote-wrap">
            <blockquote className="tk-blockquote">
              We don't chase trends. We choose the right tool for the job, every
              single time — because your product has to outlive whatever's
              fashionable this year.
              <cite>— Engineering Principles</cite>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <CTABand
        eyebrow="Not Sure Which Service Fits?"
        title="Tell Us What You're Building"
        description="We'll help you scope the right approach for your project."
        ctaLabel="Talk to Our Team"
      />
    </SiteLayout>
  );
}
