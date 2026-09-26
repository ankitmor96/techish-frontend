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

/**
 * Product image band — wired to the user-provided product images.
 * Files live in /public/images; drop a file in with the matching name and it
 * appears automatically. Until a file exists the card shows a branded
 * monogram fallback (no stock images used).
 */
const PRODUCT_IMAGES: Array<{
  image: string;
  name: string;
  tag: string;
}> = [
  {
    image: "/images/product-ai-employee.jpg",
    name: "AI Employees",
    tag: "AI",
  },
  {
    image: "/images/product-civic-alert.jpg",
    name: "Civic Alert",
    tag: "CIVIC",
  },
  {
    image: "/images/product-ev-circular.jpg",
    name: "EV Circular",
    tag: "EV",
  },
  {
    image: "/images/product-skill-networks.jpg",
    name: "Skill-Based Networks",
    tag: "SKILLS",
  },
];

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
                <div className="tk-product-fallback" aria-hidden="true">
                  <b>{item.name.charAt(0)}</b>
                  <em>{item.tag}</em>
                </div>
                <img
                  src={item.image}
                  alt={`Techish Innovations product — ${item.name}`}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
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
            <figure className="tk-dash-visual">
              <img
                src="/images/techish-products-overview.jpg"
                alt="Techish Innovations product overview — AI Employees, Civic Alert, EV Circular, and Skill-Based Networks dashboards"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </figure>
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
