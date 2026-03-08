import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FadeIn } from "./MotionWrapper";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";

export function CTABanner() {
  const { t } = useI18n();

  return (
    <section className="section-padding">
      <FadeIn className="max-w-4xl mx-auto text-center px-4">
        <div className="relative p-12 md:p-20 rounded-3xl overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-3xl" />
          <div className="absolute inset-0 rounded-3xl border border-border/50" />
          
          {/* Subtle glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] opacity-30"
            style={{ background: `radial-gradient(ellipse, hsl(var(--primary) / 0.1) 0%, transparent 70%)` }}
          />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tightest gradient-text">{t("cta.title")}</h2>
            <p className="text-muted-foreground mb-8 text-[15px]">{t("cta.subtitle")}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Button asChild size="lg" className="rounded-full h-11 px-8 text-sm glow">
                  <Link to="/contact">
                    {t("cta.quote")} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Button asChild variant="outline" size="lg" className="rounded-full h-11 px-8 text-sm">
                  <Link to="/services">{t("hero.services")}</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
