import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

/** Small IntersectionObserver hook — reliable across SSR hydration. */
export function useOnScreen<T extends HTMLElement>(rootMargin = "-60px") {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setSeen(true);
            io.disconnect();
          }
        });
      },
      { rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  return { ref, seen };
}

export function Reveal({
  children,
  delay = 0,
  y = 40,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const { ref, seen: inView } = useOnScreen<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function MaskWords({ text, className = "" }: { text: string; className?: string }) {
  const { ref, seen: inView } = useOnScreen<HTMLSpanElement>("-40px");

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {text.split(" ").map((w, i) => (
        <span key={`${w}-${i}`} className="overflow-hidden py-[0.06em] pr-[0.28em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={inView ? { y: 0 } : { y: "110%" }}
            transition={{ duration: 0.85, delay: i * 0.055, ease: [0.16, 1, 0.3, 1] }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const { ref, seen: inView } = useOnScreen<HTMLSpanElement>();
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { damping: 30, stiffness: 90 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, mv, to]);

  useEffect(() => spring.on("change", (v) => setVal(Math.round(v))), [spring]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

export function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const row = [...items, ...items];
  return (
    <div className="flex overflow-hidden border-y border-white/10 bg-ink-2 py-4">
      <motion.div
        className="flex shrink-0 gap-10 pr-10"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      >
        {row.map((t, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-10 font-display text-2xl uppercase tracking-tight text-bone/70 md:text-4xl"
          >
            {t}
            <span className="text-flame">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function MagneticButton({
  children,
  onClick,
  className = "",
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 320, damping: 18 }}
      className={className}
    >
      {children}
    </motion.button>
  );
}
