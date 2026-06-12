// ============================================================
//  data.js — ALL website content lives in this one file.
//  To update the site, edit this file only. No need to touch
//  App.jsx or App.css.
// ============================================================

export const profile = {
  name: "Prasidda Gautam",
  title: "Software Developer",
  school: "UT Austin CS '27",

  // Short status shown as the pill at the top of the page.
  status: "Open to new opportunities",

  // The big hero headline (first line plain, second line accented).
  headline: ["Building reliable systems", "from UI to microservices."],

  // The paragraph under the headline.
  lead:
    "CS student at UT Austin (3.7 GPA, Business minor) with production experience across full-stack development, .NET microservices, and AI evaluation. I care about building software that is scalable, testable, and maintainable, not just functional.",

  location: "Dallas, TX · open to relocation",
  email: "prasiddagautam5@gmail.com",
  github: "https://github.com/prasidda",
  linkedin: "https://linkedin.com/in/prasidda-gautam",
  resume: "/Prasidda_Gautam_Resume.pdf", // file lives in /public
};

// ============================================================
//  EXPERIENCE — newest first.
//
//  ➜ TO ADD YOUR IBM INTERNSHIP: copy the template below to the
//    top of the `experience` array, delete the leading `//` on
//    each line, and fill in your real title, dates, and bullets.
//
//  {
//    company: "IBM",
//    role: "Software Engineer Intern",          // your actual title
//    location: "City, ST",
//    period: "May 2026 — Aug 2026",             // your actual dates
//    bullets: [
//      "What you built, the tech you used, and the impact it had.",
//      "Another concrete accomplishment with a metric if you have one.",
//      "A third bullet about collaboration, scale, or results.",
//    ],
//    tech: ["Java", "Kubernetes", "..."],       // main tools you used
//  },
// ============================================================

export const experience = [
  {
    company: "IBM",
    role: "Software Engineer Intern – Key Protect (Cloud Security)",
    location: "Austin, TX",
    period: "May 2026 — Aug 2026",
    bullets: [
      "Automated SDK generation across four languages (Python, Go, Java, Node.js) from the IBM Key Protect OpenAPI specification, cutting SDK release effort by 80% and ensuring cross-language API parity.",
      "Validated SDK correctness by executing 57 PyTest integration tests against live Key Protect REST API endpoints, catching specification inconsistencies and enforcing API contract.",
      "Authored a technical design document outlining a standardized framework for updating the Key Protect OpenAPI specification to maintain SDK generation compatibility across future API revisions.",
    ],
    tech: ["Python", "Go", "Java", "Node.js", "OpenAPI", "PyTest"],
  },
  {
    company: "Texas Comptroller of Public Accounts",
    role: "Fullstack Developer Intern",
    location: "Austin, TX",
    period: "Sep 2025 — Dec 2025",
    bullets: [
      "Developed a production-ready Field Appraisal System utilizing a React front end and C# .NET microservices with MS SQL, supporting data-driven decision making and internal state workflows.",
      "Implemented a file import pipeline using a Backend-for-Frontend (BFF) API and Amazon S3, enabling virus scans and asynchronous processing for scalability and reliability.",
      "Implemented RESTful APIs backed by SQL databases to support transactional workflows, improving data consistency and end-user responsiveness through collaborative design and code reviews.",
    ],
    tech: ["React", "C#", ".NET 8", "MS SQL", "AWS S3", "BFF", "REST APIs"],
  },
  {
    company: "Outlier AI",
    role: "AI Evaluator",
    location: "Remote",
    period: "May 2024 — May 2025",
    bullets: [
      "Evaluated large language models and generative AI systems for Fortune 500 enterprise clients, identifying failure cases and improving inference accuracy through structured adversarial testing.",
      "Designed training and evaluation frameworks for production AI systems across multiple industry verticals, increasing model response quality, reliability, and alignment with real-world use cases.",
      "Delivered data-driven performance reports to AI development teams, reducing overall model error rates and improving output consistency across diverse task categories.",
    ],
    tech: ["LLMs", "Evaluation", "AI Testing", "Data Analysis", "Prompt Engineering"],
  },
];

