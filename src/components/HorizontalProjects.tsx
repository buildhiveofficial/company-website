import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "@tanstack/react-router";
import { PROJECTS } from "@/lib/site-data";

gsap.registerPlugin(ScrollTrigger);

export function HorizontalProjects() {
  const root = useRef<HTMLDivElement>(null);
  const rail = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const rootEl = root.current;
    const railEl = rail.current;

    if (!rootEl || !railEl) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const distance = () => railEl.scrollWidth - window.innerWidth + 80;

      const tween = gsap.to(railEl, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: rootEl,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      const cards = gsap.utils.toArray<HTMLElement>(
        rootEl.querySelectorAll("[data-card]"),
      );

      cards.forEach((card) => {
        const image = card.querySelector<HTMLImageElement>("img");

        if (!image) return;

        gsap.from(image, {
          scale: 1.25,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            containerAnimation: tween,
            start: "left right",
            end: "right left",
            scrub: true,
          },
        });
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={root}
      className="relative overflow-hidden bg-ink py-20 md:h-screen md:py-0"
    >
      <div className="flex h-full flex-col justify-center">
        <div className="container-x mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="font-display text-xs tracking-[0.35em] text-flame">
              Selected Work
            </span>

            <h2 className="mt-3 font-display text-5xl leading-[0.9] md:text-7xl">
              Built,<span className="text-stroke"> not rendered</span>
            </h2>
          </div>

          <Link
            to="/projects"
            className="border border-white/20 px-6 py-3 font-display text-xs uppercase tracking-[0.2em] text-bone transition-colors hover:border-flame hover:text-flame"
          >
            All projects
          </Link>
        </div>

        <div
          ref={rail}
          className="flex gap-6 overflow-x-auto px-5 pb-4 md:overflow-visible md:px-10 md:pb-0"
        >
          {PROJECTS.map((p, i) => (
            <article
              key={p.title}
              data-card=""
              className="group relative w-[80vw] shrink-0 sm:w-[60vw] md:w-[38vw] lg:w-[30vw]"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-ink-3">
                <img
                  src={p.img}
                  alt={`${p.title} — ${p.cat} project in ${p.loc}`}
                  width={1200}
                  height={1500}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />

                <span className="absolute left-4 top-4 bg-flame px-3 py-1 font-display text-[10px] uppercase tracking-[0.2em] text-ink">
                  {p.cat}
                </span>

                <span className="absolute right-4 top-4 font-display text-4xl text-white/25">
                  0{i + 1}
                </span>
              </div>

              <div className="flex items-end justify-between border-b border-white/10 py-4">
                <div>
                  <h3 className="font-display text-2xl">{p.title}</h3>
                  <p className="text-sm text-mute">{p.loc}</p>
                </div>

                <p className="text-right text-xs text-mute">
                  {p.area}
                  <br />
                  {p.year}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
