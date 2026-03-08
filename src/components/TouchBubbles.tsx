import { useEffect, useCallback, useState, useRef } from "react";
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

interface HoldGlow {
  id: number;
  x: number;
  y: number;
  active: boolean;
}

let effectId = 0;

export function TouchBubbles() {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [holdGlow, setHoldGlow] = useState<HoldGlow | null>(null);
  const holdTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const holdRef = useRef(false);

  const createEffect = useCallback((x: number, y: number) => {
    const id = effectId++;
    // Ripple ring
    setRipples((prev) => [...prev, { id, x, y }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 700);

    // Burst particles
    const count = 5 + Math.floor(Math.random() * 3);
    const newParticles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: effectId++,
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

  const startHold = useCallback((x: number, y: number) => {
    holdRef.current = true;
    holdTimer.current = setTimeout(() => {
      if (holdRef.current) {
        setHoldGlow({ id: effectId++, x, y, active: true });
      }
    }, 200);
  }, []);

  const endHold = useCallback(() => {
    holdRef.current = false;
    if (holdTimer.current) clearTimeout(holdTimer.current);
    setHoldGlow(null);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => createEffect(e.clientX, e.clientY);
    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch) {
        createEffect(touch.clientX, touch.clientY);
        startHold(touch.clientX, touch.clientY);
      }
    };
    const handleMouseDown = (e: MouseEvent) => startHold(e.clientX, e.clientY);
    const handleEnd = () => endHold();

    window.addEventListener("click", handleClick);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleEnd);
    window.addEventListener("touchend", handleEnd, { passive: true });
    window.addEventListener("touchcancel", handleEnd, { passive: true });

    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchend", handleEnd);
      window.removeEventListener("touchcancel", handleEnd);
    };
  }, [createEffect, startHold, endHold]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <AnimatePresence>
        {/* Hold glow — visible when holding/long-pressing */}
        {holdGlow && (
          <motion.div
            key={`hold-${holdGlow.id}`}
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.5 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{
              position: "absolute",
              left: holdGlow.x - 40,
              top: holdGlow.y - 40,
              width: 80,
              height: 80,
            }}
          >
            {/* Outer pulse ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary/30"
              animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Inner glow */}
            <motion.div
              className="absolute inset-2 rounded-full"
              style={{
                background: `radial-gradient(circle, hsl(var(--primary) / 0.25) 0%, hsl(var(--accent) / 0.1) 50%, transparent 70%)`,
              }}
              animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Center dot */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary/40"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </motion.div>
        )}

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
