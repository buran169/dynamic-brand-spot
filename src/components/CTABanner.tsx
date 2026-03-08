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
      <FadeIn className="max-w-4xl mx-auto text-center p-10 md:p-16 rounded-3xl relative overflow-hidden">
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 rounded-3xl"
          style={{
            background: `linear-gradient(135deg, hsl(var(--primary) / 0.08), hsl(var(--accent) / 0.08), hsl(var(--primary) / 0.05))`,
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 rounded-3xl border border-primary/20" />
        
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-3 gradient-text">{t("cta.title")}</h2>
          <p className="text-muted-foreground mb-6">{t("cta.subtitle")}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button asChild size="lg" className="rounded-full glow">
                <Link to="/contact">
                  {t("cta.quote")} <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link to="/services">{t("hero.services")}</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
