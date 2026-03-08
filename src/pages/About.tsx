import { siteConfig } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedProfileImage } from "@/components/AnimatedProfileImage";
import { CTABanner } from "@/components/CTABanner";
import { FadeIn, StaggerContainer, StaggerItem, BlurIn } from "@/components/MotionWrapper";
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
      <div className="min-h-screen pt-16 sm:pt-20 relative overflow-hidden">
        {/* Background blob */}
        <motion.div
          className="absolute top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.04] dark:opacity-[0.07] pointer-events-none"
          style={{ background: `radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)` }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <section className="section-padding relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center relative z-10">
            <BlurIn className="flex justify-center">
              <AnimatedProfileImage size="lg" />
            </BlurIn>
            <FadeIn delay={0.2}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-tightest">
                {t("about.title")} <span className="gradient-text">{siteConfig.name}</span>
              </h1>
              <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">{t("hero.bio")}</p>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{t("about.intro")}</p>
            </FadeIn>
          </div>
        </section>

        <section className="py-8 sm:py-12 bg-muted/30">
          <StaggerContainer className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {statKeys.map((s) => (
              <StaggerItem key={s.key}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-border/50 bg-card/50 cursor-default hover:border-accent/25 hover:shadow-[0_12px_30px_-8px_hsl(var(--accent)/0.1)] transition-all duration-400"
                >
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">{s.value}</p>
                  <p className="text-[10px] sm:text-sm text-muted-foreground mt-1 sm:mt-2">{t(s.key)}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        <section className="section-padding">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <SectionHeading title={t("about.journey")} />
            <div className="relative border-l-2 border-border pl-6 sm:pl-8 space-y-8 sm:space-y-10">
              {timelineKeys.map((tl, i) => (
                <FadeIn key={tl.year} delay={i * 0.1} className="relative">
                  <motion.div
                    className="absolute -left-[1.85rem] sm:-left-[2.55rem] top-0 h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center"
                    whileInView={{ scale: [0.5, 1.15, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
                  >
                    <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-primary" />
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <p className="text-[10px] sm:text-xs text-primary font-semibold mb-0.5 sm:mb-1">{tl.year}</p>
                    <h3 className="font-semibold text-sm sm:text-base">{t(tl.titleKey)}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{t(tl.descKey)}</p>
                  </motion.div>
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
                  <motion.div
                    whileHover={{ x: 6, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex items-center gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-border/50 bg-card/50 cursor-default hover:border-accent/20 hover:shadow-[0_8px_20px_-6px_hsl(var(--accent)/0.1)] transition-all"
                  >
                    <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" />
                    </motion.div>
                    <span className="text-xs sm:text-sm">{t(key)}</span>
                  </motion.div>
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
