import { useLocation, Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const routeLabels: Record<string, string> = {
  services: "nav.services",
  projects: "nav.projects",
  skills: "nav.skills",
  about: "nav.about",
  contact: "nav.contact",
  legal: "Legal",
  terms: "Terms of Service",
  privacy: "Privacy Policy",
};

export function Breadcrumbs() {
  const { pathname } = useLocation();
  const { t } = useI18n();

  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav
      aria-label="Breadcrumb"
      className="container mx-auto px-4 pt-24 pb-2"
    >
      <ol className="flex items-center gap-1 text-sm text-muted-foreground flex-wrap">
        <li>
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-primary transition-colors"
          >
            <Home className="h-3.5 w-3.5" />
            <span className="sr-only">{t("nav.home")}</span>
          </Link>
        </li>
        {segments.map((seg, i) => {
          const path = "/" + segments.slice(0, i + 1).join("/");
          const labelKey = routeLabels[seg] || seg;
          const label = labelKey.startsWith("nav.") ? t(labelKey) : labelKey;
          const isLast = i === segments.length - 1;

          return (
            <li key={path} className="flex items-center gap-1">
              <ChevronRight className="h-3 w-3 text-muted-foreground/50" />
              {isLast ? (
                <span className="text-foreground font-medium capitalize">{label}</span>
              ) : (
                <Link to={path} className="hover:text-primary transition-colors capitalize">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
