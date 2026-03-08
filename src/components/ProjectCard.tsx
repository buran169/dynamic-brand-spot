import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import type { projects } from "@/lib/content";
import { Tilt3DCard } from "@/components/Tilt3DCard";
import { ProjectPreviewModal } from "@/components/ProjectPreviewModal";

type Project = (typeof projects)[number];

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useI18n();
  const [preview, setPreview] = useState(false);

  return (
    <>
      <Tilt3DCard className="h-full group" intensity={10}>
        <Card
          className="h-full glass gradient-border-card hover:glow transition-all duration-300 rounded-2xl overflow-hidden card-interactive touch-ripple cursor-pointer"
          onClick={() => setPreview(true)}
        >
          {/* Gradient thumbnail */}
          <div className={`h-40 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-300 relative overflow-hidden`}>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/5 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            />
          </div>
          <CardHeader className="pb-3">
            <CardTitle className="font-display text-lg">{project.title}</CardTitle>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs font-normal badge-interactive cursor-default">{tag}</Badge>
              ))}
            </div>
          </CardHeader>
          <CardContent>
            <motion.div whileTap={{ scale: 0.92 }} whileHover={{ scale: 1.03 }}>
              <Button
                variant="outline"
                size="sm"
                className="w-full rounded-full hover:bg-primary/5 btn-pulse touch-glow"
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
      </Tilt3DCard>

      {preview && (
        <ProjectPreviewModal project={project} onClose={() => setPreview(false)} />
      )}
    </>
  );
}
