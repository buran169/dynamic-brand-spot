import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/content";

interface Message {
  id: string;
  role: "user" | "assistant";
  text: string;
  timestamp: Date;
}

const quickActions = [
  "What services do you offer?",
  "How much does a Discord bot cost?",
  "Can you build SA-MP systems?",
  "How can I contact you?",
];

const knowledgeBase: Record<string, string> = {
  services:
    "I offer **4 main services**:\n\n🌐 **Web Development** — Landing pages, business sites, full-stack apps (from $150)\n🤖 **Discord Development** — Custom bots, server setup, automation (from $50)\n🎮 **SA-MP Development** — Gameplay systems, admin tools, optimization (from $40)\n🎨 **Graphics Design** — Thumbnails, banners, logos, brand kits (from $20)\n\nWant to know more about any specific service?",
  discord_cost:
    "**Discord bot pricing** starts at **$50** and varies by complexity:\n\n• Simple bot (commands, auto-roles): **$50–$80**\n• Moderation + Ticket system: **$80–$150**\n• Full server setup + custom bot: **$150–$300**\n• Complex multi-feature bot: **$300+**\n\nI also offer ongoing maintenance packages! Want a custom quote?",
  samp:
    "**Yes, absolutely!** I'm an experienced SA-MP developer. I can build:\n\n🎮 Gameplay systems (jobs, vehicles, housing)\n🛠️ Admin tools & moderation panels\n🔧 Bug fixes & performance optimization\n📊 Database systems & player stats\n\nPricing starts at **$40**. Tell me about your SA-MP project!",
  contact:
    "You can reach me through any of these channels:\n\n💬 **Discord** — Fastest response\n📱 **Telegram** — Quick chat\n📲 **WhatsApp** — Direct message\n\nI usually reply within a few hours. Use the buttons below to connect!",
  pricing:
    "Here's my **pricing overview**:\n\n🌐 Web Development: from **$150**\n🤖 Discord Bots: from **$50**\n🎮 SA-MP Development: from **$40**\n🎨 Graphics Design: from **$20**\n\nAll projects include **free revisions** and **post-delivery support**. Want a custom quote?",
  timeline:
    "**Typical delivery times:**\n\n🌐 Websites: **3–7 days**\n🤖 Discord Bots: **2–5 days**\n🎮 SA-MP Systems: **2–5 days**\n🎨 Graphics: **1–3 days**\n\nComplex projects may take 1–3 weeks. I provide regular progress updates!",
  default:
    "Thanks for your message! I can help you with:\n\n• **Services** — What I offer & pricing\n• **Projects** — My past work\n• **Contact** — How to reach me\n• **Timeline** — How long projects take\n\nTry asking a question or use the quick buttons below!",
};

function matchResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("service") || lower.includes("offer") || lower.includes("what do you do"))
    return knowledgeBase.services;
  if (lower.includes("discord") && (lower.includes("cost") || lower.includes("price") || lower.includes("much")))
    return knowledgeBase.discord_cost;
  if (lower.includes("samp") || lower.includes("sa-mp") || lower.includes("sa mp"))
    return knowledgeBase.samp;
  if (lower.includes("contact") || lower.includes("reach") || lower.includes("message") || lower.includes("talk"))
    return knowledgeBase.contact;
  if (lower.includes("price") || lower.includes("cost") || lower.includes("much") || lower.includes("rate") || lower.includes("budget"))
    return knowledgeBase.pricing;
  if (lower.includes("time") || lower.includes("long") || lower.includes("delivery") || lower.includes("deadline"))
    return knowledgeBase.timeline;
  if (lower.includes("discord") && !lower.includes("cost"))
    return knowledgeBase.discord_cost;
  if (lower.includes("web") || lower.includes("website") || lower.includes("landing"))
    return "**Web Development** starts at **$150**. I build:\n\n• Landing pages & business sites\n• Full-stack apps with auth & dashboards\n• SEO-optimized, responsive designs\n• High-performance Lighthouse scores\n\nWant me to give you a custom quote?";
  if (lower.includes("design") || lower.includes("logo") || lower.includes("thumbnail") || lower.includes("banner"))
    return "**Graphics Design** starts at **$20**. I create:\n\n🎨 YouTube thumbnails\n🖼️ Banners & headers\n✏️ Logo & brand kits\n🎯 UI assets\n\nIncludes up to **3 revision rounds**!";
  if (lower.includes("hi") || lower.includes("hello") || lower.includes("hey") || lower.includes("assalamu"))
    return "Hey there! 👋 Welcome! I'm Shahriar's AI assistant. How can I help you today?\n\nFeel free to ask about services, pricing, or how to get in touch!";
  return knowledgeBase.default;
}

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-2 h-2 rounded-full bg-primary/60"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  );
}

