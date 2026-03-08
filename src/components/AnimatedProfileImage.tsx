import { siteConfig } from "@/lib/content";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import { useState } from "react";

export function AnimatedProfileImage({ size = "lg" }: { size?: "sm" | "lg" }) {
  const [error, setError] = useState(false);
  const dims = size === "lg" ? "w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72" : "w-28 h-28 sm:w-32 sm:h-32";

  return (
    <div className="relative flex items-center justify-center">
      {/* Radial glow pulse */}
      <motion.div
        className="absolute w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full"
        style={{
          background: `radial-gradient(circle, hsl(var(--primary) / 0.12) 0%, transparent 70%)`,
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Rotating ring 1 — dashed */}
      <motion.div
        className="absolute w-[200px] h-[200px] sm:w-[270px] sm:h-[270px] md:w-[340px] md:h-[340px] rounded-full border border-dashed border-primary/15"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Rotating ring 2 — opposite direction with dots */}
      <motion.div
        className="absolute w-[230px] h-[230px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] rounded-full border-[1.5px] border-primary/25"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary/40" />
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent/40" />
        <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary/30" />
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rounded-full bg-accent/30" />
      </motion.div>

      {/* Corner floating particles — all 4 sides */}
      {[
        { x: -90, y: -70, delay: 0 },
        { x: 90, y: -60, delay: 0.8 },
        { x: -80, y: 70, delay: 1.6 },
        { x: 85, y: 65, delay: 2.4 },
        { x: 0, y: -100, delay: 0.4 },
        { x: 0, y: 100, delay: 1.2 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary/30"
          style={{ left: `calc(50% + ${p.x}px)`, top: `calc(50% + ${p.y}px)` }}
          animate={{
            y: [0, -12, 0, 12, 0],
            x: [0, 8, 0, -8, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [0.8, 1.3, 0.8],
          }}
          transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
        />
      ))}

      {/* Main floating image */}
      <motion.div
        className="relative z-10"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className={`relative ${dims} rounded-full p-[2px] cursor-pointer`}
          style={{
            background: `linear-gradient(135deg, hsl(var(--primary) / 0.5), hsl(var(--accent) / 0.3), hsl(var(--primary) / 0.2))`,
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Animated gradient border rotation */}
          <motion.div
            className="absolute inset-0 rounded-full opacity-50"
            style={{
              background: `conic-gradient(from 0deg, hsl(var(--primary) / 0.4), transparent, hsl(var(--accent) / 0.3), transparent, hsl(var(--primary) / 0.4))`,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          <div className={`${dims} rounded-full bg-background relative z-10`}>
            <div className="w-full h-full rounded-full overflow-hidden">
              {siteConfig.showProfileImage && !error ? (
                <img
                  src={siteConfig.profileImage}
                  alt={siteConfig.profileImageAlt}
                  className="w-full h-full object-cover"
                  onError={() => setError(true)}
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <User className="w-1/3 h-1/3 text-muted-foreground" />
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Online indicator */}
        <motion.div
          className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 md:bottom-4 md:right-4 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-[2px] border-background z-20"
          style={{ background: `hsl(142 71% 45%)` }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
}
