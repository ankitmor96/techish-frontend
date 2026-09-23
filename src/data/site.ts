/** Shared site content, mirrors the reference site's structure. */

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
  { label: "Web Development", href: "/our-craft", tag: "WEB" },
  { label: "Mobile Apps", href: "/our-craft", tag: "MOB" },
  { label: "Custom Software", href: "/our-craft", tag: "SOFT" },
  { label: "AI & Automation", href: "/our-craft", tag: "AI" },
  { label: "Cloud & DevOps", href: "/our-craft", tag: "CLD" },
  { label: "UI/UX Design", href: "/our-craft", tag: "UX" },
];

export const COMPANY_LINKS: NavLink[] = [
  { label: "About Us", href: "/about", tag: "ABOUT" },
  { label: "Our Work", href: "/our-work", tag: "WORK" },
  { label: "Blog", href: "/blog", tag: "BLOG" },
  { label: "Careers", href: "/careers", tag: "JOBS" },
];

export const NAV_GROUPS: NavGroup[] = [
  { label: "Software", items: SOFTWARE_LINKS },
  { label: "Company", items: COMPANY_LINKS },
];

export const HOME_MARQUEE: string[] = [
  "Scalable Architecture",
  "Secure by Design",
  "Cloud-Native",
  "API-First",
  "Cross-Platform",
  "Senior Engineering",
  "Transparent Delivery",
];

export const ABOUT_MARQUEE: string[] = [
  "Craftsmanship",
  "Transparency",
  "Ownership",
  "Continuous Learning",
  "Trust",
  "Accountability",
];

export const CONTACT_MARQUEE: string[] = [
  "Fast Response",
  "NDA-Ready",
  "Direct Access",
  "No Sales Queue",
  "Transparent Pricing",
];

export const CAREERS_MARQUEE: string[] = [
  "Remote-First",
  "Flexible Hours",
  "Real Ownership",
  "Senior Team",
  "Growth-Focused",
];

export const WORK_MARQUEE: string[] = [
  "Full Source Code Ownership",
  "QA & Security Reviewed",
  "30-Day Post-Launch Support",
  "Documentation Included",
  "On-Time Delivery",
];

export const CRAFT_MARQUEE: string[] = [
  "Web Development",
  "Mobile Apps",
  "Custom Software",
  "UI/UX Design",
  "Cloud & DevOps",
  "AI & Data",
];

export interface Service {
  icon: string;
  title: string;
  description: string;
  chips?: string[];
  href: string;
}

/** Home "What We Build" cards — icon order: AI, WEB, SOFT, MOBILE, UI/UX, CLOUD */
export const HOME_SERVICES: Service[] = [
  {
    icon: "AI",
    title: "AI & Business Automation",
    description:
      "AI-powered workflows, intelligent assistants and automation systems that reduce repetitive work.",
    href: "/our-craft",
  },
  {
    icon: "WEB",
    title: "Web Application Development",
    description:
      "Scalable web platforms, SaaS products and business applications built for performance and growth.",
    href: "/our-craft",
  },
  {
    icon: "SOFT",
    title: "Custom Software",
    description:
      "Internal tools, business platforms and workflow systems designed around how your business operates.",
    href: "/our-craft",
  },
  {
    icon: "MOBILE",
    title: "Mobile App Development",
    description:
      "Modern iOS and Android applications for customer-facing products and internal business use.",
    href: "/our-craft",
  },
  {
    icon: "UI/UX",
    title: "Product Design & UI/UX",
    description:
      "Simple, intuitive interfaces designed around your users, business goals and product requirements.",
    href: "/our-craft",
  },
  {
    icon: "CLOUD",
    title: "Cloud & DevOps",
    description:
      "Reliable deployment, cloud infrastructure, CI/CD and operational foundations for production.",
    href: "/our-craft",
  },
];

