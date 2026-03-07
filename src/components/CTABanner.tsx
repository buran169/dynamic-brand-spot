import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FadeIn } from "./MotionWrapper";
import { ArrowRight } from "lucide-react";

export function CTABanner({ title = "Ready to start your project?", subtitle = "Let's build something amazing together." }) {
  return (
    <section className="section-padding">
      <FadeIn className="max-w-4xl mx-auto text-center p-10 md:p-16 rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-3 gradient-text">{title}</h2>
        <p className="text-muted-foreground mb-6">{subtitle}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="rounded-full">
            <Link to="/contact">
              Request Quote <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link to="/services">View Services</Link>
          </Button>
        </div>
      </FadeIn>
    </section>
  );
}
