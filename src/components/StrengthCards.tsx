import { motion } from "framer-motion";
import { strengths } from "@/lib/content";
import { StaggerContainer, StaggerItem } from "./MotionWrapper";
import * as LucideIcons from "lucide-react";

export function StrengthCards() {
  return (
    <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
      {strengths.map((s) => {
        const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[s.icon] || LucideIcons.Box;
        return (
          <StaggerItem key={s.title}>
            <motion.div
              whileHover={{ y: -6, scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="text-center p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-border/50 bg-card/30 group cursor-default hover:border-accent/25 hover:shadow-[0_16px_40px_-10px_hsl(var(--accent)/0.12)] transition-all duration-400"
            >
              <motion.div
                className="h-9 w-9 sm:h-11 sm:w-11 mx-auto rounded-lg sm:rounded-xl bg-primary/5 flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-accent/10 transition-colors"
                whileHover={{ rotate: 12, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 400, damping: 12 }}
              >
                <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary/70 group-hover:text-accent transition-colors" />
              </motion.div>
              <h3 className="font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1">{s.title}</h3>
              <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight">{s.desc}</p>
            </motion.div>
          </StaggerItem>
        );
      })}
    </StaggerContainer>
  );
}
