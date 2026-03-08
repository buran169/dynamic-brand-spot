import { motion } from "framer-motion";
import { useI18n, type Lang } from "@/lib/i18n";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { lang, setLang } = useI18n();

  const toggle = () => setLang(lang === "en" ? "bn" : "en");

  return (
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-muted/50 hover:bg-muted border border-border/50 transition-colors"
      aria-label="Toggle language"
    >
      <Globe className="h-3.5 w-3.5 text-primary" />
      <motion.span
        key={lang}
        initial={{ y: -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 8, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="font-display"
      >
        {lang === "en" ? "বাংলা" : "EN"}
      </motion.span>
    </motion.button>
  );
}
