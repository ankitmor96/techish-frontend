/** Shared site content — Techish Innovations, a technology product company. */

export interface NavLink {
  label: string;
  href: string;
  tag?: string;
}

export interface NavGroup {
  label: string;
  items: NavLink[];
}

export const SOFTWARE_LINKS: NavLink[] = [
  { label: "Web Development", href: "/products", tag: "WEB" },
  { label: "Mobile Apps", href: "/products", tag: "MOB" },
  { label: "Custom Software", href: "/products", tag: "SOFT" },
  { label: "AI & Automation", href: "/products", tag: "AI" },
  { label: "Cloud & DevOps", href: "/products", tag: "CLD" },
  { label: "UI/UX Design", href: "/products", tag: "UX" },
];

export const COMPANY_LINKS: NavLink[] = [
  { label: "About Us", href: "/about", tag: "ABOUT" },
  { label: "Careers", href: "/careers", tag: "JOBS" },
];

export const NAV_GROUPS: NavGroup[] = [
  { label: "Software", items: SOFTWARE_LINKS },
  { label: "Company", items: COMPANY_LINKS },
];

/** The company's official email address — single source of truth used across the site. */
export const COMPANY_EMAIL = "careers@techishinnovation.com";

export const HOME_MARQUEE: string[] = [
  "AI",
  "Software",
  "Emerging Technology",
  "Business",
  "Civic Infrastructure",
  "Sustainability",
  "Industry",
];

export const ABOUT_MARQUEE: string[] = [
  "Products, Not Projects",
  "Research-Driven",
  "Real-World Problems",
  "Long-Term Technology",
  "AI",
  "Emerging Tech",
];

export const CONTACT_MARQUEE: string[] = [
  "Fast Response",
  "Direct Access",
  "Problem First",
  "No Sales Queue",
  "Partnership Minded",
];

export const CAREERS_MARQUEE: string[] = [
  "Product Company",
  "AI",
  "Emerging Tech",
  "Real Ownership",
  "Research & Build",
];

export const CRAFT_MARQUEE: string[] = [
  "AI Products",
  "Software Products",
  "Emerging Technology",
  "Civic Infrastructure",
  "Sustainability",
  "Industry",
];

export interface Service {
  icon: string;
  title: string;
  description: string;
  /** Longer, product-specific copy shown inside the Explore modal. */
  modal?: string;
  chips?: string[];
  cta?: string;
  href: string;
}

/** Home "What We're Building" product portfolio — 01 AI · 02 Civic Infrastructure · 03 Circular Economy · 04 Skills */
export const HOME_SERVICES: Service[] = [
  {
    icon: "01",
    title: "AI Employees",
    description:
      "AI systems that don't just answer questions — they understand your business, execute workflows, and help you make better decisions.",
    chips: ["AI Agents", "Automation", "Business Intelligence"],
    cta: "Explore AI Employee",
    modal:
      "AI systems that don't just answer questions — they understand the business, execute workflows end to end, and surface the right decision at the right time. Built to work alongside your team, not replace it.",
    href: "/products",
  },
  {
    icon: "02",
    title: "Civic Alert",
    description:
      "Intelligent infrastructure that helps cities communicate critical road, incident, and public-safety information with the people who need it.",
    chips: ["GovTech", "Geospatial", "Real-Time Alerts"],
    cta: "Explore Civic Alert",
    modal:
      "Intelligent infrastructure that helps cities communicate critical road, incident, and public-safety information with the people who need it — in real time, when it matters most.",
    href: "/products",
  },
  {
    icon: "03",
    title: "EV Circular",
    description:
      "Building technology for the lifecycle of electric vehicles.",
    chips: ["Circular Economy", "EV Lifecycle", "Sustainability"],
    cta: "Explore EV Circular",
    modal:
      "Technology for the full lifecycle of electric vehicles — extending usable life, recovering value, and keeping EVs in circulation instead of landfill.",
    href: "/products",
  },
  {
    icon: "04",
    title: "Skill-Based Networks",
    description:
      "Technology built around skill-based networks — one of the four opportunities our products are designed for.",
    chips: ["Skill-Based Networks", "Skills", "Emerging Technology"],
    cta: "Explore Skill-Based Networks",
    modal:
      "Networks built around what people can actually do — connecting verified skills to real opportunities without the noise of traditional platforms.",
    href: "/products",
  },
];

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const HOME_PROCESS: ProcessStep[] = [
  {
    step: "Step 01",
    title: "Research",
    description:
      "We study a real problem in its real context — the domain, the constraints, the people affected.",
  },
  {
    step: "Step 02",
    title: "Prototype",
    description:
      "Early prototypes test whether technology can genuinely solve the problem before we commit.",
  },
  {
    step: "Step 03",
    title: "Build",
    description:
      "Production engineering turns validated prototypes into reliable, real-world products.",
  },
  {
    step: "Step 04",
    title: "Ship & Iterate",
    description:
      "We ship into the real world, learn from actual use, and keep improving the product.",
  },
];

