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
    <Card className="h-full bg-card/50 border-border/50 hover:border-primary/20 transition-all duration-500 rounded-2xl overflow-hidden group spotlight-card">
      <CardHeader className="pb-3">
        <div className="h-10 w-10 rounded-xl bg-primary/5 flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors duration-300">
          <Icon className="h-5 w-5 text-primary/70 group-hover:text-primary transition-colors duration-300" />
        </div>
        <CardTitle className="text-base font-semibold">{service.title}</CardTitle>
        <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {service.features.map((f) => (
            <Badge key={f} variant="secondary" className="text-[11px] font-normal">{f}</Badge>
          ))}
        </div>
        <p className="text-sm font-semibold text-primary">{service.pricing}</p>
        {service.disclaimer && (
          <p className="text-[11px] text-muted-foreground italic border-t border-border/50 pt-3">{service.disclaimer}</p>
        )}
        <motion.div whileTap={{ scale: 0.97 }} whileHover={{ scale: 1.01 }}>
          <Button asChild variant="outline" size="sm" className="w-full rounded-full text-xs h-9 hover:bg-primary/5 hover:border-primary/20">
            <Link to="/contact">{t("btn.requestQuote")}</Link>
          </Button>
        </motion.div>
      </CardContent>
    </Card>
  );
}
