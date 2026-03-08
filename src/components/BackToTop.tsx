import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setProgress(v);
    setVisible(v > 0.1);
  });

  const circumference = 2 * Math.PI * 18;
  const offset = circumference - progress * circumference;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-20 md:bottom-6 left-4 md:left-auto md:right-6 z-50 w-12 h-12 rounded-full glass glow-sm flex items-center justify-center group touch-glow touch-target"
          aria-label="Back to top"
        >
          {/* Progress ring */}
          <svg className="absolute inset-0 w-12 h-12 -rotate-90" viewBox="0 0 48 48">
            <circle
              cx="24" cy="24" r="18"
              fill="none"
              stroke="hsl(var(--border))"
              strokeWidth="2"
            />
            <circle
              cx="24" cy="24" r="18"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              className="transition-all duration-150"
            />
          </svg>
          <ArrowUp className="h-4 w-4 text-primary group-hover:text-primary/80 transition-colors relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
