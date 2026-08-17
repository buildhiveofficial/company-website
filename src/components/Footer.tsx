import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { COMPANY, NAV, SERVICES } from "@/lib/site-data";
import { Reveal } from "./motion-primitives";

export function Footer() {
  return (
    <footer className="grain border-t border-white/10 bg-ink-2">
      <div className="container-x py-16 md:py-24">
        <Reveal>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <img
                src={logo}
                alt={`${COMPANY.name} logo`}
                width={240}
                height={64}
                loading="lazy"
                className="h-12 w-auto object-contain"
              />
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-mute">
                A Pakistani design-build firm turning plots into properties that perform — from first sketch to final snag.
              </p>
            </div>

            <div>
              <h4 className="text-xs tracking-[0.2em] text-flame">Navigate</h4>
              <ul className="mt-5 space-y-3">
                {NAV.map((n) => (
                  <li key={n.to}>
                    <Link to={n.to} className="text-sm text-mute transition-colors hover:text-bone">
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs tracking-[0.2em] text-flame">Services</h4>
              <ul className="mt-5 space-y-3">
                {SERVICES.slice(0, 5).map((s) => (
                  <li key={s.n} className="text-sm text-mute">
                    {s.t}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs tracking-[0.2em] text-flame">Contact</h4>
              <ul className="mt-5 space-y-3 text-sm text-mute">
                <li>{COMPANY.address}</li>
                <li>
                  <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="hover:text-bone">
                    {COMPANY.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${COMPANY.email}`} className="hover:text-bone">
                    {COMPANY.email}
                  </a>
                </li>
                <li>{COMPANY.hours}</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="overflow-hidden border-t border-white/10">
        <p className="container-x select-none py-6 font-display text-[13vw] leading-none text-white/5">
          BUILDHIVE
        </p>
      </div>

      <div className="container-x flex flex-col gap-2 border-t border-white/10 py-6 text-xs text-mute md:flex-row md:items-center md:justify-between">
        <span>
          © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </span>
        <span className="tracking-[0.2em] text-flame">{COMPANY.tagline.toUpperCase()}</span>
      </div>
    </footer>
  );
}
