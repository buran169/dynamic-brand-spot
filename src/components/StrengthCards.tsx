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
            <div className="text-center p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-border/50 bg-card/30 group">
              <div className="h-9 w-9 sm:h-11 sm:w-11 mx-auto rounded-lg sm:rounded-xl bg-primary/5 flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-primary/10 transition-colors">
                <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary/70" />
              </div>
              <h3 className="font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1">{s.title}</h3>
              <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight">{s.desc}</p>
            </div>
          </StaggerItem>
        );
      })}
    </StaggerContainer>
  );
}
