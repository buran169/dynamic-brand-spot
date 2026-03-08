import { useState } from "react";
import { z } from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactButtons } from "@/components/ContactButtons";
import { FadeIn } from "@/components/MotionWrapper";
import { services, budgetRanges } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import { useToast } from "@/hooks/use-toast";
import { Send, Sparkles } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  service: z.string().min(1, "Select a service"),
  budget: z.string().min(1, "Select a budget range"),
  message: z.string().trim().min(1, "Message is required").max(2000),
  honeypot: z.string().max(0),
});

const ContactPage = () => {
  const { t } = useI18n();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", service: "", budget: "", message: "", honeypot: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => { fieldErrors[err.path[0] as string] = err.message; });
      setErrors(fieldErrors);
      return;
    }
    if (form.honeypot) return;
    setSending(true);
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Contact form submission:", result.data);
    toast({ title: t("contact.sent"), description: t("contact.sentDesc") });
    setForm({ name: "", email: "", service: "", budget: "", message: "", honeypot: "" });
    setErrors({});
    setSending(false);
  };

  const update = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: "" }));
  };

  return (
    <PageTransition variant="scaleUp">
      <div className="min-h-screen pt-16 sm:pt-20 relative overflow-hidden">
        {/* Background blobs */}
        <motion.div
          className="absolute top-20 -right-40 w-[400px] h-[400px] rounded-full opacity-[0.04] dark:opacity-[0.07] pointer-events-none"
          style={{ background: `radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)` }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <section className="section-padding">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeading title={t("contact.title")} subtitle={t("contact.sub")} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              <FadeIn>
                <h3 className="font-semibold text-base sm:text-lg mb-4">{t("contact.quick")}</h3>
                <ContactButtons />
                <motion.div
                  className="mt-4 flex items-center gap-2 text-xs sm:text-sm text-muted-foreground"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.div
                    className="w-2 h-2 rounded-full bg-primary shrink-0"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  {t("contact.response")}
                </motion.div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-3 sm:space-y-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-border/50 bg-card/50"
                  whileHover={{ borderColor: "hsl(var(--accent) / 0.15)" }}
                  transition={{ duration: 0.3 }}
                >
                  <input
                    type="text"
                    name="company_address"
                    value={form.honeypot}
                    onChange={(e) => update("honeypot", e.target.value)}
                    className="absolute opacity-0 h-0 w-0 pointer-events-none"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  <div>
                    <Input placeholder={t("contact.name")} value={form.name} onChange={(e) => update("name", e.target.value)} className="rounded-lg sm:rounded-xl h-11 sm:h-12 text-sm" aria-label={t("contact.name")} autoComplete="name" />
                    {errors.name && <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-xs text-destructive mt-1">{errors.name}</motion.p>}
                  </div>

                  <div>
                    <Input type="email" inputMode="email" placeholder={t("contact.email")} value={form.email} onChange={(e) => update("email", e.target.value)} className="rounded-lg sm:rounded-xl h-11 sm:h-12 text-sm" aria-label={t("contact.email")} autoComplete="email" />
                    {errors.email && <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-xs text-destructive mt-1">{errors.email}</motion.p>}
                  </div>

                  <div>
                    <Select value={form.service} onValueChange={(v) => update("service", v)}>
                      <SelectTrigger className="rounded-lg sm:rounded-xl h-11 sm:h-12 text-sm" aria-label={t("contact.service")}><SelectValue placeholder={t("contact.service")} /></SelectTrigger>
                      <SelectContent>{services.map((s) => <SelectItem key={s.id} value={s.id}>{s.title}</SelectItem>)}</SelectContent>
                    </Select>
                    {errors.service && <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-xs text-destructive mt-1">{errors.service}</motion.p>}
                  </div>

                  <div>
                    <Select value={form.budget} onValueChange={(v) => update("budget", v)}>
                      <SelectTrigger className="rounded-lg sm:rounded-xl h-11 sm:h-12 text-sm" aria-label={t("contact.budget")}><SelectValue placeholder={t("contact.budget")} /></SelectTrigger>
                      <SelectContent>{budgetRanges.map((b) => <SelectItem key={b} value={b}>{b}</SelectItem>)}</SelectContent>
                    </Select>
                    {errors.budget && <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-xs text-destructive mt-1">{errors.budget}</motion.p>}
                  </div>

                  <div>
                    <Textarea placeholder={t("contact.message")} value={form.message} onChange={(e) => update("message", e.target.value)} className="rounded-lg sm:rounded-xl min-h-[100px] sm:min-h-[120px] text-sm" aria-label={t("contact.message")} />
                    {errors.message && <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-xs text-destructive mt-1">{errors.message}</motion.p>}
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.96 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                    <Button type="submit" disabled={sending} className="w-full rounded-full h-11 sm:h-12 text-sm glow" size="lg">
                      {sending ? (
                        <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }}>
                          {t("btn.sending")}
                        </motion.span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Sparkles className="h-4 w-4" />
                          {t("btn.sendMessage")}
                          <Send className="h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </motion.div>
                </motion.form>
              </FadeIn>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default ContactPage;
