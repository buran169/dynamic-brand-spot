import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, MessageSquare } from "lucide-react";
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
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[640px] md:max-h-[85vh] z-50 rounded-2xl overflow-hidden glass-strong shadow-2xl flex flex-col"
          >
            {/* Browser chrome */}
            <div className="flex items-center justify-between px-4 py-3 bg-muted/30 border-b border-border/30">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="hidden sm:flex items-center gap-2 bg-muted/50 rounded-lg px-3 py-1 text-[11px] text-muted-foreground font-mono min-w-[200px]">
                  <span className="opacity-50">🔒</span>
                  shahriar.dev/projects/{project.id}
                </div>
              </div>
              <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full" onClick={onClose}>
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              {/* Preview area */}
              <div className={`h-48 md:h-56 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl md:text-3xl font-display font-bold text-primary-foreground drop-shadow-lg text-center px-4"
                  >
                    {project.title}
                  </motion.h2>
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                />
              </div>

              {/* Info sections */}
              <div className="p-6 space-y-5">
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">{t("project.problem")}</h4>
                  <p className="text-sm text-muted-foreground">{project.problem}</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">{t("project.solution")}</h4>
                  <p className="text-sm text-muted-foreground">{project.solution}</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">{t("project.stack")}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((s) => (
                      <Badge key={s} variant="secondary" className="text-xs">{s}</Badge>
                    ))}
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">{t("project.outcome")}</h4>
                  <p className="text-sm text-muted-foreground">{project.outcome}</p>
                </motion.div>

                {/* Action buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 }}
                  className="flex flex-col sm:flex-row gap-3 pt-2"
                >
                  <Button asChild className="rounded-full flex-1 gap-2">
                    <Link to="/contact">
                      <MessageSquare className="w-4 h-4" />
                      Contact for Similar Project
                    </Link>
                  </Button>
                  <Button variant="outline" className="rounded-full flex-1 gap-2" onClick={onClose}>
                    <ExternalLink className="w-4 h-4" />
                    View Details
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
