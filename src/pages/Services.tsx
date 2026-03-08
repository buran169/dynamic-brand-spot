import { services, processSteps, faqs } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const ServicesPage = () => {
  const { t } = useI18n();

  return (
    <div className="min-h-screen pt-24">
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading title={t("section.services")} subtitle={t("section.services.sub2")} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <FadeIn key={s.id} delay={i * 0.08}>
                <ServiceCard service={s} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading title={t("section.howIWork")} subtitle={t("section.howIWork.sub")} />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((step) => (
              <StaggerItem key={step}>
                <motion.div whileHover={{ y: -6 }} whileTap={{ scale: 0.97 }} className="text-center p-6 rounded-2xl glass cursor-default">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="h-10 w-10 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3 font-display font-bold text-primary"
                  >
                    {step}
                  </motion.div>
                  <h3 className="font-display font-semibold mb-2">{t(`process.${step}`)}</h3>
                  <p className="text-sm text-muted-foreground">{t(`process.${step}.desc`)}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <SectionHeading title={t("section.faq")} subtitle={t("section.faq.sub")} />
          <FadeIn>
            <Accordion type="single" collapsible className="space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="glass rounded-2xl px-6 border-none">
                  <AccordionTrigger className="font-display text-sm hover:no-underline">{t(`faq.${i}.q`)}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">{t(`faq.${i}.a`)}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>

      <CTABanner />
    </div>
  );
};

export default ServicesPage;
