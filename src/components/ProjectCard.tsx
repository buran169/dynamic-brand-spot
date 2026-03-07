import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import type { projects } from "@/lib/content";

type Project = (typeof projects)[number];

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="h-full glass hover:glow transition-shadow duration-300 rounded-2xl overflow-hidden">
        {/* Gradient thumbnail */}
        <div className={`h-40 bg-gradient-to-br ${project.gradient} opacity-80`} />
        <CardHeader className="pb-3">
          <CardTitle className="font-display text-lg">{project.title}</CardTitle>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <Badge key={t} variant="secondary" className="text-xs font-normal">{t}</Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="w-full rounded-full">View Details</Button>
            </DialogTrigger>
            <DialogContent className="glass-strong rounded-2xl max-w-lg">
              <DialogHeader>
                <DialogTitle className="font-display">{project.title}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold text-primary mb-1">Problem</h4>
                  <p className="text-muted-foreground">{project.problem}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Solution</h4>
                  <p className="text-muted-foreground">{project.solution}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Stack</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((s) => <Badge key={s} variant="secondary">{s}</Badge>)}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Outcome</h4>
                  <p className="text-muted-foreground">{project.outcome}</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </motion.div>
  );
}
