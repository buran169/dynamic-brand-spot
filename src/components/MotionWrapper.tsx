import { motion, useScroll, useTransform, type HTMLMotionProps } from "framer-motion";
import { type ReactNode, useRef } from "react";

interface MotionWrapperProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
}

const premiumSpring = {
  type: "spring" as const,
  damping: 25,
  stiffness: 180,
  mass: 0.8,
};

const smoothEase = [0.16, 1, 0.3, 1] as [number, number, number, number];

export const FadeIn = ({ children, delay = 0, ...props }: MotionWrapperProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.7, ease: smoothEase, delay }}
    {...props}
  >
    {children}
  </motion.div>
);

export const ScaleIn = ({ children, delay = 0, ...props }: MotionWrapperProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, ease: smoothEase, delay }}
    {...props}
  >
    {children}
  </motion.div>
);

export const SlideIn = ({ children, delay = 0, ...props }: MotionWrapperProps) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ ...premiumSpring, delay }}
    {...props}
  >
    {children}
  </motion.div>
);

export const SlideInRight = ({ children, delay = 0, ...props }: MotionWrapperProps) => (
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ ...premiumSpring, delay }}
    {...props}
  >
    {children}
  </motion.div>
);

export const BlurIn = ({ children, delay = 0, ...props }: MotionWrapperProps) => (
  <motion.div
    initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
    whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.8, ease: smoothEase, delay }}
    {...props}
  >
    {children}
  </motion.div>
);

export const StaggerContainer = ({ children, ...props }: MotionWrapperProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-60px" }}
    variants={{
      visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
    }}
    {...props}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, ...props }: MotionWrapperProps) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
      visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: smoothEase } },
    }}
    {...props}
  >
    {children}
  </motion.div>
);

// Parallax wrapper — moves children based on scroll
export function Parallax({ children, speed = 0.2, className }: { children: ReactNode; speed?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

// Floating animation wrapper
export function FloatingElement({ children, duration = 6, distance = 8, className }: { children: ReactNode; duration?: number; distance?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -distance, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
