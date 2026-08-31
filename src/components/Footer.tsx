
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
                A Pakistani design-build firm turning plots into properties
                that perform — from first sketch to final snag.
              </p>

              {/* Social Links */}
              <div className="mt-7 flex items-center gap-3">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/buildhiveofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center border border-white/10 text-mute transition-all duration-300 hover:-translate-y-1 hover:border-flame hover:bg-flame hover:text-ink"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-5 w-5"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="5"
                    />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="0.8"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/19PfwWho5F/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center border border-white/10 text-mute transition-all duration-300 hover:-translate-y-1 hover:border-flame hover:bg-flame hover:text-ink"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.66.34-1 1-1Z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/buildhive-solutions-864778419/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center border border-white/10 text-mute transition-all duration-300 hover:-translate-y-1 hover:border-flame hover:bg-flame hover:text-ink"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M5 3.5A2.5 2.5 0 1 1 5 8.5 2.5 2.5 0 0 1 5 3.5ZM3 10h4v11H3V10Zm6 0h3.8v1.5h.05c.53-1 1.83-2 3.77-2 4.03 0 4.38 2.65 4.38 6.1V21h-4v-4.8c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55V21H9V10Z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xs tracking-[0.2em] text-flame">
                Navigate
              </h4>

              <ul className="mt-5 space-y-3">
                {NAV.map((n) => (
                  <li key={n.to}>
                    <Link
                      to={n.to}
                      className="text-sm text-mute transition-colors hover:text-bone"
                    >
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs tracking-[0.2em] text-flame">
                Services
              </h4>

              <ul className="mt-5 space-y-3">
                {["Design", "Build", "Grow"].slice(0, 5).map((s) => (
                  <li key={s} className="text-sm text-mute">
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs tracking-[0.2em] text-flame">
                Contact
              </h4>

              <ul className="mt-5 space-y-3 text-sm text-mute">
                <li>{COMPANY.address}</li>

                <li>
                  <a
                    href={`https://wa.me/${COMPANY.phone.replace(/\s/g, "")}`}
                    className="hover:text-bone"
                  >
                    {COMPANY.phone}
                  </a>
                </li>

                <li>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="hover:text-bone"
                  >
                    {COMPANY.email}
                  </a>
                </li>
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

        <span className="tracking-[0.2em] text-flame">
          {COMPANY.tagline.toUpperCase()}
        </span>
      </div>
    </footer>
  );
}