export const CRAFT_PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Research",
    description:
      "Study the problem deeply — in its real-world context, not just on paper.",
  },
  {
    step: "02",
    title: "Prototype",
    description:
      "Build early versions to test whether technology can actually solve it.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Engineer the product with production quality from the first line of code.",
  },
  {
    step: "04",
    title: "Ship & Iterate",
    description:
      "Release into the real world, learn from it, and keep improving the product.",
  },
];

export const CONTACT_PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Share the Problem",
    description:
      "Tell us the real-world problem you're looking at — a conversation, not a questionnaire.",
  },
  {
    step: "02",
    title: "We Explore It Together",
    description:
      "Our team looks at the problem with you and identifies where technology can genuinely help.",
  },
  {
    step: "03",
    title: "We Map the Path",
    description:
      "Research, prototype, build — we outline how a solution could move from idea to product.",
  },
];

export const CAREERS_PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Apply",
    description:
      "Send your application with a short note about the problems you want to work on.",
  },
  {
    step: "02",
    title: "Intro Call",
    description:
      "A relaxed conversation to learn about you and share more about our products and team.",
  },
  {
    step: "03",
    title: "Technical Conversation",
    description:
      "A practical discussion relevant to the actual work — no trick questions.",
  },
  {
    step: "04",
    title: "Offer & Onboarding",
    description:
      "A clear offer and structured onboarding so you can contribute to the product quickly.",
  },
];

export interface StatItem {
  value: string;
  label: string;
}

export const HOME_STATS: StatItem[] = [
  { value: "6", label: "Core service areas" },
  { value: "100%", label: "Client-focused delivery" },
  { value: "24h", label: "Average response time" },
];

export const ABOUT_JOURNEY = [
  {
    step: "The Start",
    title: "Engineering Roots",
    description:
      "Techish Innovations began with engineers who wanted to build their own technology — not just deliver someone else's roadmap.",
  },
  {
    step: "The Shift",
    title: "From Services to Products",
    description:
      "Engineering capability became the engine for a product company: tools for building, testing, and shipping our own technology.",
  },
  {
    step: "The Focus",
    title: "Real-World Problems",
    description:
      "We chose our focus: AI, software, and emerging technology for business, civic infrastructure, sustainability, and industry.",
  },
  {
    step: "Today",
    title: "A Technology Product Company",
    description:
      "Techish Innovations builds its own technology products — solving complex problems with long-term technology creation.",
  },
] as const;

export const ABOUT_PRINCIPLES = [
  {
    step: "01",
    title: "Problems Before Technology",
    description:
      "We start with a real problem worth solving. Technology is the means, never the point.",
  },
  {
    step: "02",
    title: "Products, Not Projects",
    description:
      "We build technology meant to live and improve over time — not one-off deliverables that end at launch.",
  },
  {
    step: "03",
    title: "Research-Driven Building",
    description:
      "Applied research and prototyping come before full-scale build — so the product is grounded in evidence, not assumptions.",
  },
  {
    step: "04",
    title: "Long-Term Technology Creation",
    description:
      "We create technology for the long term — products designed to keep solving real problems as the world changes.",
  },
] as const;

export const ABOUT_SDE_POINTS = [
  {
    title: "Problem-First Product Development",
    description:
      "Every product starts with a real problem — in business, civic infrastructure, sustainability, or industry. We build from the problem outward, not from the technology inward.",
  },
  {
    title: "AI, Software & Emerging Technology",
    description:
      "Our product portfolio concentrates on applied AI, software products, and emerging technology — the areas where we see the biggest potential for real-world impact.",
  },
  {
    title: "Research Meets Engineering",
    description:
      "Applied research and serious engineering sit in the same team. Ideas are prototyped, tested, and hardened into production technology.",
  },
  {
    title: "Long-Term Technology Creation",
    description:
      "We build products intended to last — maintained, improved, and extended over time as the problems they solve evolve.",
  },
] as const;

