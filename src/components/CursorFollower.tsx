import { useEffect, useState, useCallback } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CursorFollower() {
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springX = useSpring(cursorX, { damping: 25, stiffness: 200 });
  const springY = useSpring(cursorY, { damping: 25, stiffness: 200 });

  const spotX = useSpring(cursorX, { damping: 40, stiffness: 150 });
  const spotY = useSpring(cursorY, { damping: 40, stiffness: 150 });

  const handleMove = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
    if (!visible) setVisible(true);
  }, [cursorX, cursorY, visible]);

  useEffect(() => {
    // Only on desktop
    if (window.matchMedia("(pointer: coarse)").matches) return;

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", () => setClicking(true));
    window.addEventListener("mouseup", () => setClicking(false));

    const handleHover = () => setHovering(true);
    const handleUnhover = () => setHovering(false);

    const addHoverListeners = () => {
      document.querySelectorAll("a, button, [role='button'], input, textarea, select, .card-interactive").forEach((el) => {
        el.addEventListener("mouseenter", handleHover);
        el.addEventListener("mouseleave", handleUnhover);
      });
    };

    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      observer.disconnect();
    };
  }, [handleMove]);

  if (!visible) return null;

  return (
    <>
      {/* Spotlight glow */}
      <motion.div
        className="fixed pointer-events-none z-[9990] mix-blend-soft-light"
        style={{
          x: spotX,
          y: spotY,
          translateX: "-50%",
          translateY: "-50%",
          width: 300,
          height: 300,
          background: `radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)`,
          borderRadius: "50%",
        }}
      />

      {/* Main cursor dot */}
      <motion.div
        className="fixed pointer-events-none z-[9998] rounded-full"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: clicking ? 6 : hovering ? 40 : 10,
          height: clicking ? 6 : hovering ? 40 : 10,
          opacity: clicking ? 1 : hovering ? 0.3 : 0.7,
          borderWidth: hovering ? 2 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="fixed pointer-events-none z-[9998] rounded-full bg-primary border-primary"
      />

      {/* Outer ring */}
      <motion.div
        className="fixed pointer-events-none z-[9997] rounded-full border border-primary/30"
        style={{
          x: spotX,
          y: spotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovering ? 50 : 30,
          height: hovering ? 50 : 30,
          opacity: clicking ? 0.2 : 0.4,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      />
    </>
  );
}
