import { motion } from "framer-motion";
import { projects } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";
import { FadeIn } from "@/components/MotionWrapper";
import { PageTransition } from "@/components/PageTransition";

const ProjectsPage = () => {
  const { t } = useI18n();

  return (
    <PageTransition variant="slideLeft">
      <div className="min-h-screen pt-16 sm:pt-20 relative overflow-hidden">
        {/* Background blob */}
        <motion.div
          className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full opacity-[0.04] dark:opacity-[0.07] pointer-events-none"
          style={{ background: `radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)` }}
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        <section className="section-padding">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeading title={t("nav.projects")} subtitle={t("section.projects.sub2")} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((p, i) => (
                <FadeIn key={p.id} delay={i * 0.08}>
                  <ProjectCard project={p} />
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

export default ProjectsPage;
