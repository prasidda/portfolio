import React from "react";

const experience = [
  {
    company: "Texas Comptroller of Public Accounts",
    role: "Fullstack Developer Intern",
    location: "Austin, TX",
    period: "Sep 2025 – Dec 2025",
    bullets: [
      "Developed the Field Appraisal System using a React front end and C# .NET microservices with an MS SQL backend.",
      "Built a file import pipeline using a Backend-for-Frontend (BFF) API, Amazon S3 uploads, and asynchronous workflows for secure virus-scanned processing.",
      "Implemented scalable .NET 8 microservices with domain-driven design and MediatR for CQRS and decoupled communication.",
      "Integrated with SQL databases and exposed RESTful APIs for a smooth, reliable user experience."
    ],
    tech: ["React", "C# .NET 8", "MS SQL", "AWS S3", "CQRS", "MediatR"]
  },
  {
    company: "Outlier AI",
    role: "AI Evaluator",
    location: "Remote",
    period: "May 2024 – May 2025",
    bullets: [
      "Evaluated multiple LLMs and generative AI systems for companies such as Amazon, Apple, and Microsoft to improve inference accuracy.",
      "Created advanced training frameworks for clients like Meta, Google, and OpenAI, improving model quality and reliability.",
      "Provided data-driven feedback and evaluation reports to client AI teams, reducing error rates and improving model performance."
    ],
    tech: ["LLMs", "Prompting", "Evaluation Pipelines", "Data Analysis"]
  },
  {
    company: "FedEx Supply Chain",
    role: "Supply Chain Associate",
    location: "Coppell, TX",
    period: "May 2024 – Aug 2024",
    bullets: [
      "Relocated 300+ mobile devices based on performance metrics, optimizing logistics workflows and boosting throughput by 15%.",
      "Coordinated cross-functional teams of 20+ employees to achieve daily dispatch targets in a safe environment.",
      "Trained 5+ new hires in standard operating procedures and inventory management with a 100% success rate."
    ],
    tech: ["Logistics", "Operations", "Team Training"]
  }
];

const projects = [
  {
    name: "Weather App",
    date: "Dec 2024",
    tech: ["React", "Vite", "TypeScript", "OpenWeather API", "GeoDB Cities API"],
    description:
      "A responsive weather application that displays real-time conditions for any searched location, with clean UI and fast updates.",
    details: [
      "Used React and Vite to build a highly responsive, SPA-style interface.",
      "Integrated OpenWeather and Rapid GeoDB Cities APIs to fetch accurate weather and location data.",
      "Implemented asynchronous data fetching for instant updates, boosting responsiveness.",
      "Designed a clean, readable layout for both desktop and mobile users."
    ]
  },
  {
    name: "CPU Emulator",
    date: "Nov 2024",
    tech: ["C", "AArch64 Assembly", "GDB", "Git", "Linux (SSH)"],
    description:
      "A fully functioning CPU emulator with a multi-stage pipeline, cache management, and hazard control.",
    details: [
      "Implemented a 5-stage pipeline (fetch, decode, execute, memory, writeback) to emulate real processor behavior.",
      "Engineered cache management and hazard control, reducing memory access rates significantly.",
      "Used AArch64 Assembly for performance testing and GDB for debugging complex execution paths.",
      "Developed on UTCS Linux machines over SSH for reliable, cross-platform behavior."
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
  "Frameworks & Tech": [
    "React",
    "Node.js",
    "Spring Boot",
    ".NET 8",
    "ASP.NET Core Web API",
    "SQL Databases",
    "Domain-Driven Design (DDD)"
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
    "ChatGPT",
    "GitHub Copilot"
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
      {/* Background gradient blobs */}
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />

      <header className="navbar">
        <div className="navbar-left">
          <div className="logo-circle">PG</div>
          <div className="brand-text">
            <span className="brand-name">Prasidda Gautam</span>
            <span className="brand-tagline">Software Developer · UT Austin CS</span>
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
              I&apos;m a Computer Science student at UT Austin with experience in full-stack
              development, .NET microservices, and AI evaluation. I enjoy turning complex
              requirements into clean, production-ready systems.
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
              <span>University of Texas at Austin · B.S. Computer Science, Business Minor</span>
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
                &gt; focus: <span>Full-stack · Distributed Systems · AI-driven products</span>
              </p>
              <p className="hero-console-line">
                &gt; currently:{" "}
                <span>Fullstack Developer Intern @ Texas Comptroller (React · .NET 8)</span>
              </p>
              <p className="hero-console-line">
                &gt; previously: <span>AI Evaluator @ Outlier · FedEx Supply Chain</span>
              </p>
              <p className="hero-console-line">
                &gt; tech:{" "}
                <span>
                  React · C# · .NET 8 · SQL · Node · Spring Boot · AWS · AArch64 · Python
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="section-header">
            <h2>About</h2>
            <p>
              A quick overview of who I am, what I&apos;ve done, and how I like to work.
            </p>
          </div>
          <div className="section-grid two-col">
            <div className="card">
              <h3>Who I am</h3>
              <p>
                I&apos;m a software developer and Computer Science student at the University of
                Texas at Austin (Class of 2027), with a Business minor. I enjoy building systems
                that are not only functional, but scalable, testable, and maintainable.
              </p>
              <p>
                I&apos;ve worked across the stack: from React frontends to .NET 8 microservices and
                SQL databases, and I&apos;ve spent time evaluating large language models for major
                tech companies. I like roles where I can own a feature end-to-end.
              </p>
            </div>
            <div className="card">
              <h3>How I work</h3>
              <ul className="bullet-list">
                <li>Comfortable with both greenfield projects and legacy systems.</li>
                <li>Strong bias toward clean abstractions and clear API contracts.</li>
                <li>Use Git and code reviews as collaboration tools, not just tooling.</li>
                <li>Enjoy pairing with other engineers and learning from feedback.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <div className="section-header">
            <h2>Experience</h2>
            <p>
              Roles where I&apos;ve shipped software, improved systems, and learned how teams work.
            </p>
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
            <p>Selected work that shows how I design, build, and ship software.</p>
          </div>
          <div className="section-grid">
            {projects.map((project) => (
              <article key={project.name} className="card project-card">
                <div className="project-header">
                  <h3>{project.name}</h3>
                  <span className="project-date">{project.date}</span>
                </div>
                <p className="project-description">{project.description}</p>
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
            <p>A snapshot of the tools and technologies I use most often.</p>
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
            <p>Let&apos;s talk about internships, projects, or anything software-related.</p>
          </div>
          <div className="card contact-card">
            <p className="contact-text">
              I&apos;m open to software engineering internships and roles where I can work on web
              applications, backend services, and distributed systems.
            </p>
            <div className="contact-links">
              <a href="mailto:prasiddagautam5@gmail.com" className="btn btn-primary">
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
