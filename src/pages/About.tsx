import { siteConfig } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedProfileImage } from "@/components/AnimatedProfileImage";
import { CTABanner } from "@/components/CTABanner";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";

const statKeys = [
  { value: "50+", key: "stat.projects" },
  { value: "30+", key: "stat.clients" },
  { value: "5+", key: "stat.experience" },
  { value: "20+", key: "stat.technologies" },
];

const reasonKeys = ["reason.1", "reason.2", "reason.3", "reason.4", "reason.5"];

const timelineKeys = [
  { year: "2019", titleKey: "timeline.2019", descKey: "timeline.2019.desc" },
  { year: "2020", titleKey: "timeline.2020", descKey: "timeline.2020.desc" },
  { year: "2021", titleKey: "timeline.2021", descKey: "timeline.2021.desc" },
  { year: "2022", titleKey: "timeline.2022", descKey: "timeline.2022.desc" },
  { year: "2023", titleKey: "timeline.2023", descKey: "timeline.2023.desc" },
  { year: "2024", titleKey: "timeline.2024", descKey: "timeline.2024.desc" },
];

const AboutPage = () => {
  const { t } = useI18n();

  return (
    <PageTransition variant="fade">
      <div className="min-h-screen pt-16 sm:pt-20">
        <section className="section-padding relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center relative z-10">
            <FadeIn className="flex justify-center">
              <AnimatedProfileImage size="lg" />
            </FadeIn>
            <FadeIn delay={0.2}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-tightest">
                {t("about.title")} <span className="gradient-text">{siteConfig.name}</span>
              </h1>
              <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                {t("hero.bio")}
              </p>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                {t("about.intro")}
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-8 sm:py-12 bg-muted/30">
          <StaggerContainer className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {statKeys.map((s) => (
              <StaggerItem key={s.key}>
                <div className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-border/50 bg-card/50">
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">{s.value}</p>
                  <p className="text-[10px] sm:text-sm text-muted-foreground mt-1 sm:mt-2">{t(s.key)}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        <section className="section-padding">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <SectionHeading title={t("about.journey")} />
            <div className="relative border-l-2 border-border pl-6 sm:pl-8 space-y-8 sm:space-y-10">
              {timelineKeys.map((tl, i) => (
                <FadeIn key={tl.year} delay={i * 0.08} className="relative">
                  <motion.div
                    className="absolute -left-[1.85rem] sm:-left-[2.55rem] top-0 h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center"
                    whileInView={{ scale: [0.5, 1.1, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-primary" />
                  </motion.div>
                  <p className="text-[10px] sm:text-xs text-primary font-semibold mb-0.5 sm:mb-1">{tl.year}</p>
                  <h3 className="font-semibold text-sm sm:text-base">{t(tl.titleKey)}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{t(tl.descKey)}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <SectionHeading title={t("about.whyMe")} />
            <StaggerContainer className="space-y-2 sm:space-y-3">
              {reasonKeys.map((key) => (
                <StaggerItem key={key}>
                  <div className="flex items-center gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-border/50 bg-card/50">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" />
                    <span className="text-xs sm:text-sm">{t(key)}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <CTABanner />
      </div>
    </PageTransition>
  );
};

export default AboutPage;
