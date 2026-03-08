import { projects } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";
import { FadeIn } from "@/components/MotionWrapper";

const ProjectsPage = () => {
  const { t } = useI18n();

  return (
    <div className="min-h-screen pt-24">
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading title={t("nav.projects")} subtitle={t("section.projects.sub2")} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
  );
};

export default ProjectsPage;
