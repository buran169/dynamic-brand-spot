import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import type { projects } from "@/lib/content";
import { ProjectPreviewModal } from "@/components/ProjectPreviewModal";

type Project = (typeof projects)[number];

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useI18n();
  const [preview, setPreview] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        whileTap={{ scale: 0.96, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Card
          className="h-full bg-card/50 border-border/50 hover:border-accent/30 transition-all duration-500 rounded-2xl overflow-hidden cursor-pointer group spotlight-card hover:shadow-[0_20px_50px_-12px_hsl(var(--accent)/0.15)]"
          onClick={() => setPreview(true)}
        >
          {/* Gradient thumbnail */}
          <div className={`h-40 bg-gradient-to-br ${project.gradient} opacity-70 group-hover:opacity-100 transition-opacity duration-500 relative overflow-hidden`}>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: "linear" }}
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-500 flex items-center justify-center">
              <motion.span
                className="text-white/0 group-hover:text-white/80 text-sm font-medium transition-all duration-300"
                initial={false}
              >
                Click to preview →
              </motion.span>
            </div>
          </div>
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold group-hover:text-accent transition-colors duration-300">{project.title}</CardTitle>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <motion.div key={tag} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.9 }}>
                  <Badge variant="secondary" className="text-[11px] font-normal">{tag}</Badge>
                </motion.div>
              ))}
            </div>
          </CardHeader>
          <CardContent>
            <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
              <Button
                variant="outline"
                size="sm"
                className="w-full rounded-full text-xs h-9 hover:bg-accent/5 hover:border-accent/25 hover:text-accent transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  setPreview(true);
                }}
              >
                {t("btn.viewDetails")}
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>

      {preview && (
        <ProjectPreviewModal project={project} onClose={() => setPreview(false)} />
      )}
    </>
  );
}
