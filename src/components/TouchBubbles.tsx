import { useEffect, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

let rippleId = 0;

export function TouchBubbles() {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const createRipple = useCallback((x: number, y: number) => {
    const id = rippleId++;
    setRipples((prev) => [...prev, { id, x, y }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 800);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => createRipple(e.clientX, e.clientY);
    const handleTouch = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch) createRipple(touch.clientX, touch.clientY);
    };

    window.addEventListener("click", handleClick);
    window.addEventListener("touchstart", handleTouch, { passive: true });
    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("touchstart", handleTouch);
    };
  }, [createRipple]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <AnimatePresence>
        {ripples.map((r) => (
          <motion.div
            key={r.id}
            initial={{ opacity: 0.6, scale: 0 }}
            animate={{ opacity: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "absolute",
              left: r.x - 30,
              top: r.y - 30,
              width: 60,
              height: 60,
            }}
            className="rounded-full border-[1.5px] border-primary/25"
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
