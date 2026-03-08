import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import * as Icons from "lucide-react";
import type { services } from "@/lib/content";
import { Tilt3DCard } from "@/components/Tilt3DCard";

type Service = (typeof services)[number];

export function ServiceCard({ service }: { service: Service }) {
  const Icon = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[service.icon] || Icons.Box;
  const { t } = useI18n();

  return (
    <Tilt3DCard className="h-full group" intensity={8}>
      <Card className="h-full glass gradient-border-card hover:glow transition-all duration-300 rounded-2xl card-interactive touch-ripple">
        <CardHeader>
          <motion.div
            className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors icon-interactive"
            whileHover={{ rotate: 10, scale: 1.15 }}
            whileTap={{ rotate: -10, scale: 0.9 }}
          >
            <Icon className="h-6 w-6 text-primary" />
          </motion.div>
          <CardTitle className="font-display text-lg">{service.title}</CardTitle>
          <p className="text-sm text-muted-foreground">{service.desc}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {service.features.map((f) => (
              <Badge key={f} variant="secondary" className="text-xs font-normal badge-interactive cursor-default">{f}</Badge>
            ))}
          </div>
          <p className="text-sm font-semibold text-primary">{service.pricing}</p>
          {service.disclaimer && (
            <p className="text-xs text-muted-foreground italic border-t border-border pt-3">{service.disclaimer}</p>
          )}
          <motion.div whileTap={{ scale: 0.92 }} whileHover={{ scale: 1.03 }}>
            <Button asChild variant="outline" size="sm" className="w-full rounded-full hover:bg-primary/5 btn-pulse touch-glow">
              <Link to="/contact">{t("btn.requestQuote")}</Link>
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </Tilt3DCard>
  );
}
