import { FadeIn } from "./MotionWrapper";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  gradient?: boolean;
}

export function SectionHeading({ title, subtitle, gradient = true }: SectionHeadingProps) {
  return (
    <FadeIn className="text-center mb-10 sm:mb-14 md:mb-20">
      {subtitle && (
        <p className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-3 sm:mb-4">
          {subtitle}
        </p>
      )}
      <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tightest leading-[1.1] ${gradient ? "gradient-text" : ""}`}>
        {title}
      </h2>
    </FadeIn>
  );
}
