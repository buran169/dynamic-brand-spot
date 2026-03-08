import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/content";

interface Message {
  id: string;
  role: "user" | "assistant";
  text: string;
}

const quickActions = [
  "What services do you offer?",
  "How much does a Discord bot cost?",
  "Can you build SA-MP systems?",
  "How can I contact you?",
];

const knowledgeBase: Record<string, string> = {
  services: "I offer **4 main services**:\n\n🌐 **Web Development** — from $150\n🤖 **Discord Development** — from $50\n🎮 **SA-MP Development** — from $40\n🎨 **Graphics Design** — from $20\n\nWant to know more?",
  discord_cost: "**Discord bot pricing** starts at **$50**:\n\n• Simple bot: **$50–$80**\n• Moderation + Tickets: **$80–$150**\n• Full setup + bot: **$150–$300**\n\nWant a custom quote?",
  samp: "**Yes!** I build SA-MP systems:\n\n🎮 Gameplay systems\n🛠️ Admin tools\n🔧 Bug fixes & optimization\n📊 Database systems\n\nStarting at **$40**.",
  contact: "Reach me through:\n\n💬 **Discord** — Fastest\n📱 **Telegram** — Quick chat\n📲 **WhatsApp** — Direct\n\nI usually reply within a few hours!",
  default: "I can help with:\n\n• **Services** & pricing\n• **Projects** — past work\n• **Contact** — how to reach me\n\nTry the quick buttons below!",
};

function matchResponse(input: string): string {
  const l = input.toLowerCase();
  if (l.includes("service") || l.includes("offer")) return knowledgeBase.services;
  if (l.includes("discord") && (l.includes("cost") || l.includes("price") || l.includes("much"))) return knowledgeBase.discord_cost;
  if (l.includes("samp") || l.includes("sa-mp")) return knowledgeBase.samp;
  if (l.includes("contact") || l.includes("reach")) return knowledgeBase.contact;
  if (l.includes("price") || l.includes("cost") || l.includes("much")) return knowledgeBase.services;
  if (l.includes("hi") || l.includes("hello") || l.includes("hey")) return "Hey! 👋 How can I help you today?";
  return knowledgeBase.default;
}

export function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "welcome", role: "assistant", text: "Hey! 👋 Ask me about services, pricing, or projects!" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = useCallback((text: string) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { id: Date.now().toString(), role: "user", text: text.trim() }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { id: (Date.now() + 1).toString(), role: "assistant", text: matchResponse(text) }]);
    }, 600 + Math.random() * 400);
  }, []);

  return (
    <>
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-[88px] md:bottom-6 right-16 md:right-20 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-accent text-accent-foreground shadow-lg flex items-center justify-center"
            aria-label="Open chat"
          >
            <MessageCircle className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-[88px] md:bottom-6 right-3 sm:right-4 z-50 w-[calc(100vw-1.5rem)] sm:w-[340px] h-[420px] sm:h-[480px] max-h-[calc(100vh-7rem)] rounded-2xl overflow-hidden bg-background/95 backdrop-blur-2xl border border-border/50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 border-b border-border/50">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold">AI Assistant</p>
                  <p className="text-[9px] text-muted-foreground flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Online
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full" onClick={() => setOpen(false)}>
                <X className="w-3.5 h-3.5" />
              </Button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-3 space-y-2.5">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${msg.role === "assistant" ? "bg-primary/10" : "bg-accent/10"}`}>
                    {msg.role === "assistant" ? <Bot className="w-3 h-3 text-primary" /> : <User className="w-3 h-3 text-accent" />}
                  </div>
                  <div className={`max-w-[80%] rounded-xl px-3 py-2 text-xs leading-relaxed whitespace-pre-line ${msg.role === "assistant" ? "bg-muted/60 text-foreground" : "bg-primary text-primary-foreground"}`}>
                    {msg.text.split(/(\*\*.*?\*\*)/g).map((part, i) =>
                      part.startsWith("**") && part.endsWith("**") ? <strong key={i}>{part.slice(2, -2)}</strong> : <span key={i}>{part}</span>
                    )}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex items-center gap-1 px-3 py-2">
                  {[0, 1, 2].map((i) => (
                    <motion.div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/50" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.12 }} />
                  ))}
                </div>
              )}
            </div>

            {/* Quick actions */}
            {messages.length <= 2 && (
              <div className="px-3 pb-2 flex flex-wrap gap-1">
                {quickActions.map((q) => (
                  <button key={q} onClick={() => sendMessage(q)} className="text-[10px] px-2.5 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Contact shortcuts */}
            <div className="px-3 pb-2 flex gap-1.5">
              {[
                { label: "Telegram", url: socialLinks.telegram.url, cls: "text-primary" },
                { label: "Discord", url: socialLinks.discord.url, cls: "text-accent" },
                { label: "WhatsApp", url: socialLinks.whatsapp.url, cls: "text-primary" },
              ].map((c) => (
                <a key={c.label} href={c.url} target="_blank" rel="noopener noreferrer" className={`text-[9px] font-medium px-2.5 py-1 rounded-full bg-muted/50 ${c.cls} hover:bg-muted transition-colors flex items-center gap-1`}>
                  {c.label} <ArrowRight className="w-2.5 h-2.5" />
                </a>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={(e) => { e.preventDefault(); sendMessage(input); }} className="flex items-center gap-2 p-2.5 border-t border-border/50">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-muted/40 rounded-full px-3 py-2 text-xs outline-none focus:ring-1 ring-primary/30 transition-all"
              />
              <Button type="submit" size="icon" className="h-8 w-8 rounded-full shrink-0" disabled={!input.trim()}>
                <Send className="w-3.5 h-3.5" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
