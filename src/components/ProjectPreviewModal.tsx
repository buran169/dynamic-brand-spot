import { motion, AnimatePresence } from "framer-motion";
import { X, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n";
import { Link } from "react-router-dom";
import type { projects } from "@/lib/content";

type Project = (typeof projects)[number];

interface Props {
  project: Project | null;
  onClose: () => void;
}

export function ProjectPreviewModal({ project, onClose }: Props) {
  const { t } = useI18n();
  if (!project) return null;

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-3 sm:inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[580px] md:max-h-[85vh] z-50 rounded-xl sm:rounded-2xl overflow-hidden bg-background border border-border/50 shadow-2xl flex flex-col"
          >
            {/* Browser chrome */}
            <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 border-b border-border/30 bg-muted/20">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex gap-1.5">
                  <button onClick={onClose} className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full" style={{ background: "hsl(0 84% 60%)" }} />
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full" style={{ background: "hsl(45 93% 47%)" }} />
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full" style={{ background: "hsl(142 71% 45%)" }} />
                </div>
                <div className="hidden sm:block text-[10px] text-muted-foreground font-mono bg-muted/30 rounded px-2 py-0.5">
                  shahriar.dev/projects/{project.id}
                </div>
              </div>
              <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full" onClick={onClose}>
                <X className="w-3.5 h-3.5" />
              </Button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              <div className={`h-36 sm:h-48 md:h-56 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center`}>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-foreground drop-shadow-lg text-center px-4">
                  {project.title}
                </h2>
              </div>

              <div className="p-4 sm:p-6 space-y-4 sm:space-y-5">
                {[
                  { label: t("project.problem"), content: project.problem },
                  { label: t("project.solution"), content: project.solution },
                ].map((item) => (
                  <div key={item.label}>
                    <h4 className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-primary mb-1 sm:mb-2">{item.label}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">{item.content}</p>
                  </div>
                ))}

                <div>
                  <h4 className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-primary mb-1 sm:mb-2">{t("project.stack")}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((s) => (
                      <Badge key={s} variant="secondary" className="text-[10px] sm:text-xs">{s}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-primary mb-1 sm:mb-2">{t("project.outcome")}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">{project.outcome}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
                  <Button asChild className="rounded-full flex-1 h-10 text-xs sm:text-sm gap-2">
                    <Link to="/contact" onClick={onClose}>
                      <MessageSquare className="w-4 h-4" />
                      Contact for Similar
                    </Link>
                  </Button>
                  <Button variant="outline" className="rounded-full flex-1 h-10 text-xs sm:text-sm" onClick={onClose}>
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
