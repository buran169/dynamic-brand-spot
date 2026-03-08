import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/content";

export function LoadingScreen() {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + Math.random() * 15 + 5;
      });
    }, 80);
    const timer = setTimeout(() => setShow(false), 1400);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-3xl font-bold tracking-tightest gradient-text"
            >
              {siteConfig.name}
            </motion.div>
            <div className="w-48 h-[2px] rounded-full bg-border overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
