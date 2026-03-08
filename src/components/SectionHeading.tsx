import { FadeIn } from "./MotionWrapper";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  gradient?: boolean;
}

export function SectionHeading({ title, subtitle, gradient = true }: SectionHeadingProps) {
  return (
    <FadeIn className="text-center mb-16 md:mb-20">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">
        {subtitle}
      </p>
      <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tightest leading-[1.1] ${gradient ? "gradient-text" : ""}`}>
        {title}
      </h2>
    </FadeIn>
  );
}
