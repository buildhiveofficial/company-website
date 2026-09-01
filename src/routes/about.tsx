
import { createFileRoute, Link } from "@tanstack/react-router";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { PageHeader } from "@/components/PageHeader";
import { Counter, Reveal } from "@/components/motion-primitives";
import { PROCESS, STATS } from "@/lib/site-data";

import about from "@/assets/about.jpg";
import abdullahCode from "@/assets/about.jpg";
import waleedCode from "@/assets/about.jpg";
import zeeshanCard from "@/assets/about.jpg";

gsap.registerPlugin(ScrollTrigger);

const TEAM = [
    {
    number: "01",
    name: "M. Zeeshan Aslam",
    role: "Architect | Civil Engineer, CEO",
    description:
      "Bringing architectural vision and civil engineering expertise together to deliver projects from concept through completion.",
    image: zeeshanCard,
  },
  {
    number: "02",
    name: "M. Abdullah Sheikh",
    role: "Co-Founder & Managing Director",
    description:
      "Leading BuildHive with a focus on accountability, project delivery and building a construction process clients can trust.",
    image: abdullahCode,
  },
  {
    number: "03",
    name: "Waleed Aamir",
    role: "Architect",
    description:
      "Focused on translating ideas into practical architectural solutions while keeping design, function and execution aligned.",
    image: waleedCode,
  },

];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About BuildHive Solutions — Design-Build Firm in Lahore",
      },
      {
        name: "description",
        content:
          "Twelve years of Pakistani construction experience: in-house architects, engineers and site teams delivering fixed-cost, on-time projects.",
      },
      {
        property: "og:title",
        content: "About BuildHive Solutions",
      },
      {
        property: "og:description",
        content:
          "In-house architects, engineers and site teams under one contract.",
      },
    ],
  }),
  component: About,
});