/** Craft page disciplines — numbered, with chips */
export const CRAFT_SERVICES: Service[] = [
  {
    icon: "01",
    title: "AI & Business Automation",
    description:
      "AI-powered workflows, intelligent assistants and automation systems that reduce repetitive work and solve real business problems.",
    chips: [
      "LLM Integration",
      "Chatbots",
      "Workflow Automation",
      "Data Pipelines",
    ],
    href: "/contact",
  },
  {
    icon: "02",
    title: "Web Application Development",
    description:
      "Scalable web platforms, SaaS products and business applications built for performance, usability and long-term growth.",
    chips: ["Modern Frontend", "Server Rendering", "API Integration", "Performance"],
    href: "/contact",
  },
  {
    icon: "03",
    title: "Custom Software",
    description:
      "Internal tools, business platforms and workflow systems designed around the way your business actually operates.",
    chips: [
      "Workflow Automation",
      "Legacy Modernization",
      "SaaS Platform",
      "Integration",
    ],
    href: "/contact",
  },
  {
    icon: "04",
    title: "Mobile App Development",
    description:
      "Modern iOS and Android applications built for customer-facing products and internal business use.",
    chips: ["Cross-Platform", "Native Performance", "App Store", "Offline-First"],
    href: "/contact",
  },
  {
    icon: "05",
    title: "Product Design & UI/UX",
    description:
      "Simple, intuitive interfaces designed around your users, business goals and product requirements.",
    chips: ["User Research", "Design Systems", "Prototyping", "WCAG"],
    href: "/contact",
  },
  {
    icon: "06",
    title: "Cloud & DevOps",
    description:
      "Reliable deployment, cloud infrastructure, CI/CD and operational foundations for software that needs to run in production.",
    chips: ["CI/CD", "Infra as Code", "Containers", "Monitoring"],
    href: "/contact",
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
    title: "Discover",
    description:
      "We dig into your goals, users, and constraints to define a clear, achievable scope.",
  },
  {
    step: "Step 02",
    title: "Design",
    description:
      "Wireframes and prototypes translate strategy into an intuitive, tested user experience.",
  },
  {
    step: "Step 03",
    title: "Build",
    description:
      "Agile sprints turn designs into secure, scalable, well-tested production software.",
  },
  {
    step: "Step 04",
    title: "Launch & Grow",
    description:
      "We deploy with confidence and stay on for monitoring, iteration, and long-term growth.",
  },
];

export const CRAFT_PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Scope & Estimate",
    description:
      "We break your idea into a concrete plan with clear milestones and realistic timelines.",
  },
  {
    step: "02",
    title: "Design Sprint",
    description:
      "Rapid prototyping validates the experience before a single line of production code is written.",
  },
  {
    step: "03",
    title: "Build in Sprints",
    description:
      "Short, transparent sprints with working demos — never a black box until the deadline.",
  },
  {
    step: "04",
    title: "Test, Ship & Support",
    description:
      "Rigorous QA, a confident launch, and ongoing support as your product evolves.",
  },
];

export const CONTACT_PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Share Your Vision",
    description:
      "Tell us what you're building through the form or a quick call — no lengthy questionnaires, no gatekeeping.",
  },
  {
    step: "02",
    title: "We Scope It Together",
    description:
      "A real engineer reviews your idea and comes back with honest feedback and a rough plan within a day.",
  },
  {
    step: "03",
    title: "We Get to Work",
    description:
      "Once scope and timeline are locked in, development starts — you'll see real progress within the week.",
  },
];

