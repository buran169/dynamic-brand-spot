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
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="h-full glass hover:glow transition-all duration-300 rounded-2xl group">
        <CardHeader>
          <motion.div
            className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors"
            whileHover={{ rotate: 5, scale: 1.1 }}
          >
            <Icon className="h-6 w-6 text-primary" />
          </motion.div>
          <CardTitle className="font-display text-lg">{service.title}</CardTitle>
          <p className="text-sm text-muted-foreground">{service.desc}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {service.features.map((f) => (
              <Badge key={f} variant="secondary" className="text-xs font-normal">{f}</Badge>
            ))}
          </div>
          <p className="text-sm font-semibold text-primary">{service.pricing}</p>
          {service.disclaimer && (
            <p className="text-xs text-muted-foreground italic border-t border-border pt-3">{service.disclaimer}</p>
          )}
          <motion.div whileTap={{ scale: 0.95 }}>
            <Button asChild variant="outline" size="sm" className="w-full rounded-full hover:bg-primary/5">
              <Link to="/contact">{t("btn.requestQuote")}</Link>
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
