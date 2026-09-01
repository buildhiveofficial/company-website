import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

export const COMPANY = {
  name: "BuildHive Solutions",
  tagline: "Design · Build · Grow",
  phone: "+92 301 5303063",
  email: "buildhiveofficial@gmail.com",
  address: "West Canal Road, Abdullah pur, Faisalabad Pakistan",
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
  
  },
  {
    id: "02",
    title: "Build",
    lead: "Grey structure to turnkey finish.",
    body: "Our own site teams, transparent BOQs and weekly progress reporting keep your project on schedule and on budget.",
  },
  {
    id: "03",
    title: "Grow",
    lead: "Property that keeps paying you back.",
    body: "Investment advisory, rental-ready fit-outs and resale positioning so your build performs as an asset, not just an address.",
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
  { value: 3, suffix: "svcs", label: "Design · Build · Grow" },
  { value: 1, suffix: "yrs", label: "Post-handover warranty" },
  { value: 100, suffix: "%", label: "Written scope, no hidden costs" },
  { value: 25, suffix: "+", label: "In-house team" },
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
  {
    q: "How do you price a project?",
    a: "We price projects based on the scope, plot size, specifications and finish level. Standard builds can be quoted per-square-foot, while custom projects are priced through a detailed BOQ. Everything is agreed in writing before work begins.",
  },

  {
    q: "Which cities do you cover?",
    a: "We work across Lahore, Islamabad, Rawalpindi and Karachi. For projects outside our active areas, our team can review the location and scope to determine the best way to support the build.",
  },

  {
    q: "Can you take over an existing or stalled project?",
    a: "Yes. We can assess incomplete or stalled construction, inspect the existing work, identify outstanding issues and prepare a clear condition report with a quotation for the remaining scope.",
  },

  {
    q: "How long does a typical project take?",
    a: "Project timelines depend on size, design, approvals and finish level. As a general guide, a 1-kanal turnkey home can take around 10–12 months, while interior and fit-out projects typically take 6–14 weeks.",
  },

  {
    q: "Do you handle design and construction together?",
    a: "Yes. BuildHive can manage the process from design and planning through construction, interiors and final handover, giving you one coordinated team throughout the project.",
  },

  {
    q: "How do you manage quality on site?",
    a: "Our projects are managed through structured site supervision, material checks and regular progress reviews. We focus on maintaining the agreed specifications, workmanship standards and project schedule.",
  },

  {
    q: "Can I get a detailed quotation before starting?",
    a: "Absolutely. Once we understand your requirements, our team prepares a clear scope and quotation so you can see what is included before making a commitment.",
  },

  {
    q: "How do I start a project with BuildHive?",
    a: "Simply send us your project details through the contact form. Share your location, plot size, requirements and preferred finish level, and our team will get back to you with the next steps.",
  },
];



export const categoryDescriptions = [
  {
    category: "design",
    subcategories: [
      {
        name: "ARCHITECTURAL DESIGN",
        description: "Thoughtful spaces shaped around people."
      },
      {
        name: "GREEN & SUSTAINABLE DESIGN",
        description: "Eco-conscious designs balancing beauty and efficiency."
      },
      {
        name: "INTERIOR DESIGN",
        description: "Refined interiors combining comfort, function, and character."
      },
      {
        name: "PRODUCT & INDUSTRIAL DESIGN",
        description: "Innovative products designed for practical everyday experiences."
      },
      {
        name: "URBAN DESIGN",
        description: "Connected environments designed for vibrant communities."
      }
    ]
  },

  {
    category: "build",
    subcategories: [
      {
        name: "COMMERCIAL CONSTRUCTION",
        description: "High-quality commercial spaces built for lasting performance."
      },
      {
        name: "CONTRACTOR & SPECIALIST SERVICES",
        description: "Expert construction services tailored to project needs."
      },
      {
        name: "PROJECT MANAGEMENT",
        description: "Projects managed efficiently from planning through completion."
      },
      {
        name: "RENOVATION & REMOLDING",
        description: "Transforming existing spaces with modern practical solutions."
      },
      {
        name: "RESIDENTIAL CONSTRUCTION",
        description: "Quality homes built around comfort and lasting value."
      }
    ]
  },

  {
    category: "grow",
    subcategories: [
      {
        name: "AI CONTENT CREATION",
        description: "AI-powered content created for faster brand growth."
      },
      {
        name: "BRANDING & CREATIVE",
        description: "Distinctive creative identities built for memorable brands."
      },
      {
        name: "SEO & DIGITAL ADVERTISING",
        description: "Data-driven campaigns designed to increase online visibility."
      },
      {
        name: "SOCIAL MEDIA MARKETING",
        description: "Engaging social strategies that build loyal audiences."
      },
      {
        name: "WEB & APP DEVELOPMENT",
        description: "Modern digital products built for scalable growth."
      }
    ]
  }
];


