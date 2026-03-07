import { skillCategories } from "@/lib/content";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillBar } from "@/components/SkillBadge";
import { FadeIn } from "@/components/MotionWrapper";
import { CTABanner } from "@/components/CTABanner";

const SkillsPage = () => (
  <div className="min-h-screen pt-24">
    <section className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading title="Skills & Tools" subtitle="Technologies and tools I use daily" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, i) => (
            <FadeIn key={cat.title} delay={i * 0.1} className="p-6 rounded-2xl glass">
              <h3 className="font-display font-semibold text-lg mb-5 gradient-text">{cat.title}</h3>
              <div className="space-y-4">
                {cat.skills.map((s) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} />
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
    <CTABanner />
  </div>
);

export default SkillsPage;
