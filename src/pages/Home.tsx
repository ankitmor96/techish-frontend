import { Link } from "react-router";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Marquee } from "@/components/site/Marquee";
import { SectionHead } from "@/components/site/SectionHead";
import { CTABand } from "@/components/site/CTABand";
import { Reveal } from "@/components/site/Reveal";
import {
  HOME_MARQUEE,
  HOME_STATS,
  HOME_PROCESS,
  HOME_WHY,
  INDUSTRIES,
  ENGAGEMENTS,
  PARTNERSHIP,
  HOME_FAQS,
} from "@/data/site";

export default function Home() {
  return (
    <SiteLayout title="Techish Innovations — Building Products for Real-World Problems">
      {/* ============ HERO ============ */}
      <header className="tk-hero">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <p className="tk-eyebrow">Technology Products for a Changing World</p>
          <h1>
            We Build Products That Move the <span>World Forward</span>.
          </h1>
          <p className="tk-hero-sub">
            From AI employees and intelligent cities to circular economies and
            skill-based networks, Techish builds products designed to solve
            problems at scale.
          </p>
          <div className="tk-hero-cta">
            <Link to="/products" className="tk-pill solid">
              View Our Products
            </Link>
            <Link to="/contact" className="tk-pill">
              Start the Conversation
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="tk-hero-stats"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
        >
          {HOME_STATS.map((stat) => (
            <div className="tk-stat" key={stat.label}>
              <b>{stat.value}</b>
              <span>{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </header>

      {/* ============ MARQUEE ============ */}
      <Marquee items={HOME_MARQUEE} />

      {/* ============ HOW WE WORK ============ */}
      <section>
        <div className="tk-section-inner">
          <SectionHead
            eyebrow="How We Build"
            title="A Process Built for Real-World Outcomes"
            description="A clear path from a real problem to a product in the real world."
          />
          <div className="tk-grid tk-grid-4">
            {HOME_PROCESS.map((step) => (
              <Reveal key={step.title} className="tk-card">
                <span className="tk-step">{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY TECHISH ============ */}
      <section>
        <div className="tk-section-inner">
          <SectionHead
            eyebrow="Why Techish"
            title="A Product Company, Built by Engineers"
            description="Founded by experienced engineers, Techish Innovations builds its own technology — AI, software, and emerging technology products for real-world problems."
          />
          <div className="tk-grid tk-grid-2">
            {HOME_WHY.map((why) => (
              <Reveal key={why.title} className="tk-card">
                <h3>{why.title}</h3>
                <p>{why.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INDUSTRIES ============ */}
      <section>
        <div className="tk-section-inner">
          <SectionHead
            eyebrow="Where We Build"
            title="Technology for the Problems That Matter"
            description="Our products focus on four domains — business, civic infrastructure, sustainability, and industry — where real problems and real impact live."
          />
          <div className="tk-grid tk-grid-3">
            {INDUSTRIES.map((industry) => (
              <Reveal key={industry.title} className="tk-card">
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ENGAGEMENT MODELS ============ */}
      <section>
        <div className="tk-section-inner">
          <SectionHead
            eyebrow="What We Do"
            title="Products and Partnerships"
            description="We build our own products and partner with organizations on shared technology problems."
          />
          <div className="tk-grid tk-grid-2">
            {ENGAGEMENTS.map((eng) => (
              <Reveal key={eng.title} className="tk-card">
                <span className="tk-step">{eng.badge}</span>
                <h3>{eng.title}</h3>
                <p>{eng.description}</p>
                <ul className="tk-comp-list good">
                  {eng.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PARTNERSHIP ============ */}
      <section>
        <div className="tk-section-inner grid-pair">
          <div className="tk-section-head">
            <p className="tk-eyebrow">Why Techish Innovations</p>
            <h2>Built for Long-Term Technology</h2>
          </div>
          <div className="tk-grid tk-grid-3">
            {PARTNERSHIP.map((item) => (
              <Reveal key={item.title} className="tk-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="quote-wrap">
            <blockquote className="tk-blockquote">
              We started Techish Innovations to build technology we'd want to
              exist — products aimed at real problems, engineered properly, and
              maintained for the long term. That's the whole company strategy.
              <cite>— The Techish Innovations Team</cite>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section>
        <div className="tk-section-inner">
          <SectionHead eyebrow="FAQ" title="Questions We Hear Often" center />
          <div className="tk-faq">
            {HOME_FAQS.map((faq, i) => (
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

      {/* ============ CTA ============ */}
      <CTABand
        eyebrow="Get in Touch"
        title="Have a Problem Worth Solving?"
        description="Tell us about the real-world problem you're looking at — let's explore how technology could solve it."
        ctaLabel="Start the Conversation"
      />
    </SiteLayout>
  );
}
