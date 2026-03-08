import { useEffect, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
}

let bubbleId = 0;

export function TouchBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  const createBubble = useCallback((x: number, y: number) => {
    const count = 3 + Math.floor(Math.random() * 3);
    const newBubbles: Bubble[] = [];
    for (let i = 0; i < count; i++) {
      newBubbles.push({
        id: bubbleId++,
        x: x + (Math.random() - 0.5) * 40,
        y: y + (Math.random() - 0.5) * 40,
        size: 6 + Math.random() * 14,
      });
    }
    setBubbles((prev) => [...prev, ...newBubbles]);
    setTimeout(() => {
      setBubbles((prev) => prev.filter((b) => !newBubbles.find((nb) => nb.id === b.id)));
    }, 800);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => createBubble(e.clientX, e.clientY);
    const handleTouch = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch) createBubble(touch.clientX, touch.clientY);
    };

    window.addEventListener("click", handleClick);
    window.addEventListener("touchstart", handleTouch, { passive: true });
    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("touchstart", handleTouch);
    };
  }, [createBubble]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <AnimatePresence>
        {bubbles.map((b) => (
          <motion.div
            key={b.id}
            initial={{ opacity: 0.7, scale: 0.3, x: b.x - b.size / 2, y: b.y - b.size / 2 }}
            animate={{
              opacity: 0,
              scale: 1.5,
              x: b.x - b.size / 2 + (Math.random() - 0.5) * 60,
              y: b.y - b.size / 2 - 30 - Math.random() * 50,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 + Math.random() * 0.3, ease: "easeOut" }}
            style={{ width: b.size, height: b.size, position: "absolute" }}
            className="rounded-full bg-gradient-to-br from-primary/40 to-accent/30 backdrop-blur-[1px]"
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
