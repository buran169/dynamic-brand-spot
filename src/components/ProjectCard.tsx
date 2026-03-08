import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useI18n } from "@/lib/i18n";
import type { projects } from "@/lib/content";
import { Tilt3DCard } from "@/components/Tilt3DCard";

type Project = (typeof projects)[number];

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useI18n();

  return (
    <Tilt3DCard className="h-full group" intensity={10}>
      <Card className="h-full glass gradient-border-card hover:glow transition-all duration-300 rounded-2xl overflow-hidden card-interactive touch-ripple">
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
          <Dialog>
            <DialogTrigger asChild>
              <motion.div whileTap={{ scale: 0.92 }} whileHover={{ scale: 1.03 }}>
                <Button variant="outline" size="sm" className="w-full rounded-full hover:bg-primary/5 btn-pulse touch-glow">
                  {t("btn.viewDetails")}
                </Button>
              </motion.div>
            </DialogTrigger>
            <DialogContent className="glass-strong rounded-2xl max-w-lg">
              <DialogHeader>
                <DialogTitle className="font-display">{project.title}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold text-primary mb-1">{t("project.problem")}</h4>
                  <p className="text-muted-foreground">{project.problem}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">{t("project.solution")}</h4>
                  <p className="text-muted-foreground">{project.solution}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">{t("project.stack")}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((s) => <Badge key={s} variant="secondary" className="badge-interactive">{s}</Badge>)}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">{t("project.outcome")}</h4>
                  <p className="text-muted-foreground">{project.outcome}</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </Tilt3DCard>
  );
}