export const CAREERS_PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Apply",
    description:
      "Send your application to the role's contact email with a short note about yourself.",
  },
  {
    step: "02",
    title: "Intro Call",
    description:
      "A relaxed conversation to learn about you and share more about the role and team.",
  },
  {
    step: "03",
    title: "Technical Conversation",
    description:
      "A practical discussion or exercise relevant to the actual work — no trick questions.",
  },
  {
    step: "04",
    title: "Offer & Onboarding",
    description:
      "A clear offer and a structured onboarding so you're set up to contribute quickly.",
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

export const WORK_STATS: StatItem[] = [
  { value: "95%", label: "Projects delivered on schedule" },
  { value: "<1%", label: "Post-launch critical defect rate" },
  { value: "100%", label: "Projects still in active use today" },
  { value: "30", label: "Days of dedicated post-launch support" },
];

export const WORK_PROJECTS = [
  { image: "/images/3.jpg", caption: "Web Platform", tag: "WEB" },
  { image: "/images/7.jpg", caption: "Mobile App", tag: "MOB" },
  { image: "/images/5.jpg", caption: "Product Demo", tag: "PROD" },
] as const;

export const WORK_INCLUSIONS = [
  {
    title: "Full Source Code Ownership",
    description:
      "You own 100% of the codebase we build — no licensing strings attached.",
  },
  {
    title: "Documentation & Handoff",
    description:
      "Clear technical documentation so your team (or ours) can maintain it long-term.",
  },
  {
    title: "QA & Security Review",
    description:
      "Every project is tested and reviewed before launch, not just demoed and shipped.",
  },
  {
    title: "30-Day Post-Launch Support",
    description:
      "We stay engaged after go-live to catch edge cases and support a smooth rollout.",
  },
] as const;

export const WORK_PORTFOLIO_POINTS = [
  {
    title: "Real Products, Real Outcomes",
    description:
      "Our portfolio spans custom web applications, mobile apps, internal tools, and cloud platforms built for startups and growing businesses — each scoped around a specific business goal, not a generic template.",
  },
  {
    title: "End-to-End Case Studies",
    description:
      "From the first discovery call to production deployment, our case studies show the full software development lifecycle: product strategy, UI/UX design, full-stack engineering, QA, and post-launch support.",
  },
  {
    title: "Built to Last, Not Just to Launch",
    description:
      "Clean architecture, thorough testing, and cloud infrastructure designed to scale as usage grows. The specific technology is chosen for each product's requirements.",
  },
  {
    title: "No Scope-Creep Surprises, Guaranteed",
    description:
      "Every fixed-scope engagement comes with a locked proposal before work begins. If something falls outside scope, you'll know before it's built — never on an invoice after the fact.",
  },
] as const;

export const ABOUT_JOURNEY = [
  {
    step: "Year One — Foundation",
    title: "Foundation",
    description:
      "Started with a small team and one commitment: do client work differently — senior-only, fully transparent.",
  },
  {
    step: "Early Growth",
    title: "First Long-Term Partners",
    description:
      "Built lasting relationships with early clients who trusted us with mission-critical products.",
  },
  {
    step: "Scaling Up",
    title: "Expanded Capabilities",
    description:
      "Grew from engineering alone into full-cycle delivery — design, cloud, and AI now included in-house.",
  },
  {
    step: "Today",
    title: "A Trusted Partner",
    description:
      "A senior, multidisciplinary team helping ambitious companies ship software that lasts.",
  },
] as const;

export const ABOUT_PRINCIPLES = [
  {
    step: "01",
    title: "Craftsmanship",
    description:
      "We treat every line of code and every pixel as a reflection of our standards — built to last, not just to ship.",
  },
  {
    step: "02",
    title: "Transparency",
    description:
      "Clear communication, honest timelines, and no surprises. You always know where your project stands.",
  },
  {
    step: "03",
    title: "Ownership",
    description:
      "We treat your product like our own, taking full accountability from first commit to production launch.",
  },
  {
    step: "04",
    title: "Continuous Learning",
    description:
      "Technology moves fast. We invest constantly in new tools and practices to keep our clients ahead.",
  },
] as const;

export const ABOUT_DAY_TO_DAY = [
  {
    title: "Small, Senior Teams",
    description:
      "You work directly with experienced engineers and designers — never a rotating cast of juniors.",
  },
  {
    title: "Weekly Demos",
    description:
      "Regular check-ins and shared boards mean you always see real, working progress.",
  },
  {
    title: "Timezone-Friendly",
    description:
      "Async-first collaboration and flexible overlap hours designed around your team.",
  },
  {
    title: "Genuine Investment",
    description:
      "We measure success by your outcomes, not just hours logged.",
  },
] as const;

export const ABOUT_QUOTES = [
  {
    quote:
      "Good software is invisible — it just works. That's the bar we hold ourselves to on every project.",
    cite: "Engineering Lead",
  },
  {
    quote:
      "Design isn't decoration. It's how complexity becomes usable, and that shapes every decision we make.",
    cite: "Design Lead",
  },
  {
    quote:
      "Transparency isn't a policy here, it's a habit. Clients should never have to wonder what's happening.",
    cite: "Delivery Lead",
  },
] as const;

export const ABOUT_SDE_POINTS = [
  {
    title: "Custom Software Development, Done Right",
    description:
      "We don't force your business into a generic template. Every engagement starts with understanding your workflow, users, and constraints, so the software we build fits the way your business actually operates.",
  },
  {
    title: "Agile, Transparent Delivery",
    description:
      "Our process is built around short sprints, shared project boards, and regular demos. You always know what's shipping next and can course-correct early.",
  },
  {
    title: "Full-Stack Engineering Expertise",
    description:
      "From frontend interfaces to backend APIs, databases, and cloud infrastructure — fewer handoffs, fewer integration surprises, and one accountable team.",
  },
  {
    title: "A Team Invested in Your Success",
    description:
      "We measure success by the outcomes our software creates for your business, not just hours billed.",
  },
] as const;

export const CRAFT_SKILLS = [
  { name: "Frontend Engineering", pct: 95 },
  { name: "Backend & API Design", pct: 96 },
  { name: "Cloud & Infrastructure", pct: 90 },
  { name: "Product & UI/UX Design", pct: 88 },
  { name: "AI & Data Integration", pct: 85 },
] as const;

export const CRAFT_REPORT_LINES = [
  "frontend_rigor ........ high",
  "api_design ............ high",
  "cloud_ops .............. high",
  "product_ux ............ high",
  "ai_integration ......... high",
  "stack_depth ............ full",
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
    "Rushing straight to code without a clear plan",
    "One engineer owning critical decisions alone",
    "Security treated as a launch-day checklist",
    "Silence between milestones, surprises at the end",
  ],
  good: [
    "A scoped plan with clear milestones before a line of code",
    "Every change reviewed by a second senior engineer",
    "Secure-by-default architecture from day one",
    "Weekly visibility into real, working progress",
  ],
} as const;