export const CRAFT_STANDARDS = [
  {
    title: "Code Review, Always",
    description:
      "Every change is reviewed by a second engineer before it ships — no exceptions.",
  },
  {
    title: "Automated Testing",
    description:
      "Unit, integration, and end-to-end tests catch regressions before your users ever do.",
  },
  {
    title: "Security-First Architecture",
    description:
      "We design with secure defaults from day one, not bolt security on after launch.",
  },
  {
    title: "Continuous Improvement",
    description:
      "Post-launch monitoring and iteration keep performance and reliability high over time.",
  },
] as const;

export const CRAFT_PITFALLS = {
  bad: [
    "Building technology first and hunting for a problem later",
    "Skipping research and prototyping to rush to market",
    "Products designed for demos instead of real-world use",
    "Treating launch as the finish line instead of the starting point",
  ],
  good: [
    "A real problem identified and validated before technology is chosen",
    "Applied research and prototypes that de-risk the product build",
    "Products engineered for real-world conditions, not just demos",
    "Post-launch iteration driven by how the product is actually used",
  ],
} as const;

export const HOME_WHY = [
  {
    title: "Built by Engineers",
    description:
      "Techish Innovations was founded by experienced engineers — engineering capability sits at the core of the product company.",
  },
  {
    title: "Problem-First, Always",
    description:
      "Every product starts from a real-world problem worth solving. Technology follows the problem, not hype.",
  },
  {
    title: "Research Meets Engineering",
    description:
      "Applied research and prototyping are part of how we build — ideas are tested before they're scaled.",
  },
  {
    title: "In It for the Long Term",
    description:
      "We build long-term technology — products that are maintained, improved, and trusted over time.",
  },
] as const;

export const INDUSTRIES = [
  {
    title: "Business",
    description:
      "Products that solve operational and commercial problems for organizations of every size.",
  },
  {
    title: "Civic Infrastructure",
    description:
      "Technology that supports public systems and the infrastructure communities rely on.",
  },
  {
    title: "Sustainability",
    description:
      "Products aimed at environmental and resource challenges with measurable impact.",
  },
  {
    title: "Industry",
    description:
      "Applied technology for industrial problems — from the field to the factory floor.",
  },
  {
    title: "AI & Data",
    description:
      "Applied intelligence that turns complex data into decisions and action.",
  },
  {
    title: "Emerging Technology",
    description:
      "Exploring new technology where it can genuinely move the needle on real problems.",
  },
] as const;

export const ENGAGEMENTS = [
  {
    badge: "Our product portfolio",
    title: "Products We Build",
    description:
      "AI, software, and emerging technology products we design, engineer, and ship ourselves — aimed at real problems in business, civic infrastructure, sustainability, and industry.",
    points: [
      "Problem-first product selection",
      "Research-driven development",
      "Long-term product ownership",
    ],
  },
  {
    badge: "How we work with others",
    title: "Collaboration & Partnerships",
    description:
      "We partner with organizations that share a problem worth solving — bringing our product practice to shared technology.",
    points: [
      "Joint product development",
      "Direct access to our engineers",
      "Shared long-term vision",
    ],
  },
] as const;

export const PARTNERSHIP = [
  {
    title: "We Build Our Own Technology",
    description:
      "Techish Innovations creates its own AI, software, and emerging technology products — from research and prototyping through production engineering.",
  },
  {
    title: "Problem-Focused Innovation",
    description:
      "We choose problems in business, civic infrastructure, sustainability, and industry — then build the technology those problems deserve.",
  },
  {
    title: "Built for the Long Term",
    description:
      "Our products are long-term technology: maintained, improved, and extended as the problems they solve evolve.",
  },
] as const;

export const HOME_FAQS = [
  {
    question: "What does Techish Innovations actually build?",
    answer:
      "We are a technology product company. We build AI, software, and emerging technology products designed to solve complex problems across business, civic infrastructure, sustainability, and industry.",
  },
  {
    question: "Is Techish a product company or a software agency?",
    answer:
      "A product company. We build our own technology products — engineering capability supports the product story rather than being the story.",
  },
  {
    question: "Which focus areas do your products target?",
    answer:
      "Our products concentrate on real-world problems across four domains: business, civic infrastructure, sustainability, and industry.",
  },
  {
    question: "How does the product development process work?",
    answer:
      "Research the problem, prototype the solution, build the product, and iterate in the real world. Applied research and production engineering sit in the same team.",
  },
] as const;

