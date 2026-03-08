import { siteConfig } from "@/lib/content";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import { useState } from "react";

export function AnimatedProfileImage({ size = "lg" }: { size?: "sm" | "lg" }) {
  const [error, setError] = useState(false);
  const dims = size === "lg" ? "w-64 h-64 md:w-80 md:h-80" : "w-32 h-32";
  const innerDims = size === "lg" ? "w-60 h-60 md:w-76 md:h-76" : "w-28 h-28";

  return (
    <div className="relative flex items-center justify-center">
      {/* Outer animated orbit rings */}
      <motion.div
        className="absolute w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full border border-primary/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_hsl(var(--accent))]" />
      </motion.div>

      <motion.div
        className="absolute w-[370px] h-[370px] md:w-[460px] md:h-[460px] rounded-full border border-accent/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/60 shadow-[0_0_8px_hsl(var(--primary)/0.5)]" />
      </motion.div>

      {/* Pulsing glow backdrop */}
      <motion.div
        className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full"
        style={{
          background: `radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, hsl(var(--accent) / 0.08) 50%, transparent 70%)`,
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Secondary glow */}
      <motion.div
        className="absolute w-60 h-60 md:w-80 md:h-80 rounded-full blur-2xl"
        style={{
          background: `conic-gradient(from 0deg, hsl(var(--primary) / 0.2), hsl(var(--accent) / 0.15), hsl(var(--primary) / 0.1), hsl(var(--accent) / 0.2))`,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Main floating container */}
      <motion.div
        className="relative z-10"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Gradient border ring */}
        <motion.div
          className={`relative ${dims} rounded-full p-[3px]`}
          style={{
            background: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))`,
            backgroundSize: "200% 200%",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.05 }}
        >
          {/* Inner shadow ring */}
          <div className={`${dims} rounded-full p-[3px] bg-background`}>
            <div className={`w-full h-full rounded-full overflow-hidden relative`}>
              {siteConfig.showProfileImage && !error ? (
                <motion.img
                  src={siteConfig.profileImage}
                  alt={siteConfig.profileImageAlt}
                  className="w-full h-full object-cover"
                  onError={() => setError(true)}
                  loading="lazy"
                  initial={{ scale: 1.1 }}
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 flex items-center justify-center">
                  <User className="w-1/3 h-1/3 text-muted-foreground" />
                </div>
              )}

              {/* Shine overlay */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `linear-gradient(135deg, transparent 40%, hsl(var(--primary) / 0.1) 50%, transparent 60%)`,
                }}
                animate={{
                  backgroundPosition: ["-200% -200%", "200% 200%"],
                }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>

        {/* Status indicator dot */}
        <motion.div
          className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-5 h-5 md:w-6 md:h-6 rounded-full bg-emerald-500 border-[3px] border-background z-20"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-40" />
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-primary/40"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, (i % 2 === 0 ? 10 : -10), 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.7,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
