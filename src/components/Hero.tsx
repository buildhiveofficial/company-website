import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import hero from "@/assets/hero-1.jpg";
import { MaskWords } from "./motion-primitives";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section ref={ref} className="grain relative h-[100svh] w-full overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={hero}
          alt="BuildHive Solutions construction site at dusk"
          width={1600}
          height={1000}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/55 to-ink" />
      </motion.div>

      <motion.div style={{ opacity: fade }} className="container-x relative flex h-full flex-col justify-end pb-20">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-display text-xs tracking-[0.35em] text-flame"
        >
          DESIGN · BUILD · GROW
        </motion.span>

        <h1 className="mt-5 max-w-6xl font-display text-[11vw] leading-[0.86] md:text-[6.4vw]">
          <MaskWords text="We build what" />
          <span className="block text-flame">
            <MaskWords text="Pakistan lives in." />
          </span>
        </h1>

        <div className="mt-9 flex flex-col gap-8 border-t border-white/15 pt-8 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="max-w-md text-base leading-relaxed text-mute"
          >
            BuildHive Solutions is a design-build contractor delivering turnkey homes, commercial spaces
            and interiors — one accountable team from drawing to handover.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.8 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              to="/contact"
              className="bg-flame px-7 py-4 font-display text-xs uppercase tracking-[0.2em] text-ink transition-colors hover:bg-bone"
            >
              Start your project
            </Link>
            <Link
              to="/projects"
              className="border border-white/25 px-7 py-4 font-display text-xs uppercase tracking-[0.2em] text-bone transition-colors hover:border-flame hover:text-flame"
            >
              See our work
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 font-display text-[10px] tracking-[0.3em] text-mute md:block"
      >
        SCROLL
      </motion.div>
    </section>
  );
}
