"use client";

import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/** Fades children in with a slight rise and blur when they scroll into view. */
export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Reveals a headline line by line, each line sliding up from a mask. */
export function LineReveal({ lines, className = "" }: { lines: ReactNode[]; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className="block"
            initial={reduce ? false : { y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.1, delay: 0.15 + i * 0.12, ease }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/** Cycles through words with a vertical slide. */
export function RotatingWords({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % words.length), 2400);
    return () => clearInterval(t);
  }, [words.length]);

  return (
    <span className="relative inline-grid overflow-hidden align-bottom">
      {/* Invisible longest word reserves the width so the line doesn't jump. */}
      <span className="invisible col-start-1 row-start-1">
        {words.reduce((a, b) => (b.length > a.length ? b : a))}
      </span>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={words[i]}
          className="col-start-1 row-start-1"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/** Background video that slowly zooms and fades as the hero scrolls away. */
export function HeroVideo({ src }: { src: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.45, 0]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.video
        style={{ scale, opacity }}
        className="h-full w-full object-cover grayscale contrast-125"
        src={src}
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
}

const agentLines = [
  { tag: "event", text: "New error reported from the app" },
  { tag: "agent", text: "Grouping with similar errors" },
  { tag: "agent", text: "Reading stack trace and recent changes" },
  { tag: "agent", text: "Likely cause found in checkout screen" },
  { tag: "alert", text: "Developer notified with summary and suggested fix" },
  { tag: "fixed", text: "Patch reviewed, tested and released" },
];

/** Terminal that prints the monitoring-agent flow line by line, on a loop. */
export function AgentTerminal() {
  const [shown, setShown] = useState(0);
  useEffect(() => {
    const t = setTimeout(
      () => setShown((n) => (n >= agentLines.length ? 0 : n + 1)),
      shown >= agentLines.length ? 2800 : 950,
    );
    return () => clearTimeout(t);
  }, [shown]);

  return (
    <div className="rounded-xl border border-border bg-card font-mono text-[12px]">
      <div className="flex items-center justify-between border-b border-border px-5 py-3 text-faint">
        <span>monitoring-agent</span>
        <span>example flow</span>
      </div>
      <div className="min-h-[220px] space-y-2.5 p-5 leading-relaxed">
        {agentLines.slice(0, shown).map((l, i) => (
          <motion.p
            key={l.text}
            className="flex gap-4"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease }}
          >
            <span className="w-4 text-faint">{String(i + 1).padStart(2, "0")}</span>
            <span className="w-12 text-muted">{l.tag}</span>
            <span className={l.tag === "fixed" ? "text-foreground" : "text-foreground/80"}>{l.text}</span>
          </motion.p>
        ))}
        <span className="ml-8 inline-block h-3.5 w-1.5 animate-pulse bg-foreground/70 align-middle" />
      </div>
    </div>
  );
}
