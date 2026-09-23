import { Link } from "react-router";
import { motion } from "framer-motion";

interface CTABandProps {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  to?: string;
}

/** Full-width closing call-to-action band used at the bottom of every page. */
export function CTABand({
  eyebrow,
  title,
  description,
  ctaLabel,
  to = "/contact",
}: CTABandProps) {
  return (
    <section className="tk-cta">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="tk-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link to={to} className="tk-pill solid">
          {ctaLabel}
        </Link>
      </motion.div>
    </section>
  );
}
