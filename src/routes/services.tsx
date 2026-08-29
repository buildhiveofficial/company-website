import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/motion-primitives";
import { FAQS, PILLARS, } from "@/lib/site-data";
import { useState } from "react";
import { categoryDescriptions } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Construction & Design Services — BuildHive Solutions" },
      {
        name: "description",
        content:
          "Architectural design, grey structure, turnkey construction, interiors, renovation and commercial fit-out services across Pakistan.",
      },
      { property: "og:title", content: "Services — BuildHive Solutions" },
      { property: "og:description", content: "Design, build and grow services under one accountable contract." },
    ],
  }),
  component: Services,
});

function Services() {
  const [open, setOpen] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState("design");

  return (
    <>
      <PageHeader kicker="Services" title="Everything between plot and keys" />

      <section className="container-x py-20 md:py-28">
        <div className="grid gap-px bg-white/10 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1} className="bg-ink p-9">
              <span className="font-display text-5xl text-white/10">{p.id}</span>
              <h2 className="mt-3 font-display text-3xl text-flame">{p.title}</h2>
              <p className="mt-3 font-display text-lg normal-case">{p.lead}</p>
              <p className="mt-3 text-sm leading-relaxed text-mute">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

<section className="container-x pb-20 md:pb-28">
  {/* =========================
      HEADER + CATEGORY SELECT
  ========================= */}
  <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
    <h2 className="font-display text-4xl md:text-6xl">
      Service list
    </h2>

    <div className="flex flex-wrap gap-2">
      {["design", "build", "grow"].map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`border px-5 py-2.5 font-display text-xs uppercase tracking-[0.2em] transition-all ${
            activeCategory === category
              ? "border-flame bg-flame text-ink"
              : "border-white/20 text-mute hover:border-white/40 hover:text-bone"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  </div>

  {/* =========================
      SELECTED CATEGORY
      SUBCATEGORIES
  ========================= */}
  <div className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
    {categoryDescriptions
      .find((item) => item.category === activeCategory)
      ?.subcategories.map((sub, i) => (
        <Reveal
          key={sub.name}
          delay={(i % 4) * 0.06}
        >
          <motion.div
            whileHover={{ y: -6 }}
            className="h-full bg-ink p-8"
          >
            <span className="font-display text-xs tracking-[0.25em] text-flame">
              0{String(i + 1)}
            </span>

            <h3 className="mt-4 font-display text-xl">
              {sub.name}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-mute">
              {sub.description}
            </p>
          </motion.div>
        </Reveal>
      ))}
  </div>
</section>

      <section className="container-x pb-24 md:pb-32">
        <h2 className="font-display text-4xl md:text-6xl">FAQs</h2>
        <div className="mt-10 border-t border-white/10">
          {FAQS.map((f, i) => (
            <div key={f.q} className="border-b border-white/10">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-display text-xl md:text-2xl">{f.q}</span>
                <span
                  className={`shrink-0 text-2xl text-flame transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
              <motion.div
                initial={false}
                animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <p className="max-w-3xl pb-6 leading-relaxed text-mute">{f.a}</p>
              </motion.div>
            </div>
          ))}
        </div>

        <Link
          to="/contact"
          className="mt-12 inline-block bg-flame px-8 py-4 font-display text-xs uppercase tracking-[0.2em] text-ink transition-colors hover:bg-bone"
        >
          Request an estimate
        </Link>
      </section>
    </>
  );
}
