import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Home, Briefcase, FolderOpen, Wrench, User, Mail,
  FileText, Shield, Moon, Sun, Search
} from "lucide-react";

const pages = [
  { path: "/", label: "nav.home", icon: Home },
  { path: "/services", label: "nav.services", icon: Briefcase },
  { path: "/projects", label: "nav.projects", icon: FolderOpen },
  { path: "/skills", label: "nav.skills", icon: Wrench },
  { path: "/about", label: "nav.about", icon: User },
  { path: "/contact", label: "nav.contact", icon: Mail },
  { path: "/legal/terms", label: "Terms of Service", icon: FileText },
  { path: "/legal/privacy", label: "Privacy Policy", icon: Shield },
];

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useI18n();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const go = useCallback((path: string) => {
    navigate(path);
    setOpen(false);
  }, [navigate]);

  const toggleTheme = useCallback(() => {
    document.documentElement.classList.toggle("dark");
    setOpen(false);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-card/50 text-muted-foreground text-sm hover:bg-card transition-colors"
        aria-label="Open command menu"
      >
        <Search className="h-3.5 w-3.5" />
        <span>Search...</span>
        <kbd className="ml-2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder={t("nav.home") + ", " + t("nav.services") + "..."} />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            {pages.map((page) => (
              <CommandItem
                key={page.path}
                onSelect={() => go(page.path)}
                className="cursor-pointer"
              >
                <page.icon className="mr-2 h-4 w-4" />
                <span>{page.label.startsWith("nav.") ? t(page.label) : page.label}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Actions">
            <CommandItem onSelect={toggleTheme} className="cursor-pointer">
              <Sun className="mr-2 h-4 w-4 dark:hidden" />
              <Moon className="mr-2 h-4 w-4 hidden dark:block" />
              <span>Toggle Theme</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
