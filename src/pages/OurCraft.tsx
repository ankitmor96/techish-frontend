import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
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
  type Service,
} from "@/data/site";
import {
  COMPANY_EMAIL,
  handleEmailClick,
} from "@/components/site/email";

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
    image: "/images/product-ai-employee.svg",
    name: "AI Employees",
    tag: "AI",
  },
  {
    image: "/images/product-civic-alert.svg",
    name: "Civic Alert",
    tag: "CIVIC",
  },
  {
    image: "/images/product-ev-circular.svg",
    name: "EV Circular",
    tag: "EV",
  },
  {
    image: "/images/product-skill-networks.svg",
    name: "Skill-Based Networks",
    tag: "SKILLS",
  },
];

export default function OurCraft() {
  const [activeProduct, setActiveProduct] = useState<Service | null>(null);
  const hoverTimer = useRef<number | null>(null);

  // Open the popup immediately (click / keyboard focus)
  const openProduct = (service: Service) => {
    if (hoverTimer.current) {
      window.clearTimeout(hoverTimer.current);
      hoverTimer.current = null;
    }
    setActiveProduct(service);
  };

  // Open the same popup after a short hover delay
  const scheduleProductOpen = (service: Service) => {
    if (hoverTimer.current) window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => {
      hoverTimer.current = null;
      setActiveProduct(service);
    }, 300);
  };

  const cancelScheduledOpen = () => {
    if (hoverTimer.current) {
      window.clearTimeout(hoverTimer.current);
      hoverTimer.current = null;
    }
  };

  useEffect(() => {
    return () => cancelScheduledOpen();
  }, []);

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
          <div className="tk-grid tk-grid-4">
            {HOME_SERVICES.map((service) => (
              <Reveal key={service.title} className="tk-card">
                <span className="tk-service-icon">{service.icon}</span>
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
                <button
                  type="button"
                  className="tk-arrowlink"
                  onMouseEnter={() => scheduleProductOpen(service)}
                  onMouseLeave={cancelScheduledOpen}
                  onFocus={() => openProduct(service)}
                  onClick={() => openProduct(service)}
                >
                  {service.cta ?? "Explore"}
                </button>
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
            <div className="tk-dash-visual">
              <div className="tk-dash-visual-grid">
                <figure>
                  <img
                    src="/images/techish-products-overview.svg"
                    alt="Techish Innovations product overview — AI Employees, Civic Alert, EV Circular, and Skill-Based Networks dashboards"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <figcaption>Four Products — One Product Practice</figcaption>
                </figure>
                <figure>
                  <img
                    src="/images/product-ev-battery.svg"
                    alt="EV Circular — the battery problem worth solving and the opportunity it creates"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <figcaption>From Real Problem to Real Product — EV Circular</figcaption>
                </figure>
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

      {/* ============ PRODUCT MODAL ============ */}
      <ProductModal
        service={activeProduct}
        onClose={() => setActiveProduct(null)}
      />
    </SiteLayout>
  );
}

/**
 * Product detail modal opened from the product cards.
 * Product-specific copy comes from `service.modal`; contact uses the company email.
 */
function ProductModal({
  service,
  onClose,
}: {
  service: Service | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!service) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [service, onClose]);

  return (
    <AnimatePresence>
      {service && (
        <motion.div
          className="tk-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={onClose}
        >
          <motion.div
            className="tk-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="tk-modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeRef}
              type="button"
              className="tk-modal-close"
              aria-label="Close"
              onClick={onClose}
            >
              <X className="size-4" />
            </button>
            <p className="tk-eyebrow">{service.icon} — Techish Innovations</p>
            <h3 id="tk-modal-title">{service.title}</h3>
            <p className="tk-modal-desc">{service.modal}</p>
            {service.chips && service.chips.length > 0 && (
              <div className="tk-chips">
                {service.chips.map((chip) => (
                  <span key={chip} className="tk-chip">
                    {chip}
                  </span>
                ))}
              </div>
            )}
            <div className="tk-modal-contact">
              <p className="tk-eyebrow">Get in Touch</p>
              <a
                className="tk-modal-email"
                href={`mailto:${COMPANY_EMAIL}`}
                onClick={(e) => handleEmailClick(e, service.title)}
              >
                {COMPANY_EMAIL}
              </a>
              <a
                className="tk-pill solid"
                href={`mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent(
                  service.title,
                )}`}
                onClick={(e) => handleEmailClick(e, service.title)}
              >
                Email Us About {service.title}
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
