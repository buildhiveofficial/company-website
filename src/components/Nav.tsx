import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { NAV, COMPANY } from "@/lib/site-data";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const { scrollY } = useScroll();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useMotionValueEvent(scrollY, "change", (v) => setSolid(v > 40));

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid ? "border-b border-white/10 bg-ink/90 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="container-x flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <img
              src={logo}
              alt={`${COMPANY.name} logo`}
              width={280}
              height={60}
              className="h-10 w-auto object-contain md:h-12"
            />
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="group relative font-display text-xs uppercase tracking-[0.18em] text-bone/80 transition-colors hover:text-bone"
              >
                {n.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-flame transition-all duration-300 ${
                    pathname === n.to ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
            <Link
              to="/contact"
              className="border border-flame bg-flame px-5 py-2.5 font-display text-xs uppercase tracking-[0.18em] text-ink transition-colors hover:bg-transparent hover:text-flame"
            >
              Get a Quote
            </Link>
          </nav>

         <button
  aria-label="Toggle menu"
  onClick={() => setOpen((o) => !o)}
  className="
    menu-liquid group relative
    flex h-11 w-11 flex-col items-center justify-center
    gap-1.5 overflow-hidden
    rounded-[14px]
    border border-white/20
    lg:hidden
  "
>
  {/* Glass shine */}
  <span className="menu-liquid-shine" />

  {/* Soft bubble */}
  <span className="menu-liquid-bubble" />

  {/* Menu lines */}
  <span
    className={`relative z-10 block h-px w-5 bg-bone transition-all duration-300 ${
      open ? "translate-y-[3px] rotate-45" : ""
    }`}
  />

  <span
    className={`relative z-10 block h-px w-5 bg-bone transition-all duration-300 ${
      open ? "-translate-y-[3px] -rotate-45" : ""
    }`}
  />
</button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-ink px-6 lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {NAV.map((n, i) => (
                <motion.div
                  key={n.to}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + i * 0.07, duration: 0.5 }}
                >
                  <Link
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/10 py-4 font-display text-4xl uppercase text-bone"
                  >
                    <span className="mr-3 text-sm text-flame">0{i + 1}</span>
                    {n.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <p className="mt-10 text-sm text-mute">{COMPANY.phone}</p>
            <p className="text-sm text-mute">{COMPANY.email}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