export const CRAFT_DELIVERY = [
  {
    title: "End-to-End Service Delivery",
    description:
      "From product strategy and UI/UX design through frontend development, backend engineering, and cloud deployment — one roof, fewer handoffs, consistent quality.",
  },
  {
    title: "Flexible Engagement Models",
    description:
      "Fixed-scope project, dedicated team, or staff augmentation — structured around how you actually want to work with a software development partner.",
  },
  {
    title: "Quality Assurance Built In",
    description:
      "Every feature ships through code review, automated testing, and QA before release. Security and performance aren't afterthoughts.",
  },
  {
    title: "A Stack Chosen for Your Goals",
    description:
      "We're deliberately technology-agnostic — every technology decision fits your product's specific requirements, not what we already know.",
  },
] as const;

export const HOME_WHY = [
  {
    title: "Experienced Engineering Leadership",
    description:
      "Your project is guided by engineers who understand production systems, architecture and real-world delivery.",
  },
  {
    title: "Full Transparency",
    description:
      "Shared boards, weekly demos, and honest timelines — always know where things stand.",
  },
  {
    title: "Security-First Delivery",
    description:
      "Secure-by-default architecture and code review baked into every engagement.",
  },
  {
    title: "Fast, Iterative Cycles",
    description:
      "Agile sprints ship working software early and often, not just at the finish line.",
  },
] as const;

export const INDUSTRIES = [
  {
    title: "SaaS & Startups",
    description:
      "MVPs and product platforms built to validate fast and scale without a rewrite.",
  },
  {
    title: "E-Commerce",
    description:
      "Custom storefronts, checkout flows, and backend systems built for conversion.",
  },
  {
    title: "FinTech",
    description:
      "Secure, compliant platforms for payments, lending, and financial data.",
  },
  {
    title: "HealthTech",
    description:
      "Reliable, privacy-conscious software for health and wellness products.",
  },
  {
    title: "Enterprise & Ops",
    description:
      "Internal tools and automation that streamline complex business workflows.",
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Migration, DevOps, and platform engineering for teams scaling their stack.",
  },
] as const;

export const ENGAGEMENTS = [
  {
    badge: "Best for defined scope",
    title: "Fixed-Scope Projects",
    description:
      "A clear brief, a fixed timeline, and a fixed price — ideal when requirements are well understood.",
    points: [
      "Detailed proposal before kickoff",
      "Milestone-based delivery",
      "Predictable, fixed budget",
    ],
  },
  {
    badge: "Best for evolving products",
    title: "Dedicated Team",
    description:
      "An embedded team that scales with your roadmap — ideal for products that keep evolving beyond a single release.",
    points: [
      "Flexible, ongoing capacity",
      "Direct access to your engineers",
      "Scales up or down with your needs",
    ],
  },
] as const;

