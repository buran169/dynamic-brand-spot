import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Star, CheckCircle2 } from "lucide-react";
import { siteConfig, projects, skillCategories, testimonials } from "@/lib/content";
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
import { Magnetic } from "@/components/Magnetic";
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
          {/* Animated mesh background with floating blobs */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-[-10%] -left-[15%] w-[500px] h-[500px] rounded-full blur-[120px]"
              style={{ background: `radial-gradient(circle, hsl(var(--primary) / 0.15), transparent 70%)` }}
              animate={{ x: [0, 80, 0], y: [0, 60, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-[-5%] -right-[10%] w-[600px] h-[600px] rounded-full blur-[140px]"
              style={{ background: `radial-gradient(circle, hsl(var(--accent) / 0.12), transparent 70%)` }}
              animate={{ x: [0, -70, 0], y: [0, -80, 0], scale: [1, 1.15, 1] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-[40%] left-[30%] w-[350px] h-[350px] rounded-full blur-[100px]"
              style={{ background: `radial-gradient(circle, hsl(var(--primary) / 0.08), transparent 70%)` }}
              animate={{ scale: [1, 1.4, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Animated grid */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
              }}
            />
            {/* Animated radial glow behind hero */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
              style={{ background: `radial-gradient(circle, hsl(var(--primary) / 0.04) 0%, transparent 60%)` }}
              animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
            <FadeIn className="order-2 lg:order-1 text-center lg:text-left">
              {/* Availability badge */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <Badge variant="secondary" className="mb-6 gap-1.5 px-4 py-1.5 text-xs font-medium rounded-full border-primary/20 bg-primary/5 glass">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-primary/80 relative"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="absolute inset-0 rounded-full bg-primary/60 animate-ping opacity-40" />
                  </motion.div>
                  <motion.span animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}>
                    <Sparkles className="h-3.5 w-3.5 text-primary" />
                  </motion.span>
                  {t("hero.badge")}
                </Badge>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-4 leading-[1.1] tracking-tight"
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}
              >
                {t("hero.greeting")}{" "}
                <span className="relative">
                  <span className="gradient-text">{siteConfig.name}</span>
                  <motion.span
                    className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-primary to-accent rounded-full"
                    initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                  />
                </span>
              </motion.h1>

              {/* Typing effect for roles */}
              <motion.div className="text-lg sm:text-xl text-primary/80 font-medium mb-2 h-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <TypeWriter words={roles} className="font-display" />
              </motion.div>

              <motion.p className="text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                {t("hero.bio")}
              </motion.p>

              <motion.div className="flex flex-wrap gap-3 justify-center lg:justify-start" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
                <Magnetic strength={0.25}>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
                    <Button asChild size="lg" className="rounded-full px-8 glow">
                      <Link to="/contact">
                        {t("nav.hire")}
                        <motion.span className="ml-1 inline-block" animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                          <ArrowRight className="h-4 w-4" />
                        </motion.span>
                      </Link>
                    </Button>
                  </motion.div>
                </Magnetic>
                <Magnetic strength={0.25}>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
                    <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-primary/20 hover:border-primary/40">
                      <Link to="/services">{t("hero.services")}</Link>
                    </Button>
                  </motion.div>
                </Magnetic>
                <Magnetic strength={0.25}>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
                    <Button asChild variant="ghost" size="lg" className="rounded-full px-8">
                      <Link to="/projects">{t("hero.work")}</Link>
                    </Button>
                  </motion.div>
                </Magnetic>
              </motion.div>

              {/* Quick stats */}
              <motion.div
                className="grid grid-cols-4 gap-4 mt-10 pt-8 border-t border-border/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
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
            </FadeIn>

            <FadeIn delay={0.4} className="order-1 lg:order-2 flex justify-center">
              <AnimatedProfileImage />
            </FadeIn>
          </div>

          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
            animate={{ y: [0, 8, 0], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">{t("hero.scroll")}</span>
            <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5">
              <motion.div className="w-1 h-1.5 rounded-full bg-primary" animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
            </div>
          </motion.div>
        </section>

        <SectionDivider />

        {/* Trust Badges */}
        <section className="section-padding border-y border-border bg-card/30">
          <StaggerContainer className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustKeys.map((b) => {
              const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[b.icon] || LucideIcons.Box;
              return (
                <StaggerItem key={b.titleKey}>
                  <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.97 }} className="text-center p-6 rounded-2xl glass gradient-border-card cursor-default group">
                    <motion.div whileHover={{ rotate: 10, scale: 1.1 }} className="h-10 w-10 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-5 w-5 text-primary" />
                    </motion.div>
                    <h3 className="font-display font-semibold text-sm mb-1">{t(b.titleKey)}</h3>
                    <p className="text-xs text-muted-foreground">{t(b.descKey)}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </section>

        <SectionDivider />

        {/* Services Preview */}
        <section className="section-padding">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeading title={t("section.services")} subtitle={t("section.services.sub")} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.slice(0, 6).map((s, i) => (
                <FadeIn key={s.id} delay={i * 0.1}>
                  <ServiceCard service={s} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Featured Projects */}
        <section className="section-padding bg-card/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeading title={t("section.projects")} subtitle={t("section.projects.sub")} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.slice(0, 3).map((p, i) => (
                <FadeIn key={p.id} delay={i * 0.1}>
                  <ProjectCard project={p} />
                </FadeIn>
              ))}
            </div>
            <FadeIn className="text-center mt-8">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }} className="inline-block">
                <Button asChild variant="outline" className="rounded-full magnetic-btn">
                  <Link to="/projects">{t("btn.viewAll")} <ArrowRight className="ml-1 h-4 w-4" /></Link>
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
        <section className="section-padding bg-card/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeading title={t("section.testimonials")} subtitle={t("section.testimonials.sub")} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((te, i) => (
                <FadeIn key={te.name} delay={i * 0.1}>
                  <motion.div whileHover={{ y: -6 }} whileTap={{ scale: 0.98 }} className="p-6 rounded-2xl glass gradient-border-card cursor-default">
                    <div className="flex gap-0.5 mb-3">
                      {Array.from({ length: te.rating }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 text-primary fill-primary" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 italic">"{te.text}"</p>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-xs font-bold text-primary">
                        {te.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-display font-semibold text-sm">{te.name}</p>
                        <p className="text-xs text-muted-foreground">{te.role}</p>
                      </div>
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        <CTABanner />
      </div>
    </PageTransition>
  );
};

export default Index;