export const CAREERS_LOOKFOR = [
  {
    title: "Problem Curiosity",
    description:
      "You're drawn to how real things work — businesses, systems, cities, industry — and why they break.",
  },
  {
    title: "Product Mindset",
    description:
      "You think in terms of products that solve problems, not tickets that get closed.",
  },
  {
    title: "Research Inclination",
    description:
      "You like digging into a problem domain before jumping to a solution.",
  },
  {
    title: "Engineering Craft",
    description:
      "You care about building things properly — technology that holds up in the real world.",
  },
] as const;

export const CAREERS_WHY = [
  {
    title: "Work on Real Products",
    description:
      "You'll contribute to technology products built for real-world problems — business, civic, sustainability, industry.",
  },
  {
    title: "Research & Build Culture",
    description:
      "Applied research, prototyping, and production engineering are all part of the same practice.",
  },
  {
    title: "Ownership From Day One",
    description:
      "We trust people with real responsibility early. You'll own features, decisions, and outcomes.",
  },
  {
    title: "Room to Explore",
    description:
      "Emerging technology moves fast — we support continued learning and exploration as part of the job.",
  },
] as const;

export const CAREERS_BENEFITS = [
  {
    title: "Remote-First Flexibility",
    description:
      "Work from wherever you're most productive, with async-friendly collaboration.",
  },
  {
    title: "Real Growth Opportunities",
    description:
      "Take on meaningful projects and grow your skills faster than a typical agency role.",
  },
  {
    title: "Genuine Ownership",
    description:
      "You'll own features and decisions, not just tickets — your input shapes the product.",
  },
  {
    title: "Competitive Compensation",
    description:
      "Fair, transparent pay that reflects your experience and the value you bring.",
  },
] as const;

export interface Job {
  category: string;
  title: string;
  description: string;
  location: string;
  type: string;
}

export const JOBS: Job[] = [
  {
    category: "Engineering",
    title: "AI Engineer",
    description:
      "Build applied AI systems for our products — from prototype to production.",
    location: "Remote",
    type: "Full-Time",
  },
  {
    category: "Product",
    title: "Product Engineer",
    description:
      "Own product features end to end — research, build, ship, and iterate with the team.",
    location: "Remote",
    type: "Full-Time",
  },
  {
    category: "Research",
    title: "Technology Researcher",
    description:
      "Explore emerging technology and validate which real-world problems it can actually solve.",
    location: "Remote",
    type: "Full-Time",
  },
];

export const CAREERS_CULTURE = [
  {
    title: "Product-Company Culture",
    description:
      "We build our own technology — decisions are made close to the product.",
  },
  {
    title: "Research Matters",
    description:
      "Understanding the problem is treated as real work, not a nice-to-have.",
  },
  {
    title: "Collaborative by Default",
    description:
      "Small teams, shared context, and open discussion of what we're building and why.",
  },
  {
    title: "Room to Explore",
    description:
      "Emerging technology is part of the roadmap — curiosity is encouraged.",
  },
] as const;

export const CAREERS_FAQS = [
  {
    question: "Do you accept remote applicants from anywhere?",
    answer:
      "Yes — we're a remote-first team and welcome applicants from any location that allows for reasonable timezone overlap with the team.",
  },
  {
    question: "What if there's no open role that matches my skills?",
    answer:
      "Reach out anyway. We keep a shortlist of promising candidates in mind for when a matching role opens up.",
  },
  {
    question: "How long does the hiring process usually take?",
    answer:
      "Most candidates go from application to offer within two to three weeks, depending on scheduling.",
  },
] as const;

export const CAREERS_POLICY_LINES = [
  "→ evaluated by ........ [skill, judgment, character]",
  "→ background .......... [never a factor]",
  "→ status .............. [equal opportunity employer]",
] as const;

export interface ContactChannel {
  title: string;
  description: string;
  tag?: string;
}

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    title: "Email",
    description:
      "Best for detailed proposals, partnership ideas, and anything worth keeping in writing.",
    tag: "RECOMMENDED",
  },
  {
    title: "Video Call",
    description:
      "Best for exploring a problem together and finding where technology can help.",
  },
  {
    title: "Product Updates",
    description:
      "Follow our products and research as they move from prototype to production.",
  },
];

export const CONTACT_POINTS = [
  {
    title: "Fast Response",
    description:
      "Every message answered within one business day",
  },
  {
    title: "Direct Access",
    description:
      "Talk directly with the people building our technology",
  },
  {
    title: "Problem First",
    description:
      "Start with the problem — we'll bring the technology thinking",
  },
  {
    title: "Partnership Minded",
    description:
      "Collaborations built around shared, long-term goals",
  },
  {
    title: "No Sales Queue",
    description: "A real conversation, not a pitch",
  },
] as const;

