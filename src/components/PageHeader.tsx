import { motion } from "framer-motion";
import { MaskWords } from "./motion-primitives";

export function PageHeader({ kicker, title }: { kicker: string; title: string }) {
  return (
    <section className="grain relative overflow-hidden border-b border-white/10 bg-ink-2 pb-16 pt-36 md:pb-24 md:pt-48">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-x-0 top-0 h-px origin-left bg-flame"
      />
      <div className="container-x">
        <span className="font-display text-xs tracking-[0.35em] text-flame">{kicker.toUpperCase()}</span>
        <h1 className="mt-4 max-w-4xl font-display text-3xl leading-[0.88] md:text-8xl">
          <MaskWords text={title} />
        </h1>
      </div>
    </section>
  );
}
