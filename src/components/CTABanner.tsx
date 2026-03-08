import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FadeIn } from "./MotionWrapper";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function CTABanner() {
  const { t } = useI18n();

  return (
    <section className="section-padding">
      <FadeIn className="max-w-4xl mx-auto px-4">
        <div className="relative p-8 sm:p-12 md:p-20 rounded-2xl sm:rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5" />
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-border/50" />
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[400px] h-[150px] sm:h-[200px] opacity-30"
            style={{ background: `radial-gradient(ellipse, hsl(var(--primary) / 0.1) 0%, transparent 70%)` }}
          />
          <div className="relative z-10 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 tracking-tightest gradient-text">{t("cta.title")}</h2>
            <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-[15px]">{t("cta.subtitle")}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Button asChild size="lg" className="rounded-full h-11 px-8 text-sm glow w-full sm:w-auto">
                <Link to="/contact">
                  {t("cta.quote")} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full h-11 px-8 text-sm w-full sm:w-auto">
                <Link to="/services">{t("hero.services")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
