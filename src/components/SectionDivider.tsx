import { motion } from "framer-motion";

export function SectionDivider() {
  return (
    <div className="relative h-px w-full overflow-hidden">
      <motion.div
        className="absolute inset-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, hsl(var(--primary) / 0.4), hsl(var(--accent) / 0.3), hsl(var(--primary) / 0.4), transparent)`,
          backgroundSize: "200% 100%",
        }}
        animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
