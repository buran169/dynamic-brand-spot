import { motion, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";

interface MotionWrapperProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
}

const springTransition = {
  type: "spring" as const,
  damping: 30,
  stiffness: 200,
};

export const FadeIn = ({ children, delay = 0, ...props }: MotionWrapperProps) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ ...springTransition, delay }}
    {...props}
  >
    {children}
  </motion.div>
);

export const ScaleIn = ({ children, delay = 0, ...props }: MotionWrapperProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ ...springTransition, delay }}
    {...props}
  >
    {children}
  </motion.div>
);

export const SlideIn = ({ children, delay = 0, ...props }: MotionWrapperProps) => (
  <motion.div
    initial={{ opacity: 0, x: -24 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ ...springTransition, delay }}
    {...props}
  >
    {children}
  </motion.div>
);

export const StaggerContainer = ({ children, ...props }: MotionWrapperProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    variants={{
      visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
    }}
    {...props}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, ...props }: MotionWrapperProps) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 16 },
      visible: { opacity: 1, y: 0, transition: springTransition },
    }}
    {...props}
  >
    {children}
  </motion.div>
);
