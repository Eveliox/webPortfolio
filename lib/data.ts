export const emailParts = {
  user: "eveliogonzalez5",
  domain: "icloud.com",
};

export const personal = {
  name: "Evelio Gonzalez",
  nameKatakana: "エベリオ",
  location: "Miami, FL",
  email: `${emailParts.user}@${emailParts.domain}`,
  github: "https://github.com/Eveliox",
  linkedin: "https://linkedin.com/in/eveliogonzalez",
  resume: "/Evelio_Gonzalez_Resume_SWE.pdf",
};

export const hero = {
  tagline:
    "FIU Computer Science graduate and M.S. Information Technology student at Florida State, building thoughtful software.",
  status: "Currently seeking Summer 2027 software engineering internships.",
};

export const about =
  "I graduated Cum Laude with a B.A. in Computer Science from FIU in August 2026 and I'm now pursuing an M.S. in Information Technology at Florida State. My focus is full-stack development, backend systems, and data pipelines. This summer I interned at Caley Insurance, where I owned six internal applications end to end on React, Node.js, Supabase, and AWS EC2. Before that I built observability and ML forecasting models on Databricks for Miami-Dade County's IT department. On my own time I've been building a PubMed RAG system with grounded citations, a geospatial ETL pipeline for transmission planning, and a safety-first options trading system. I care a lot about writing code that's actually maintainable, and two years as an IT & AV technician at FIU keep me sharp on the systems side.";

export type Education = {
  school: string;
  degree: string;
  graduation: string;
  location: string;
  coursework?: string[];
};

export const education: Education[] = [
  {
    school: "Florida State University",
    degree: "M.S. in Information Technology",
    graduation: "Expected August 2027",
    location: "Tallahassee, FL",
  },
  {
    school: "Florida International University",
    degree: "B.A. in Computer Science · Cum Laude",
    graduation: "August 2026",
    location: "Miami, FL",
    coursework: [
      "Systems Programming",
      "Software Engineering 1",
      "Data Structures",
      "Operating Systems",
    ],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Full-Stack Engineering Intern",
    company: "Caley Insurance",
    period: "Jun 2026 — Aug 2026",
    location: "Miami, FL",
    bullets: [
      "Owned six internal applications end to end for 50+ employees across five offices: scoped requirements with agents and office managers, built in React/Vite/Node on Supabase and AWS EC2, reviewed pull requests, and shipped multiple production releases per month.",
      "Replaced manual policyholder outreach with an SMS platform that pushes hundreds of messages per campaign. Spreadsheet import, reusable templates, two-way threading, and automatic opt-out tracking keep agents compliant without hand-scrubbing lists.",
      "Cut 20+ hours of monthly administrative work by automating state-license compliance tracking and employee onboarding/offboarding.",
      "Turned static marketing pages into a lead channel with quote-intake forms and automated follow-up that routes prospects into the sales pipeline.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Miami-Dade County CITD",
    period: "Jan 2026 — May 2026",
    location: "Miami, FL",
    bullets: [
      "Built observability models on Databricks with a five-person Agile team (sprint planning, code reviews, stand-ups), turning IT system and operational data into analytical insights for the county's Communications, Information and Technology Department.",
      "Developed AI/ML prediction models in Python to forecast system behavior and surface trends, supporting data-driven decisions for county IT operations.",
      "Cleaned, transformed, and analyzed large datasets with Python and SQL in Databricks notebooks, and presented findings and recommendations to county stakeholders and mentors.",
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
    period: "Apr 2024 — May 2026",
    location: "Miami, FL",
    bullets: [
      "Supported IT and AV infrastructure across campus. First-line troubleshooting for faculty, staff, and students, with escalation to central IT for anything upstream of the endpoint.",
      "Configured and maintained classroom AV: room control systems, remote-conferencing equipment, and AV-over-IP networks that keep hybrid classes running.",
      "Administered Active Directory accounts and used SCCM to push hardware inventory, patches, and software packages across campus endpoints.",
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
    name: "Relay",
    description:
      "A transmission planning coordination tool built at ShellHacks 2026 for Sperry Tech's \"Gridlock\" challenge. It maps planned grid projects across utilities and flags the ones that should be coordinated.",
    tech: [
      "Python",
      "FastAPI",
      "PostGIS",
      "React",
      "TypeScript",
      "MapLibre",
      "GitHub Actions",
      "DigitalOcean",
    ],
    highlights: [
      "Built an ETL pipeline that extracted 252 transmission projects from 700+ pages of utility planning PDFs with pdfplumber, then geocoded them by matching substation names to OpenStreetMap data through the Overpass API.",
      "Wrote an overlap engine that flags nearby cross-utility projects by haversine distance and ranks them by line proximity and in-service date gap. It found 39 coordination opportunities and matched the sponsor's reference results exactly.",
      "Designed the PostGIS schema and transactional loader behind a FastAPI REST API, with GitHub Actions CI testing against a PostGIS container before automated DigitalOcean deploys.",
    ],
    github: "https://github.com/felipetrujilllo/Shellhacks-2026",
    liveUrl: "https://relaygrid.us",
  },
  {
    name: "Biomedical Literature RAG System",
    description:
      "A full-stack research assistant that searches PubMed and answers questions only from the retrieved papers, with numbered citations back to each source.",
    tech: [
      "FastAPI",
      "Next.js",
      "TypeScript",
      "Chroma",
      "sentence-transformers",
      "Ollama",
      "Docker",
    ],
    highlights: [
      "Searches PubMed via the Entrez API, embeds papers into a Chroma vector store with sentence-transformers, and streams answers token by token from a local Ollama LLM. Every claim maps to a clickable PubMed citation.",
      "Built against swappable Protocol interfaces for the LLM, embeddings, vector store, and reranker. An MS-MARCO cross-encoder reranks the top-20 chunks, and server-side checks flag out-of-range citation numbers as hallucinations.",
      "Shipped with an insights dashboard, Docker and Vercel/Render deploy configs, and a pytest suite covering retrieval dedup and citation validation.",
    ],
    github: "https://github.com/Eveliox/Biomedical-RAG-System",
  },
  {
    name: "AlpacaAgents",
    description:
      "A paper-only options swing-trading system built safety-first: a scanner, a pure rules engine, an executor, and a dashboard, with no live-trading path at all.",
    tech: ["Python", "SQLite", "Alpaca API", "Polygon API", "unittest"],
    highlights: [
      "Split the system into four layers: a signal scanner, a deterministic rules engine with no I/O, an executor that reconciles broker state before acting, and a static dashboard with notifications.",
      "Nothing trades unless a kill-switch file is armed, the playbook is explicitly approved, and account state is fully reconciled. A transactional order journal, a daily-loss breaker, and a hard per-trade risk cap back that up.",
      "Covered with an offline test suite that runs the full trade lifecycle against a stateful fake broker, plus a walk-forward backtester with no look-ahead.",
    ],
    github: "https://github.com/Eveliox/AlpacaAgents",
  },
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
    items: ["Python", "TypeScript", "JavaScript", "SQL", "Java", "C", "C++"],
  },
  {
    group: "Backend & Data",
    items: [
      "FastAPI",
      "Flask",
      "Node.js",
      "PostgreSQL",
      "PostGIS",
      "Supabase",
      "Databricks",
      "REST APIs",
    ],
  },
  {
    group: "Cloud & DevOps",
    items: [
      "AWS EC2",
      "DigitalOcean",
      "Docker",
      "Linux",
      "Nginx",
      "Git",
      "GitHub Actions (CI/CD)",
    ],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "Vite", "Tailwind CSS"],
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
