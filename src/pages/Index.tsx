import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";
import { siteConfig, trustBadges, services, projects, skillCategories, testimonials } from "@/lib/content";
import { AnimatedProfileImage } from "@/components/AnimatedProfileImage";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillChip } from "@/components/SkillBadge";
import { CTABanner } from "@/components/CTABanner";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";
import * as LucideIcons from "lucide-react";
import { Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated mesh background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 -left-40 w-[500px] h-[500px] rounded-full blur-[100px]"
            style={{ background: `radial-gradient(circle, hsl(var(--primary) / 0.12), transparent 70%)` }}
            animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 -right-40 w-[600px] h-[600px] rounded-full blur-[120px]"
            style={{ background: `radial-gradient(circle, hsl(var(--accent) / 0.1), transparent 70%)` }}
            animate={{ x: [0, -50, 0], y: [0, -60, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[80px]"
            style={{ background: `radial-gradient(circle, hsl(var(--primary) / 0.06), transparent 70%)` }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
          {/* Text Content */}
          <FadeIn className="order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge variant="secondary" className="mb-6 gap-1.5 px-4 py-1.5 text-xs font-medium rounded-full border-primary/20 bg-primary/5">
                <motion.span
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                </motion.span>
                Available for hire
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-6 leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Hi, I'm{" "}
              <span className="relative">
                <span className="gradient-text">{siteConfig.name}</span>
                <motion.span
                  className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-primary to-accent rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                />
              </span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg text-muted-foreground mb-2 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {siteConfig.tagline}
            </motion.p>

            <motion.p
              className="text-muted-foreground mb-10 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {siteConfig.shortBio}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Button asChild size="lg" className="rounded-full px-8 glow group">
                <Link to="/contact">
                  Hire Me
                  <motion.span
                    className="ml-1 inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-primary/20 hover:border-primary/40 transition-colors">
                <Link to="/services">View Services</Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="rounded-full px-8">
                <Link to="/projects">My Work</Link>
              </Button>
            </motion.div>
          </FadeIn>

          {/* Profile Image */}
          <FadeIn delay={0.4} className="order-1 lg:order-2 flex justify-center">
            <AnimatedProfileImage />
          </FadeIn>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
          animate={{ y: [0, 8, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">Scroll</span>
          <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5">
            <motion.div
              className="w-1 h-1.5 rounded-full bg-primary"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Trust Badges */}
      <section className="section-padding border-y border-border bg-card/30">
        <StaggerContainer className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustBadges.map((b) => {
            const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[b.icon] || LucideIcons.Box;
            return (
              <StaggerItem key={b.title} className="text-center p-6 rounded-2xl glass">
                <div className="h-10 w-10 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-sm mb-1">{b.title}</h3>
                <p className="text-xs text-muted-foreground">{b.desc}</p>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Services" subtitle="What I can build for you" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((s, i) => (
              <FadeIn key={s.id} delay={i * 0.1}>
                <ServiceCard service={s} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Featured Projects" subtitle="Some of my recent work" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((p, i) => (
              <FadeIn key={p.id} delay={i * 0.1}>
                <ProjectCard project={p} />
              </FadeIn>
            ))}
          </div>
          <FadeIn className="text-center mt-8">
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/projects">View All Projects <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Skills Highlights */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Skills & Tools" subtitle="Technologies I work with" />
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

      {/* Testimonials */}
      <section className="section-padding bg-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading title="What Clients Say" subtitle="Trusted by clients worldwide" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <motion.div whileHover={{ y: -4 }} className="p-6 rounded-2xl glass">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 italic">"{t.text}"</p>
                  <div>
                    <p className="font-display font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </div>
  );
};

export default Index;
