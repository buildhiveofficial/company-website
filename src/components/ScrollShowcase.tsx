import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PILLARS } from "@/lib/site-data";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import { categoryDescriptions } from "@/lib/site-data";

gsap.registerPlugin(ScrollTrigger);

const IMAGES = [project1, project2, project3];

export function ScrollShowcase() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const rootEl = root.current;
    if (!rootEl) return;

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(
        rootEl.querySelectorAll("[data-panel]"),
      );

      const images = gsap.utils.toArray<HTMLElement>(
        rootEl.querySelectorAll("[data-shot]"),
      );

      const bar = rootEl.querySelector<HTMLElement>("[data-bar]");

      if (!images.length || !panels.length) return;

      gsap.set(images, {
        autoAlpha: 0,
        scale: 1.12,
      });

      gsap.set(images[0], {
        autoAlpha: 1,
        scale: 1,
      });

      gsap.set(panels.slice(1), {
        autoAlpha: 0,
        yPercent: 12,
      });

      const endValue = `+=${panels.length * 90}%`;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootEl,
          start: "top top",
          end: endValue,
          pin: true,
          scrub: 0.8,
        },
      });

      panels.forEach((panel, i) => {
        if (i === 0) return;

        tl.to(
          images[i - 1],
          {
            autoAlpha: 0,
            scale: 1.1,
            duration: 1,
          },
          i - 1 + 0.2,
        )
          .to(
            images[i],
            {
              autoAlpha: 1,
              scale: 1,
              duration: 1,
            },
            i - 1 + 0.2,
          )
          .to(
            panels[i - 1],
            {
              autoAlpha: 0,
              yPercent: -12,
              duration: 0.8,
            },
            i - 1 + 0.2,
          )
          .to(
            panel,
            {
              autoAlpha: 1,
              yPercent: 0,
              duration: 0.8,
            },
            i - 1 + 0.5,
          );
      });

      if (bar) {
        gsap.to(bar, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: rootEl,
            start: "top top",
            end: endValue,
            scrub: true,
          },
        });
      }
    }, rootEl);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={root}
      className="relative h-screen w-full overflow-hidden bg-ink"
    >
      <div className="absolute inset-0">
        {IMAGES.map((src, i) => (
          <img
            key={src}
            data-shot=""
            src={src}
            alt={`${PILLARS[i]?.title ?? "BuildHive"} stage`}
            width={1200}
            height={1500}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
      </div>

      <div className="container-x relative flex h-full items-center ">
        <div className="relative w-full max-w-2xl">
          {PILLARS.map((p) => (
            <div
              key={p.id}
              data-panel=""
              className="absolute inset-x-0 top-1/2 -translate-y-1/4 "
            >
              <span className="font-display text-sm tracking-[0.35em] text-flame">
                {p.id} / 03
              </span>

              <h2 className="mt-4 font-display text-6xl leading-[0.9] md:text-8xl">
                {p.title}
              </h2>

              <p className="mt-5 max-w-lg font-display text-lg text-bone/90 md:text-2xl">
                {p.lead}
              </p>

              <p className="mt-4 max-w-lg text-base leading-relaxed text-mute">
                {p.body}
              </p>

              <ul className="mt-7 grid max-w-lg grid-cols-2 gap-x-6 gap-y-3">
  {categoryDescriptions
    .find((item) => item.category === p.title.toLowerCase())
    ?.subcategories.map((sub) => (
      <li
        key={sub.name}
        className="border-b border-white/10 pb-2 text-sm text-bone/80"
      >
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-flame" />

          <span>{sub.name}</span>
        </div>
      </li>
    ))}
</ul>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-white/10">
        <div
          data-bar=""
          className="h-full origin-left scale-x-0 bg-flame"
        />
      </div>
    </section>
  );
}
