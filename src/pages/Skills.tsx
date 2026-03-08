import { motion } from "framer-motion";
import { skillCategories } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillBar } from "@/components/SkillBadge";
import { FadeIn } from "@/components/MotionWrapper";
import { CTABanner } from "@/components/CTABanner";
import { PageTransition } from "@/components/PageTransition";

const SkillsPage = () => {
  const { t } = useI18n();

  return (
    <PageTransition variant="scaleUp">
      <div className="min-h-screen pt-16 sm:pt-20 relative overflow-hidden">
        {/* Background blob */}
        <motion.div
          className="absolute top-1/3 -right-40 w-[400px] h-[400px] rounded-full opacity-[0.04] dark:opacity-[0.07] pointer-events-none"
          style={{ background: `radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)` }}
          animate={{ scale: [1, 1.1, 1], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <section className="section-padding">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeading title={t("section.skills")} subtitle={t("section.skills.sub2")} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {skillCategories.map((cat, i) => (
                <FadeIn key={cat.title} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-border/50 bg-card/50 hover:border-accent/20 hover:shadow-[0_16px_40px_-10px_hsl(var(--accent)/0.1)] transition-all"
                  >
                    <h3 className="font-semibold text-base sm:text-lg mb-4 sm:mb-5 gradient-text">{cat.title}</h3>
                    <div className="space-y-3 sm:space-y-4">
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
