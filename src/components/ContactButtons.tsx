import { motion } from "framer-motion";
import { socialLinks } from "@/lib/content";
import { MessageSquare, Send, Facebook, Phone } from "lucide-react";

const contacts = [
  { ...socialLinks.discord, icon: MessageSquare, color: "from-[hsl(235,86%,65%)] to-[hsl(235,86%,50%)]", response: "Fast response" },
  { ...socialLinks.telegram, icon: Send, color: "from-[hsl(200,80%,50%)] to-[hsl(200,80%,40%)]", response: "Fast response" },
  { ...socialLinks.facebook, icon: Facebook, color: "from-[hsl(220,70%,55%)] to-[hsl(220,70%,42%)]", response: "Moderate response" },
  { ...socialLinks.whatsapp, icon: Phone, color: "from-[hsl(142,70%,45%)] to-[hsl(142,70%,35%)]", response: "Fast response" },
];

export function ContactButtons() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {contacts.map((c) => (
        <motion.a
          key={c.label}
          href={c.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -4, scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-4 p-5 rounded-2xl glass hover:glow transition-shadow"
        >
          <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center shrink-0`}>
            <c.icon className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <p className="font-display font-semibold">{c.label}</p>
            <p className="text-xs text-muted-foreground">{c.response}</p>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
