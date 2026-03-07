import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactButtons } from "@/components/ContactButtons";
import { FadeIn } from "@/components/MotionWrapper";
import { services, budgetRanges } from "@/lib/content";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  service: z.string().min(1, "Select a service"),
  budget: z.string().min(1, "Select a budget range"),
  message: z.string().trim().min(1, "Message is required").max(2000),
  honeypot: z.string().max(0), // spam trap
});

const ContactPage = () => {
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
    if (form.honeypot) return; // bot detected
    setSending(true);
    // Simulated send
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Contact form submission:", result.data);
    toast({ title: "Message sent!", description: "I'll get back to you as soon as possible." });
    setForm({ name: "", email: "", service: "", budget: "", message: "", honeypot: "" });
    setErrors({});
    setSending(false);
  };

  const update = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: "" }));
  };

  return (
    <div className="min-h-screen pt-24">
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Get In Touch" subtitle="Let's discuss your project" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact buttons */}
            <FadeIn>
              <h3 className="font-display font-semibold text-lg mb-4">Quick Contact</h3>
              <ContactButtons />
            </FadeIn>

            {/* Form */}
            <FadeIn delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-4 p-6 rounded-2xl glass">
                {/* Honeypot */}
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
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className="rounded-xl"
                    aria-label="Your name"
                  />
                  {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className="rounded-xl"
                    aria-label="Email address"
                  />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Select value={form.service} onValueChange={(v) => update("service", v)}>
                    <SelectTrigger className="rounded-xl" aria-label="Select service">
                      <SelectValue placeholder="Select Service" />
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
                    <SelectTrigger className="rounded-xl" aria-label="Budget range">
                      <SelectValue placeholder="Budget Range" />
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
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    className="rounded-xl min-h-[120px]"
                    aria-label="Your message"
                  />
                  {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                </div>

                <Button type="submit" disabled={sending} className="w-full rounded-full" size="lg">
                  {sending ? "Sending..." : <>Send Message <Send className="ml-1 h-4 w-4" /></>}
                </Button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
