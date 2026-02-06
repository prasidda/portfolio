// App.jsx
import React, { useMemo, useState } from "react";
import "./App.css";

const experience = [
  {
    company: "Texas Comptroller of Public Accounts",
    role: "Fullstack Developer Intern",
    location: "Austin, TX",
    period: "Sep 2025 to Dec 2025",
    bullets: [
      "Developed production-ready Field Appraisal System utilizing React front end, C# .NET with MS SQL microservices, supporting data-driven decision making and internal state workflows.",
      "Implemented a file import pipeline utilizing Backend for Frontend (BFF) API and Amazon S3, enabling virus scans and asynchronous processing for scalability and reliability.",
      "Built scalable .NET 8 microservices using domain-driven architecture and CQRS with MediatR, improving maintainability and independent service evolution.",
      "Implemented RESTful APIs backed by SQL databases to support transactional workflows, improving data consistency and end-user responsiveness through collaborative design and code reviews.",
    ],
    tech: ["React", "C#", ".NET 8", "MS SQL", "AWS S3", "CQRS", "MediatR", "DDD", "BFF"],
  },
  {
    company: "Outlier AI",
    role: "AI Evaluator",
    location: "Remote",
    period: "May 2024 to May 2025",
    bullets: [
      "Evaluated large language models and generative AI systems for enterprise clients, including Amazon, Apple, and Microsoft, identifying failure cases and improving inference accuracy through structured testing.",
      "Created advanced training and evaluation frameworks for AI systems used by Meta, Google, and OpenAI, increasing model response quality and reliability.",
      "Provided data-driven performance reports to AI development teams, cutting overall error rates in models and improving alignment with real-world cases.",
    ],
    tech: ["LLMs", "Evaluation", "Prompting", "Data Analysis", "Testing"],
  },
  {
    company: "FedEx Supply Chain",
    role: "Supply Chain Associate",
    location: "Coppell, TX",
    period: "May 2024 to Aug 2024",
    bullets: [
      "Optimized logistics workflows by relocating 300+ mobile devices based on performance metrics, boosting operational throughput by 15%.",
      "Met daily dispatch targets and maintained a safe work environment by coordinating cross-functional teams of 20+ employees and management.",
      "Trained 5+ new hires on standard operating procedures and inventory management with a 100% success rate.",
    ],
    tech: ["Operations", "Coordination", "Training", "Process Improvement"],
  },
];

const projects = [
  {
    name: "EducaNation",
    date: "Dec 2025",
    description:
      "Full stack app serving 50K+ relational records with fast search, joins, and server side pagination under 300ms average API response times.",
    bullets: [
      "Server side pagination plus filtering reduced payload size by about 70%.",
      "Responsive UI plus data visualizations built in React with charts.",
      "Deployed frontend on AWS Amplify and used CI plus tests with 90%+ backend coverage.",
    ],
    tech: ["React", "Flask", "PostgreSQL", "Docker", "AWS", "D3", "Recharts", "PyTest"],
  },
  {
    name: "Weather App",
    date: "Dec 2024",
    description: "Responsive weather app showing real time conditions for any searched location.",
    bullets: [
      "Built SPA using React and Vite.",
      "Integrated OpenWeather plus GeoDB Cities APIs.",
      "Async fetching for faster UI updates and clean UX.",
    ],
    tech: ["React", "Vite", "TypeScript", "OpenWeather API", "GeoDB Cities API"],
  },
];

// Skills dashboard that shows depth with signals (not just chips)
const skillDashboard = {
  "Core (ship level)": [
    { name: "React", level: 88, signal: "used in production" },
    { name: "C# and .NET", level: 85, signal: "used in production" },
    { name: "SQL", level: 82, signal: "used in production" },
    { name: "REST API design", level: 84, signal: "used in production" },
  ],
  "Systems and backend": [
    { name: "Microservices", level: 78, signal: "built and shipped" },
    { name: "CQRS plus MediatR", level: 76, signal: "built and shipped" },
    { name: "DDD patterns", level: 72, signal: "applied in services" },
    { name: "Testing mindset", level: 80, signal: "coverage driven" },
  ],
  "Infra and tooling": [
    { name: "AWS (S3 and Amplify)", level: 70, signal: "hands on" },
    { name: "Docker", level: 64, signal: "projects" },
    { name: "Git workflows", level: 86, signal: "daily" },
    { name: "CI basics", level: 68, signal: "projects" },
  ],
};

const toolbelt = ["VS Code", "Visual Studio", "Git", "Swagger", ".NET CLI", "SSDT", "Postman", "GitHub Copilot"];

function Pill({ children }) {
  return <span className="pill">{children}</span>;
}

