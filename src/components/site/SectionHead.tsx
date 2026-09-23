import { motion } from "framer-motion";

interface SectionHeadProps {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
}

/** Eyebrow + heading + optional lead paragraph, left-aligned or centered. */
export function SectionHead({
  eyebrow,
  title,
  description,
  center = false,
}: SectionHeadProps) {
  return (
    <motion.div
      className={`tk-section-head${center ? " center" : ""}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <p className="tk-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
}
