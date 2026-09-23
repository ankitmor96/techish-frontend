import { SiteLayout } from "@/components/site/SiteLayout";
import { Marquee } from "@/components/site/Marquee";
import { SectionHead } from "@/components/site/SectionHead";
import { CTABand } from "@/components/site/CTABand";
import { Reveal } from "@/components/site/Reveal";
import {
  ABOUT_MARQUEE,
  ABOUT_JOURNEY,
  ABOUT_PRINCIPLES,
  ABOUT_DAY_TO_DAY,
  ABOUT_QUOTES,
  ABOUT_SDE_POINTS,
} from "@/data/site";

const ABOUT_IMAGES = [
  { image: "/images/10.jpg", caption: "The Team at Work", tag: "TEAM" },
  { image: "/images/2.jpg", caption: "Working Session", tag: "DEV" },
  { image: "/images/1.jpg", caption: "Collab", tag: "PROD" },
] as const;

const FOCUS_IMAGES = [
  { image: "/images/14.jpg", caption: "Deep Work", tag: "FOCUS" },
  { image: "/images/6.jpg", caption: "Cross-Functional", tag: "TEAM" },
  { image: "/images/9.jpg", caption: "Review", tag: "QA" },
] as const;

export default function About() {
  return (
    <SiteLayout title="About Us — Techish Innovation">
      {/* ============ PAGE HERO ============ */}
      <header className="tk-page-hero">
        <p className="tk-eyebrow">About Us</p>
        <h1>
          A Software Engineering Company <span>Built by Engineers</span>
        </h1>
        <p>
          Techish Innovation is a full-stack software engineering company that
          designs, builds, and scales digital products for startups and
          enterprises.
        </p>
      </header>

      <Marquee items={ABOUT_MARQUEE} />

      {/* ============ MISSION / VISION ============ */}
      <section>
        <div className="tk-section-inner">
          <div className="tk-grid tk-grid-2">
            <Reveal className="tk-card">
              <span className="tk-step">Our Mission</span>
              <h3>Move Business Faster Through Thoughtful Technology</h3>
              <p>
                Delivering software that is reliable, maintainable, and built
                around real user needs — not just feature lists.
              </p>
            </Reveal>
            <Reveal className="tk-card" delay={0.1}>
              <span className="tk-step">Our Vision</span>
              <h3>The Partner Companies Trust for Mission-Critical Software</h3>
              <p>
                Known for craftsmanship, transparency, and long-term
                reliability in everything we build.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ LIFE AT TECHISH ============ */}
      <section>
        <div className="tk-section-inner">
          <SectionHead
            eyebrow="Life at Techish Innovation"
            title="Small Team. Big Standards."
          />
          <div className="tk-imgband">
            {ABOUT_IMAGES.map((item) => (
              <figure key={item.caption}>
                <img
                  src={item.image}
                  alt={`Life at Techish Innovation — ${item.caption}`}
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

      {/* ============ OUR JOURNEY ============ */}
      <section>
        <div className="tk-section-inner">
          <SectionHead
            eyebrow="Our Journey"
            title="How We Got Here"
            description="A small team with a simple goal: build software worth being proud of."
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
            title="The Principles That Shape Every Project"
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

      {/* ============ DAY TO DAY ============ */}
      <section>
        <div className="tk-section-inner">
          <SectionHead
            eyebrow="Day to Day"
            title="How We Actually Work Together"
            description="No black boxes. You get a small, senior team, a shared roadmap, and visibility into progress every step of the way."
          />
          <div className="tk-grid tk-grid-4">
            {ABOUT_DAY_TO_DAY.map((item) => (
              <Reveal key={item.title} className="tk-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Reveal>
            ))}
          </div>
          <div className="quote-wrap quotes-grid">
            {ABOUT_QUOTES.map((item) => (
              <Reveal key={item.cite}>
                <blockquote className="tk-blockquote">
                  {item.quote}
                  <cite>— {item.cite}</cite>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SOFTWARE DEVELOPMENT COMPANY ============ */}
      <section>
        <div className="tk-section-inner">
          <SectionHead
            eyebrow="Software Development Company"
            title="The Software Development Partner Growing Businesses Choose"
            description="Techish Innovation combines strategic thinking with hands-on engineering to help companies ship reliable software faster."
          />
          <div className="tk-grid tk-grid-2">
            {ABOUT_SDE_POINTS.map((point) => (
              <Reveal key={point.title} className="tk-card">
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </Reveal>
            ))}
          </div>
          <div className="tk-imgband" style={{ marginTop: 48 }}>
            {FOCUS_IMAGES.map((item) => (
              <figure key={item.caption}>
                <img
                  src={item.image}
                  alt={`How we work — ${item.caption}`}
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

      {/* ============ CTA ============ */}
      <CTABand
        eyebrow="Let's Talk"
        title="Let's Build Something Worth Talking About"
        description="Whether you have a detailed spec or just a strong idea, we'd love to hear about it."
        ctaLabel="Start the Conversation"
      />
    </SiteLayout>
  );
}
