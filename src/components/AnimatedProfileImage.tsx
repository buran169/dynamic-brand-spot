import { siteConfig } from "@/lib/content";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import { useState } from "react";

export function AnimatedProfileImage({ size = "lg" }: { size?: "sm" | "lg" }) {
  const [error, setError] = useState(false);
  const dims = size === "lg" ? "w-56 h-56 md:w-72 md:h-72" : "w-32 h-32";

  return (
    <motion.div
      className="relative"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Glow ring */}
      <div className={`absolute inset-0 ${dims} rounded-full bg-gradient-to-r from-primary to-accent blur-2xl opacity-30 animate-glow-pulse`} />

      {/* Outer ring */}
      <motion.div
        className={`relative ${dims} rounded-full p-1 bg-gradient-to-r from-primary to-accent`}
        whileHover={{ scale: 1.05, rotate: 3 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className={`${dims} rounded-full overflow-hidden bg-card flex items-center justify-center`}>
          {siteConfig.showProfileImage && !error ? (
            <img
              src={siteConfig.profileImage}
              alt={siteConfig.profileImageAlt}
              className="w-full h-full object-cover"
              onError={() => setError(true)}
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <User className="w-1/3 h-1/3 text-muted-foreground" />
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
