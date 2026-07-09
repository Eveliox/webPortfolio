export const emailParts = {
  user: "eveliogonzalez9",
  domain: "icloud.com",
};

export const personal = {
  name: "Evelio Gonzalez",
  nameKatakana: "エベリオ",
  location: "Miami, FL",
  email: `${emailParts.user}@${emailParts.domain}`,
  github: "https://github.com/Eveliox",
  linkedin: "https://linkedin.com/in/eveliogonzalez",
  resume: "/Evelio_Gonzalez_Resume_new.pdf",
};

export const hero = {
  tagline:
    "Computer Science student at Florida International University building thoughtful software.",
  status: "Currently seeking Summer 2027 software engineering internships.",
};

export const about =
  "I'm a CS student at FIU graduating Summer 2026, focused on full-stack development, backend systems, and clean architecture. I currently intern at Caley Insurance, shipping full-stack features across React, Node.js, Supabase, and AWS EC2. Earlier this year I led a team of 10 engineers through a production build, and I've written ETL pipelines handling real-time market data. I care a lot about writing code that's actually maintainable. Outside of school I work as an IT & AV technician on campus, which keeps me sharp on the systems side.";

export const education = {
  school: "Florida International University",
  degree: "Bachelor of Arts in Computer Science",
  graduation: "Expected Graduation: Summer 2026",
  coursework: [
    "Systems Programming",
    "Software Engineering 1",
    "Data Structures",
    "Operating Systems",
  ],
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Full Stack Engineer, Intern",
    company: "Caley Insurance",
    period: "Jun 2026 — Present",
    location: "Miami, FL",
    bullets: [
      "Ship features end-to-end across a React/Vite/Tailwind frontend, Node.js API layer, Supabase (PostgreSQL + Edge Functions), and AWS EC2 infrastructure. Own each change from spec through PR to production deploy.",
      "Built internal tools that removed recurring manual work: an automated SMS pipeline for policyholder outreach, a compliance system tracking state licensing requirements, and agent onboarding/offboarding workflows that provision and revoke access on day one and last day.",
      "Design and deploy customer-facing lead-generation surfaces (landing pages, quote-intake forms, follow-up flows) that feed the agency's sales pipeline.",
    ],
  },
  {
    role: "Project Lead, Full Stack Engineer",
    company: "INIT Build",
    period: "Jan 2026 — May 2026",
    location: "Miami, FL",
    bullets: [
      "Led a team of 10 engineers through a 9-week product cycle. Set the sprint cadence, owned the delivery timeline, and shipped to production on the target date.",
      "Established the team's code review bar and PR workflow, cutting merge conflicts across parallel workstreams and keeping the codebase reviewable as the team scaled.",
      "Coordinated QA and the staging-to-production release, launching to 20+ campus users on the planned launch day.",
    ],
  },
  {
    role: "IT & Audio Visual Technician",
    company: "Florida International University",
    period: "Apr 2024 — Present",
    location: "Miami, FL",
    bullets: [
      "Support IT and AV infrastructure across campus. First-line troubleshooting for faculty, staff, and students, with escalation to central IT for anything upstream of the endpoint.",
      "Configure and maintain classroom AV: room control systems, remote-conferencing equipment, and AV-over-IP networks that keep hybrid classes running.",
      "Administer Active Directory accounts and use SCCM to push hardware inventory, patches, and software packages across campus endpoints.",
    ],
  },
];

export type Project = {
  name: string;
  description: string;
  tech: string[];
  highlights: string[];
  github?: string;
  liveUrl?: string;
  image?: {
    src: string;
    alt: string;
  };
};

export const projects: Project[] = [
  {
    name: "PantherAI",
    description:
      "A campus-life copilot for FIU students. Answers coursework, deadline, and campus-service questions in natural language.",
    tech: [
      "Python",
      "Flask",
      "React",
      "Node.js",
      "Gemini API",
      "ChromaDB",
      "OCR",
    ],
    highlights: [
      "Built a Flask backend that routes student questions to the Gemini LLM, with ChromaDB vector search over FIU-specific documents and OCR for extracting text from uploaded schedules and syllabi.",
      "Implemented the React chat frontend with streaming responses, conversation history, and a mobile-first layout that works from a phone between classes.",
    ],
    github: "https://github.com/roliv091/PantherAI",
  },
  {
    name: "Real-Time Market Data ETL Pipeline",
    description:
      "An always-on ETL pipeline that ingests live market data from public APIs and lands it in PostgreSQL for downstream analytics.",
    tech: ["Python", "PostgreSQL", "Apache Airflow", "Docker", "SQL"],
    highlights: [
      "Split the pipeline into modular ingest → validate → transform → load stages so any layer can be swapped, retried, or backfilled independently.",
      "Ran the pipeline under Airflow with Docker-packaged workers, using SQL-based validation to reject malformed rows before they touched the warehouse.",
    ],
    github: "https://github.com/Eveliox/Real-time-market-data-ETL-pipeline",
  },
  {
    name: "Real Estate Market Analyzer",
    description:
      "A Python tool that pulls listings from multiple housing data sources, normalizes them into a comparable schema, and surfaces candidates worth deeper review.",
    tech: ["Python", "Pandas", "SQL"],
    highlights: [
      "Normalized listing fields (address, price, sqft, features) across sources with different schemas into a single Pandas dataframe for cross-source comparison.",
      "Ranked listings against configurable market signals so an investor could skip the manual spreadsheet work and go straight to promising candidates.",
    ],
    github: "https://github.com/Eveliox/Real-Estate-Market-Analyzer",
  },
  {
    name: "Azul Web Development Studio",
    description:
      "A web studio I founded and run solo. Covers brand identity, marketing site, and shipping client projects on Next.js and Vercel.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Vercel"],
    highlights: [
      "Designed and shipped the studio's brand system, marketing site, and client intake funnel. All live at azulwebdev.com.",
      "Own every engagement end-to-end: discovery calls, design, build, and delivery. No handoffs, no subcontractors.",
    ],
    liveUrl: "https://azulwebdev.com/",
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["Python", "Java", "JavaScript", "C", "C++", "SQL"],
  },
  {
    group: "Backend & APIs",
    items: [
      "Flask",
      "FastAPI",
      "Node.js",
      "REST API design",
      "Authentication",
      "Modular backend architecture",
    ],
  },
  {
    group: "Cloud & DevOps",
    items: ["Azure", "Docker", "Linux", "Git", "GitHub Actions (CI/CD)"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
];

export type Certification = {
  title: string;
  year: string;
};

export const certifications: Certification[] = [
  { title: "Microsoft Certified: Azure Fundamentals (AZ-900)", year: "2025" },
  { title: "Microsoft Certified: Azure Data Fundamentals", year: "2025" },
  { title: "Microsoft Certified: Power BI", year: "2025" },
  { title: "Google IT Support Professional Certificate", year: "2025" },
  {
    title:
      "Codecademy: Intro to Cloud Computing · SQL · Data Structures & Algorithms · Intro to IT",
    year: "2023",
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
