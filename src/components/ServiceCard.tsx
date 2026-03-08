import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import * as Icons from "lucide-react";
import type { services } from "@/lib/content";

type Service = (typeof services)[number];

export function ServiceCard({ service }: { service: Service }) {
  const Icon = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[service.icon] || Icons.Box;
  const { t } = useI18n();

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.97, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="h-full bg-card/50 border-border/50 hover:border-accent/30 transition-all duration-500 rounded-2xl overflow-hidden group spotlight-card hover:shadow-[0_20px_50px_-12px_hsl(var(--accent)/0.15)]">
        <CardHeader className="pb-3">
          <motion.div
            className="h-10 w-10 rounded-xl bg-primary/5 flex items-center justify-center mb-3 group-hover:bg-accent/10 transition-colors duration-300"
            whileHover={{ rotate: 10, scale: 1.15 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <Icon className="h-5 w-5 text-primary/70 group-hover:text-accent transition-colors duration-300" />
          </motion.div>
          <CardTitle className="text-base font-semibold">{service.title}</CardTitle>
          <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {service.features.map((f) => (
              <motion.div key={f} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}>
                <Badge variant="secondary" className="text-[11px] font-normal cursor-default">{f}</Badge>
              </motion.div>
            ))}
          </div>
          <p className="text-sm font-semibold text-primary">{service.pricing}</p>
          {service.disclaimer && (
            <p className="text-[11px] text-muted-foreground italic border-t border-border/50 pt-3">{service.disclaimer}</p>
          )}
          <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
            <Button asChild variant="outline" size="sm" className="w-full rounded-full text-xs h-9 hover:bg-accent/5 hover:border-accent/25 hover:text-accent transition-all">
              <Link to="/contact">{t("btn.requestQuote")}</Link>
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
