import { Link, useLocation } from "react-router-dom";
import { siteConfig } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { CommandMenu } from "./CommandMenu";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
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
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useI18n();
  const navRef = useRef<HTMLElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

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
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-2xl border-b border-border/50 shadow-[0_1px_0_0_hsl(var(--border)/0.5)]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link to="/" className="font-bold text-base tracking-tight hover:opacity-70 transition-opacity">
          {siteConfig.name}
        </Link>

        {/* Desktop nav */}
        <nav ref={navRef} className="hidden md:flex items-center gap-0.5 relative">
          <motion.div
            className="absolute bottom-0 h-[1.5px] rounded-full bg-primary"
            animate={indicatorStyle}
            transition={{ type: "spring", stiffness: 400, damping: 35 }}
          />
          {navKeys.map((l) => {
            const isActive = location.pathname === l.href;
            return (
              <Link
                key={l.href}
                to={l.href}
                data-active={isActive}
                className={cn(
                  "px-3 py-2 text-[13px] rounded-lg transition-all",
                  isActive
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {t(l.key)}
              </Link>
            );
          })}
          <div className="w-px h-4 bg-border mx-2" />
          <CommandMenu />
          <LanguageToggle />
          <ThemeToggle />
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.96 }}>
            <Button asChild size="sm" className="ml-2 rounded-full text-xs h-8 px-4">
              <Link to="/contact">{t("nav.hire")}</Link>
            </Button>
          </motion.div>
        </nav>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-1">
          <LanguageToggle />
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setOpen(!open)} aria-label="Menu" className="h-9 w-9 rounded-lg">
            <AnimatePresence mode="wait">
              <motion.div key={open ? "close" : "open"} initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.15 }}>
                {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </motion.div>
            </AnimatePresence>
          </Button>
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
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden bg-background/95 backdrop-blur-2xl border-t border-border/50 overflow-hidden"
            >
              <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-0.5">
                {navKeys.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03, duration: 0.2 }}
                  >
                    <Link
                      to={l.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block px-3 py-2.5 rounded-lg text-sm transition-colors",
                        location.pathname === l.href
                          ? "text-foreground font-medium bg-muted"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      )}
                    >
                      {t(l.key)}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-2 pb-1">
                  <Button asChild size="sm" className="rounded-full w-full h-9 text-xs">
                    <Link to="/contact" onClick={() => setOpen(false)}>{t("nav.hire")}</Link>
                  </Button>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
