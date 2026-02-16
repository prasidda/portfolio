// App.jsx
import React, { useMemo, useState, useEffect, useRef } from "react";
import "./App.css";

/* ───── Data ───── */
const experience = [
  {
    company: "Texas Comptroller of Public Accounts",
    role: "Fullstack Developer Intern",
    location: "Austin, TX",
    period: "Sep 2025 — Dec 2025",
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
    period: "May 2024 — May 2025",
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
    period: "May 2024 — Aug 2024",
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
      "Full-stack web application serving 50K+ relational records with fast search, joins, and server-side pagination under 300ms average API response times.",
    bullets: [
      "Server-side pagination and query filtering reduced payload sizes by ~70%, improving front-end scalability.",
      "Built responsive UI components and interactive data visualizations with React, Bootstrap, D3, and Recharts.",
      "Cross-functional 5-person team using Git workflows, peer code reviews, and CI-tested backend with 90%+ PyTest coverage.",
    ],
    tech: ["React", "Flask", "PostgreSQL", "Docker", "AWS Amplify", "D3", "Recharts", "PyTest"],
  },
  {
    name: "CPU Emulator",
    date: "Nov 2024",
    description:
      "Designed and built a CPU emulator with a functioning multi-stage pipeline (fetch, decode, execute, memory, write-back) replicating real processor behavior.",
    bullets: [
      "Implemented cache management and hazard detection mechanisms, reducing memory access penalties.",
      "Tested using AArch64 Assembly for performance optimizations, debugged with GDB.",
      "Utilized UTCS Linux machines through SSH for remote development and cross-platform reliability.",
    ],
    tech: ["C", "AArch64 Assembly", "GDB", "Git", "SSH", "Linux"],
  },
  {
    name: "Weather App",
    date: "Dec 2024",
    description: "Responsive weather application displaying real-time conditions for any searched location worldwide.",
    bullets: [
      "Built single-page app using React, Vite, and TypeScript.",
      "Integrated OpenWeather API and GeoDB Cities API for accurate location-based weather data.",
      "Boosted app responsiveness by 50% through asynchronous data fetching.",
    ],
    tech: ["React", "Vite", "TypeScript", "OpenWeather API", "GeoDB Cities API"],
  },
];

const skillDashboard = {
  "Languages": [
    { name: "Java", level: 85, signal: "primary" },
    { name: "C# / .NET 8", level: 85, signal: "production" },
    { name: "JavaScript / TS", level: 84, signal: "production" },
    { name: "Python", level: 78, signal: "projects" },
    { name: "C", level: 74, signal: "systems" },
    { name: "HTML / CSS", level: 86, signal: "production" },
  ],
  "Frameworks & Systems": [
    { name: "React", level: 88, signal: "production" },
    { name: "ASP.NET Core", level: 82, signal: "production" },
    { name: "Spring Boot", level: 68, signal: "coursework" },
    { name: "Node.js", level: 72, signal: "projects" },
    { name: "CQRS + MediatR", level: 76, signal: "shipped" },
    { name: "DDD Patterns", level: 72, signal: "applied" },
  ],
  "Infra & Data": [
    { name: "SQL Databases", level: 82, signal: "production" },
    { name: "AWS (S3/Amplify)", level: 70, signal: "hands-on" },
    { name: "Docker", level: 64, signal: "projects" },
    { name: "Git Workflows", level: 88, signal: "daily" },
    { name: "CI Pipelines", level: 68, signal: "projects" },
    { name: "REST API Design", level: 84, signal: "production" },
  ],
};

const toolbelt = [
  "VS Code", "Visual Studio", "Eclipse", "Git", "GDB", "SSDT", ".NET CLI",
  "NuGet", "Swagger", "React DevTools", "GitHub Copilot", "ChatGPT", "AWS", "REST APIs", "Postman"
];

/* ───── Hooks ───── */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ───── Components ───── */
function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useReveal(0.12);
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "revealed" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Pill({ children }) {
  return <span className="pill">{children}</span>;
}

function SkillRow({ name, level, signal }) {
  const [ref, visible] = useReveal(0.1);
  return (
    <div className="skillRow" ref={ref}>
      <div className="skillMeta">
        <div className="skillName">{name}</div>
        <div className="skillSignal">{signal}</div>
      </div>
      <div className="bar" aria-label={`${name} proficiency ${level} percent`}>
        <div
          className="barFill"
          style={{ width: visible ? `${level}%` : "0%", transition: "width 1s cubic-bezier(.22,1,.36,1)" }}
        />
      </div>
    </div>
  );
}

function FloatingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["contact", "skills", "projects", "experience", "education", "about"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 200) { setActive(id); return; }
      }
      setActive("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className={`nav ${scrolled ? "navScrolled" : ""}`}>
      <div className="navInner">
        <a className="brand" href="#top" aria-label="Go to top">
          <span className="brandMark">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M2 16V2h6c3.3 0 5 1.7 5 4.2 0 2.6-1.8 4.3-5.2 4.3H5.5" stroke="#0b0c10" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5.5 10.5V16" stroke="#0b0c10" strokeWidth="2.2" strokeLinecap="round"/>
            </svg>
          </span>
          <span className="brandText">
            <span className="brandName">Prasidda Gautam</span>
            <span className="brandSub">Software Developer · UT Austin CS '27</span>
          </span>
        </a>

        <nav className="navLinks" aria-label="Primary navigation">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={active === l.id ? "navActive" : ""}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

/* ───── Main App ───── */
export default function App() {
  const [openXp, setOpenXp] = useState(experience[0]?.company ?? "");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
  }, []);

  const heroHighlights = useMemo(
    () => [
      { k: "50K+", v: "records served", icon: "◆" },
      { k: "<300ms", v: "avg API response", icon: "⚡" },
      { k: "~70%", v: "payload reduction", icon: "↓" },
      { k: "90%+", v: "test coverage", icon: "✓" },
    ],
    []
  );

  return (
    <div className={`app ${mounted ? "appMounted" : ""}`}>
      {/* Decorative grid overlay */}
      <div className="gridOverlay" aria-hidden="true" />

      <FloatingNav />

      <main id="top" className="container">
        {/* ── HERO ── */}
        <section className="hero">
          <div className="heroLeft">
            <div className="heroEyebrow">
              <span className="eyebrowDot" />
              <span>Available for Summer 2026 internships</span>
            </div>

            <h1 className="heroTitle">
              <span className="heroLine heroLine1">Building reliable</span>
              <span className="heroLine heroLine2">systems from</span>
              <span className="heroLine heroLine3">
                <span className="heroAccent">UI</span> to{" "}
                <span className="heroAccent">microservices</span>
              </span>
            </h1>

            <p className="lead">
              CS at UT Austin (3.7 GPA) with production experience across full-stack development, .NET microservices, and AI evaluation. I write code that ships, scales, and survives code review.
            </p>

            <div className="heroActions">
              <a className="btnPrimary" href="/Prasidda_Gautam_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <span>↗</span> Resume
              </a>
              <a className="btnGhost" href="#projects">
                Projects
              </a>
              <a className="btnGhost" href="https://github.com/prasidda" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a className="btnGhost" href="https://linkedin.com/in/prasidda-gautam" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>

            <div className="heroStats">
              {heroHighlights.map((x, i) => (
                <div className="stat" key={x.k} style={{ animationDelay: `${600 + i * 100}ms` }}>
                  <div className="statIcon">{x.icon}</div>
                  <div className="statK">{x.k}</div>
                  <div className="statV">{x.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="heroRight">
            <div className="terminal">
              <div className="termTop" aria-hidden="true">
                <span /><span /><span />
                <div className="termTitle">prasidda.dev</div>
              </div>
              <div className="termBody">
                <div className="tline"><span className="prompt">→</span> <span className="tkey">focus</span> <span className="tstrong">Full-stack · Distributed Systems · AI</span></div>
                <div className="tline"><span className="prompt">→</span> <span className="tkey">latest</span> <span className="tstrong">Texas Comptroller — Sep–Dec 2025</span></div>
                <div className="tline"><span className="prompt">→</span> <span className="tkey">stack</span> <span className="tstrong">React · C# · .NET 8 · SQL · AWS · Python</span></div>
                <div className="tline"><span className="prompt">→</span> <span className="tkey">values</span> <span className="tstrong">Clean APIs · Maintainability · Performance</span></div>
                <div className="tline tlineCursor"><span className="prompt">→</span> <span className="tkey">status</span> <span className="tstrong cursorBlink">open to opportunities_</span></div>
              </div>
            </div>

            <div className="locationCard">
              <div className="locationIcon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1C5.2 1 3 3.2 3 6c0 4 5 9 5 9s5-5 5-9c0-2.8-2.2-5-5-5z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <circle cx="8" cy="6" r="1.5" fill="currentColor"/>
                </svg>
              </div>
              <div className="locationText">
                <span className="locationCity">Dallas · Austin, TX</span>
                <span className="locationNote">Open to relocation</span>
              </div>
            </div>

            <div className="miniNote">
              <div className="miniNoteIcon">✦</div>
              <div>
                <div className="miniNoteTitle">Why this portfolio is different</div>
                <div className="miniNoteBody">
                  Every metric is real. Every bullet ties to shipped code. No filler.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className="section">
          <Reveal>
            <div className="sectionLabel">
              <span className="sectionNum">01</span>
              <h2>About</h2>
            </div>
          </Reveal>

          <div className="aboutGrid">
            <Reveal delay={100}>
              <div className="card cardAbout">
                <div className="cardIcon">⬡</div>
                <h3>Who I am</h3>
                <p>
                  Software developer and CS student at the University of Texas at Austin (Class of 2027) with a Business minor and a 3.7 GPA. I care about building systems that are scalable, testable, and maintainable, not just functional.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="card cardAbout">
                <div className="cardIcon">⟐</div>
                <h3>How I work</h3>
                <p>Comfortable with greenfield and legacy systems alike. Strong bias toward clean abstractions and APIs. Git and code reviews are collaboration tools, not checkboxes. I iterate quickly and ship responsibly.</p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="card cardAbout">
                <div className="cardIcon">◈</div>
                <h3>What drives me</h3>
                <p>I want to work on problems where the engineering matters, where performance, architecture, and reliability are requirements and not afterthoughts.</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── EDUCATION ── */}
        <section id="education" className="section">
          <Reveal>
            <div className="sectionLabel">
              <span className="sectionNum">02</span>
              <h2>Education</h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="card eduCard">
              <div className="eduTop">
                <div className="eduMain">
                  <h3>University of Texas at Austin</h3>
                  <p className="eduDegree">Bachelor of Science in Computer Science · Minor in Business</p>
                </div>
                <div className="eduSide">
                  <span className="eduDate">Aug 2023 - May 2027</span>
                  <span className="eduGpa">3.7 GPA</span>
                </div>
              </div>
              <div className="eduCourses">
                <span className="eduCoursesLabel">Relevant Coursework</span>
                <div className="pills">
                  {[
                    "Data Structures", "Algorithms Analysis", "Artificial Intelligence",
                    "Computer Architecture", "Operating Systems", "Cloud Computing",
                    "Software Engineering", "Linear Algebra", "Discrete Math"
                  ].map((c) => <Pill key={c}>{c}</Pill>)}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── EXPERIENCE ── */}
        <section id="experience" className="section">
          <Reveal>
            <div className="sectionLabel">
              <span className="sectionNum">03</span>
              <h2>Experience</h2>
            </div>
          </Reveal>

          <div className="xpList">
            {experience.map((job, idx) => {
              const open = openXp === job.company;
              return (
                <Reveal key={job.company} delay={idx * 80}>
                  <div className={`xpItem ${open ? "open" : ""}`}>
                    <button className="xpHead" onClick={() => setOpenXp(open ? "" : job.company)} type="button">
                      <div className="xpMain">
                        <div className="xpRole">{job.role}</div>
                        <div className="xpCompany">{job.company}</div>
                      </div>
                      <div className="xpSide">
                        <div className="xpMeta">{job.location}</div>
                        <div className="xpMeta">{job.period}</div>
                        <div className="xpToggle" aria-hidden="true">
                          <svg width="12" height="12" viewBox="0 0 12 12" style={{ transform: open ? "rotate(45deg)" : "rotate(0)", transition: "transform 0.3s ease" }}>
                            <line x1="6" y1="1" x2="6" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            <line x1="1" y1="6" x2="11" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                          </svg>
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
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects" className="section">
          <Reveal>
            <div className="sectionLabel">
              <span className="sectionNum">04</span>
              <h2>Projects</h2>
            </div>
          </Reveal>

          <div className="projGrid">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 120}>
                <article className="card cardProj">
                  <div className="projTop">
                    <h3>{p.name}</h3>
                    <span className="projDate">{p.date}</span>
                  </div>
                  <p className="projDesc">{p.description}</p>
                  <ul>
                    {p.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                  <div className="projBottom">
                    <div className="pills">
                      {p.tech.map((t) => (
                        <Pill key={t}>{t}</Pill>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section id="skills" className="section">
          <Reveal>
            <div className="sectionLabel">
              <span className="sectionNum">05</span>
              <h2>Skills</h2>
            </div>
          </Reveal>

          <div className="skillsDash">
            {Object.entries(skillDashboard).map(([group, items], i) => (
              <Reveal key={group} delay={i * 100}>
                <div className="card cardSkill">
                  <div className="skillsHead">
                    <h3>{group}</h3>
                    <span className="skillsHint">signal-based</span>
                  </div>
                  <div className="skillsRows">
                    {items.map((s) => (
                      <SkillRow key={s.name} name={s.name} level={s.level} signal={s.signal} />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
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
          </Reveal>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="section">
          <Reveal>
            <div className="sectionLabel">
              <span className="sectionNum">06</span>
              <h2>Contact</h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="contactCard">
              <div className="contactLeft">
                <h3 className="contactHeading">Let's build something together.</h3>
                <p className="contactSub">
                  I'm open to engineering internships and opportunities where I can build real systems across full-stack, backend, and applied AI. References available on request.
                </p>
              </div>
              <div className="contactActions">
                <a className="btnPrimary" href="mailto:prasiddagautam5@gmail.com?subject=Let's%20connect">
                  <span>✉</span> Email Me
                </a>
                <a className="btnGhost" href="https://github.com/prasidda" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a className="btnGhost" href="https://linkedin.com/in/prasidda-gautam" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        <footer className="footer">
          <div className="footerInner">
            <span>© {new Date().getFullYear()} Prasidda Gautam</span>
            <span className="footerDot">·</span>
            <span>Built with React</span>
          </div>
        </footer>
      </main>
    </div>
  );
}