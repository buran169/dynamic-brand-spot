import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, User } from "lucide-react";
import { siteConfig, projects, skillCategories } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import { AnimatedProfileImage } from "@/components/AnimatedProfileImage";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillChip } from "@/components/SkillBadge";
import { CTABanner } from "@/components/CTABanner";
import { FadeIn, StaggerContainer, StaggerItem, Parallax } from "@/components/MotionWrapper";
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
        <section className="min-h-[100svh] flex items-center justify-center relative overflow-hidden">
          {/* Animated background blobs */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Primary blob — top left */}
            <motion.div
              className="absolute -top-32 -left-32 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full opacity-[0.07] dark:opacity-[0.12]"
              style={{ background: `radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)` }}
              animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Accent blob — bottom right */}
            <motion.div
              className="absolute -bottom-32 -right-32 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full opacity-[0.06] dark:opacity-[0.1]"
              style={{ background: `radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)` }}
              animate={{ x: [0, -30, 0], y: [0, -40, 0], scale: [1, 1.15, 1] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Center subtle glow */}
            <motion.div
              className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] md:w-[900px] h-[400px] md:h-[500px] opacity-[0.04] dark:opacity-[0.06]"
              style={{ background: `radial-gradient(ellipse at center, hsl(var(--primary) / 0.3) 0%, transparent 70%)` }}
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Grid */}
            <div
              className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center relative z-10">
            <motion.div
              className="order-2 lg:order-1 text-center lg:text-left"
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Badge variant="secondary" className="mb-6 sm:mb-8 gap-2 px-3 py-1 text-xs font-medium rounded-full border-border cursor-default">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-50" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                    </span>
                    {t("hero.badge")}
                  </Badge>
                </motion.div>
              </motion.div>

              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-3 sm:mb-4 leading-[1.08] tracking-tightest text-balance"
                initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                {t("hero.greeting")}{" "}
                <span className="gradient-text gradient-text-animated">{siteConfig.name}</span>
              </motion.h1>

              <motion.div
                className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium mb-2 sm:mb-3 h-7 sm:h-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <TypeWriter words={roles} className="font-display" />
              </motion.div>

              <motion.p
                className="text-muted-foreground mb-8 sm:mb-10 max-w-lg mx-auto lg:mx-0 text-sm sm:text-[15px] leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
              >
                {t("hero.bio")}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                {/* Hire Me — primary CTA */}
                <motion.div
                  whileHover={{ scale: 1.06, y: -3 }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: "spring", stiffness: 400, damping: 14 }}
                  className="w-full sm:w-auto"
                >
                  <Button asChild size="lg" className="rounded-full px-10 h-13 text-sm font-bold w-full sm:w-auto relative overflow-hidden group bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] transition-[background-position] duration-500 border-0 shadow-[0_0_30px_-6px_hsl(var(--accent)/0.4)] hover:shadow-[0_0_40px_-4px_hsl(var(--accent)/0.5)]">
                    <Link to="/contact">
                      <span className="relative z-10 flex items-center gap-2.5 text-white">
                        <motion.span
                          animate={{ rotate: [0, 15, -15, 0] }}
                          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        >
                          <Sparkles className="h-4 w-4" />
                        </motion.span>
                        Hire Me
                        <motion.span
                          className="inline-flex"
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </motion.span>
                      </span>
                      {/* Shimmer effect */}
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12"
                        animate={{ x: ["-150%", "250%"] }}
                        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 4, ease: "linear" }}
                      />
                    </Link>
                  </Button>
                </motion.div>

                {/* About Me — secondary CTA */}
                <motion.div
                  whileHover={{ scale: 1.06, y: -3 }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: "spring", stiffness: 400, damping: 14 }}
                  className="w-full sm:w-auto"
                >
                  <Button asChild variant="outline" size="lg" className="rounded-full px-10 h-13 text-sm font-bold w-full sm:w-auto border-2 border-border/60 group hover:border-accent/40 hover:shadow-[0_0_24px_-6px_hsl(var(--accent)/0.25)] backdrop-blur-sm bg-background/50 transition-all duration-400">
                    <Link to="/about">
                      <span className="flex items-center gap-2.5 group-hover:text-accent transition-colors duration-300">
                        <motion.span
                          className="inline-flex"
                          whileHover={{ scale: 1.2 }}
                        >
                          <User className="h-4 w-4" />
                        </motion.span>
                        About Me
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                {heroStats.map((stat, i) => (
                  <motion.div
                    key={stat.labelKey}
                    whileHover={{ y: -3, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <AnimatedCounter
                      target={stat.target}
                      suffix={stat.suffix}
                      label={t(stat.labelKey)}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2 flex flex-col items-center gap-6 sm:gap-8"
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <AnimatedProfileImage />
              <div className="hidden lg:block w-full">
                <DevTerminal />
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 z-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.4, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
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
          <StaggerContainer className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {trustKeys.map((b) => {
              const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[b.icon] || LucideIcons.Box;
              return (
                <StaggerItem key={b.titleKey}>
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-border/50 bg-card/30 group cursor-default hover:border-accent/25 hover:shadow-[0_12px_30px_-8px_hsl(var(--accent)/0.1)] transition-all duration-400"
                  >
                    <motion.div
                      className="h-9 w-9 sm:h-10 sm:w-10 mx-auto rounded-lg sm:rounded-xl bg-primary/5 flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-accent/10 transition-colors"
                      whileHover={{ rotate: 8, scale: 1.1 }}
                    >
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary/70 group-hover:text-accent transition-colors" />
                    </motion.div>
                    <h3 className="font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1">{t(b.titleKey)}</h3>
                    <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight">{t(b.descKey)}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </section>

        <SectionDivider />

        {/* Services */}
        <section className="section-padding relative overflow-hidden">
          {/* Background accent blob */}
          <motion.div
            className="absolute -top-40 -right-40 w-[400px] h-[400px] rounded-full opacity-[0.04] dark:opacity-[0.07] pointer-events-none"
            style={{ background: `radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)` }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            <SectionHeading title={t("section.services")} subtitle={t("section.services.sub")} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.slice(0, 6).map((s, i) => (
                <FadeIn key={s.id} delay={i * 0.08}>
                  <ServiceCard service={s} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Projects */}
        <section className="section-padding bg-muted/30 relative overflow-hidden">
          <motion.div
            className="absolute -bottom-32 -left-32 w-[350px] h-[350px] rounded-full opacity-[0.04] dark:opacity-[0.07] pointer-events-none"
            style={{ background: `radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)` }}
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            <SectionHeading title={t("section.projects")} subtitle={t("section.projects.sub")} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {projects.slice(0, 3).map((p, i) => (
                <FadeIn key={p.id} delay={i * 0.1}>
                  <ProjectCard project={p} />
                </FadeIn>
              ))}
            </div>
            <FadeIn className="text-center mt-8 sm:mt-10">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.95 }} className="inline-block">
                <Button asChild variant="outline" className="rounded-full text-sm h-10 px-6 w-full sm:w-auto hover:border-accent/30 hover:shadow-[0_0_16px_-4px_hsl(var(--accent)/0.15)]">
                  <Link to="/projects">{t("btn.viewAll")} <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </motion.div>
            </FadeIn>
          </div>
        </section>

        <SectionDivider />

        {/* Skills */}
        <section className="section-padding relative overflow-hidden">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
            style={{ background: `radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)` }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
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
          <Parallax speed={0.1} className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeading title={t("section.strengths")} subtitle={t("section.strengths.sub")} />
            <StrengthCards />
          </Parallax>
        </section>

        <SectionDivider />

        <CTABanner />
      </div>
    </PageTransition>
  );
};

export default Index;
