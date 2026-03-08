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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="relative border-t border-border overflow-hidden">
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/80 to-card pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main footer content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 py-12 lg:py-16"
        >
          {/* Brand column */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="font-display font-bold text-xl gradient-text mb-3">{siteConfig.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t("hero.bio")}</p>
            <div className="flex flex-col gap-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-primary/70" />
                <span>Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 text-primary/70" />
                <span>Available 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-primary/70" />
                <span>contact@shahriarburhan.dev</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display font-semibold mb-4 text-sm flex items-center gap-2">
              <ArrowUpRight className="h-3.5 w-3.5 text-primary" />
              {t("footer.quickLinks")}
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors nav-link-animated w-fit">{t("nav.home")}</Link>
              <Link to="/services" className="hover:text-foreground transition-colors nav-link-animated w-fit">{t("nav.services")}</Link>
              <Link to="/projects" className="hover:text-foreground transition-colors nav-link-animated w-fit">{t("nav.projects")}</Link>
              <Link to="/skills" className="hover:text-foreground transition-colors nav-link-animated w-fit">{t("nav.skills")}</Link>
              <Link to="/about" className="hover:text-foreground transition-colors nav-link-animated w-fit">{t("nav.about")}</Link>
              <Link to="/contact" className="hover:text-foreground transition-colors nav-link-animated w-fit">{t("nav.contact")}</Link>
            </div>
          </motion.div>

          {/* Legal */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display font-semibold mb-4 text-sm flex items-center gap-2">
              <Shield className="h-3.5 w-3.5 text-primary" />
              Legal
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              <Link to="/legal/terms" className="hover:text-foreground transition-colors nav-link-animated w-fit flex items-center gap-1.5">
                <FileText className="h-3 w-3" />
                {t("footer.terms")}
              </Link>
              <Link to="/legal/privacy" className="hover:text-foreground transition-colors nav-link-animated w-fit flex items-center gap-1.5">
                <Shield className="h-3 w-3" />
                {t("footer.privacy")}
              </Link>
            </div>
            <div className="mt-4 p-3 rounded-lg bg-muted/50 border border-border/50">
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                All content © {new Date().getFullYear()} {siteConfig.name}. Unauthorized reproduction prohibited. Built with ❤️ in Bangladesh.
              </p>
            </div>
          </motion.div>

          {/* Connect */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display font-semibold mb-4 text-sm flex items-center gap-2">
              <MessageSquare className="h-3.5 w-3.5 text-primary" />
              {t("footer.connect")}
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-muted/50 border border-border/50 text-muted-foreground hover:text-primary hover:bg-primary/5 hover:border-primary/20 transition-all text-xs touch-glow"
                >
                  <s.icon className="h-3.5 w-3.5" />
                  <span className="font-medium">{s.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-5 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-3"
        >
          <p className="text-xs text-muted-foreground flex items-center gap-1.5">
            © {new Date().getFullYear()} {siteConfig.name} — {t("footer.rights")}
          </p>
          <p className="text-xs text-muted-foreground/60 flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-red-400 fill-red-400 animate-pulse" /> by Shahriar Burhan
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
