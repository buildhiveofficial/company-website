import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

export const COMPANY = {
  name: "BuildHive Solutions",
  tagline: "Design · Build · Grow",
  phone: "+92 300 1234567",
  email: "info@buildhivesolutions.com",
  address: "Office 12, Gulberg III, Lahore, Pakistan",
  hours: "Mon – Sat, 9:00 AM – 7:00 PM",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  // { label: "Contact", to: "/contact" },
] as const;

export const PILLARS = [
  {
    id: "01",
    title: "Design",
    lead: "Architecture that earns its footprint.",
    body: "3D concepts, structural drawings, MEP layouts and interior schemes — approved on screen long before a single brick is laid.",
    points: ["Architectural 2D & 3D", "Structural engineering", "Interior & landscape", "Approval drawings"],
  },
  {
    id: "02",
    title: "Build",
    lead: "Grey structure to turnkey finish.",
    body: "Our own site teams, transparent BOQs and weekly progress reporting keep your project on schedule and on budget.",
    points: ["Grey structure", "Turnkey finishing", "Renovation & extension", "Project management"],
  },
  {
    id: "03",
    title: "Grow",
    lead: "Property that keeps paying you back.",
    body: "Investment advisory, rental-ready fit-outs and resale positioning so your build performs as an asset, not just an address.",
    points: ["Investment advisory", "Rental fit-out", "Facility management", "Resale positioning"],
  },
];

export const SERVICES = [
  { n: "01", t: "Architectural Design", d: "Concept to construction drawings with photoreal 3D visualisation." },
  { n: "02", t: "Grey Structure", d: "Foundations, RCC frame and masonry built to engineered specification." },
  { n: "03", t: "Turnkey Construction", d: "One contract, one team, keys in hand — finishing included." },
  { n: "04", t: "Interior Design", d: "Bespoke joinery, lighting design and material curation." },
  { n: "05", t: "Renovation", d: "Retrofits, extensions and structural rehabilitation of older builds." },
  { n: "06", t: "Commercial Fit-out", d: "Offices, clinics and retail delivered around your operating hours." },
  { n: "07", t: "Landscape & Exterior", d: "Facades, hardscape, pools and planting that finish the picture." },
  { n: "08", t: "Project Management", d: "Independent supervision, BOQ control and contractor coordination." },
];

export const PROJECTS = [
  { title: "Hive House 01", cat: "Residential", loc: "DHA Phase 6, Lahore", area: "1 Kanal", year: "2025", img: project1 },
  { title: "Meridian Offices", cat: "Commercial", loc: "Gulberg III, Lahore", area: "14,000 sqft", year: "2024", img: project2 },
  { title: "Warm Grid Interiors", cat: "Interior", loc: "Bahria Town, Lahore", area: "3,200 sqft", year: "2025", img: project3 },
  { title: "Site Alpha", cat: "Grey Structure", loc: "Islamabad", area: "2 Kanal", year: "2024", img: project4 },
];

export const STATS = [
  { value: 180, suffix: "+", label: "Projects delivered" },
  { value: 12, suffix: "yrs", label: "On Pakistani sites" },
  { value: 96, suffix: "%", label: "On-time handover" },
  { value: 45, suffix: "+", label: "In-house team" },
];

export const PROCESS = [
  { s: "Step 01", t: "Discovery", d: "Site visit, budget framing and a written scope you actually understand." },
  { s: "Step 02", t: "Design Lock", d: "Drawings, 3D walkthrough and BOQ signed off before mobilisation." },
  { s: "Step 03", t: "Execution", d: "Weekly photo reports, milestone billing, zero surprise invoices." },
  { s: "Step 04", t: "Handover", d: "Snag list cleared, warranties issued, maintenance plan attached." },
];

export const TESTIMONIALS = [
  { q: "They handed over three weeks early and the BOQ never moved. Rare in this market.", n: "Adnan R.", r: "1 Kanal residence, DHA" },
  { q: "The 3D matched the finished house almost exactly. That alone was worth the fee.", n: "Sana M.", r: "Villa owner, Bahria Town" },
  { q: "Our clinic fit-out ran at night so we never lost a working day.", n: "Dr. Faisal K.", r: "Commercial fit-out, Gulberg" },
];

export const FAQS = [
  { q: "How do you price a project?", a: "Either per-square-foot for standard grey/finish packages, or an itemised BOQ for custom work. Both are fixed in writing before we mobilise." },
  { q: "Do you work outside Lahore?", a: "Yes — we run active sites in Islamabad, Rawalpindi and Karachi with the same in-house supervision model." },
  { q: "Can you take over a stalled project?", a: "Frequently. We audit the existing structure, issue a condition report and quote only the remaining scope." },
  { q: "What is the typical timeline?", a: "A 1-kanal turnkey home averages 10–12 months. Interiors and fit-outs usually run 6–14 weeks." },
];
