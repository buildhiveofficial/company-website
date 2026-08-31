import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { ScrollShowcase } from "@/components/ScrollShowcase";
import { HorizontalProjects } from "@/components/HorizontalProjects";
import { Counter, Marquee, MaskWords, Reveal } from "@/components/motion-primitives";
import about from "@/assets/about.jpg";
import { COMPANY, PROCESS, SERVICES, STATS, TESTIMONIALS } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BuildHive Solutions — Design, Build & Grow Contractors in Pakistan" },
      {
        name: "description",
        content:
          "BuildHive Solutions is a Lahore-based design-build firm delivering turnkey homes, commercial spaces and interiors with fixed BOQs and on-time handover.",
      },
      { property: "og:title", content: "BuildHive Solutions — Design · Build · Grow" },
      {
        property: "og:description",
        content: "Turnkey construction, architectural design and interiors across Pakistan.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />

      <Marquee items={["Design", "Build", "Grow", "Turnkey", "Interiors", "Grey Structure"]} />

      {/* Intro */}
      <section className="container-x py-24 md:py-36">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="font-display text-xs tracking-[0.35em] text-flame">Who we are</span>
            <h2 className="mt-5 font-display text-4xl leading-[0.95] md:text-6xl">
              <MaskWords text="A contractor that thinks like an architect" />
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-mute">
              Most projects fail between the drawing and the site. BuildHive removes that gap: the people who
              design your building are the people who cost it, supervise it and hand it over. One contract, one
              accountable team, one number you can hold us to.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {PROCESS.slice(0, 2).map((p) => (
                <Reveal key={p.t} className="border-l border-flame pl-5">
                  <span className="text-xs tracking-[0.25em] text-flame">{p.s}</span>
                  <h3 className="mt-2 font-display text-2xl">{p.t}</h3>
                  <p className="mt-2 text-sm text-mute">{p.d}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="lg:col-span-5" delay={0.15}>
            <div className="relative">
              <img
                src={about}
                alt="Architectural drawings on a dark desk"
                width={1400}
                height={1000}
                loading="lazy"
                className="aspect-4/3 w-full object-cover"
              />
              <div className="absolute -bottom-6 -left-6 hidden bg-flame px-7 py-6 sm:block">
                <p className="font-display text-4xl text-ink">10+</p>
                <p className="text-xs uppercase tracking-[0.2em] text-ink/80">Years on site</p>
              </div>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {PROCESS.slice(2,4).map((p) => (
                <Reveal key={p.t} className="border-l border-flame pl-5">
                  <span className="text-xs tracking-[0.25em] text-flame">{p.s}</span>
                  <h3 className="mt-2 font-display text-2xl">{p.t}</h3>
                  <p className="mt-2 text-sm text-mute">{p.d}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pinned Design / Build / Grow */}
      <ScrollShowcase />

      {/* Stats */}
      <section className="border-y border-white/10 bg-ink-2">
        <div className="container-x grid grid-cols-2 divide-white/10 md:grid-cols-4 md:divide-x">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="px-2 py-12 text-center">
              <p className="font-display text-5xl text-flame md:text-6xl">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-mute">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="container-x py-24 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-5xl leading-[0.9] md:text-7xl">
            What we <span className="text-flame">deliver</span>
          </h2>
          <Link
            to="/services"
            className="border border-white/20 px-6 py-3 font-display text-xs uppercase tracking-[0.2em] transition-colors hover:border-flame hover:text-flame"
          >
            All services
          </Link>
        </div>

        <div className="mt-14 border-t border-white/10">
          {SERVICES.slice(0, 6).map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <motion.div
                whileHover={{ x: 14 }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                className="group grid grid-cols-12 items-center gap-4 border-b border-white/10 py-7"
              >
                <span className="col-span-2 font-display text-sm text-flame md:col-span-1">{s.n}</span>
                <h3 className="col-span-10 font-display text-2xl transition-colors group-hover:text-flame md:col-span-4 md:text-3xl">
                  {s.t}
                </h3>
                <p className="col-span-12 text-sm text-mute md:col-span-7">{s.d}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Horizontal project rail */}
      <HorizontalProjects />

      {/* Testimonials */}
      <section className="container-x py-24 md:py-32">
        <span className="font-display text-xs tracking-[0.35em] text-flame">Client voices</span>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.n} delay={i * 0.1}>
              <div className="flex h-full flex-col justify-between border border-white/10 bg-ink-2 p-8 transition-colors hover:border-flame/60">
                <p className="font-display text-xl leading-snug normal-case">“{t.q}”</p>
                <div className="mt-8">
                  <p className="font-display text-sm text-flame">{t.n}</p>
                  <p className="text-xs text-mute">{t.r}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="grain relative overflow-hidden border-t border-white/10 bg-flame">
        <div className="container-x py-20 text-center md:py-28">
          <h2 className="font-display text-5xl leading-[0.9] text-ink md:text-8xl">
            <MaskWords text="Let's break ground." />
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-ink/80">
            Send us your plot size, location and budget range. You'll get a written scope and estimate back within
            48 hours — no obligation.
          </p>
          <Link
            to="/contact"
            className="mt-9 inline-block bg-ink px-9 py-4 font-display text-xs uppercase tracking-[0.2em] text-bone transition-transform hover:scale-105"
          >
            Talk to {COMPANY.name.split(" ")[0]}
          </Link>
        </div>
      </section>
    </>
  );
}
