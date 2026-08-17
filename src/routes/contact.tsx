import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/motion-primitives";
import { COMPANY, SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact BuildHive Solutions — Get a Construction Quote" },
      {
        name: "description",
        content:
          "Tell us your plot size, location and budget. BuildHive Solutions replies with a written scope and estimate within 48 hours.",
      },
      { property: "og:title", content: "Contact BuildHive Solutions" },
      { property: "og:description", content: "Get a written construction scope and estimate within 48 hours." },
    ],
  }),
  component: Contact,
});

const field =
  "w-full border border-white/15 bg-ink-2 px-4 py-3.5 text-sm text-bone outline-none transition-colors placeholder:text-mute/70 focus:border-flame";

function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageHeader kicker="Contact" title="Tell us about the build" />

      <section className="container-x grid gap-14 py-20 lg:grid-cols-12 lg:py-28">
        <Reveal className="lg:col-span-5">
          <h2 className="font-display text-3xl md:text-4xl">Straight lines, fast answers</h2>
          <p className="mt-5 leading-relaxed text-mute">
            We answer every enquiry with a real human, usually the same day. For quotes, the more you tell us about
            plot size, location and finish level, the sharper the number.
          </p>

          <dl className="mt-10 space-y-6">
            {[
              ["Office", COMPANY.address],
              ["Phone", COMPANY.phone],
              ["Email", COMPANY.email],
              ["Hours", COMPANY.hours],
            ].map(([k, v]) => (
              <div key={k} className="border-b border-white/10 pb-4">
                <dt className="text-xs uppercase tracking-[0.25em] text-flame">{k}</dt>
                <dd className="mt-1.5 text-bone/90">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.12} className="lg:col-span-7">
          <form onSubmit={onSubmit} className="grid gap-4 border border-white/10 bg-ink-2 p-7 sm:grid-cols-2 md:p-10">
            <input required placeholder="Full name" className={field} />
            <input required type="tel" placeholder="Phone / WhatsApp" className={field} />
            <input required type="email" placeholder="Email address" className={`${field} sm:col-span-2`} />
            <input placeholder="Project location (city / society)" className={field} />
            <select defaultValue="" required className={field}>
              <option value="" disabled>
                Service needed
              </option>
              {SERVICES.map((s) => (
                <option key={s.n} value={s.t} className="bg-ink">
                  {s.t}
                </option>
              ))}
            </select>
            <textarea
              rows={5}
              placeholder="Plot size, budget range and anything else we should know"
              className={`${field} sm:col-span-2`}
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="bg-flame px-8 py-4 font-display text-xs uppercase tracking-[0.2em] text-ink sm:col-span-2"
            >
              {sent ? "Request received ✓" : "Send enquiry"}
            </motion.button>
            {sent && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-flame sm:col-span-2"
              >
                Thanks — we'll be in touch within 48 hours.
              </motion.p>
            )}
          </form>
        </Reveal>
      </section>
    </>
  );
}
