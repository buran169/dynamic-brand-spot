import { services } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
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
      <div className="min-h-screen pt-24">
        {/* Services grid */}
        <section className="section-padding">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeading title={t("section.services")} subtitle={t("section.services.sub2")} />
            {/* Urgency/trust elements */}
            <FadeIn className="flex flex-wrap justify-center gap-3 mb-10">
              <Badge variant="secondary" className="gap-1.5 px-4 py-2 rounded-full glass text-xs">
                <Clock className="h-3.5 w-3.5 text-primary" />
                {t("contact.fast")}
              </Badge>
              <Badge variant="secondary" className="gap-1.5 px-4 py-2 rounded-full glass text-xs">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                Custom Solutions
              </Badge>
              <Badge variant="secondary" className="gap-1.5 px-4 py-2 rounded-full glass text-xs">
                <MessageSquare className="h-3.5 w-3.5 text-primary" />
                Clear Communication
              </Badge>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        <section className="section-padding bg-card/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeading title={t("section.strengths")} subtitle={t("section.strengths.sub")} />
            <StrengthCards />
          </div>
        </section>

        <SectionDivider />

        {/* How I Work - Process timeline */}
        <section className="section-padding">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeading title={t("section.howIWork")} subtitle={t("section.howIWork.sub")} />
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {/* Connection line */}
              <div className="hidden md:block absolute top-[3.25rem] left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />
              {[1, 2, 3, 4].map((step) => (
                <StaggerItem key={step}>
                  <motion.div whileHover={{ y: -6 }} whileTap={{ scale: 0.97 }} className="text-center p-6 rounded-2xl glass gradient-border-card cursor-default relative">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="h-12 w-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3 font-display font-bold text-primary text-lg relative z-10"
                    >
                      {step}
                    </motion.div>
                    <h3 className="font-display font-semibold mb-2">{t(`process.${step}`)}</h3>
                    <p className="text-sm text-muted-foreground">{t(`process.${step}.desc`)}</p>
                    {step < 4 && (
                      <ArrowRight className="hidden md:block absolute -right-3 top-[3.25rem] h-4 w-4 text-primary/40 z-10" />
                    )}
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <SectionDivider />

        {/* Service Comparison */}
        <section className="section-padding bg-card/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <SectionHeading title={t("section.comparison")} subtitle={t("section.comparison.sub")} />
            <div className="rounded-2xl glass p-4 sm:p-6">
              <ServiceComparisonTable />
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* FAQ */}
        <section className="section-padding">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <SectionHeading title={t("section.faq")} subtitle={t("section.faq.sub")} />
            <FadeIn>
              <Accordion type="single" collapsible className="space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="glass gradient-border-card rounded-2xl px-6 border-none">
                    <AccordionTrigger className="font-display text-sm hover:no-underline py-4 touch-target">
                      {t(`faq.${i}.q`)}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground pb-4">
                      {t(`faq.${i}.a`)}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </FadeIn>
            {/* Response expectation */}
            <FadeIn className="mt-8 text-center">
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <motion.div
                  className="w-2 h-2 rounded-full bg-primary"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                {t("contact.response")}
              </p>
            </FadeIn>
          </div>
        </section>

        <CTABanner />
      </div>
    </PageTransition>
  );
};

export default ServicesPage;
