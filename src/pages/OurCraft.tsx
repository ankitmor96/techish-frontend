import { SiteLayout } from "@/components/site/SiteLayout";
import { Marquee } from "@/components/site/Marquee";
import { SectionHead } from "@/components/site/SectionHead";
import { CTABand } from "@/components/site/CTABand";
import { Reveal } from "@/components/site/Reveal";
import {
  CRAFT_MARQUEE,
  HOME_SERVICES,
  CRAFT_PROCESS,
  CRAFT_STANDARDS,
  CRAFT_PITFALLS,
  COMPANY_EMAIL,
} from "@/data/site";

/** Product image band — wired to the 4 user-provided product images. */
const PRODUCT_IMAGES = [
  { image: "/images/product-1.jpg", name: "AI Employees" },
  { image: "/images/product-2.jpg", name: "Civic Alert" },
  { image: "/images/product-3.jpg", name: "EV Circular" },
  { image: "/images/product-4.jpg", name: "Skill-Based Networks" },
] as const;

/** Static, product-engineering dashboard visual — pure CSS/SVG, no data. */
const DASH_BARS = [62, 78, 45, 88, 56, 71, 39, 82] as const;

export default function OurCraft() {
  return (
    <SiteLayout title="Our Products — Techish Innovations">
      {/* ============ PAGE HERO ============ */}
      <header className="tk-page-hero">
        <p className="tk-eyebrow">Our Products</p>
        <h1>
          AI, Software &amp; Emerging Technology — <span>Built In-House</span>
        </h1>
        <p>
          Four products, one team. Every product starts from a real-world
          problem — in business, civic infrastructure, sustainability, or
          industry.
        </p>
      </header>

      <Marquee items={CRAFT_MARQUEE} />

      {/* ============ FROM WORKSHOP TO PRODUCTION ============ */}
      <section>
        <div className="tk-section-inner">
          <SectionHead
            eyebrow="Inside Our Process"
            title="From Workshop to Production"
          />
          <div className="tk-product-grid">
            {PRODUCT_IMAGES.map((item) => (
              <figure key={item.name} className="tk-product-card">
                <img
                  src={item.image}
                  alt={`Techish Innovations product — ${item.name}`}
                  loading="lazy"
                />
                <figcaption>
                  <span>{item.name}</span>
                  <em>Techish</em>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============ THE PRODUCTS ============ */}
      <section>
        <div className="tk-section-inner">
          <SectionHead
            eyebrow="What We're Building"
            title="The Techish Product Line"
            description="Four products we design, engineer, and ship ourselves — each aimed at a problem worth solving."
          />
          <div className="tk-grid tk-grid-3">
            {HOME_SERVICES.map((service) => (
              <Reveal key={service.title} className="tk-card">
                <span className="tk-step">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                {service.chips && service.chips.length > 0 && (
                  <div className="tk-chips">
                    {service.chips.map((chip) => (
                      <span key={chip} className="tk-chip">
                        {chip}
                      </span>
                    ))}
                  </div>
                )}
                <a
                  href={`mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent(
                    service.title,
                  )}`}
                  className="tk-arrowlink"
                >
                  Ask About {service.title}
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ AI DASHBOARD VISUAL ============ */}
      <section>
        <div className="tk-section-inner">
          <SectionHead
            eyebrow="Product Engineering"
            title="Intelligence, Engineered Into Every Product"
            description="A look at how our products think — applied AI, real-time signals, and human-readable insight, built into the same product practice."
          />
          <Reveal>
            <div className="tk-dash" role="img" aria-label="Illustrative AI product dashboard">
              <div className="tk-dash-side">
                <span className="tk-dash-mark">T</span>
                <i className="tk-dash-ico on" />
                <i className="tk-dash-ico" />
                <i className="tk-dash-ico" />
              </div>
              <div className="tk-dash-main">
                <div className="tk-dash-top">
                  <b>Product Intelligence Overview</b>
                  <span className="tk-dash-live">
                    <i /> live
                  </span>
                </div>
                <div className="tk-dash-kpis">
                  <div className="tk-dash-kpi">
                    <span>Signals processed</span>
                    <b>1.2M</b>
                    <em>+8.4%</em>
                  </div>
                  <div className="tk-dash-kpi">
                    <span>Automations active</span>
                    <b>312</b>
                    <em>+12</em>
                  </div>
                  <div className="tk-dash-kpi">
                    <span>Model confidence</span>
                    <b>97.3%</b>
                    <em>+0.6</em>
                  </div>
                  <div className="tk-dash-kpi">
                    <span>Issues resolved</span>
                    <b>1,904</b>
                    <em>+34</em>
                  </div>
                </div>
                <div className="tk-dash-body">
                  <div className="tk-dash-chart">
                    <span className="tk-dash-label">Signal activity</span>
                    <div className="tk-dash-bars">
                      {DASH_BARS.map((h, i) => (
                        <i key={i} style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                  <div className="tk-dash-feed">
                    <span className="tk-dash-label">Assistant feed</span>
                    <ul>
                      <li>
                        <i className="tk-dash-dot" />
                        <span>Workflow <b>invoice-matching</b> completed</span>
                        <em>2m</em>
                      </li>
                      <li>
                        <i className="tk-dash-dot warn" />
                        <span>Anomaly flagged in <b>sensor-04</b> readings</span>
                        <em>14m</em>
                      </li>
                      <li>
                        <i className="tk-dash-dot" />
                        <span>Alert routed to <b>civic ops</b> channel</span>
                        <em>31m</em>
                      </li>
                      <li>
                        <i className="tk-dash-dot" />
                        <span>Battery-health model retrained <b>nightly</b></span>
                        <em>1h</em>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ DELIVERY PROCESS ============ */}
      <section>
        <div className="tk-section-inner">
          <SectionHead
            eyebrow="Product Process"
            title="How Every Product Gets Built"
            description="A consistent framework that carries every product from a real problem to a working solution."
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
            title="Standards We Never Skip"
            description="The technology changes product to product. These standards don't."
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

      {/* ============ CTA ============ */}
      <CTABand
        eyebrow="Have a Problem in Mind?"
        title="Tell Us the Problem"
        description="We'll help you figure out whether — and how — technology can solve it."
        ctaLabel="Talk to Our Team"
      />
    </SiteLayout>
  );
}
