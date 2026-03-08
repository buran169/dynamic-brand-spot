import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";
import { siteConfig, projects, skillCategories } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import { AnimatedProfileImage } from "@/components/AnimatedProfileImage";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillChip } from "@/components/SkillBadge";
import { CTABanner } from "@/components/CTABanner";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";
import { PageTransition } from "@/components/PageTransition";
import { TypeWriter } from "@/components/TypeWriter";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { SectionDivider } from "@/components/SectionDivider";
import { TestimonialsSlider } from "@/components/TestimonialsSlider";
import { StrengthCards } from "@/components/StrengthCards";
import { DevTerminal } from "@/components/DevTerminal";
import * as LucideIcons from "lucide-react";
import { services } from "@/lib/content";

const trustKeys = [
  { icon: "Zap", titleKey: "trust.fast", descKey: "trust.fast.desc" },
  { icon: "Code2", titleKey: "trust.code", descKey: "trust.code.desc" },
  { icon: "HeartHandshake", titleKey: "trust.support", descKey: "trust.support.desc" },
  { icon: "Shield", titleKey: "trust.secure", descKey: "trust.secure.desc" },
];

const roles = ["Web Developer", "Discord Developer", "SA-MP Developer", "Graphics Designer"];

const heroStats = [
  { target: 50, suffix: "+", labelKey: "stat.projects" },
  { target: 30, suffix: "+", labelKey: "stat.clients" },
  { target: 5, suffix: "+", labelKey: "stat.experience" },
  { target: 20, suffix: "+", labelKey: "stat.technologies" },
];

const Index = () => {
  const { t } = useI18n();

  return (
    <PageTransition variant="morphIn">
      <div className="min-h-screen">
        {/* Hero */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Subtle background — Vercel/Linear style radial glow */}
          <div className="absolute inset-0">
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] opacity-20 dark:opacity-30"
              style={{
                background: `radial-gradient(ellipse at center, hsl(var(--primary) / 0.15) 0%, transparent 70%)`,
              }}
            />
            <div
              className="absolute bottom-0 right-0 w-[600px] h-[600px] opacity-10 dark:opacity-20"
              style={{
                background: `radial-gradient(circle, hsl(var(--accent) / 0.1) 0%, transparent 60%)`,
              }}
            />
            {/* Subtle grid */}
            <div
              className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
                backgroundSize: "80px 80px",
              }}
            />
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
            <motion.div
              className="order-2 lg:order-1 text-center lg:text-left"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Availability badge */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
                <Badge variant="secondary" className="mb-8 gap-2 px-3 py-1 text-xs font-medium rounded-full border-border">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-50" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                  {t("hero.badge")}
                </Badge>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 leading-[1.05] tracking-tightest text-balance"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {t("hero.greeting")}{" "}
                <span className="gradient-text gradient-text-animated">{siteConfig.name}</span>
              </motion.h1>

              {/* Typing roles */}
              <motion.div
                className="text-lg sm:text-xl text-muted-foreground font-medium mb-3 h-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <TypeWriter words={roles} className="font-display" />
              </motion.div>

              <motion.p
                className="text-muted-foreground mb-10 max-w-lg mx-auto lg:mx-0 text-[15px] leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {t("hero.bio")}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-3 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  <Button asChild size="lg" className="rounded-full px-8 h-11 text-sm font-medium glow">
                    <Link to="/contact">
                      {t("nav.hire")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-11 text-sm font-medium">
                    <Link to="/projects">{t("hero.work")}</Link>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-4 gap-6 mt-12 pt-8 border-t border-border/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {heroStats.map((stat) => (
                  <AnimatedCounter
                    key={stat.labelKey}
                    target={stat.target}
                    suffix={stat.suffix}
                    label={t(stat.labelKey)}
                  />
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2 flex flex-col items-center gap-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <AnimatedProfileImage />
              <div className="hidden md:block w-full">
                <DevTerminal />
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 1.2 }}
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">{t("hero.scroll")}</span>
            <motion.div
              className="w-5 h-8 rounded-full border border-border flex justify-center pt-2"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div className="w-0.5 h-1.5 rounded-full bg-muted-foreground" animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
            </motion.div>
          </motion.div>
        </section>

        <SectionDivider />

        {/* Trust Badges */}
        <section className="section-padding">
          <StaggerContainer className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustKeys.map((b) => {
              const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[b.icon] || LucideIcons.Box;
              return (
                <StaggerItem key={b.titleKey}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="text-center p-6 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/60 transition-all duration-300 group"
                  >
                    <div className="h-10 w-10 mx-auto rounded-xl bg-primary/5 flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
                      <Icon className="h-5 w-5 text-primary/70 group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{t(b.titleKey)}</h3>
                    <p className="text-xs text-muted-foreground">{t(b.descKey)}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </section>

        <SectionDivider />

        {/* Services */}
        <section className="section-padding">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeading title={t("section.services")} subtitle={t("section.services.sub")} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.slice(0, 6).map((s, i) => (
                <FadeIn key={s.id} delay={i * 0.06}>
                  <ServiceCard service={s} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Projects */}
        <section className="section-padding bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeading title={t("section.projects")} subtitle={t("section.projects.sub")} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {projects.slice(0, 3).map((p, i) => (
                <FadeIn key={p.id} delay={i * 0.08}>
                  <ProjectCard project={p} />
                </FadeIn>
              ))}
            </div>
            <FadeIn className="text-center mt-10">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="inline-block">
                <Button asChild variant="outline" className="rounded-full text-sm h-10 px-6">
                  <Link to="/projects">{t("btn.viewAll")} <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </motion.div>
            </FadeIn>
          </div>
        </section>

        <SectionDivider />

        {/* Skills */}
        <section className="section-padding">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeading title={t("section.skills")} subtitle={t("section.skills.sub")} />
            <StaggerContainer className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
              {skillCategories.flatMap((cat) =>
                cat.skills.map((s) => (
                  <StaggerItem key={s.name}>
                    <SkillChip name={s.name} />
                  </StaggerItem>
                ))
              )}
            </StaggerContainer>
          </div>
        </section>

        <SectionDivider />

        {/* Testimonials */}
        <section className="section-padding bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeading title={t("section.testimonials")} subtitle={t("section.testimonials.sub")} />
            <TestimonialsSlider />
          </div>
        </section>

        <SectionDivider />

        {/* Why Choose Me */}
        <section className="section-padding">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeading title={t("section.strengths")} subtitle={t("section.strengths.sub")} />
            <StrengthCards />
          </div>
        </section>

        <SectionDivider />

        <CTABanner />
      </div>
    </PageTransition>
  );
};

export default Index;