function About() {
  const teamRoot = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = teamRoot.current;

    if (!root) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-team-card]");
      const images = gsap.utils.toArray<HTMLElement>("[data-team-image]");
      const lines = gsap.utils.toArray<HTMLElement>("[data-team-line]");
      const numbers = gsap.utils.toArray<HTMLElement>("[data-team-number]");

      /*
       * ------------------------------------------------------------
       * TEAM SECTION INTRO ANIMATION
       * ------------------------------------------------------------
       */

      gsap.fromTo(
        "[data-team-kicker]",
        {
          opacity: 0,
          y: 30,
          letterSpacing: "0.7em",
        },
        {
          opacity: 1,
          y: 0,
          letterSpacing: "0.35em",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root,
            start: "top 75%",
          },
        },
      );

      gsap.fromTo(
        "[data-team-title]",
        {
          opacity: 0,
          y: 100,
          clipPath: "inset(100% 0 0 0)",
        },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0 0 0)",
          duration: 1.3,
          ease: "power4.out",
          scrollTrigger: {
            trigger: root,
            start: "top 70%",
          },
        },
      );

      gsap.fromTo(
        "[data-team-intro]",
        {
          opacity: 0,
          x: 60,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root,
            start: "top 65%",
          },
        },
      );

      /*
       * ------------------------------------------------------------
       * ORANGE LINE DRAW ANIMATION
       * ------------------------------------------------------------
       */

      lines.forEach((line) => {
        gsap.fromTo(
          line,
          {
            scaleX: 0,
            transformOrigin: "left center",
          },
          {
            scaleX: 1,
            duration: 1.5,
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: line,
              start: "top 90%",
            },
          },
        );
      });

      /*
       * ------------------------------------------------------------
       * TEAM CARDS SCROLL ANIMATION
       * ------------------------------------------------------------
       */

      cards.forEach((card, index) => {
        const direction = index % 2 === 0 ? -1 : 1;

        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: direction * 100,
            y: 80,
            rotateY: direction * 5,
            scale: 0.94,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            rotateY: 0,
            scale: 1,
            duration: 1.2,
            delay: index * 0.08,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              end: "top 45%",
              toggleActions: "play none none reverse",
            },
          },
        );

        /*
         * Card image parallax
         */

        const image = card.querySelector<HTMLElement>("[data-team-image]");

        if (image) {
          gsap.fromTo(
            image,
            {
              yPercent: -8,
              scale: 1.12,
            },
            {
              yPercent: 8,
              scale: 1.05,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        }
      });

      /*
       * ------------------------------------------------------------
       * CARD HOVER / 3D MOUSE EFFECT
       * ------------------------------------------------------------
       */

      const cleanupFunctions: (() => void)[] = [];

      cards.forEach((card) => {
        const image = card.querySelector<HTMLElement>("[data-team-image]");
        const number = card.querySelector<HTMLElement>("[data-team-number]");
        const content = card.querySelector<HTMLElement>("[data-team-content]");

        if (!image) return;

        const handleMouseMove = (event: MouseEvent) => {
          const rect = card.getBoundingClientRect();

          const mouseX = event.clientX - rect.left;
          const mouseY = event.clientY - rect.top;

          const rotateY = ((mouseX / rect.width) - 0.5) * 6;
          const rotateX = ((mouseY / rect.height) - 0.5) * -6;

          const moveX = ((mouseX / rect.width) - 0.5) * 12;
          const moveY = ((mouseY / rect.height) - 0.5) * 12;

          gsap.to(card, {
            rotateX,
            rotateY,
            transformPerspective: 1000,
            duration: 0.45,
            ease: "power2.out",
          });

          gsap.to(image, {
            x: moveX,
            y: moveY,
            scale: 1.08,
            duration: 0.5,
            ease: "power2.out",
          });

          if (number) {
            gsap.to(number, {
              x: moveX * 0.4,
              y: moveY * 0.4,
              duration: 0.5,
              ease: "power2.out",
            });
          }

          if (content) {
            gsap.to(content, {
              x: moveX * 0.15,
              y: moveY * 0.15,
              duration: 0.5,
              ease: "power2.out",
            });
          }
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.7,
            ease: "power3.out",
          });

          gsap.to(image, {
            x: 0,
            y: 0,
            scale: 1.02,
            duration: 0.7,
            ease: "power3.out",
          });

          if (number) {
            gsap.to(number, {
              x: 0,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
            });
          }

          if (content) {
            gsap.to(content, {
              x: 0,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
            });
          }
        };

        card.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseleave", handleMouseLeave);

        cleanupFunctions.push(() => {
          card.removeEventListener("mousemove", handleMouseMove);
          card.removeEventListener("mouseleave", handleMouseLeave);
        });
      });

      /*
       * ------------------------------------------------------------
       * MOBILE SAFETY
       * ------------------------------------------------------------
       */

      ScrollTrigger.refresh();

      return () => {
        cleanupFunctions.forEach((cleanup) => cleanup());
      };
    }, root);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      {/* ============================================================
          PAGE HEADER
      ============================================================ */}

      <PageHeader kicker="About us" title="Built on accountability" />

      {/* ============================================================
          INTRO
      ============================================================ */}

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
            From a two-man drafting room to{" "}
            <span className="text-flame">25+ people on site</span>
          </h2>

          <p className="mt-6 leading-relaxed text-mute">
           BuildHive Solutions brings design, construction, and digital growth together under one roof, because too many good projects fall apart when they're split across companies that don't talk to each other.
          </p>

          <p className="mt-4 leading-relaxed text-mute">
            Our model is simple: fixed scope in writing, weekly photographic progress reports, milestone-based billing, and a snag list that gets closed before we invoice the final payment.
          </p>

          <ul className="mt-8 space-y-3">
            {[
              "Registered engineers on every site",
              "Written BOQ before mobilisation",
              "Weekly progress reporting",
              "One-year post-handover warranty",
            ].map((v) => (
              <li
                key={v}
                className="flex items-center gap-3 border-b border-white/10 pb-3 text-sm"
              >
                <span className="h-1.5 w-1.5 rotate-45 bg-flame" />
                {v}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* ============================================================
          STATS
      ============================================================ */}

      <section className="border-y border-white/10 bg-ink-2">
        <div className="container-x grid grid-cols-2 divide-white/10 md:grid-cols-4 md:divide-x">
          {STATS.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className="px-2 py-12 text-center"
            >
              <p className="font-display text-5xl text-flame">
                <Counter to={s.value} suffix={s.suffix} />
              </p>

              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-mute">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============================================================
          TEAM SECTION
      ============================================================ */}

      <section
        ref={teamRoot}
        className="relative overflow-hidden border-b border-white/10 bg-ink py-24 md:py-32"
      >
        {/* Background decoration */}
        <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-flame/5 blur-3xl" />

        <div className="container-x relative">
          {/* SECTION HEADER */}

          <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-end">
            <div>
              <span
                data-team-kicker=""
                className="inline-block font-display text-xs uppercase tracking-[0.35em] text-flame"
              >
                The people behind the work
              </span>

              <h2
                data-team-title=""
                className="mt-5 max-w-xl font-display text-5xl leading-[0.9] md:text-7xl"
              >
                Meet the
                <span className="block text-flame">BuildHive team.</span>
              </h2>
            </div>

            <p
              data-team-intro=""
              className="max-w-xl text-base leading-relaxed text-mute md:ml-auto md:text-lg"
            >
              Great projects are not built by drawings alone. They are built
              by people who understand design, engineering, construction and
              the responsibility that comes with every decision.
            </p>
          </div>

          {/* Animated line */}

          <div
            data-team-line=""
            className="mt-14 h-px w-full bg-flame/30"
          />

          {/* TEAM CARDS */}

          <div className="mt-8 space-y-6">
            {TEAM.map((person) => (
              <article
                key={person.name}
                data-team-card=""
                className="group relative overflow-hidden border border-white/10 bg-ink-2 will-change-transform"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Hover glow */}

                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-flame/0 via-flame/0 to-flame/0 opacity-0 transition-opacity duration-700 group-hover:from-flame/5 group-hover:via-transparent group-hover:to-flame/10 group-hover:opacity-100" />

                <div className="grid min-h-[390px] md:grid-cols-[90px_1fr_320px] lg:grid-cols-[110px_1fr_390px]">
                  {/* NUMBER */}

                  <div className="relative hidden border-r border-white/10 p-7 md:block">
                    <span
                      data-team-number=""
                      className="inline-block font-display text-sm tracking-[0.25em] text-flame"
                    >
                      {person.number}
                    </span>

                    <div className="absolute bottom-8 left-7 h-2 w-2 rotate-45 bg-flame transition-all duration-500 group-hover:scale-150 group-hover:rotate-[135deg]" />
                  </div>

                  {/* CONTENT */}

                  <div
                    data-team-content=""
                    className="flex flex-col justify-center p-8 md:p-10 lg:p-14"
                  >
                    <span className="mb-4 font-display text-xs uppercase tracking-[0.25em] text-mute">
                      {person.role}
                    </span>

                    <h3 className="max-w-2xl font-display text-4xl leading-none transition-all duration-500 group-hover:translate-x-2 group-hover:text-flame md:text-5xl lg:text-6xl">
                      {person.name}
                    </h3>

                    <p className="mt-6 max-w-xl text-sm leading-relaxed text-mute md:text-base">
                      {person.description}
                    </p>

                    <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-bone/60">
                      <span className="h-px w-8 bg-flame transition-all duration-700 group-hover:w-16" />
                      BuildHive Solutions
                    </div>
                  </div>

                  {/* CARD / QR */}

                  
                </div>
              </article>
            ))}
          </div>

          {/* TEAM FOOTER */}

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-col justify-between gap-6 border-t border-white/10 pt-7 md:flex-row md:items-center">
              <p className="max-w-xl text-sm leading-relaxed text-mute">
                One team. One contract. One accountable partner from first
                sketch to final handover.
              </p>

              <Link
                to="/contact"
                className="group inline-flex w-fit items-center gap-4 font-display text-xs uppercase tracking-[0.2em] text-flame transition-colors hover:text-bone"
              >
                Work with us
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          PROCESS
      ============================================================ */}

      <section className="container-x py-20 md:py-28">
        <Reveal>
          <h2 className="font-display text-4xl md:text-6xl">
            How we work
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px bg-white/10 md:grid-cols-4">
          {PROCESS.map((p, i) => (
            <Reveal
              key={p.t}
              delay={i * 0.08}
              className="bg-ink p-8"
            >
              <span className="text-xs tracking-[0.25em] text-flame">
                {p.s}
              </span>

              <h3 className="mt-3 font-display text-2xl">{p.t}</h3>

              <p className="mt-3 text-sm leading-relaxed text-mute">
                {p.d}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <Link
            to="/contact"
            className="mt-12 inline-block bg-flame px-8 py-4 font-display text-xs uppercase tracking-[0.2em] text-ink transition-all duration-300 hover:-translate-y-1 hover:bg-bone hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)]"
          >
            Book a consultation
          </Link>
        </Reveal>
      </section>
    </>
  );
}
