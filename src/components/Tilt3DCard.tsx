import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface Tilt3DCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  glare?: boolean;
}

export function Tilt3DCard({ children, className = "", intensity = 15, glare = true }: Tilt3DCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [intensity, -intensity]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-intensity, intensity]), { stiffness: 200, damping: 20 });
  const glareX = useTransform(mouseX, [0, 1], [0, 100]);
  const glareY = useTransform(mouseY, [0, 1], [0, 100]);

  const handleMouse = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 800,
      }}
      className={className}
    >
      <div style={{ transform: "translateZ(0)" }} className="relative">
        {children}
        {glare && (
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: useTransform(
                [glareX, glareY],
                ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, hsl(var(--primary) / 0.08) 0%, transparent 60%)`
              ),
            }}
          />
        )}
      </div>
    </motion.div>
  );
}
