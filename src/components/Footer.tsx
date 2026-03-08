import { Link } from "react-router-dom";
import { siteConfig, socialLinks } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import { MessageSquare, Send, Facebook, Phone } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  { ...socialLinks.discord, icon: MessageSquare },
  { ...socialLinks.telegram, icon: Send },
  { ...socialLinks.facebook, icon: Facebook },
  { ...socialLinks.whatsapp, icon: Phone },
];

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display font-bold text-lg gradient-text mb-2">{siteConfig.name}</h3>
            <p className="text-sm text-muted-foreground">{t("hero.bio")}</p>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-3 text-sm">{t("footer.quickLinks")}</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/services" className="hover:text-foreground transition-colors nav-link-animated w-fit">{t("nav.services")}</Link>
              <Link to="/projects" className="hover:text-foreground transition-colors nav-link-animated w-fit">{t("nav.projects")}</Link>
              <Link to="/contact" className="hover:text-foreground transition-colors nav-link-animated w-fit">{t("nav.contact")}</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-3 text-sm">{t("footer.connect")}</h4>
            <div className="flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.2, y: -3, rotate: 5 }}
                  whileTap={{ scale: 0.8, rotate: -10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors touch-glow"
                >
                  <s.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {siteConfig.name}. {t("footer.rights")}</p>
          <div className="flex gap-4">
            <Link to="/legal/terms" className="hover:text-foreground transition-colors nav-link-animated">{t("footer.terms")}</Link>
            <Link to="/legal/privacy" className="hover:text-foreground transition-colors nav-link-animated">{t("footer.privacy")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
