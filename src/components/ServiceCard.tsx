import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import * as Icons from "lucide-react";
import type { services } from "@/lib/content";

type Service = (typeof services)[number];

export function ServiceCard({ service }: { service: Service }) {
  const Icon = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[service.icon] || Icons.Box;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="h-full glass hover:glow transition-shadow duration-300 rounded-2xl">
        <CardHeader>
          <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
            <Icon className="h-6 w-6 text-primary" />
          </div>
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
          <Button asChild variant="outline" size="sm" className="w-full rounded-full">
            <Link to="/contact">Request Quote</Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
