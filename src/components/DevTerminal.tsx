import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const terminalLines = [
  { type: "cmd" as const, text: "$ npm run build" },
  { type: "out" as const, text: "✓ Compiled successfully in 2.1s" },
  { type: "cmd" as const, text: "$ deploy --production" },
  { type: "out" as const, text: "Optimizing assets..." },
  { type: "out" as const, text: "Running performance audit..." },
  { type: "success" as const, text: "🚀 Live — Lighthouse: 98/100" },
  { type: "cmd" as const, text: '$ echo "Open for projects"' },
  { type: "success" as const, text: "💼 Available for hire" },
];

export function DevTerminal() {
  const [displayedLines, setDisplayedLines] = useState<{ text: string; type: string }[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(blink);
  }, []);

  const typeNextChar = useCallback(() => {
    if (currentLine >= terminalLines.length) {
      setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLine(0);
        setCurrentChar(0);
      }, 4000);
      return;
    }

    const line = terminalLines[currentLine];
    if (currentChar < line.text.length) {
      setDisplayedLines((prev) => {
        const updated = [...prev];
        if (updated.length <= currentLine) {
          updated.push({ text: "", type: line.type });
        }
        updated[currentLine] = { text: line.text.slice(0, currentChar + 1), type: line.type };
        return updated;
      });
      setCurrentChar((c) => c + 1);
    } else {
      setCurrentLine((l) => l + 1);
      setCurrentChar(0);
    }
  }, [currentLine, currentChar]);

  useEffect(() => {
    const line = terminalLines[currentLine];
    const speed = line?.type === "cmd" ? 50 : 30;
    const delay = currentChar === 0 && currentLine > 0 ? 500 : speed;
    const timer = setTimeout(typeNextChar, delay);
    return () => clearTimeout(timer);
  }, [typeNextChar, currentLine, currentChar]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-md mx-auto lg:mx-0"
    >
      <div className="rounded-xl overflow-hidden border border-border/50 bg-card/50 backdrop-blur-xl">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/30">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(0 84% 60%)" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(45 93% 47%)" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(142 71% 45%)" }} />
          </div>
          <span className="text-[10px] text-muted-foreground font-mono ml-2">terminal</span>
        </div>

        {/* Body */}
        <div className="p-4 font-mono text-[11px] leading-relaxed min-h-[160px] max-h-[200px] overflow-hidden">
          {displayedLines.map((line, i) => (
            <div
              key={i}
              className={
                line.type === "cmd"
                  ? "text-foreground font-medium"
                  : line.type === "success"
                  ? "text-primary"
                  : "text-muted-foreground"
              }
            >
              {line.text}
            </div>
          ))}
          <span className={`inline-block w-[6px] h-3.5 bg-foreground/70 align-middle transition-opacity ${showCursor ? "opacity-100" : "opacity-0"}`} />
        </div>
      </div>
    </motion.div>
  );
}
