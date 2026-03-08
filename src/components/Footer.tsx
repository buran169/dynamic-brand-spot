import { Link } from "react-router-dom";
import { siteConfig, socialLinks } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import { MessageSquare, Send, Facebook, Phone, Heart, Mail, MapPin, Clock, ArrowUpRight, Shield, FileText } from "lucide-react";
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
    <footer className="relative border-t border-border/50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 py-16">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-base mb-3">{siteConfig.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t("hero.bio")}</p>
            <div className="flex flex-col gap-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-2"><MapPin className="h-3 w-3 text-muted-foreground/60" /><span>Bangladesh</span></div>
              <div className="flex items-center gap-2"><Clock className="h-3 w-3 text-muted-foreground/60" /><span>Available 24/7</span></div>
              <div className="flex items-center gap-2"><Mail className="h-3 w-3 text-muted-foreground/60" /><span>contact@shahriarburhan.dev</span></div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm text-muted-foreground">{t("footer.quickLinks")}</h4>
            <div className="flex flex-col gap-2 text-sm">
              {["/", "/services", "/projects", "/skills", "/about", "/contact"].map((href) => {
                const key = href === "/" ? "nav.home" : `nav.${href.slice(1)}`;
                return (
                  <Link key={href} to={href} className="text-muted-foreground hover:text-foreground transition-colors w-fit">
                    {t(key)}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-sm text-muted-foreground">Legal</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/legal/terms" className="text-muted-foreground hover:text-foreground transition-colors w-fit flex items-center gap-1.5">
                <FileText className="h-3 w-3" /> {t("footer.terms")}
              </Link>
              <Link to="/legal/privacy" className="text-muted-foreground hover:text-foreground transition-colors w-fit flex items-center gap-1.5">
                <Shield className="h-3 w-3" /> {t("footer.privacy")}
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4 text-sm text-muted-foreground">{t("footer.connect")}</h4>
            <div className="grid grid-cols-2 gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border/50 text-muted-foreground hover:text-foreground hover:border-border transition-all text-xs"
                >
                  <s.icon className="h-3.5 w-3.5" />
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-5 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} {siteConfig.name} — {t("footer.rights")}</p>
          <p className="text-xs text-muted-foreground/50 flex items-center gap-1">
            Built with <Heart className="h-3 w-3 text-primary/60" /> in Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
}
