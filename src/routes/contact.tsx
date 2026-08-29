import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/motion-primitives";
import { COMPANY, categoryDescriptions } from "@/lib/site-data";

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
      {
        property: "og:description",
        content: "Get a written construction scope and estimate within 48 hours.",
      },
    ],
  }),
  component: Contact,
});

const field =
  "w-full border border-white/15 bg-ink-2 px-4 py-3.5 text-sm text-bone outline-none transition-colors placeholder:text-mute/70 focus:border-flame";

function Contact() {
const [sent, setSent] = useState(false);
const [loading, setLoading] = useState(false);
const [selectedCategory, setSelectedCategory] = useState("");

  const selectedCategoryData = categoryDescriptions.find(
    (item) => item.category === selectedCategory,
  );

async function onSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();

  setLoading(true);
  setSent(false);

  const form = e.currentTarget;
  const formData = new FormData(form);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    location: formData.get("location"),
    category: formData.get("category"),
    subcategory: formData.get("subcategory"),
    message: formData.get("message"),
  };

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to send request.");
    }

    setSent(true);
    form.reset();
    setSelectedCategory("");
  } catch (error) {
    console.error(error);

    alert(
      error instanceof Error
        ? error.message
        : "Something went wrong. Please try again.",
    );
  } finally {
    setLoading(false);
  }
}

  return (
    <>
      <PageHeader kicker="Contact" title="Tell us about the build" />

      <section className="container-x grid gap-14 py-20 lg:grid-cols-12 lg:py-28">
        <Reveal className="lg:col-span-5">
          <h2 className="font-display text-3xl md:text-4xl">
            Straight lines, fast answers
          </h2>
          <p className="mt-5 leading-relaxed text-mute">
            We answer every enquiry with a real human, usually the same day.
            For quotes, the more you tell us about plot size, location and
            finish level, the sharper the number.
          </p>

          <dl className="mt-10 space-y-6">
            {[
              ["Office", COMPANY.address],
              ["Phone", COMPANY.phone],
              ["Email", COMPANY.email],
            ].map(([k, v]) => (
              <div key={k} className="border-b border-white/10 pb-4">
                <dt className="text-xs uppercase tracking-[0.25em] text-flame">
                  {k}
                </dt>
                <dd className="mt-1.5 text-bone/90">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.12} className="lg:col-span-7">
          <form
            onSubmit={onSubmit}
            className="grid gap-4 border border-white/10 bg-ink-2 p-7 sm:grid-cols-2 md:p-10"
          >
            {/* Full Name */}
            <input
              required
              name="name"
              placeholder="Full Name"
              className={field}
            />

            {/* Email Address */}
            <input
              required
              type="email"
              name="email"
              placeholder="Email Address"
              className={field}
            />

            {/* Phone Number */}
            <input
              required
              name="phone"
              type="tel"
              placeholder="Phone Number"
              className={field}
            />

            {/* Project Location */}
            <input
              required
              name="location"
              placeholder="Project Location"
              className={field}
            />

            {/* Category */}
            <select
              required
              name="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className={field}
            >
              <option value="" disabled>
                Category
              </option>

              {categoryDescriptions.map((item) => (
                <option
                  key={item.category}
                  value={item.category}
                  className="bg-ink"
                >
                  {item.category.charAt(0).toUpperCase() +
                    item.category.slice(1)}
                </option>
              ))}
            </select>

            {/* Subcategory */}
            <select
              required
              name="subcategory"
              disabled={!selectedCategoryData}
              defaultValue=""
              className={field}
            >
              <option value="" disabled>
                Subcategory
              </option>

              {selectedCategoryData?.subcategories.map((subcategory) => (
                <option
                  key={subcategory.name}
                  value={subcategory.name}
                  className="bg-ink"
                >
                  {subcategory.name}
                </option>
              ))}
            </select>

            {/* Message / Project Details */}
            <textarea
              required
               name="message"
              rows={5}
              placeholder="Tell us about your project"
              className={`${field} sm:col-span-2`}
            />

            <motion.button
  whileHover={{ scale: loading ? 1 : 1.02 }}
  whileTap={{ scale: loading ? 1 : 0.98 }}
  type="submit"
  disabled={loading}
  className="bg-flame px-8 py-4 font-display text-xs uppercase tracking-[0.2em] text-ink sm:col-span-2 disabled:cursor-not-allowed disabled:opacity-60"
>
  {loading
    ? "Sending..."
    : sent
      ? "Request received ✓"
      : "Send Project Request"}
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