export const PARTNERSHIP = [
  {
    title: "Full-Cycle Software Development Services",
    description:
      "From product strategy and UI/UX design through web, mobile, backend engineering and cloud infrastructure — our team handles the full lifecycle so you don't have to coordinate multiple vendors.",
  },
  {
    title: "Dedicated, Senior Development Teams",
    description:
      "Every engagement is staffed with senior software engineers and designers, not a rotating bench of juniors — structured around your goals and timeline.",
  },
  {
    title: "Technology-Agnostic, Outcome-Focused",
    description:
      "We select the right technology for your goals based on performance, security and long-term maintainability — never brand familiarity.",
  },
] as const;

export const HOME_FAQS = [
  {
    question: "What makes Techish Innovation different from other software agencies?",
    answer:
      "We are founded by engineers and operate like one team — senior attention, honest communication, and a security-first, outcome-focused delivery model on every engagement.",
  },
  {
    question: "Do you sign NDAs before discussing a project?",
    answer:
      "Yes. We regularly sign NDAs before any detailed discussion to protect your ideas and roadmap.",
  },
  {
    question: "Can you work alongside our existing in-house team?",
    answer:
      "Absolutely. We routinely embed with client teams, pair on codebases, and complement your engineers with additional senior capacity.",
  },
  {
    question: "Do you offer fixed-price or time-and-materials engagements?",
    answer:
      "Both. Fixed-scope projects work well for defined deliverables; dedicated teams suit evolving products. We'll recommend what fits your goals.",
  },
] as const;

export const CAREERS_LOOKFOR = [
  {
    title: "Curiosity",
    description:
      "You ask why, not just how, and you're always looking to learn the next thing.",
  },
  {
    title: "Ownership Mindset",
    description:
      "You treat problems as yours to solve, not tickets to close.",
  },
  {
    title: "Clear Communicator",
    description:
      "You can explain a tricky tradeoff to both an engineer and a client.",
  },
  {
    title: "Craft-Focused",
    description:
      "You care about the details other people don't notice — but feel.",
  },
] as const;

export const CAREERS_WHY = [
  {
    title: "Meaningful, Real-World Work",
    description:
      "Every role contributes directly to products real clients depend on, so your work has visible, immediate impact.",
  },
  {
    title: "Ownership From Day One",
    description:
      "We trust people with real responsibility early. You'll own features, decisions, and outcomes — not just tickets.",
  },
  {
    title: "A Culture of Craftsmanship",
    description:
      "Clean code, thoughtful design, and honest communication are the norm, not the exception.",
  },
  {
    title: "Room to Grow",
    description:
      "Varied projects, mentorship from senior team members, and support for continued learning help you grow faster.",
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
    title: "Senior Full-Stack Engineer",
    description:
      "Build production web platforms across frontend and backend — with ownership from day one.",
    location: "Remote",
    type: "Full-Time",
  },
  {
    category: "Product",
    title: "Product Designer (UI/UX)",
    description:
      "Design simple, intuitive interfaces for real products — from research to polished design systems.",
    location: "Remote",
    type: "Full-Time",
  },
  {
    category: "Infrastructure",
    title: "Cloud & DevOps Engineer",
    description:
      "Own reliable deployment, CI/CD, and cloud infrastructure for software running in production.",
    location: "Remote",
    type: "Full-Time",
  },
];

