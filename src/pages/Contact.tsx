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
import { Send } from "lucide-react";
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
      <div className="min-h-screen pt-24">
        <section className="section-padding">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <SectionHeading title={t("contact.title")} subtitle={t("contact.sub")} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <FadeIn>
                <h3 className="font-display font-semibold text-lg mb-4">{t("contact.quick")}</h3>
                <ContactButtons />
              </FadeIn>

              <FadeIn delay={0.2}>
                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-4 p-6 rounded-2xl glass"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
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
                    <Input
                      placeholder={t("contact.name")}
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className="rounded-xl h-12"
                      aria-label={t("contact.name")}
                      autoComplete="name"
                    />
                    {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <Input
                      type="email"
                      inputMode="email"
                      placeholder={t("contact.email")}
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="rounded-xl h-12"
                      aria-label={t("contact.email")}
                      autoComplete="email"
                    />
                    {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <Select value={form.service} onValueChange={(v) => update("service", v)}>
                      <SelectTrigger className="rounded-xl h-12" aria-label={t("contact.service")}>
                        <SelectValue placeholder={t("contact.service")} />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((s) => (
                          <SelectItem key={s.id} value={s.id}>{s.title}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.service && <p className="text-xs text-destructive mt-1">{errors.service}</p>}
                  </div>

                  <div>
                    <Select value={form.budget} onValueChange={(v) => update("budget", v)}>
                      <SelectTrigger className="rounded-xl h-12" aria-label={t("contact.budget")}>
                        <SelectValue placeholder={t("contact.budget")} />
                      </SelectTrigger>
                      <SelectContent>
                        {budgetRanges.map((b) => (
                          <SelectItem key={b} value={b}>{b}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.budget && <p className="text-xs text-destructive mt-1">{errors.budget}</p>}
                  </div>

                  <div>
                    <Textarea
                      placeholder={t("contact.message")}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      className="rounded-xl min-h-[120px]"
                      aria-label={t("contact.message")}
                    />
                    {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                  </div>

                  <motion.div whileTap={{ scale: 0.97 }}>
                    <Button type="submit" disabled={sending} className="w-full rounded-full glow h-12 text-base touch-target" size="lg">
                      {sending ? t("btn.sending") : <>{t("btn.sendMessage")} <Send className="ml-1 h-4 w-4" /></>}
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
