// App.jsx — layout & components only.
// All content lives in src/data.js — edit that file to update the site.
import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { profile, experience, projects, skills, education } from "./data";

/* ───── Reveal-on-scroll ───── */
function useReveal(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ───── Section frame ───── */
function Section({ id, index, title, children }) {
  return (
    <section id={id} className="section">
      <Reveal>
        <header className="section-head">
          <span className="section-index">{index}</span>
          <h2 className="section-title">{title}</h2>
        </header>
      </Reveal>
      {children}
    </section>
  );
}

/* ───── Header ───── */
const navLinks = [
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <a className="wordmark" href="#top">{profile.name}</a>
      <nav className="site-nav" aria-label="Primary">
        {navLinks.map((l) => (
          <a key={l.id} href={`#${l.id}`}>{l.label}</a>
        ))}
      </nav>
    </header>
  );
}

/* ───── Hero ───── */
function Hero() {
  const [first, ...rest] = profile.name.split(" ");
  return (
    <section className="hero">
      <p className="kicker">
        {profile.title} — {profile.school}
      </p>
      <h1 className="hero-name">
        <span className="hero-line">{first}</span>
        <span className="hero-line hero-line-indent">
          <em>{rest.join(" ")}</em>
        </span>
      </h1>
      <div className="hero-foot">
        <p className="hero-tagline">
          {profile.headline[0]} {profile.headline[1]}
        </p>
        <div className="hero-side">
          <p className="hero-lead">{profile.lead}</p>
          <div className="hero-actions">
            <a className="btn btn-solid" href={profile.resume} target="_blank" rel="noopener noreferrer">
              Resume ↗
            </a>
            <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="hero-meta">
        <span className="meta-item">
          <span className="meta-dot" aria-hidden="true" /> {profile.status}
        </span>
        <span className="meta-item">{profile.location}</span>
      </div>
    </section>
  );
}

/* ───── Experience ───── */
function Work() {
  return (
    <Section id="work" index="01" title="Experience">
      <div className="work-list">
        {experience.map((job, i) => (
          <Reveal key={job.company + job.period} delay={i * 60}>
            <article className="work-item">
              <div className="work-when">
                <span>{job.period}</span>
                <span className="work-where">{job.location}</span>
              </div>
              <div className="work-body">
                <h3 className="work-role">{job.role}</h3>
                <p className="work-company">{job.company}</p>
                <ul className="work-bullets">
                  {job.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
                <p className="tag-line">{job.tech.join(" · ")}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ───── Projects ───── */
function Projects() {
  return (
    <Section id="projects" index="02" title="Projects">
      <div className="proj-list">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 60}>
            <article className="proj-row">
              <div className="proj-name-col">
                <h3 className="proj-name">
                  {p.link ? (
                    <a href={p.link} target="_blank" rel="noopener noreferrer">
                      {p.name} <span className="proj-arrow">↗</span>
                    </a>
                  ) : (
                    p.name
                  )}
                </h3>
                <span className="proj-date">{p.date}</span>
              </div>
              <div className="proj-body">
                <p className="proj-desc">{p.description}</p>
                <ul className="proj-bullets">
                  {p.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
                <p className="tag-line">{p.tech.join(" · ")}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ───── Skills ───── */
function Skills() {
  return (
    <Section id="skills" index="03" title="Skills">
      <div className="skills-grid">
        {Object.entries(skills).map(([group, items], i) => (
          <Reveal key={group} delay={i * 60}>
            <div className="skills-col">
              <h3 className="skills-group">{group}</h3>
              <ul className="skills-list">
                {items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ───── Education ───── */
function Education() {
  return (
    <Section id="education" index="04" title="Education">
      <Reveal>
        <div className="edu">
          <div className="edu-main">
            <h3 className="edu-school">{education.school}</h3>
            <p className="edu-degree">{education.degree}</p>
            <p className="tag-line edu-courses">
              {education.coursework.join(" · ")}
            </p>
          </div>
          <div className="edu-side">
            <span>{education.period}</span>
            <span className="edu-gpa">{education.gpa}</span>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

/* ───── Contact ───── */
function Contact() {
  return (
    <Section id="contact" index="05" title="Contact">
      <Reveal>
        <div className="contact">
          <p className="contact-pitch">
            Currently @ IBM Key Protect
          </p>
          <a className="contact-email" href={`mailto:${profile.email}?subject=Let's%20connect`}>
            {profile.email}
          </a>
          <div className="contact-links">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

/* ───── App ───── */
export default function App() {
  return (
    <div className="page" id="top">
      <SiteHeader />
      <main className="frame">
        <Hero />
        <Work />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="frame footer-inner">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>{profile.location.split("—")[0].trim()}</span>
        </div>
      </footer>
    </div>
  );
}