export const CAREERS_CULTURE = [
  {
    title: "Flat, Open Culture",
    description:
      "Direct access to leadership — no layers between you and decisions.",
  },
  {
    title: "Flexible Hours",
    description:
      "We care about outcomes, not seat time or rigid schedules.",
  },
  {
    title: "Collaborative by Default",
    description:
      "Weekly syncs and shared boards keep everyone aligned and unblocked.",
  },
  {
    title: "Room to Explore",
    description:
      "Variety of projects means you're never stuck doing the same thing for years.",
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

export interface BlogPost {
  category: string;
  date: string;
  title: string;
  excerpt: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    category: "Web Development",
    date: "Jan 08 2026",
    title: "Building Scalable Web Architecture in 2026",
    excerpt:
      "A practical guide to designing web applications that scale gracefully — from modular monoliths to microservices.",
  },
  {
    category: "Web Development",
    date: "Jan 15 2026",
    title: "Next.js Performance Best Practices for Production Apps",
    excerpt:
      "Server components, image optimization, edge caching, and bundle-size reduction for faster, more reliable experiences.",
  },
  {
    category: "Backend Engineering",
    date: "Jan 22 2026",
    title: "The Django REST API Security Checklist Every Team Needs",
    excerpt:
      "From authentication and rate limiting to input validation and CORS configuration for production-grade DRF APIs.",
  },
  {
    category: "Cloud & DevOps",
    date: "Jan 29 2026",
    title: "Designing Cloud-Native DevOps Pipelines That Scale",
    excerpt:
      "How modern teams build resilient CI/CD pipelines using containerization, infrastructure as code, and automated testing.",
  },
  {
    category: "UI/UX Design",
    date: "Feb 05 2026",
    title: "Why UX Research Should Drive Every Product Design Decision",
    excerpt:
      "How research-driven design — user interviews, usability testing, and data-informed iteration — leads to interfaces that convert.",
  },
  {
    category: "AI & Data",
    date: "Feb 12 2026",
    title: "Practical AI Integration for Everyday Business Workflows",
    excerpt:
      "Pragmatic ways to integrate large language models into internal tools, customer support, and data pipelines.",
  },
  {
    category: "Mobile Development",
    date: "Feb 19 2026",
    title: "Choosing a Cross-Platform Strategy for Your Mobile App",
    excerpt:
      "How to choose the right mobile approach based on performance requirements, team skill set, and maintainability.",
  },
  {
    category: "Software Engineering",
    date: "Feb 26 2026",
    title: "Microservices vs. Monolith: Making the Right Call in 2026",
    excerpt:
      "Tradeoffs between monolithic and distributed architectures, and how to decide what fits your team's stage.",
  },
  {
    category: "Backend Engineering",
    date: "Mar 05 2026",
    title: "A Practical Guide to Database Indexing in PostgreSQL",
    excerpt:
      "Slow queries are often an indexing problem. Learn how PostgreSQL indexes work and how to measure real impact.",
  },
  {
    category: "UI/UX Design",
    date: "Mar 12 2026",
    title: "Why Every Engineering Team Needs a Design System",
    excerpt:
      "Design systems reduce inconsistency, speed up development, and improve collaboration. How to build one that gets adopted.",
  },
  {
    category: "Cloud & DevOps",
    date: "Mar 19 2026",
    title: "Serverless vs. Containers: Choosing Your Cloud Runtime",
    excerpt:
      "Serverless functions and containerized services each have their place. Cost, cold-start behavior, and operational complexity.",
  },
  {
    category: "Product Strategy",
    date: "Mar 26 2026",
    title: "Product Strategy Fundamentals for Early-Stage Startups",
    excerpt:
      "Before writing a single line of code, successful startups validate demand, define success metrics, and prioritize ruthlessly.",
  },
];

export const BLOG_TOPICS = [
  "Web Development",
  "Backend Engineering",
  "Cloud & DevOps",
  "UI/UX Design",
  "AI & Data",
  "Mobile Development",
  "Software Engineering",
  "Product Strategy",
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
      "Best for detailed briefs, documents, and anything worth keeping in writing.",
    tag: "RECOMMENDED",
  },
  {
    title: "Video Call",
    description:
      "Best for discovery conversations, kickoff sessions, and live Q&A.",
  },
  {
    title: "Async Updates",
    description:
      "Ongoing progress shared through shared boards once a project is underway.",
  },
];

export const CONTACT_POINTS = [
  {
    title: "Fast Response",
    description:
      "Every message answered within one business day",
  },
  {
    title: "NDA-Ready",
    description:
      "Happy to sign an NDA before any detailed discussion",
  },
  {
    title: "Direct Access",
    description:
      "Talk directly with the engineers who'll build your software",
  },
  {
    title: "No Sales Queue",
    description: "A real conversation, not a pitch",
  },
  {
    title: "Transparent Pricing",
    description:
      "Fixed-scope or dedicated team, structured around you",
  },
] as const;

export const CONTACT_LOOKING = [
  {
    label: "Portfolio",
    title: "See Our Work",
    description: "Browse recent projects and case studies.",
    href: "/our-work",
  },
  {
    label: "Insights",
    title: "Read the Blog",
    description: "Engineering & product insights from our team.",
    href: "/blog",
  },
  {
    label: "Team",
    title: "View Careers",
    description: "Open roles on our team.",
    href: "/careers",
  },
] as const;
