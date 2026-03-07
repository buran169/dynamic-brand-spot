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
        {/* Background blobs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeIn className="order-2 md:order-1 text-center md:text-left">
            <Badge variant="secondary" className="mb-4 gap-1">
              <Sparkles className="h-3 w-3" /> Available for hire
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 leading-tight">
              Hi, I'm <span className="gradient-text">{siteConfig.name}</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-2 font-medium">{siteConfig.tagline}</p>
            <p className="text-muted-foreground mb-8 max-w-lg">{siteConfig.shortBio}</p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/contact">Hire Me <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="order-1 md:order-2 flex justify-center">
            <AnimatedProfileImage />
          </FadeIn>
        </div>
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