// ============================================================
//  PROJECTS — add new ones at the top.
//  `link` is optional: add  link: "https://..."  to show a
//  "View →" link on the card (GitHub repo or live demo).
// ============================================================

export const projects = [
  {
    name: "EducaNation",
    date: "Dec 2025",
    description:
      "Fullstack web application built to serve 50K+ relational records with fast search, server-side pagination, and under 300ms average API response times.",
    bullets: [
      "Designed and developed a fullstack web application able to serve 50K+ relational records and pagination with less than 300ms average API response times.",
      "Developed RESTful APIs with server-side pagination and query filtering, reducing payload sizes by ~70% and improving front-end scalability and load time.",
      "Built responsive UI components and interactive data visualizations with React, Bootstrap, D3, and Recharts; used AWS Amplify for front-end development.",
      "Worked in a cross-functional 5-person team using Git workflows, peer code reviews, and CI-tested backend services, maintaining 90%+ test coverage with PyTest and GitLab.",
    ],
    tech: ["React", "Flask", "PostgreSQL", "Docker", "AWS Amplify"],
  },
  {
    name: "CPU Emulator",
    date: "Nov 2024",
    description:
      "Designed and built a CPU emulator with a functioning multi-stage pipeline (fetch, decode, execute, memory, write-back) replicating real processor behavior.",
    bullets: [
      "Implemented a functioning multi-stage CPU pipeline replicating fetch, decode, execute, memory, and write-back stages.",
      "Implemented cache management and hazard detection mechanisms, reducing memory access penalties.",
      "Tested using AArch64 Assembly for performance optimizations and debugged with GDB.",
      "Utilized UTCS Linux machines through SSH for remote development and cross-platform reliability.",
    ],
    tech: ["C", "AArch64 Assembly", "GDB", "Git", "SSH", "Linux"],
  },
  {
    name: "Weather App",
    date: "Dec 2024",
    description:
      "Responsive weather application displaying real-time conditions for any searched location worldwide.",
    bullets: [
      "Single-page app built with React, Vite, and TypeScript.",
      "Integrated OpenWeather and GeoDB Cities APIs for location-based data.",
      "Boosted responsiveness by 50% through asynchronous data fetching.",
    ],
    tech: ["React", "Vite", "TypeScript", "OpenWeather API"],
  },
];

// ============================================================
//  SKILLS — grouped tags. Just add/remove strings.
// ============================================================

export const skills = {
  Languages: [
    "Java",
    "Python",
    "Go",
    "C",
    "C#",
    "HTML / CSS",
    "JavaScript / TypeScript",
    "AArch64 Assembly",
  ],
  "Developer Tools": [
    "Git",
    "GDB",
    "VS Code",
    "Visual Studio",
    "IBM Cloud CLI",
    "PyTest",
    "Swagger / OpenAPI",
    ".NET CLI",
    "NuGet",
    "SQL Server Data Tools (SSDT)",
    "React Developer Tools",
    "GitHub Copilot",
    "AWS",
    "REST APIs",
  ],
  "Technologies / Frameworks": [
    "Node.js",
    "React",
    "Spring Boot",
    "SQL Databases",
    ".NET 8",
    "MediatR",
    "ASP.NET Core Web API",
    "Domain-Driven Design (DDD)",
    "IBM Cloud (Key Protect)",
    "OpenAPI SDK Generation",
  ],
};

// ============================================================
//  EDUCATION
// ============================================================

export const education = {
  school: "University of Texas at Austin",
  degree: "B.S. in Computer Science · Minor in Business",
  period: "Aug 2023 — May 2027",
  gpa: "3.7 GPA / 3.6 Major GPA",
  coursework: [
    "Data Structures",
    "Discrete Math",
    "Algorithms Analysis",
    "Matrices",
    "Artificial Intelligence",
    "Linear Algebra",
    "Computer Architecture",
    "Calculus",
    "Operating Systems",
    "Cloud Computing",
    "Software Engineering",
  ],
};
