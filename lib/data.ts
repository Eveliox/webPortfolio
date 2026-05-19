export const personal = {
  name: "Evelio Gonzalez",
  nameKatakana: "エベリオ",
  location: "Miami, FL",
  email: "eveliogonzalez9@icloud.com",
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
  "I'm a CS student at FIU graduating Summer 2026, focused on full-stack development, backend systems, and clean architecture. I've led a team of 10 engineers shipping production software, built ETL pipelines handling real-time market data, and care a lot about writing code that's actually maintainable. Outside of school I work as an IT & AV technician on campus, which keeps me sharp on the systems side.";

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
    role: "Project Lead, Full Stack Engineer",
    company: "INIT Build",
    period: "Jan 2026 — May 2026",
    location: "Miami, FL",
    bullets: [
      "Directed a cross-functional team of 10 developers across a nine-week lifecycle, managing sprint planning, milestone tracking, and final production deployment.",
      "Oversaw code review processes and enforced best practices, maintaining codebase quality and reducing integration conflicts across parallel workstreams.",
      "Successfully launched the application to 20+ campus users on schedule, coordinating QA testing and deployment pipelines from staging to production.",
    ],
  },
  {
    role: "IT & Audio Visual Technician",
    company: "Florida International University",
    period: "Apr 2024 — Present",
    location: "Miami, FL",
    bullets: [
      "Managed IT infrastructure, AV systems, and technical support for faculty, staff, and students across the university.",
      "Configured and maintained AV equipment including audio visual networks, remote conferencing equipment, and integrated control systems.",
      "Administered Active Directory and deployed hardware/software updates using SCCM.",
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
};

export const projects: Project[] = [
  {
    name: "PantherAI",
    description: "A campus copilot for FIU students.",
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
      "Designed a modular Flask backend integrated with the Gemini LLM for search and task management.",
      "Implemented a responsive React frontend for seamless student interaction.",
    ],
    github: "https://github.com/roliv091/PantherAI",
  },
  {
    name: "Real-Time Market Data ETL Pipeline",
    description: "Production-grade data pipeline for live market feeds.",
    tech: ["Python", "PostgreSQL", "Apache Airflow", "Docker", "SQL"],
    highlights: [
      "Built an ETL pipeline ingesting real-time market data from external APIs into PostgreSQL.",
      "Implemented modular ingest, validation, transform, and load layers for reliability and scalability.",
    ],
    github: "https://github.com/Eveliox/Real-time-market-data-ETL-pipeline",
  },
  {
    name: "Real Estate Market Analyzer",
    description:
      "Analyzes housing market trends and surfaces investment-worthy listings. [Replace with your description.]",
    tech: ["Python", "Pandas", "SQL"],
    highlights: [
      "Aggregates and normalizes listing data from multiple sources for comparable analysis.",
    ],
    github: "https://github.com/Eveliox/Real-Estate-Market-Analyzer",
  },
  {
    name: "Azul Web Development Studio",
    description:
      "A web agency I founded and built end-to-end, from brand and site to client delivery.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Vercel"],
    highlights: [
      "Designed and shipped the studio's brand, marketing site, and client intake flow.",
      "Operate the studio independently — handling discovery, design, build, and delivery for every engagement.",
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
