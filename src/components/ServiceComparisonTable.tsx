import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { serviceComparison } from "@/lib/content";
import { FadeIn } from "./MotionWrapper";
import { useI18n } from "@/lib/i18n";

const headers = [
  { key: "web", label: "Web" },
  { key: "discord", label: "Discord" },
  { key: "samp", label: "SA-MP" },
  { key: "design", label: "Design" },
];

export function ServiceComparisonTable() {
  const { t } = useI18n();

  return (
    <FadeIn>
      <div className="overflow-x-auto -mx-4 sm:mx-0">
        <table className="w-full min-w-[500px] text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-display font-semibold text-muted-foreground">Feature</th>
              {headers.map((h) => (
                <th key={h.key} className="text-center py-3 px-3 font-display font-semibold">
                  <span className="gradient-text">{h.label}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {serviceComparison.map((row, i) => (
              <motion.tr
                key={row.feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border-b border-border/50 hover:bg-muted/30 transition-colors"
              >
                <td className="py-3 px-4 font-medium">{row.feature}</td>
                {headers.map((h) => {
                  const val = row[h.key as keyof typeof row];
                  return (
                    <td key={h.key} className="text-center py-3 px-3">
                      {val === true ? (
                        <Check className="h-4 w-4 text-primary mx-auto" />
                      ) : val === false ? (
                        <X className="h-4 w-4 text-muted-foreground/40 mx-auto" />
                      ) : (
                        <span className="text-xs font-medium text-muted-foreground">{String(val)}</span>
                      )}
                    </td>
                  );
                })}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </FadeIn>
  );
}
