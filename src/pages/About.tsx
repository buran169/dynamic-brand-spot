import { siteConfig } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedProfileImage } from "@/components/AnimatedProfileImage";
import { CTABanner } from "@/components/CTABanner";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

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
    <div className="min-h-screen pt-24">
      {/* Hero intro with profile */}
      <section className="section-padding relative overflow-hidden">
        {/* Background accents */}
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: `radial-gradient(circle, hsl(var(--primary) / 0.08), transparent 70%)` }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <FadeIn className="flex justify-center">
            <AnimatedProfileImage size="lg" />
          </FadeIn>
          <FadeIn delay={0.2}>
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            >
              {t("about.title")} <span className="gradient-text">{siteConfig.name}</span>
            </motion.h1>
            <motion.p
              className="text-muted-foreground mb-4 text-base leading-relaxed"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            >
              {t("hero.bio")}
            </motion.p>
            <motion.p
              className="text-muted-foreground text-sm leading-relaxed"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            >
              {t("about.intro")}
            </motion.p>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card/30">
        <StaggerContainer className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {statKeys.map((s) => (
            <StaggerItem key={s.key}>
              <motion.div whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.97 }} className="text-center p-6 rounded-2xl glass cursor-default">
                <motion.p
                  className="text-3xl md:text-4xl font-display font-bold gradient-text"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {s.value}
                </motion.p>
                <p className="text-sm text-muted-foreground mt-2">{t(s.key)}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <SectionHeading title={t("about.journey")} />
          <div className="relative border-l-2 border-primary/30 pl-8 space-y-10">
            {timelineKeys.map((tl, i) => (
              <FadeIn key={tl.year} delay={i * 0.1} className="relative">
                <motion.div
                  className="absolute -left-[2.55rem] top-0 h-5 w-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center"
                  whileInView={{ scale: [0.5, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </motion.div>
                <p className="text-xs text-primary font-semibold mb-1 font-display">{tl.year}</p>
                <h3 className="font-display font-semibold">{t(tl.titleKey)}</h3>
                <p className="text-sm text-muted-foreground">{t(tl.descKey)}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Me */}
      <section className="section-padding bg-card/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <SectionHeading title={t("about.whyMe")} />
          <StaggerContainer className="space-y-3">
            {reasonKeys.map((key) => (
              <StaggerItem key={key}>
                <motion.div
                  whileHover={{ x: 6 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 p-4 rounded-xl glass cursor-default group"
                >
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 group-hover:text-accent transition-colors" />
                  </motion.div>
                  <span className="text-sm">{t(key)}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTABanner />
    </div>
  );
};

export default AboutPage;
