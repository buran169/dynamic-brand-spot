import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageSquare, Briefcase, Send } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function MobileCTABar() {
  const { t } = useI18n();
  const location = useLocation();

  if (location.pathname === "/contact") return null;

  const actions = [
    { to: "/contact", icon: MessageSquare, label: t("nav.contact"), primary: false },
    { to: "/contact", icon: Send, label: t("nav.hire"), primary: true },
    { to: "/services", icon: Briefcase, label: t("nav.services"), primary: false },
  ];

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 25 }}
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden safe-bottom"
    >
      <div className="bg-background/90 backdrop-blur-2xl border-t border-border/50 px-3 py-2">
        <div className="flex items-center justify-around gap-1.5 max-w-md mx-auto">
          {actions.map((a) => (
            <Link
              key={a.label}
              to={a.to}
              className={`flex-1 flex flex-col items-center gap-0.5 py-2 rounded-xl transition-all active:scale-95 ${
                a.primary
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground active:bg-muted"
              }`}
            >
              <a.icon className="h-4 w-4" />
              <span className="text-[9px] font-medium leading-none">{a.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
