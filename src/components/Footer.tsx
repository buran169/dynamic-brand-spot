import { Link } from "react-router-dom";
import { siteConfig, socialLinks } from "@/lib/content";
import { MessageSquare, Send, Facebook, Phone } from "lucide-react";

const socials = [
  { ...socialLinks.discord, icon: MessageSquare },
  { ...socialLinks.telegram, icon: Send },
  { ...socialLinks.facebook, icon: Facebook },
  { ...socialLinks.whatsapp, icon: Phone },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display font-bold text-lg gradient-text mb-2">{siteConfig.name}</h3>
            <p className="text-sm text-muted-foreground">{siteConfig.shortBio}</p>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-3 text-sm">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/services" className="hover:text-foreground transition-colors">Services</Link>
              <Link to="/projects" className="hover:text-foreground transition-colors">Projects</Link>
              <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-3 text-sm">Connect</h4>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/legal/terms" className="hover:text-foreground transition-colors">Terms</Link>
            <Link to="/legal/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
