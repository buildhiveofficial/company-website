import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/motion-primitives";
import { projectData } from "@/lib/site-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Homes, Offices & Interiors by BuildHive Solutions" },
      {
        name: "description",
        content:
          "Selected residential, commercial, grey-structure and interior projects delivered by BuildHive Solutions in Lahore and Islamabad.",
      },
      {
        property: "og:title",
        content: "Projects — BuildHive Solutions",
      },
      {
        property: "og:description",
        content:
          "Residential, commercial and interior work delivered across Pakistan.",
      },
    ],
  }),
  component: Projects,
});

function Projects() {
  // =========================
  // MAIN CATEGORIES
  // =========================
  const mainCategories = useMemo(
    () => ["design", "build", "grow"],
    []
  );

  const [activeMain, setActiveMain] = useState("design");

  // =========================
  // CURRENT MAIN CATEGORY
  // =========================
  const currentMain = projectData[activeMain];

  // =========================
  // SUB CATEGORIES
  // =========================
  const subCategories = currentMain?.categories || [];

  const [activeSub, setActiveSub] = useState("All");

  // =========================
  // MAIN CATEGORY CHANGE
  // =========================
  const handleMainChange = (main) => {
    setActiveMain(main);
    setActiveSub("All");
  };

  // =========================
  // PROJECTS
  // =========================
  const list = useMemo(() => {
    if (!currentMain) return [];

    if (activeSub === "All") {
      return currentMain.categories.flatMap((category) =>
        category.projects.map((project) => ({
          ...project,
          cat: category.name,
        }))
      );
    }

    const selectedCategory = currentMain.categories.find(
      (category) => category.slug === activeSub
    );

    if (!selectedCategory) return [];

    return selectedCategory.projects.map((project) => ({
      ...project,
      cat: selectedCategory.name,
    }));
  }, [currentMain, activeSub]);

  return (
    <>
      {/* =========================
          EXISTING HERO
      ========================= */}
      <PageHeader
        kicker="Projects"
        title="Work you can walk into"
      />

      <section className="container-x py-16 md:py-24">

        {/* =========================
            MAIN CATEGORY BUTTONS
            ========================= */}
     {/* =========================
    MAIN CATEGORY — UNIQUE
========================= */}
<div className="relative mb-8 overflow-hidden border border-white/10 bg-ink-2 p-2">
  <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
    {mainCategories.map((category, index) => {
      const isActive = activeMain === category;

      return (
        <motion.button
          key={category}
          onClick={() => handleMainChange(category)}
          whileHover={{
            y: -2,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="relative overflow-hidden px-6 py-5 text-left"
        >
          {/* Animated active background */}
          {isActive && (
            <motion.div
              layoutId="activeMainCategory"
              className="absolute inset-0 bg-flame"
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 30,
              }}
            />
          )}

          {/* Hover background */}
          {!isActive && (
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-white/[0.04]"
            />
          )}

          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-4">

              {/* Number */}
              <span
                className={`font-display text-xs tracking-[0.2em] ${
                  isActive
                    ? "text-ink/60"
                    : "text-mute"
                }`}
              >
                0{index + 1}
              </span>

              {/* Category */}
              <span
                className={`font-display text-sm uppercase tracking-[0.25em] ${
                  isActive
                    ? "text-ink"
                    : "text-bone"
                }`}
              >
                {category}
              </span>
            </div>

            {/* Arrow */}
            <motion.span
              animate={{
                x: isActive ? 4 : 0,
                opacity: isActive ? 1 : 0.4,
              }}
              transition={{
                duration: 0.3,
              }}
              className={`text-lg ${
                isActive
                  ? "text-ink"
                  : "text-mute"
              }`}
            >
              →
            </motion.span>
          </div>

          {/* Bottom animated line */}
          <motion.div
            initial={false}
            animate={{
              scaleX: isActive ? 1 : 0,
            }}
            transition={{
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`absolute bottom-0 left-0 h-[2px] w-full origin-left ${
              isActive
                ? "bg-ink"
                : "bg-flame"
            }`}
          />
        </motion.button>
      );
    })}
  </div>
</div>

        {/* =========================
            SUB CATEGORY BUTTONS
            ========================= */}
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={() => setActiveSub("All")}
            className={`border px-5 py-2.5 font-display text-xs uppercase tracking-[0.2em] transition-colors ${
              activeSub === "All"
                ? "border-flame bg-flame text-ink"
                : "border-white/20 text-mute hover:text-bone"
            }`}
          >
            All
          </button>

          {subCategories.map((category) => (
            <button
              key={category.slug}
              onClick={() => setActiveSub(category.slug)}
              className={`border px-5 py-2.5 font-display text-xs uppercase tracking-[0.2em] transition-colors ${
                activeSub === category.slug
                  ? "border-flame bg-flame text-ink"
                  : "border-white/20 text-mute hover:text-bone"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* =========================
            PROJECT GRID
            ========================= */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {list.map((p, i) => (
            <Reveal
              key={`${p.slug}-${i}`}
              delay={(i % 2) * 0.1}
            >
              <motion.article
                whileHover="hov"
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-ink-2">

                  <motion.img
                    variants={{
                      hov: {
                        scale: 1.07,
                      },
                    }}
                    transition={{
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    src={p.image}
                    alt={p.title}
                    width={1200}
                    height={1500}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />

                  <motion.div
                    variants={{
                      hov: {
                        opacity: 1,
                      },
                    }}
                    initial={{
                      opacity: 0,
                    }}
                    className="absolute inset-0 bg-flame/25"
                  />

                  <span className="absolute left-4 top-4 bg-ink/80 px-3 py-1 font-display text-[10px] uppercase tracking-[0.2em] text-flame">
                    {p.cat}
                  </span>
                </div>

                <div className="flex items-end justify-between border-b border-white/10 py-5">
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl">
                      {p.title}
                    </h2>

                    <p className="text-sm text-mute">
                      {activeMain.toUpperCase()}
                    </p>
                  </div>

                  <p className="text-right text-xs text-mute">
                    PROJECT
                    <br />
                    {String(i + 1).padStart(2, "0")}
                  </p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        {/* =========================
            CTA — SAME AS BEFORE
            ========================= */}
        <div className="mt-16 border border-white/10 bg-ink-2 p-10 text-center">
          <h2 className="font-display text-3xl md:text-5xl">
            Your plot could be next
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-mute">
            Share the location and size — we'll come back with a feasibility
            note and a ballpark cost.
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