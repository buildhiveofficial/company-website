import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/motion-primitives";
import { PROJECTS } from "@/lib/site-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Homes, Offices & Interiors by BuildHive Solutions" },
      {
        name: "description",
        content:
          "Selected residential, commercial, grey-structure and interior projects delivered by BuildHive Solutions in Lahore and Islamabad.",
      },
      { property: "og:title", content: "Projects — BuildHive Solutions" },
      { property: "og:description", content: "Residential, commercial and interior work delivered across Pakistan." },
    ],
  }),
  component: Projects,
});

function Projects() {
  const cats = useMemo(() => ["All", ...new Set(PROJECTS.map((p) => p.cat))], []);
  const [active, setActive] = useState("All");
  const list = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.cat === active);

  return (
    <>
      <PageHeader kicker="Projects" title="Work you can walk into" />

      <section className="container-x py-16 md:py-24">
        <div className="flex flex-wrap gap-3">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`border px-5 py-2.5 font-display text-xs uppercase tracking-[0.2em] transition-colors ${
                active === c ? "border-flame bg-flame text-ink" : "border-white/20 text-mute hover:text-bone"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {list.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.1}>
              <motion.article whileHover="hov" className="group">
                <div className="relative aspect-[4/3] overflow-hidden bg-ink-2">
                  <motion.img
                    variants={{ hov: { scale: 1.07 } }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    src={p.img}
                    alt={`${p.title} — ${p.cat} project in ${p.loc}`}
                    width={1200}
                    height={1500}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <motion.div
                    variants={{ hov: { opacity: 1 } }}
                    initial={{ opacity: 0 }}
                    className="absolute inset-0 bg-flame/25"
                  />
                  <span className="absolute left-4 top-4 bg-ink/80 px-3 py-1 font-display text-[10px] uppercase tracking-[0.2em] text-flame">
                    {p.cat}
                  </span>
                </div>
                <div className="flex items-end justify-between border-b border-white/10 py-5">
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl">{p.title}</h2>
                    <p className="text-sm text-mute">{p.loc}</p>
                  </div>
                  <p className="text-right text-xs text-mute">
                    {p.area}
                    <br />
                    {p.year}
                  </p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 border border-white/10 bg-ink-2 p-10 text-center">
          <h2 className="font-display text-3xl md:text-5xl">Your plot could be next</h2>
          <p className="mx-auto mt-4 max-w-lg text-mute">
            Share the location and size — we'll come back with a feasibility note and a ballpark cost.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block bg-flame px-8 py-4 font-display text-xs uppercase tracking-[0.2em] text-ink transition-colors hover:bg-bone"
          >
            Start a project
          </Link>
        </div>
      </section>
    </>
  );
}
