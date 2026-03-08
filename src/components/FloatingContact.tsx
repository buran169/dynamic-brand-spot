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
    <div className="fixed bottom-20 md:bottom-6 right-3 sm:right-4 z-40 flex flex-col items-end gap-2">
      <AnimatePresence>
        {open && quickContacts.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.3, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.3, y: 16 }}
            transition={{ delay: i * 0.04, type: "spring", stiffness: 400 }}
            className="flex items-center gap-2 pl-3 pr-4 py-2 rounded-full bg-background/90 backdrop-blur-xl border border-border/50 shadow-lg"
          >
            <div className={`w-7 h-7 rounded-full ${c.color} flex items-center justify-center`}>
              <c.icon className="h-3.5 w-3.5 text-primary-foreground" />
            </div>
            <span className="text-xs font-medium">{c.label}</span>
          </motion.a>
        ))}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.92 }}
        className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg"
        aria-label="Quick contact"
      >
        <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ type: "spring", stiffness: 400 }}>
          {open ? <X className="h-5 w-5" /> : <MessageSquare className="h-5 w-5" />}
        </motion.div>
      </motion.button>
    </div>
  );
}
