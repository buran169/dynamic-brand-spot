import { motion } from "framer-motion";

interface SkillBadgeProps {
  name: string;
  level: number;
}

export function SkillBar({ name, level }: SkillBadgeProps) {
  return (
    <motion.div
      className="space-y-1.5 touch-ripple rounded-xl p-2 -m-2 cursor-default"
      whileTap={{ scale: 0.97 }}
      whileHover={{ x: 4 }}
    >
      <div className="flex justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
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
