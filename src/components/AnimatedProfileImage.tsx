import { siteConfig } from "@/lib/content";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import { useState } from "react";

export function AnimatedProfileImage({ size = "lg" }: { size?: "sm" | "lg" }) {
  const [error, setError] = useState(false);
  const dims = size === "lg" ? "w-56 h-56 md:w-72 md:h-72" : "w-32 h-32";

  return (
    <div className="relative flex items-center justify-center">
      {/* Subtle glow backdrop */}
      <motion.div
        className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full opacity-40"
        style={{
          background: `radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)`,
        }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Orbit ring */}
      <motion.div
        className="absolute w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full border border-border/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary/50" />
      </motion.div>

      {/* Main container */}
      <motion.div
        className="relative z-10"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Gradient border */}
        <div
          className={`relative ${dims} rounded-full p-[2px]`}
          style={{
            background: `linear-gradient(135deg, hsl(var(--primary) / 0.4), hsl(var(--accent) / 0.2), hsl(var(--primary) / 0.1))`,
          }}
        >
          <div className={`${dims} rounded-full bg-background`}>
            <div className="w-full h-full rounded-full overflow-hidden">
              {siteConfig.showProfileImage && !error ? (
                <motion.img
                  src={siteConfig.profileImage}
                  alt={siteConfig.profileImageAlt}
                  className="w-full h-full object-cover"
                  onError={() => setError(true)}
                  loading="lazy"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <User className="w-1/3 h-1/3 text-muted-foreground" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Status dot */}
        <motion.div
          className="absolute bottom-3 right-3 md:bottom-4 md:right-4 w-4 h-4 rounded-full border-[2px] border-background z-20"
          style={{ background: `hsl(142 71% 45%)` }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
}
