import { Link, useLocation } from "react-router-dom";
import { siteConfig } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navKeys = [
  { href: "/", key: "nav.home" },
  { href: "/services", key: "nav.services" },
  { href: "/projects", key: "nav.projects" },
  { href: "/skills", key: "nav.skills" },
  { href: "/about", key: "nav.about" },
  { href: "/contact", key: "nav.contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { t } = useI18n();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-display font-bold text-lg gradient-text tracking-tight">
          {siteConfig.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navKeys.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={cn(
                "px-3 py-2 text-sm rounded-lg transition-all duration-200",
                location.pathname === l.href
                  ? "text-primary font-medium bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {t(l.key)}
            </Link>
          ))}
          <LanguageToggle />
          <ThemeToggle />
          <Button asChild size="sm" className="ml-2 rounded-full glow-sm">
            <Link to="/contact">{t("nav.hire")}</Link>
          </Button>
        </nav>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-1.5">
          <LanguageToggle />
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-t border-border overflow-hidden"
          >
            <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-2">
              {navKeys.map((l) => (
                <motion.div key={l.href} whileTap={{ scale: 0.97 }}>
                  <Link
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block px-4 py-2.5 rounded-xl text-sm transition-all",
                      location.pathname === l.href
                        ? "text-primary font-medium bg-primary/10"
                        : "text-muted-foreground hover:text-foreground active:bg-muted"
                    )}
                  >
                    {t(l.key)}
                  </Link>
                </motion.div>
              ))}
              <Button asChild size="sm" className="rounded-full mt-2">
                <Link to="/contact" onClick={() => setOpen(false)}>{t("nav.hire")}</Link>
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
