import { motion } from "framer-motion";

export function SectionDivider() {
  return (
    <div className="relative py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="h-px w-full"
          style={{
            background: `linear-gradient(90deg, transparent, hsl(var(--border)), transparent)`,
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
