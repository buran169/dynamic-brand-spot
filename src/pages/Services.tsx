import { motion } from "framer-motion";
import { services } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageTransition } from "@/components/PageTransition";
import { SectionDivider } from "@/components/SectionDivider";
import { ServiceComparisonTable } from "@/components/ServiceComparisonTable";
import { StrengthCards } from "@/components/StrengthCards";
import { ArrowRight, Clock, MessageSquare, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ServicesPage = () => {
  const { t } = useI18n();

  return (
    <PageTransition variant="slideUp">
      <div className="min-h-screen pt-16 sm:pt-20 relative overflow-hidden">
        {/* Background blob */}
        <motion.div
          className="absolute top-0 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.04] dark:opacity-[0.07] pointer-events-none"
          style={{ background: `radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)` }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Services grid */}
        <section className="section-padding">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeading title={t("section.services")} subtitle={t("section.services.sub2")} />
            <FadeIn className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
              {[
                { icon: Clock, label: t("contact.fast") },
                { icon: Sparkles, label: "Custom Solutions" },
                { icon: MessageSquare, label: "Clear Communication" },
              ].map((b, i) => (
                <motion.div key={i} whileHover={{ scale: 1.08, y: -2 }} whileTap={{ scale: 0.92 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
                  <Badge variant="secondary" className="gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs border-border cursor-default">
                    <b.icon className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary" />
                    {b.label}
                  </Badge>
                </motion.div>
              ))}
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((s, i) => (
                <FadeIn key={s.id} delay={i * 0.08}>
                  <ServiceCard service={s} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Why Choose Me */}
        <section className="section-padding bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeading title={t("section.strengths")} subtitle={t("section.strengths.sub")} />
            <StrengthCards />
          </div>
        </section>

        <SectionDivider />

        {/* How I Work */}
        <section className="section-padding">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeading title={t("section.howIWork")} subtitle={t("section.howIWork.sub")} />
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 relative">
              <div className="hidden md:block absolute top-[3.25rem] left-[12.5%] right-[12.5%] h-[1px] bg-border" />
              {[1, 2, 3, 4].map((step) => (
                <StaggerItem key={step}>
                  <motion.div
                    whileHover={{ y: -4, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-border/50 bg-card/30 relative cursor-default hover:border-accent/20 hover:shadow-[0_12px_30px_-8px_hsl(var(--accent)/0.1)] transition-all"
                  >
                    <motion.div
                      className="h-10 w-10 sm:h-12 sm:w-12 mx-auto rounded-full bg-primary/5 flex items-center justify-center mb-2 sm:mb-3 font-bold text-primary text-sm sm:text-lg relative z-10"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {step}
                    </motion.div>
                    <h3 className="font-semibold text-xs sm:text-sm mb-1 sm:mb-2">{t(`process.${step}`)}</h3>
                    <p className="text-[10px] sm:text-sm text-muted-foreground leading-tight sm:leading-normal">{t(`process.${step}.desc`)}</p>
                    {step < 4 && (
                      <ArrowRight className="hidden md:block absolute -right-3 top-[3.25rem] h-4 w-4 text-muted-foreground/30 z-10" />
                    )}
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <SectionDivider />

        {/* Service Comparison */}
        <section className="section-padding bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <SectionHeading title={t("section.comparison")} subtitle={t("section.comparison.sub")} />
            <FadeIn>
              <div className="rounded-xl sm:rounded-2xl border border-border/50 bg-card/50 p-3 sm:p-6 overflow-x-auto">
                <ServiceComparisonTable />
              </div>
            </FadeIn>
          </div>
        </section>

        <SectionDivider />

        {/* FAQ */}
        <section className="section-padding">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <SectionHeading title={t("section.faq")} subtitle={t("section.faq.sub")} />
            <FadeIn>
              <Accordion type="single" collapsible className="space-y-2 sm:space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div key={i} whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 25 }}>
                    <AccordionItem value={`faq-${i}`} className="border border-border/50 bg-card/50 rounded-xl sm:rounded-2xl px-4 sm:px-6 border-b-0 hover:border-accent/15 transition-colors">
                      <AccordionTrigger className="text-sm hover:no-underline py-3 sm:py-4 [&>svg]:h-4 [&>svg]:w-4">
                        {t(`faq.${i}.q`)}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground pb-3 sm:pb-4">
                        {t(`faq.${i}.a`)}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </FadeIn>
          </div>
        </section>

        <CTABanner />
      </div>
    </PageTransition>
  );
};

export default ServicesPage;