export   const projectData = {
  design: {
    categories: [
      {
        name: "ARCHITECTURAL DESIGN",
        slug: "architectural-design",
        projects: [
          {
            title: "ARCHITECTURAL DESIGN",
            image: "/design/ARCHITECTURAL DESIGN/1.jpg",
            slug: "luxury-villa",
          },
          {
            title: "Commercial Architecture",
            image: "/design/ARCHITECTURAL DESIGN/2.jfif",
            slug: "modern-house",
          },
          {
            title: "Industrial Architecture",
            image: "/design/ARCHITECTURAL DESIGN/3.jfif",
            slug: "classic-home",
          },
          {
            title: "Interior Architecture",
            image: "/design/ARCHITECTURAL DESIGN/4.jfif",
            slug: "luxury-villa",
          },
          {
            title: "Landscape Architecture",
            image: "/design/ARCHITECTURAL DESIGN/5.jfif",
            slug: "modern-house",
          },
          {
            title: "Classic Home",
            image: "/design/ARCHITECTURAL DESIGN/6.jfif",
            slug: "classic-home",
          },
        ],
      },

      {
        name: "GREEN & SUSTIANABLE DESIGN",
        slug: "commercial",
        projects: [
          {
            title: "GREEN & SUSTIANABLE DESIGN",
            image: "/design/GREEN & SUSTIANABLE DESIGN/1.jpg",
            slug: "office-tower",
          },
          {
            title: "Biophilic Design",
            image: "/design/GREEN & SUSTIANABLE DESIGN/2.jfif",
            slug: "shopping-mall",
          },
          {
            title: "Eco Friendly Architecture",
            image: "/design/GREEN & SUSTIANABLE DESIGN/3.jfif",
            slug: "office-tower",
          },
          {
            title: "Energy-Efficient Design",
            image: "/design/GREEN & SUSTIANABLE DESIGN/4.jfif",
            slug: "shopping-mall",
          },
          {
            title: "LEED & Green Certifications",
            image: "/design/GREEN & SUSTIANABLE DESIGN/5.jfif",
            slug: "office-tower",
          },
        ],
      },

      {
        name: "INTERIOR DESIGN",
        slug: "industrial",
        projects: [
          {
            title: "INTERIOR DESIGN",
            image: "/design/INTERIOR DESIGN/1.jfif",
            slug: "factory-design",
          },
          {
            title: "3D Visualization",
            image: "/design/INTERIOR DESIGN/2.jfif",
            slug: "factory-design",
          },
          {
            title: "Commercial Interior Design",
            image: "/design/INTERIOR DESIGN/3.jfif",
            slug: "factory-design",
          },
          {
            title: "Residential Interior Design",
            image: "/design/INTERIOR DESIGN/4.jfif",
            slug: "factory-design",
          },
          {
            title: "Space Design",
            image: "/design/INTERIOR DESIGN/5.jfif",
            slug: "factory-design",
          },
        ],
      },

      {
        name: "PRODUCT & INDUSTRIAL DESIGN",
        slug: "landscape",
        projects: [
          {
            title: "PRODUCT & INDUSTRIAL DESIGN",
            image: "/design/PRODUCT & INDUSTRIAL DESIGN/1.jfif",
            slug: "luxury-garden",
          },
          {
            title: "Concept & Prototype Design",
            image: "/design/PRODUCT & INDUSTRIAL DESIGN/2.jfif",
            slug: "luxury-garden",
          },
          {
            title: "Furniture & Fixture Design",
            image: "/design/PRODUCT & INDUSTRIAL DESIGN/3.jfif",
            slug: "luxury-garden",
          },
          {
            title: "Industrial Product Design",
            image: "/design/PRODUCT & INDUSTRIAL DESIGN/4.jpg",
            slug: "luxury-garden",
          },
        ],
      },

      {
        name: "URBAN DESIGN",
        slug: "interior",
        projects: [
          {
            title: "URBAN DESIGN",
            image: "/design/URBAN DESIGN/1.jpg",
            slug: "living-room",
          },
          {
            title: "Community Revitalization",
            image: "/design/URBAN DESIGN/2.jfif",
            slug: "living-room",
          },
          {
            title: "Master Planning",
            image: "/design/URBAN DESIGN/3.jfif",
            slug: "living-room",
          },
          {
            title: "Mixed-Use Development",
            image: "/design/URBAN DESIGN/4.jfif",
            slug: "living-room",
          },
          {
            title: "Public Space Design",
            image: "/design/URBAN DESIGN/5.jfif",
            slug: "living-room",
          },
          {
            title: "Street Scape & Transport",
            image: "/design/URBAN DESIGN/6.jpeg",
            slug: "living-room",
          },
        ],
      },
    ],
  },

  build: {
    categories: [
      {
        name: "COMMERCIAL CONSTRUCTION",
        slug: "luxury-villas",
        projects: [
          {
            title: "COMMERCIAL CONSTRUCTION",
            image: "/build/COMMERCIAL CONSTRUCTION/1.jpg",
            slug: "palm-villa",
          },
          {
            title: "Hospility & Hotels",
            image: "/build/COMMERCIAL CONSTRUCTION/2.jfif",
            slug: "palm-villa",
          },
          {
            title: "Industrial Facilities",
            image: "/build/COMMERCIAL CONSTRUCTION/3.jfif",
            slug: "palm-villa",
          },
          {
            title: "Office Buildings",
            image: "/build/COMMERCIAL CONSTRUCTION/4.jpg",
            slug: "palm-villa",
          },
          {
            title: "Retail & Shopping Spaces",
            image: "/build/COMMERCIAL CONSTRUCTION/5.jfif",
            slug: "palm-villa",
          },
        ],
      },

      {
        name: "CONTRACTOR & SPECIALIST SERVICES",
        slug: "commercial-buildings",
        projects: [
          {
            title: "CONTRACTOR & SPECIALIST SERVICES",
            image: "/build/CONTRACTOR & SPECIALIST SERVICES/1.jfif",
            slug: "business-plaza",
          },
          {
            title: "Civil & Structural Work",
            image: "/build/CONTRACTOR & SPECIALIST SERVICES/2.jfif",
            slug: "business-plaza",
          },
          {
            title: "Electrical Work",
            image: "/build/CONTRACTOR & SPECIALIST SERVICES/3.webp",
            slug: "business-plaza",
          },
          {
            title: "Plumbling & HVAC",
            image: "/build/CONTRACTOR & SPECIALIST SERVICES/4.jfif",
            slug: "business-plaza",
          },
          {
            title: "Specialist Subcontracting",
            image: "/build/CONTRACTOR & SPECIALIST SERVICES/5.jfif",
            slug: "business-plaza",
          },
        ],
      },

      {
        name: "PROJECT MANAGEMENT",
        slug: "industrial",
        projects: [
          {
            title: "PROJECT MANAGEMENT",
            image: "/build/PROJECT MANAGEMENT/1.jfif",
            slug: "warehouse",
          },
          {
            title: "Cost & Budget Control",
            image: "/build/PROJECT MANAGEMENT/2.jfif",
            slug: "warehouse",
          },
          {
            title: "End to End Oversight",
            image: "/build/PROJECT MANAGEMENT/3.jpeg",
            slug: "warehouse",
          },
          {
            title: "Quality Assurance",
            image: "/build/PROJECT MANAGEMENT/4.jfif",
            slug: "warehouse",
          },
          {
            title: "Timeline & Procurement",
            image: "/build/PROJECT MANAGEMENT/5.jpg",
            slug: "warehouse",
          },
        ],
      },

      {
        name: "RENOVATION & REMOLDING",
        slug: "renovation",
        projects: [
          {
            title: "Renovation and Remodeling",
            image: "/build/RENOVATION & REMOLDING/1.jfif",
            slug: "house-remodel",
          },
          {
            title: "FIT OUT AND FINISHING",
            image: "/build/RENOVATION & REMOLDING/2.jfif",
            slug: "house-remodel",
          },
          {
            title: "INTERIOR RENOVATION",
            image: "/build/RENOVATION & REMOLDING/3.jpg",
            slug: "house-remodel",
          },
          {
            title: "STRUCTURAL REMOLDINGS",
            image: "/build/RENOVATION & REMOLDING/4.jfif",
            slug: "house-remodel",
          },
        ],
      },

      {
        name: "RESIDENTIAL CONSTRUCTION",
        slug: "infrastructure",
        projects: [
          {
            title: "RESIDENTIAL CONSTRUCTION",
            image: "/build/RESIDENTIAL CONSTRUCTION/1.jfif",
            slug: "bridge-project",
          },
          {
            title: "Apartments & Housing Complexs",
            image: "/build/RESIDENTIAL CONSTRUCTION/2.jfif",
            slug: "bridge-project",
          },
          {
            title: "New Home Builds",
            image: "/build/RESIDENTIAL CONSTRUCTION/3.jpeg",
            slug: "bridge-project",
          },
          {
            title: "Villas & Luxury Home",
            image: "/build/RESIDENTIAL CONSTRUCTION/4.jfif",
            slug: "bridge-project",
          },
        ],
      },
    ],
  },

  grow: {
    categories: [
      {
        name: "AI CONTENT CREATION",
        slug: "brand-identity",
        projects: [
          {
            title: "AI CONTENT CREATION",
            image: "/grow/AI CONTENT CREATION/1.jpg",
            slug: "brand-kit",
          },
          {
            title: "AI Avatar Creation",
            image: "/grow/AI CONTENT CREATION/2.jpg",
            slug: "brand-kit",
          },
          {
            title: "AI Content Creation",
            image: "/grow/AI CONTENT CREATION/3.jpg",
            slug: "brand-kit",
          },
          {
            title: "AI Digital Twin",
            image: "/grow/AI CONTENT CREATION/4.jpg",
            slug: "brand-kit",
          },
          {
            title: "Brand Identity Videos",
            image: "/grow/AI CONTENT CREATION/5.jpg",
            slug: "brand-kit",
          },
          {
            title: "Faceless Content Production",
            image: "/grow/AI CONTENT CREATION/6.jpg",
            slug: "brand-kit",
          },
        ],
      },
      {
        name: "BRANDING & CREATIVE",
        slug: "website",
        projects: [
          {
            title: "BRANDING & CREATIVE",
            image: "/grow/BRANDING & CREATIVE/1.jpg",
            slug: "corporate-website",
          },
          {
            title: "Brand Identity & Guidelines",
            image: "/grow/BRANDING & CREATIVE/2.webp",
            slug: "corporate-website",
          },
          {
            title: "Graphic Design",
            image: "/grow/BRANDING & CREATIVE/3.jpg",
            slug: "corporate-website",
          },
          {
            title: "Logo Design",
            image: "/grow/BRANDING & CREATIVE/4.jpg",
            slug: "corporate-website",
          },
          {
            title: "Print & Marketing Collateral",
            image: "/grow/BRANDING & CREATIVE/5.jpg",
            slug: "corporate-website",
          },
          {
            title: "Rebranding",
            image: "/grow/BRANDING & CREATIVE/6.jpg",
            slug: "corporate-website",
          },
        ],
      },

      {
        name: "SEO & DIGITAL ADVERTISING",
        slug: "seo",
        projects: [
          {
            title: "SEO & DIGITAL ADVERTISING",
            image: "/grow/SEO & DIGITAL ADVERTISING/1.jpg",
            slug: "seo-campaign",
          },
          {
            title: "Analytics & Reporting",
            image: "/grow/SEO & DIGITAL ADVERTISING/2.jpg",
            slug: "seo-campaign",
          },
          {
            title: "Email Marketing",
            image: "/grow/SEO & DIGITAL ADVERTISING/3.jpg",
            slug: "seo-campaign",
          },
          {
            title: "Google & Meta Ads",
            image: "/grow/SEO & DIGITAL ADVERTISING/4.jpg",
            slug: "seo-campaign",
          },
          {
            title: "Search Engine Optimization",
            image: "/grow/SEO & DIGITAL ADVERTISING/5.jpg",
            slug: "seo-campaign",
          }
        ],
      },

      {
        name: "SOCIAL MEDIA MARKETING",
        slug: "social-media",
        projects: [
          {
            title: "SOCIAL MEDIA MARKETING",
            image: "/grow/SOCIAL MEDIA MARKETING/1.jpg",
            slug: "instagram-growth",
          },
          {
            title: "Community Management",
            image: "/grow/SOCIAL MEDIA MARKETING/2.jpg",
            slug: "instagram-growth",
          },
          {
            title: "Content Creation",
            image: "/grow/SOCIAL MEDIA MARKETING/3.jpg",
            slug: "instagram-growth",
          },
          {
            title: "Paid Social Advertising",
            image: "/grow/SOCIAL MEDIA MARKETING/4.jpg",
            slug: "instagram-growth",
          },
          {
            title: "Strategy & Content Planning",
            image: "/grow/SOCIAL MEDIA MARKETING/5.jpg",
            slug: "instagram-growth",
          },
        ],
      },

      {
        name: "WEB & APP DEVELOPMENT",
        slug: "ai-marketing",
        projects: [
          {
            title: "WEB & APP DEVELOPMENT",
            image: "/grow/WEB & APP DEVELOPMENT/1.jpg",
            slug: "ai-ads",
          },
          {
            title: "E-Commerce Solutions",
            image: "/grow/WEB & APP DEVELOPMENT/2.jpg",
            slug: "ai-ads",
          },
          {
            title: "Landing Page Design",
            image: "/grow/WEB & APP DEVELOPMENT/3.jpg",
            slug: "ai-ads",
          },
          {
            title: "Mobile App Design & Dev",
            image: "/grow/WEB & APP DEVELOPMENT/4.jpg",
            slug: "ai-ads",
          },
          {
            title: "UI_UX Design",
            image: "/grow/WEB & APP DEVELOPMENT/5.jpg",
            slug: "ai-ads",
          },
          {
            title: "Website Design & Development",
            image: "/grow/WEB & APP DEVELOPMENT/6.jpg",
            slug: "ai-ads",
          },
        ],
      },
    ],
  },
};