function MessageBubble({ msg }: { msg: Message }) {
  const isBot = msg.role === "assistant";
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className={`flex gap-2 ${isBot ? "" : "flex-row-reverse"}`}
    >
      <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-1 ${isBot ? "bg-primary/10" : "bg-accent/10"}`}>
        {isBot ? <Bot className="w-4 h-4 text-primary" /> : <User className="w-4 h-4 text-accent" />}
      </div>
      <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line ${isBot ? "bg-muted/80 text-foreground" : "bg-primary text-primary-foreground"}`}>
        {msg.text.split(/(\*\*.*?\*\*)/g).map((part, i) =>
          part.startsWith("**") && part.endsWith("**") ? (
            <strong key={i}>{part.slice(2, -2)}</strong>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </div>
    </motion.div>
  );
}

export function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      text: "Hey! 👋 I'm Shahriar's AI assistant. Ask me anything about services, pricing, or projects!",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = useCallback(
    (text: string) => {
      if (!text.trim()) return;
      const userMsg: Message = { id: Date.now().toString(), role: "user", text: text.trim(), timestamp: new Date() };
      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setTyping(true);

      setTimeout(() => {
        const response = matchResponse(text);
        setTyping(false);
        setMessages((prev) => [
          ...prev,
          { id: (Date.now() + 1).toString(), role: "assistant", text: response, timestamp: new Date() },
        ]);
      }, 800 + Math.random() * 600);
    },
    []
  );

  return (
    <>
      {/* Chat toggle button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-24 md:bottom-6 right-4 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center glow"
            aria-label="Open chat"
          >
            <MessageCircle className="w-6 h-6" />
            <motion.span
              className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-accent flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-[8px] font-bold text-accent-foreground">1</span>
            </motion.span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 md:bottom-6 right-4 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-8rem)] rounded-2xl overflow-hidden glass-strong shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-primary/5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">AI Assistant</p>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-[10px] text-muted-foreground">Online</span>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={() => setOpen(false)}>
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg) => (
                <MessageBubble key={msg.id} msg={msg} />
              ))}
              {typing && <TypingIndicator />}
            </div>

            {/* Quick actions */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                {quickActions.map((q) => (
                  <motion.button
                    key={q}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => sendMessage(q)}
                    className="text-[11px] px-3 py-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  >
                    {q}
                  </motion.button>
                ))}
              </div>
            )}

            {/* Contact shortcuts */}
            <div className="px-4 pb-2 flex gap-2">
              {[
                { label: "Telegram", url: socialLinks.telegram.url, color: "bg-blue-500/10 text-blue-500" },
                { label: "Discord", url: socialLinks.discord.url, color: "bg-indigo-500/10 text-indigo-500" },
                { label: "WhatsApp", url: socialLinks.whatsapp.url, color: "bg-green-500/10 text-green-500" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-[10px] font-medium px-3 py-1 rounded-full ${c.color} hover:opacity-80 transition-opacity flex items-center gap-1`}
                >
                  {c.label} <ArrowRight className="w-3 h-3" />
                </a>
              ))}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="flex items-center gap-2 p-3 border-t border-border/50"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-muted/50 rounded-full px-4 py-2.5 text-sm outline-none focus:ring-2 ring-primary/30 transition-all"
              />
              <Button type="submit" size="icon" className="h-9 w-9 rounded-full shrink-0" disabled={!input.trim()}>
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
