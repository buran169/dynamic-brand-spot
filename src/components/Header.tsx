import { Link, useLocation } from "react-router-dom";
import { siteConfig } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Magnetic } from "./Magnetic";

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
  const navRef = useRef<HTMLElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    if (!navRef.current) return;
    const activeLink = navRef.current.querySelector('[data-active="true"]') as HTMLElement;
    if (activeLink) {
      const navRect = navRef.current.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      setIndicatorStyle({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
      });
    }
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-display font-bold text-lg gradient-text tracking-tight touch-ripple rounded-lg px-2 py-1">
          {siteConfig.name}
        </Link>

        {/* Desktop nav */}
        <nav ref={navRef} className="hidden md:flex items-center gap-1 relative">
          {/* Animated active indicator */}
          <motion.div
            className="absolute bottom-0 h-[2px] rounded-full bg-gradient-to-r from-primary to-accent"
            animate={indicatorStyle}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
          {navKeys.map((l) => {
            const isActive = location.pathname === l.href;
            return (
              <Link
                key={l.href}
                to={l.href}
                data-active={isActive}
                className={cn(
                  "px-3 py-2 text-sm rounded-lg transition-colors touch-ripple relative",
                  isActive
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {t(l.key)}
              </Link>
            );
          })}
          <LanguageToggle />
          <ThemeToggle />
          <Magnetic strength={0.3}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.92 }}>
              <Button asChild size="sm" className="ml-2 rounded-full glow-sm btn-pulse">
                <Link to="/contact">{t("nav.hire")}</Link>
              </Button>
            </motion.div>
          </Magnetic>
        </nav>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-1.5">
          <LanguageToggle />
          <ThemeToggle />
          <motion.div whileTap={{ rotate: 90, scale: 0.85 }} transition={{ type: "spring", stiffness: 400 }}>
            <Button variant="ghost" size="icon" onClick={() => setOpen(!open)} aria-label="Menu" className="touch-ripple rounded-xl">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/60 backdrop-blur-sm md:hidden z-[-1]"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass-strong border-t border-border overflow-hidden"
            >
              <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-2">
                {navKeys.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, type: "spring", stiffness: 300 }}
                    whileTap={{ scale: 0.95, x: 8 }}
                  >
                    <Link
                      to={l.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block px-4 py-2.5 rounded-xl text-sm touch-ripple",
                        location.pathname === l.href
                          ? "text-primary font-medium bg-primary/10 border-l-2 border-primary"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {t(l.key)}
                    </Link>
                  </motion.div>
                ))}
                <motion.div whileTap={{ scale: 0.95 }}>
                  <Button asChild size="sm" className="rounded-full mt-2 btn-pulse">
                    <Link to="/contact" onClick={() => setOpen(false)}>{t("nav.hire")}</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
