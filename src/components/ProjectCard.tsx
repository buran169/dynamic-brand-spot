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
      <Card
        className="h-full bg-card/50 border-border/50 hover:border-primary/20 transition-all duration-500 rounded-2xl overflow-hidden cursor-pointer group spotlight-card"
        onClick={() => setPreview(true)}
      >
        {/* Gradient thumbnail */}
        <div className={`h-40 bg-gradient-to-br ${project.gradient} opacity-70 group-hover:opacity-90 transition-opacity duration-500 relative overflow-hidden`}>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/3 to-transparent"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
          />
        </div>
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-semibold">{project.title}</CardTitle>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-[11px] font-normal">{tag}</Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <motion.div whileTap={{ scale: 0.97 }}>
            <Button
              variant="outline"
              size="sm"
              className="w-full rounded-full text-xs h-9 hover:bg-primary/5 hover:border-primary/20"
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

      {preview && (
        <ProjectPreviewModal project={project} onClose={() => setPreview(false)} />
      )}
    </>
  );
}
