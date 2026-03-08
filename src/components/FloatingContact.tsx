import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Send, Phone, X } from "lucide-react";
import { socialLinks } from "@/lib/content";

const quickContacts = [
  { ...socialLinks.whatsapp, icon: Phone, color: "bg-primary" },
  { ...socialLinks.telegram, icon: Send, color: "bg-accent" },
  { ...socialLinks.discord, icon: MessageSquare, color: "bg-primary" },
];

export function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-20 right-4 z-40 md:bottom-6 flex flex-col items-end gap-2">
      <AnimatePresence>
        {open && quickContacts.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.3, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.3, y: 20 }}
            transition={{ delay: i * 0.05, type: "spring", stiffness: 300 }}
            className="flex items-center gap-2 pl-3 pr-4 py-2.5 rounded-full glass-strong glow-sm touch-target group"
          >
            <div className={`w-8 h-8 rounded-full ${c.color} flex items-center justify-center`}>
              <c.icon className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-sm font-medium">{c.label}</span>
          </motion.a>
        ))}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground glow flex items-center justify-center shadow-lg touch-target"
        aria-label="Quick contact"
      >
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {open ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
        </motion.div>
      </motion.button>
    </div>
  );
}
