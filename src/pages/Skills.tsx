import { skillCategories } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillBar } from "@/components/SkillBadge";
import { FadeIn } from "@/components/MotionWrapper";
import { CTABanner } from "@/components/CTABanner";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";

const SkillsPage = () => {
  const { t } = useI18n();

  return (
    <PageTransition variant="scaleUp">
      <div className="min-h-screen pt-24">
        <section className="section-padding">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeading title={t("section.skills")} subtitle={t("section.skills.sub2")} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillCategories.map((cat, i) => (
                <FadeIn key={cat.title} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="p-6 rounded-2xl glass"
                  >
                    <h3 className="font-display font-semibold text-lg mb-5 gradient-text">{cat.title}</h3>
                    <div className="space-y-4">
                      {cat.skills.map((s) => (
                        <SkillBar key={s.name} name={s.name} level={s.level} />
                      ))}
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
        <CTABanner />
      </div>
    </PageTransition>
  );
};

export default SkillsPage;
