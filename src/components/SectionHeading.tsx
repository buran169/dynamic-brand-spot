import { FadeIn } from "./MotionWrapper";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  gradient?: boolean;
}

export function SectionHeading({ title, subtitle, gradient = true }: SectionHeadingProps) {
  return (
    <FadeIn className="text-center mb-12 md:mb-16">
      <h2 className={`text-3xl md:text-4xl font-display font-bold mb-4 ${gradient ? "gradient-text" : ""}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
      )}
    </FadeIn>
  );
}
