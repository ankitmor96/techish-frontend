import { SiteLayout } from "@/components/site/SiteLayout";
import { Marquee } from "@/components/site/Marquee";
import { SectionHead } from "@/components/site/SectionHead";
import { CTABand } from "@/components/site/CTABand";
import { Reveal } from "@/components/site/Reveal";
import {
  ABOUT_MARQUEE,
  ABOUT_JOURNEY,
  ABOUT_PRINCIPLES,
  ABOUT_SDE_POINTS,
} from "@/data/site";

export default function About() {
  return (
    <SiteLayout title="About Us — Techish Innovations">
      {/* ============ PAGE HERO ============ */}
      <header className="tk-page-hero">
        <p className="tk-eyebrow">About Us</p>
        <h1>
          A Technology Product Company <span>Built by Engineers</span>
        </h1>
        <p>
          Techish Innovations is a technology product company building AI,
          software, and emerging technology products designed to solve complex
          problems across business, civic infrastructure, sustainability, and
          industry.
        </p>
      </header>

      <Marquee items={ABOUT_MARQUEE} />

      {/* ============ MISSION / VISION ============ */}
      <section>
        <div className="tk-section-inner">
          <div className="tk-grid tk-grid-2">
            <Reveal className="tk-card">
              <span className="tk-step">Our Mission</span>
              <h3>Technology for Real-World Problems</h3>
              <p>
                Build products that solve complex problems across business,
                civic infrastructure, sustainability, and industry — with AI,
                software, and emerging technology.
              </p>
            </Reveal>
            <Reveal className="tk-card" delay={0.1}>
              <span className="tk-step">Our Vision</span>
              <h3>A World Where Problems Are Solved With Long-Term Technology</h3>
              <p>
                Technology products built to last — researched, engineered, and
                improved over time as the problems they solve evolve.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ OUR JOURNEY ============ */}
      <section>
        <div className="tk-section-inner">
          <SectionHead
            eyebrow="Our Journey"
            title="From Engineering Roots to a Product Company"
            description="A team of engineers that decided to build its own technology — products aimed at real problems."
          />
          <div className="tk-grid tk-grid-4">
            {ABOUT_JOURNEY.map((milestone) => (
              <Reveal key={milestone.title} className="tk-card">
                <span className="tk-step">{milestone.step}</span>
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRINCIPLES ============ */}
      <section>
        <div className="tk-section-inner">
          <SectionHead
            eyebrow="What Drives Us"
            title="The Principles That Shape Every Product"
          />
          <div className="tk-grid tk-grid-4">
            {ABOUT_PRINCIPLES.map((principle) => (
              <Reveal key={principle.title} className="tk-card">
                <span className="tk-step">{principle.step}</span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SOFTWARE DEVELOPMENT COMPANY ============ */}
      <section>
        <div className="tk-section-inner">
          <SectionHead
            eyebrow="Technology Product Company"
            title="Products, Problems, and Long-Term Technology"
            description="Techish Innovations concentrates on AI, software, and emerging technology — building products where real problems demand real solutions."
          />
          <div className="tk-grid tk-grid-2">
            {ABOUT_SDE_POINTS.map((point) => (
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
        eyebrow="Let's Talk"
        title="Let's Talk About the Problem"
        description="Whether you bring a defined challenge or just a strong signal, we'd love to explore it with you."
        ctaLabel="Start the Conversation"
      />
    </SiteLayout>
  );
}
