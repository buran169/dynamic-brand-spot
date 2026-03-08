import { motion } from "framer-motion";
import { socialLinks } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import { MessageSquare, Send, Facebook, Phone } from "lucide-react";

const contacts = [
  { ...socialLinks.discord, icon: MessageSquare, colorClass: "bg-[hsl(235,86%,65%)]", responseKey: "contact.fast" },
  { ...socialLinks.telegram, icon: Send, colorClass: "bg-[hsl(200,80%,50%)]", responseKey: "contact.fast" },
  { ...socialLinks.facebook, icon: Facebook, colorClass: "bg-[hsl(220,70%,55%)]", responseKey: "contact.moderate" },
  { ...socialLinks.whatsapp, icon: Phone, colorClass: "bg-[hsl(142,70%,45%)]", responseKey: "contact.fast" },
];

export function ContactButtons() {
  const { t } = useI18n();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {contacts.map((c) => (
        <motion.a
          key={c.label}
          href={c.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -6, scale: 1.03 }}
          whileTap={{ scale: 0.93, y: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="flex items-center gap-4 p-5 rounded-2xl glass hover:glow transition-all duration-300 group touch-ripple touch-glow"
        >
          <motion.div
            className={`h-12 w-12 rounded-xl ${c.colorClass} flex items-center justify-center shrink-0 icon-interactive`}
            whileHover={{ rotate: 10, scale: 1.1 }}
            whileTap={{ rotate: -15, scale: 0.85 }}
          >
            <c.icon className="h-6 w-6 text-primary-foreground" />
          </motion.div>
          <div>
            <p className="font-display font-semibold group-hover:text-primary transition-colors">{c.label}</p>
            <p className="text-xs text-muted-foreground">{t(c.responseKey)}</p>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
