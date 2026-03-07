import { services, processSteps, faqs } from "@/lib/content";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ServicesPage = () => (
  <div className="min-h-screen pt-24">
    <section className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading title="Services" subtitle="Premium solutions for your digital needs" />
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
        <SectionHeading title="How I Work" subtitle="A streamlined process for great results" />
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {processSteps.map((s) => (
            <StaggerItem key={s.step} className="text-center p-6 rounded-2xl glass">
              <div className="h-10 w-10 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3 font-display font-bold text-primary">
                {s.step}
              </div>
              <h3 className="font-display font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    {/* FAQ */}
    <section className="section-padding">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionHeading title="FAQ" subtitle="Common questions answered" />
        <FadeIn>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="glass rounded-2xl px-6 border-none">
                <AccordionTrigger className="font-display text-sm hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>

    <CTABanner />
  </div>
);

export default ServicesPage;
