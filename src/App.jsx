import React from "react";

const experience = [
  {
    company: "Texas Comptroller of Public Accounts",
    role: "Fullstack Developer Intern",
    location: "Austin, TX",
    period: "Sep 2025 – Dec 2025",
    bullets: [
      "Developed production-ready Field Appraisal System utilizing a React front end and C# .NET microservices backed by MS SQL databases.",
      "Implemented a secure file import pipeline using a Backend-for-Frontend (BFF) API and Amazon S3, enabling virus scanning and asynchronous processing.",
      "Built scalable .NET 8 microservices using domain-driven design and CQRS with MediatR to improve maintainability and service decoupling.",
      "Designed and implemented RESTful APIs supporting transactional workflows, improving data consistency and end-user responsiveness."
    ],
    tech: ["React", "C#", ".NET 8", "MS SQL", "AWS S3", "BFF", "CQRS", "MediatR", "DDD"]
  },
  {
    company: "Outlier AI",
    role: "AI Evaluator",
    location: "Remote",
    period: "May 2024 – May 2025",
    bullets: [
      "Evaluated large language models and generative AI systems for enterprise clients including Amazon, Apple, and Microsoft.",
      "Developed structured evaluation and training frameworks for AI systems used by Meta, Google, and OpenAI.",
      "Delivered data-driven performance reports that reduced error rates and improved model reliability."
    ],
    tech: ["LLMs", "Evaluation", "Prompting", "Data Analysis"]
  },
  {
    company: "FedEx Supply Chain",
    role: "Supply Chain Associate",
    location: "Coppell, TX",
    period: "May 2024 – Aug 2024",
    bullets: [
      "Relocated 300+ mobile devices based on performance metrics, optimizing logistics workflows and increasing throughput by 15%.",
      "Coordinated cross-functional teams of 20+ employees to meet daily dispatch targets in a safe working environment.",
      "Trained 5+ new hires in standard operating procedures and inventory management with a 100% success rate."
    ],
    tech: ["Logistics", "Operations", "Team Coordination", "Training"]
  }
];

const projects = [
  {
    name: "EducaNation",
    date: "Dec 2025",
    tech: [
      "React",
      "Flask",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Bootstrap",
      "D3",
      "Recharts",
      "PyTest",
      "GitLab"
    ],
    description:
      "Full-stack web application serving 50K+ relational records with filtered search, joins, and pagination under 300 ms average API response times.",
    details: [
      "Designed and deployed a full-stack web application serving 50K+ relational records across multiple entities.",
      "Implemented RESTful APIs with server-side pagination and query filtering, reducing payload sizes by ~70%.",
      "Built responsive UI components and interactive visualizations using React, Bootstrap, D3, and Recharts.",
      "Collaborated in a 5-person team using Git-based workflows, peer code reviews, and CI testing with 90%+ backend coverage."
    ]
  },
  {
    name: "Weather App",
    date: "Dec 2024",
    tech: [
      "React",
      "Vite",
      "JavaScript",
      "TypeScript",
      "HTML/CSS",
      "OpenWeather API",
      "GeoDB Cities API"
    ],
    description:
      "Responsive weather application displaying real-time conditions for any searched location.",
    details: [
      "Built a fast, SPA-style interface using React and Vite.",
      "Integrated OpenWeather and GeoDB Cities APIs for accurate weather and location data.",
      "Implemented asynchronous data fetching to improve responsiveness.",
      "Designed a clean, readable UI optimized for desktop and mobile."
    ]
  }
];

const skills = {
  Languages: [
    "Java",
    "C",
    "C#",
    "Python",
    "JavaScript",
    "TypeScript",
    "HTML/CSS",
    "AArch64 Assembly"
  ],
  "Frameworks & Technologies": [
    "React",
    "Node.js",
    "Spring Boot",
    ".NET 8",
    "ASP.NET Core Web API",
    "SQL Databases",
    "Domain-Driven Design (DDD)",
    "MediatR",
    "CQRS"
  ],
  "Developer Tools": [
    "VS Code",
    "Visual Studio",
    "Eclipse",
    "Git",
    "GDB",
    "SQL Server Data Tools (SSDT)",
    ".NET CLI",
    "NuGet",
    "Swagger",
    "AWS",
    "REST APIs",
    "GitHub Copilot",
    "ChatGPT"
  ]
};

const NavLink = ({ href, label }) => (
  <a className="nav-link" href={href}>
    {label}
  </a>
);

