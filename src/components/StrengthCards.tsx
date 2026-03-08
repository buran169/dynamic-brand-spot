import { motion } from "framer-motion";
import { strengths } from "@/lib/content";
import { StaggerContainer, StaggerItem } from "./MotionWrapper";
import * as LucideIcons from "lucide-react";

export function StrengthCards() {
  return (
    <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {strengths.map((s) => {
        const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[s.icon] || LucideIcons.Box;
        return (
          <StaggerItem key={s.title}>
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="text-center p-5 rounded-2xl glass gradient-border-card cursor-default group"
            >
              <motion.div
                whileHover={{ rotate: 15, scale: 1.15 }}
                className="h-11 w-11 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors"
              >
                <Icon className="h-5 w-5 text-primary" />
              </motion.div>
              <h3 className="font-display font-semibold text-sm mb-1">{s.title}</h3>
              <p className="text-xs text-muted-foreground">{s.desc}</p>
            </motion.div>
          </StaggerItem>
        );
      })}
    </StaggerContainer>
  );
}
