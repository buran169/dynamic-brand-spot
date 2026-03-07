import { siteConfig, aboutTimeline, skillCategories } from "@/lib/content";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedProfileImage } from "@/components/AnimatedProfileImage";
import { CTABanner } from "@/components/CTABanner";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const stats = [
  { label: "Projects Delivered", value: "50+" },
  { label: "Happy Clients", value: "30+" },
  { label: "Years Experience", value: "5+" },
  { label: "Technologies", value: "20+" },
];

const reasons = [
  "Fast turnaround without compromising quality",
  "Clean, maintainable, well-documented code",
  "Transparent communication throughout",
  "Post-delivery support included",
  "Fair pricing with flexible payment",
];

const AboutPage = () => (
  <div className="min-h-screen pt-24">
    {/* Intro */}
    <section className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <FadeIn className="flex justify-center">
          <AnimatedProfileImage size="lg" />
        </FadeIn>
        <FadeIn delay={0.2}>
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
            About <span className="gradient-text">{siteConfig.name}</span>
          </h1>
          <p className="text-muted-foreground mb-4">{siteConfig.shortBio}</p>
          <p className="text-muted-foreground text-sm">
            I'm a freelance developer and designer who loves building digital products that solve real problems.
            From websites to Discord bots, SA-MP servers to brand designs — I bring ideas to life with clean code
            and sharp visuals.
          </p>
        </FadeIn>
      </div>
    </section>

    {/* Stats */}
    <section className="py-12 bg-card/30">
      <StaggerContainer className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <StaggerItem key={s.label} className="text-center p-6 rounded-2xl glass">
            <motion.p
              className="text-3xl font-display font-bold gradient-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {s.value}
            </motion.p>
            <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>

    {/* Timeline */}
    <section className="section-padding">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionHeading title="My Journey" />
        <div className="relative border-l-2 border-primary/30 pl-8 space-y-10">
          {aboutTimeline.map((t, i) => (
            <FadeIn key={t.year} delay={i * 0.1} className="relative">
              <div className="absolute -left-[2.55rem] top-0 h-5 w-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-primary" />
              </div>
              <p className="text-xs text-primary font-semibold mb-1">{t.year}</p>
              <h3 className="font-display font-semibold">{t.title}</h3>
              <p className="text-sm text-muted-foreground">{t.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Why Me */}
    <section className="section-padding bg-card/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionHeading title="Why Clients Choose Me" />
        <StaggerContainer className="space-y-3">
          {reasons.map((r) => (
            <StaggerItem key={r} className="flex items-center gap-3 p-4 rounded-xl glass">
              <CheckCircle className="h-5 w-5 text-primary shrink-0" />
              <span className="text-sm">{r}</span>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    <CTABanner />
  </div>
);

export default AboutPage;
