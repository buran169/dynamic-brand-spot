import { useEffect, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  angle: number;
}

let rippleId = 0;

export function TouchBubbles() {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);

  const createEffect = useCallback((x: number, y: number) => {
    const id = rippleId++;
    // Ripple ring
    setRipples((prev) => [...prev, { id, x, y }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 700);

    // Burst particles
    const count = 4 + Math.floor(Math.random() * 3);
    const newParticles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: rippleId++,
        x,
        y,
        size: 3 + Math.random() * 5,
        angle: (360 / count) * i + (Math.random() - 0.5) * 30,
      });
    }
    setParticles((prev) => [...prev, ...newParticles]);
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.find((np) => np.id === p.id)));
    }, 600);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => createEffect(e.clientX, e.clientY);
    const handleTouch = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch) createEffect(touch.clientX, touch.clientY);
    };

    window.addEventListener("click", handleClick);
    window.addEventListener("touchstart", handleTouch, { passive: true });
    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("touchstart", handleTouch);
    };
  }, [createEffect]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <AnimatePresence>
        {/* Ripple rings */}
        {ripples.map((r) => (
          <motion.div
            key={`r-${r.id}`}
            initial={{ opacity: 0.5, scale: 0, x: r.x - 25, y: r.y - 25 }}
            animate={{ opacity: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ position: "absolute", width: 50, height: 50 }}
            className="rounded-full border border-primary/30"
          />
        ))}
        {/* Burst particles */}
        {particles.map((p) => {
          const rad = (p.angle * Math.PI) / 180;
          const dist = 25 + Math.random() * 20;
          return (
            <motion.div
              key={`p-${p.id}`}
              initial={{ opacity: 0.8, scale: 1, x: p.x - p.size / 2, y: p.y - p.size / 2 }}
              animate={{
                opacity: 0,
                scale: 0.3,
                x: p.x - p.size / 2 + Math.cos(rad) * dist,
                y: p.y - p.size / 2 + Math.sin(rad) * dist,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{ width: p.size, height: p.size, position: "absolute" }}
              className="rounded-full bg-primary/30"
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
}
