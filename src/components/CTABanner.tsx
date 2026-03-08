import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FadeIn } from "./MotionWrapper";
import { ArrowRight, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function CTABanner() {
  const { t } = useI18n();

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Floating background blobs */}
      <motion.div
        className="absolute -top-20 -left-20 w-[300px] h-[300px] rounded-full opacity-[0.06] dark:opacity-[0.1] pointer-events-none"
        style={{ background: `radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)` }}
        animate={{ x: [0, 20, 0], y: [0, 15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-[250px] h-[250px] rounded-full opacity-[0.05] dark:opacity-[0.08] pointer-events-none"
        style={{ background: `radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)` }}
        animate={{ x: [0, -15, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <FadeIn className="max-w-4xl mx-auto px-4">
        <motion.div
          className="relative p-8 sm:p-12 md:p-20 rounded-2xl sm:rounded-3xl overflow-hidden group"
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 group-hover:from-primary/8 group-hover:via-accent/8 group-hover:to-primary/8 transition-all duration-700" />
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-border/50 group-hover:border-accent/20 transition-colors duration-500" />
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[400px] h-[150px] sm:h-[200px] opacity-30"
            style={{ background: `radial-gradient(ellipse, hsl(var(--accent) / 0.15) 0%, transparent 70%)` }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles className="h-6 w-6 mx-auto mb-4 text-accent/60" />
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 tracking-tightest gradient-text">{t("cta.title")}</h2>
            <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-[15px]">{t("cta.subtitle")}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.93 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
                <Button asChild size="lg" className="rounded-full h-11 px-8 text-sm glow w-full sm:w-auto">
                  <Link to="/contact">
                    {t("cta.quote")} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.93 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
                <Button asChild variant="outline" size="lg" className="rounded-full h-11 px-8 text-sm w-full sm:w-auto hover:border-accent/30">
                  <Link to="/services">{t("hero.services")}</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </FadeIn>
    </section>
  );
}
