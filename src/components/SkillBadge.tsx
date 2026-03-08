import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SkillBadgeProps {
  name: string;
  level: number;
}

export function SkillBar({ name, level }: SkillBadgeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="space-y-1.5 touch-ripple rounded-xl p-2 -m-2 cursor-default"
      whileTap={{ scale: 0.97 }}
      whileHover={{ x: 4 }}
    >
      <div className="flex justify-between text-sm">
        <span className="font-medium">{name}</span>
        <motion.span
          className="text-muted-foreground tabular-nums"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2.5 rounded-full bg-muted overflow-hidden relative">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent relative overflow-hidden"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent"
            initial={{ x: "-100%" }}
            animate={inView ? { x: "200%" } : {}}
            transition={{ duration: 1.5, delay: 1, repeat: Infinity, repeatDelay: 3 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export function SkillChip({ name }: { name: string }) {
  return (
    <motion.span
      whileHover={{ scale: 1.08, y: -2 }}
      whileTap={{ scale: 0.88, rotate: -3 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 cursor-default badge-interactive touch-glow"
    >
      {name}
    </motion.span>
  );
}
