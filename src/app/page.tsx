import Image from "next/image";
import { CalendarDays, GraduationCap, Layers3, MapPin, Download } from "lucide-react";
import { ContactForm } from "./contact-form";
import { contact, education, experience, projects, videos } from "./portfolio";

const navigation = [
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header" id="top">
        <div className="shell header-inner">
          <a className="brand" href="#top">
            <span className="monogram" aria-hidden="true">KA</span>
            <span>Khalid Alhajj</span>
          </a>
          <nav aria-label="Main navigation">
            {navigation.map(({ href, label }) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <a className="resume-link" href="/resume.pdf" download="Khalid-Alhajj-Resume.pdf">
            <Download size={17} aria-hidden="true" /> Résumé
          </a>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow location"><MapPin size={16} aria-hidden="true" /> Riyadh, Saudi Arabia</p>
            <h1 id="hero-title">Khalid<br />Alhajj<span>.</span></h1>
            <p className="role">Operations &amp; software development</p>
            <p className="intro">I lead logistics operations and build software for the work behind them. My projects span rider scheduling, partner training, and enrollment tools.</p>
            <div className="actions">
              <a className="button button-primary" href="#projects">See my work</a>
              <a className="button button-outline" href="#contact">Get in touch</a>
            </div>
          </div>
          <figure className="portrait">
            <div className="portrait-image">
              <Image src="/profile.jpg" alt="Portrait of Khalid Alhajj" fill preload sizes="(max-width: 700px) 90vw, (max-width: 1100px) 38vw, 412px" />
            </div>
          </figure>
        </section>

        <section id="projects" className="work-section">
          <div className="shell">
            <div className="section-heading">
              <h2>Selected work</h2>
              <p>Tools and programs I built for logistics and education teams.</p>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project" key={project.title}>
                  <div className={`project-visual ${project.theme}`} aria-hidden="true">
                    {project.theme === "scheduler" && <CalendarDays />}
                    {project.theme === "academy" && <GraduationCap />}
                    {project.theme === "training" && <Layers3 />}
                  </div>
                  <div className="project-content">
                    <p className="eyebrow">{project.subtitle}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    {project.result && <p className="result">{project.result}</p>}
                    {project.url && <a className="text-link" href={project.url}>{project.link}</a>}
                  </div>
                </article>
              ))}
            </div>
            <div className="additional-work">
              <h3>More projects</h3>
              <div className="secondary-grid">
                <article>
                  <h4>Last-mile delivery system</h4>
                  <p>Worked with IT to improve delivery tracking across Riyadh, Jeddah, and the Eastern Province.</p>
                </article>
                <article>
                  <h4>West Region compliance dashboard</h4>
                  <p>Built a dashboard for regional operations teams to monitor compliance.</p>
                  <a className="text-link" href="https://west-region-compliance.vercel.app">Open dashboard</a>
                </article>
                <article>
                  <h4>Student testimonial videos</h4>
                  <p>Scripted, lit, filmed, and edited three student testimonials.</p>
                  <div className="video-links">
                    {videos.map((url, index) => <a className="text-link" key={url} href={url} aria-label={`Watch student testimonial ${index + 1}`}>Video {index + 1}</a>)}
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="shell split-section">
          <div className="section-heading"><h2>Experience</h2></div>
          <ol className="timeline">
            {experience.map((job) => (
              <li key={job.company}>
                <p className="eyebrow">{job.period}</p>
                <h3>{job.company}</h3>
                <p className="job-role">{job.role}</p>
                <p>{job.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="about" className="about-section">
          <div className="shell split-section">
            <div className="section-heading"><h2>About me</h2></div>
            <div className="about-content">
              <p className="about-intro">I started in frontline logistics, moved into operations management, and trained in software development and data analytics. I use that mix to understand how a team works and build tools around its day-to-day needs.</p>
              <div id="skills" className="skills">
                <h3>Skills</h3>
                <dl>
                  <div><dt>Operations</dt><dd>Logistics, third-party partnerships, process automation, team leadership</dd></div>
                  <div><dt>Development</dt><dd>React, JavaScript, Node.js, HTML/CSS, API development</dd></div>
                  <div><dt>Analytics</dt><dd>SQL, Python, Tableau, data visualization, A/B testing</dd></div>
                  <div><dt>Languages</dt><dd>Arabic and English · IELTS 8.5</dd></div>
                </dl>
              </div>
              <div className="education">
                <h3>Education &amp; training</h3>
                <ul>
                  {education.map((item) => (
                    <li key={item.title}>
                      <div><strong>{item.title}</strong><p>{item.school}</p></div>
                      <span>{item.year}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="shell split-section contact-section">
          <div className="section-heading">
            <h2>Get in touch</h2>
            <p>I’m open to opportunities in operations and technology, including remote work and relocation.</p>
            <address>
              <a className="text-link" href={`mailto:${contact.email}`}>{contact.email}</a>
              <a className="text-link" href="tel:+966545589872">{contact.phone}</a>
            </address>
          </div>
          <ContactForm />
        </section>
      </main>
      <footer className="site-footer">
        <div className="shell footer-inner">
          <span>Khalid Alhajj</span>
          <nav aria-label="Social links">
            <a href={contact.linkedin}>LinkedIn</a>
            <a href={contact.github}>GitHub</a>
            <a href="#top">Back to top</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