function SkillRow({ name, level, signal }) {
  return (
    <div className="skillRow">
      <div className="skillMeta">
        <div className="skillName">{name}</div>
        <div className="skillSignal">{signal}</div>
      </div>
      <div className="bar" aria-label={`${name} proficiency ${level} percent`}>
        <div className="barFill" style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}

function SectionTitle({ title, subtitle }) {
  return (
    <div className="sectionTitle">
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
  );
}

export default function App() {
  const [openXp, setOpenXp] = useState(experience[0]?.company ?? "");

  const heroHighlights = useMemo(
    () => [
      { k: "50K+", v: "records served" },
      { k: "<300ms", v: "avg API response" },
      { k: "~70%", v: "payload reduction" },
      { k: "90%+", v: "test coverage" },
    ],
    []
  );

  return (
    <div className="app">
      <header className="nav">
        <div className="navInner">
          <a className="brand" href="#top" aria-label="Go to top">
            <span className="brandMark">PG</span>
            <span className="brandText">
              <span className="brandName">Prasidda Gautam</span>
              <span className="brandSub">Software Developer · UT Austin CS</span>
            </span>
          </a>

          <nav className="navLinks" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top" className="container">
        {/* HERO */}
        <section className="hero">
          <div className="heroLeft">
            <div className="heroMeta">
              <span className="heroMetaLabel">Location</span>
              <span className="heroMetaValue">Dallas, TX · Austin, TX</span>
            </div>

            <h1>
              Building reliable systems
              <br />
              from UI to microservices.
            </h1>

            <p className="lead">
              Computer Science at UT Austin with experience across full stack development, .NET microservices, and AI
              evaluation.
            </p>

            <div className="heroActions">
              <a className="btnPrimary" href="/Prasidda_Gautam_Resume.pdf" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
              <a className="btnGhost" href="#projects">
                View Projects
              </a>
              <a className="btnGhost" href="https://github.com/prasidda" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>

            <div className="heroStats">
              {heroHighlights.map((x) => (
                <div className="stat" key={x.k}>
                  <div className="statK">{x.k}</div>
                  <div className="statV">{x.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="heroRight">
            <div className="terminal">
              <div className="termTop" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="termBody">
                <div className="tline">
                  <span className="prompt">&gt;</span> focus:{" "}
                  <span className="tstrong">Full stack, distributed systems, AI products</span>
                </div>
                <div className="tline">
                  <span className="prompt">&gt;</span> most recent:{" "}
                  <span className="tstrong">Texas Comptroller (Sep 2025 to Dec 2025)</span>
                </div>
                <div className="tline">
                  <span className="prompt">&gt;</span> tech:{" "}
                  <span className="tstrong">React, C#, .NET 8, SQL, AWS, Python</span>
                </div>
                <div className="tline">
                  <span className="prompt">&gt;</span> bias:{" "}
                  <span className="tstrong">clean APIs, maintainability, performance</span>
                </div>
              </div>
            </div>

            <div className="miniNote">
              <div className="miniNoteTitle">What recruiters care about</div>
              <div className="miniNoteBody">
                I highlight scale, measurable outcomes, and production patterns, not just tool lists.
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <SectionTitle title="About" subtitle="A quick overview of who I am and how I work." />
          <div className="grid2">
            <div className="card">
              <h3>Who I am</h3>
              <p>
                I am a software developer and Computer Science student at the University of Texas at Austin (Class of
                2027) with a Business minor.
              </p>
              <p>I build scalable, testable, maintainable systems across the full stack.</p>
            </div>

            <div className="card">
              <h3>How I work</h3>
              <ul>
                <li>Comfortable with greenfield and legacy systems.</li>
                <li>Strong bias toward clean abstractions and APIs.</li>
                <li>Use Git and code reviews as collaboration tools.</li>
                <li>Iterate quickly and ship responsibly.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <SectionTitle title="Experience" subtitle="Where I have shipped software and improved systems." />

          <div className="xpList">
            {experience.map((job) => {
              const open = openXp === job.company;
              return (
                <div className={`xpItem ${open ? "open" : ""}`} key={job.company}>
                  <button className="xpHead" onClick={() => setOpenXp(open ? "" : job.company)} type="button">
                    <div className="xpMain">
                      <div className="xpRole">{job.role}</div>
                      <div className="xpCompany">{job.company}</div>
                    </div>
                    <div className="xpSide">
                      <div className="xpMeta">{job.location}</div>
                      <div className="xpMeta">{job.period}</div>
                      <div className="xpToggle" aria-hidden="true">
                        {open ? "-" : "+"}
                      </div>
                    </div>
                  </button>

                  <div className="xpBody">
                    <ul>
                      {job.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                    <div className="pills">
                      {job.tech.map((t) => (
                        <Pill key={t}>{t}</Pill>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <SectionTitle title="Projects" subtitle="Selected work showcasing my development experience." />

          <div className="projGrid">
            {projects.map((p) => (
              <article className="card" key={p.name}>
                <div className="projTop">
                  <h3>{p.name}</h3>
                  <span className="projDate">{p.date}</span>
                </div>
                <p className="muted">{p.description}</p>
                <ul>
                  {p.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <div className="pills">
                  {p.tech.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <SectionTitle
            title="Skills"
            subtitle="A clearer view of what I am strong at, with signals that reflect real usage."
          />

          <div className="skillsDash">
            {Object.entries(skillDashboard).map(([group, items]) => (
              <div className="card" key={group}>
                <div className="skillsHead">
                  <h3>{group}</h3>
                  <span className="skillsHint">signal based</span>
                </div>
                <div className="skillsRows">
                  {items.map((s) => (
                    <SkillRow key={s.name} name={s.name} level={s.level} signal={s.signal} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="card toolbelt">
            <div className="skillsHead">
              <h3>Toolbelt</h3>
              <span className="skillsHint">daily drivers</span>
            </div>
            <div className="pills">
              {toolbelt.map((t) => (
                <Pill key={t}>{t}</Pill>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <SectionTitle title="Contact" subtitle="Lets connect." />

          <div className="card contact">
            <p className="muted">
              I’m open to engineering opportunities where I can build real systems across full stack, backend, and
              applied AI. References are available upon request, just email me and I’ll send them over.
            </p>
            <div className="contactActions">
              <a className="btnPrimary" href="mailto:prasiddagautam5@gmail.com?subject=References%20request">
                Email Me
              </a>
              <a className="btnGhost" href="https://github.com/prasidda" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a
                className="btnGhost"
                href="https://linkedin.com/in/prasidda-gautam"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <footer className="footer">© {new Date().getFullYear()} · prasidda.dev</footer>
      </main>
    </div>
  );
}
