import { Link } from "react-router-dom";
import { siteConfig, socialLinks } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import { MessageSquare, Send, Facebook, Phone, Heart, Mail, MapPin, Clock, Shield, FileText } from "lucide-react";

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
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 py-10 sm:py-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-bold text-sm sm:text-base mb-2 sm:mb-3">{siteConfig.name}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4">{t("hero.bio")}</p>
            <div className="flex flex-col gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-muted-foreground">
              <div className="flex items-center gap-2"><MapPin className="h-3 w-3 shrink-0" /><span>Bangladesh</span></div>
              <div className="flex items-center gap-2"><Clock className="h-3 w-3 shrink-0" /><span>Available 24/7</span></div>
              <div className="flex items-center gap-2"><Mail className="h-3 w-3 shrink-0" /><span className="truncate">contact@shahriarburhan.dev</span></div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-xs sm:text-sm text-muted-foreground">{t("footer.quickLinks")}</h4>
            <div className="flex flex-col gap-1.5 sm:gap-2 text-xs sm:text-sm">
              {["/", "/services", "/projects", "/skills", "/about", "/contact"].map((href) => {
                const key = href === "/" ? "nav.home" : `nav.${href.slice(1)}`;
                return (
                  <Link key={href} to={href} className="text-muted-foreground hover:text-foreground transition-colors w-fit py-0.5">
                    {t(key)}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-xs sm:text-sm text-muted-foreground">Legal</h4>
            <div className="flex flex-col gap-1.5 sm:gap-2 text-xs sm:text-sm">
              <Link to="/legal/terms" className="text-muted-foreground hover:text-foreground transition-colors w-fit flex items-center gap-1.5 py-0.5">
                <FileText className="h-3 w-3" /> {t("footer.terms")}
              </Link>
              <Link to="/legal/privacy" className="text-muted-foreground hover:text-foreground transition-colors w-fit flex items-center gap-1.5 py-0.5">
                <Shield className="h-3 w-3" /> {t("footer.privacy")}
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-xs sm:text-sm text-muted-foreground">{t("footer.connect")}</h4>
            <div className="grid grid-cols-1 gap-1.5 sm:gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-2.5 sm:px-3 py-2 rounded-lg border border-border/50 text-muted-foreground hover:text-foreground hover:border-border transition-all text-[11px] sm:text-xs"
                >
                  <s.icon className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-4 sm:py-5 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3">
          <p className="text-[10px] sm:text-xs text-muted-foreground text-center sm:text-left">© {new Date().getFullYear()} {siteConfig.name} — {t("footer.rights")}</p>
          <p className="text-[10px] sm:text-xs text-muted-foreground/50 flex items-center gap-1">
            Built with <Heart className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-primary/60" /> in Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
}
