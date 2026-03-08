import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const terminalLines = [
  { type: "cmd" as const, text: "$ npm run build" },
  { type: "out" as const, text: "Building premium web experience..." },
  { type: "out" as const, text: "✓ Compiled successfully in 2.1s" },
  { type: "cmd" as const, text: "$ deploy --production" },
  { type: "out" as const, text: "Deploying portfolio to cloud..." },
  { type: "out" as const, text: "✓ Optimizing assets..." },
  { type: "out" as const, text: "✓ Running performance audit..." },
  { type: "success" as const, text: "🚀 Website live — Lighthouse: 98/100" },
  { type: "cmd" as const, text: "$ echo \"Open for new projects!\"" },
  { type: "success" as const, text: "💼 Available for hire — Let's build!" },
];

export function DevTerminal() {
  const [displayedLines, setDisplayedLines] = useState<{ text: string; type: string }[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Blink cursor
  useEffect(() => {
    const blink = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(blink);
  }, []);

  const typeNextChar = useCallback(() => {
    if (currentLine >= terminalLines.length) {
      // Reset after a pause
      setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLine(0);
        setCurrentChar(0);
      }, 3000);
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
      // Move to next line
      setCurrentLine((l) => l + 1);
      setCurrentChar(0);
    }
  }, [currentLine, currentChar]);

  useEffect(() => {
    const line = terminalLines[currentLine];
    const speed = line?.type === "cmd" ? 45 : 25;
    const delay = currentChar === 0 && currentLine > 0 ? 400 : speed;
    const timer = setTimeout(typeNextChar, delay);
    return () => clearTimeout(timer);
  }, [typeNextChar, currentLine, currentChar]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="w-full max-w-md mx-auto lg:mx-0"
    >
      <div className="rounded-xl overflow-hidden glass-strong border border-border/50 shadow-xl">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-muted/30 border-b border-border/30">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-400/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
            <span className="w-3 h-3 rounded-full bg-green-400/80" />
          </div>
          <span className="text-[10px] text-muted-foreground font-mono ml-2">terminal — shahriar@dev</span>
        </div>

        {/* Terminal body */}
        <div className="p-4 font-mono text-xs leading-relaxed min-h-[180px] max-h-[220px] overflow-hidden bg-background/40">
          {displayedLines.map((line, i) => (
            <div
              key={i}
              className={`${
                line.type === "cmd"
                  ? "text-primary font-semibold"
                  : line.type === "success"
                  ? "text-green-400"
                  : "text-muted-foreground"
              }`}
            >
              {line.text}
            </div>
          ))}
          {/* Cursor */}
          <span className={`inline-block w-2 h-4 bg-primary/80 align-middle ${showCursor ? "opacity-100" : "opacity-0"}`} />
        </div>
      </div>
    </motion.div>
  );
}