function App() {
  return (
    <div className="app">
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />

      <header className="navbar">
        <div className="navbar-left">
          <div className="logo-circle">PG</div>
          <div className="brand-text">
            <span className="brand-name">Prasidda Gautam</span>
            <span className="brand-tagline">
              Software Developer · UT Austin CS
            </span>
          </div>
        </div>
        <nav className="navbar-right">
          <NavLink href="#about" label="About" />
          <NavLink href="#experience" label="Experience" />
          <NavLink href="#projects" label="Projects" />
          <NavLink href="#skills" label="Skills" />
          <NavLink href="#contact" label="Contact" />
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section id="hero" className="section hero-section">
          <div className="hero-content">
            <p className="hero-eyebrow">Dallas · Austin · Remote</p>
            <h1 className="hero-title">
              Building reliable systems from UI to microservices.
            </h1>
            <p className="hero-subtitle">
              I&apos;m a Computer Science student at UT Austin with experience
              across full-stack development, .NET microservices, and AI
              evaluation.
            </p>
            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href="/Prasidda_Gautam_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Résumé
              </a>
              <a className="btn btn-ghost" href="#projects">
                View Projects
              </a>
            </div>
            <div className="hero-meta">
              <span>
                University of Texas at Austin · B.S. Computer Science, Business
                Minor
              </span>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-header">
              <span className="hero-dot" />
              <span className="hero-dot" />
              <span className="hero-dot" />
            </div>
            <div className="hero-card-body">
              <p className="hero-console-line">
                &gt; focus:{" "}
                <span>Full-stack · Distributed Systems · AI-driven products</span>
              </p>
              <p className="hero-console-line">
                &gt; currently:{" "}
                <span>
                  Fullstack Developer Intern @ Texas Comptroller (React · C# ·
                  .NET 8)
                </span>
              </p>
              <p className="hero-console-line">
                &gt; previously: <span>AI Evaluator · FedEx Supply Chain</span>
              </p>
              <p className="hero-console-line">
                &gt; tech:{" "}
                <span>
                  React · C# · .NET 8 · SQL · Node · Spring Boot · AWS · Python
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="section-header">
            <h2>About</h2>
            <p>A quick overview of who I am and how I work.</p>
          </div>
          <div className="section-grid two-col">
            <div className="card">
              <h3>Who I am</h3>
              <p>
                I&apos;m a software developer and Computer Science student at the
                University of Texas at Austin (Class of 2027) with a Business
                minor.
              </p>
              <p>
                I enjoy building scalable, testable, and maintainable systems
                across the full stack.
              </p>
            </div>
            <div className="card">
              <h3>How I work</h3>
              <ul className="bullet-list">
                <li>Comfortable with greenfield and legacy systems.</li>
                <li>Strong bias toward clean abstractions and APIs.</li>
                <li>Use Git and code reviews as collaboration tools.</li>
                <li>Enjoy learning from feedback and iteration.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <div className="section-header">
            <h2>Experience</h2>
            <p>Where I&apos;ve shipped software and improved systems.</p>
          </div>
          <div className="timeline">
            {experience.map((job) => (
              <article key={job.company} className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content card">
                  <div className="timeline-header">
                    <div>
                      <h3>{job.role}</h3>
                      <p className="timeline-company">{job.company}</p>
                    </div>
                    <div className="timeline-meta">
                      <span>{job.location}</span>
                      <span>{job.period}</span>
                    </div>
                  </div>
                  <ul className="bullet-list">
                    {job.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                  <div className="pill-row">
                    {job.tech.map((t) => (
                      <span key={t} className="pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="section-header">
            <h2>Projects</h2>
            <p>Selected work showcasing my development experience.</p>
          </div>
          <div className="section-grid">
            {projects.map((project) => (
              <article key={project.name} className="card project-card">
                <div className="project-header">
                  <h3>{project.name}</h3>
                  <span className="project-date">{project.date}</span>
                </div>
                <p className="project-description">
                  {project.description}
                </p>
                <ul className="bullet-list">
                  {project.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
                <div className="pill-row">
                  {project.tech.map((t) => (
                    <span key={t} className="pill pill-soft">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <div className="section-header">
            <h2>Skills</h2>
            <p>Tools and technologies I use most often.</p>
          </div>
          <div className="section-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="card">
                <h3>{category}</h3>
                <div className="pill-row">
                  {items.map((item) => (
                    <span key={item} className="pill pill-soft">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <div className="section-header">
            <h2>Contact</h2>
            <p>Let&apos;s connect.</p>
          </div>
          <div className="card contact-card">
            <p className="contact-text">
              I&apos;m open to software engineering internships and opportunities
              involving full-stack and backend development.
            </p>
            <div className="contact-links">
              <a
                href="mailto:prasiddagautam5@gmail.com"
                className="btn btn-primary"
              >
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/prasidda-gautam"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/prasidda"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Prasidda Gautam</span>
        <span>Built with React · Deployed with Vite</span>
      </footer>
    </div>
  );
}

export default App;
