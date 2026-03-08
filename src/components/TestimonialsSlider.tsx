import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/content";
import { FadeIn } from "./MotionWrapper";

export function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const te = testimonials[current];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
  };

  return (
    <FadeIn className="max-w-2xl mx-auto">
      <div className="relative">
        {/* Navigation — positioned at sides on desktop, bottom on mobile */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 sm:-translate-x-12 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-border/50 bg-background/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 sm:translate-x-12 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-border/50 bg-background/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Next"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        {/* Card */}
        <div className="overflow-hidden min-h-[180px] sm:min-h-[200px] flex items-center px-10 sm:px-0">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="w-full p-6 sm:p-8 rounded-2xl border border-border/50 bg-card/50 text-center"
            >
              <div className="flex justify-center gap-0.5 mb-3 sm:mb-4">
                {Array.from({ length: te.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 sm:h-5 sm:w-5 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-sm sm:text-base md:text-lg text-foreground mb-4 sm:mb-6 italic leading-relaxed">
                "{te.text}"
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-xs sm:text-sm font-bold text-primary shrink-0">
                  {te.name.charAt(0)}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-sm">{te.name}</p>
                  <p className="text-xs text-muted-foreground">{te.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4 sm:mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-primary w-5 sm:w-6" : "bg-muted-foreground/30 w-1.5 sm:w-2"
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
