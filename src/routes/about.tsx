import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Counter, Reveal } from "@/components/motion-primitives";
import { PROCESS, STATS } from "@/lib/site-data";
import about from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About BuildHive Solutions — Design-Build Firm in Lahore" },
      {
        name: "description",
        content:
          "Twelve years of Pakistani construction experience: in-house architects, engineers and site teams delivering fixed-cost, on-time projects.",
      },
      { property: "og:title", content: "About BuildHive Solutions" },
      { property: "og:description", content: "In-house architects, engineers and site teams under one contract." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader kicker="About us" title="Built on accountability" />

      <section className="container-x grid gap-14 py-20 lg:grid-cols-2 lg:py-28">
        <Reveal>
          <img
            src={about}
            alt="Architectural drawing and scale ruler on a dark desk"
            width={1400}
            height={1000}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
        </Reveal>
        <Reveal delay={0.12}>
          <h2 className="font-display text-4xl leading-[0.95] md:text-5xl">
            From a two-man drafting room to <span className="text-flame">45+ people on site</span>
          </h2>
          <p className="mt-6 leading-relaxed text-mute">
            BuildHive Solutions started in 2014 doing structural drawings for other contractors. We watched too many
            good designs get butchered on site, so we started building them ourselves. Today we run design,
            costing, execution and post-handover care in-house.
          </p>
          <p className="mt-4 leading-relaxed text-mute">
            The model is simple: fixed scope in writing, weekly photographic progress reports, milestone-based
            billing and a snag list that gets closed before we invoice the final payment. No variation-order games.
          </p>
          <ul className="mt-8 space-y-3">
            {["Registered engineers on every site", "Written BOQ before mobilisation", "Weekly progress reporting", "One-year post-handover warranty"].map(
              (v) => (
                <li key={v} className="flex items-center gap-3 border-b border-white/10 pb-3 text-sm">
                  <span className="h-1.5 w-1.5 rotate-45 bg-flame" />
                  {v}
                </li>
              ),
            )}
          </ul>
        </Reveal>
      </section>

      <section className="border-y border-white/10 bg-ink-2">
        <div className="container-x grid grid-cols-2 divide-white/10 md:grid-cols-4 md:divide-x">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="px-2 py-12 text-center">
              <p className="font-display text-5xl text-flame">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-mute">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <h2 className="font-display text-4xl md:text-6xl">How we work</h2>
        <div className="mt-12 grid gap-px bg-white/10 md:grid-cols-4">
          {PROCESS.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.08} className="bg-ink p-8">
              <span className="text-xs tracking-[0.25em] text-flame">{p.s}</span>
              <h3 className="mt-3 font-display text-2xl">{p.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">{p.d}</p>
            </Reveal>
          ))}
        </div>
        <Link
          to="/contact"
          className="mt-12 inline-block bg-flame px-8 py-4 font-display text-xs uppercase tracking-[0.2em] text-ink transition-colors hover:bg-bone"
        >
          Book a consultation
        </Link>
      </section>
    </>
  );
}
