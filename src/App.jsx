
import { useState } from "react";
import "./App.css";

const skills = [
  {
    title: "Frontend",
    icon: "🎨",
    items: ["HTML5", "CSS3", "JavaScript", "React"],
  },
  {
    title: "Backend",
    icon: "⚙️",
    items: ["Node.js", "Express.js", "Python"],
  },
  {
    title: "Database",
    icon: "🗄️",
    items: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools & Cloud",
    icon: "☁️",
    items: ["Git", "GitHub", "VS Code", "AWS"],
  },
];

const certificates = [
  {
    title: "Gen AI Foundational Models for NLP & Language Understanding",
    issuer: "IBM",
    date: "October 2026",
    category: "Generative AI",
  },
  {
    title: "Generative AI and LLMs: Architecture and Data Preparation",
    issuer: "IBM",
    date: "October 2026",
    category: "Generative AI",
  },
  {
    title: "Introduction to Deep Learning & Neural Networks with Keras",
    issuer: "IBM",
    date: "October 2026",
    category: "Deep Learning",
  },
  {
    title: "Fundamentals of UI/UX Design",
    issuer: "Microsoft",
    date: "October 2026",
    category: "UI/UX Design",
  },
  {
    title: "Machine Learning with Python",
    issuer: "IBM",
    date: "October 2026",
    category: "Machine Learning",
  },
  {
    title: "Introduction to Programming with MATLAB",
    issuer: "Vanderbilt University",
    date: "October 2026",
    category: "Programming",
    link: "https://coursera.org/share/2ee633053f73d283a2230852017ecd71"
  },
  {
    title: "User Interface Design and Prototyping",
    issuer: "Microsoft",
    date: "October 2026",
    category: "UI/UX Design",
  },
  {
    title: "UX Design in Practice: Accessibility and Collaboration",
    issuer: "Microsoft",
    date: "October 2026",
    category: "UI/UX Design",
  },
  {
    title: "Designing for User Experience",
    issuer: "Microsoft",
    date: "October 2026",
    category: "UI/UX Design",
  },
  {
    title: "Project: Generative AI Applications with RAG and LangChain",
    issuer: "IBM",
    date: "October 2026",
    category: "Generative AI",
  },
  {
    title: "Fundamentals of AI Agents Using RAG and LangChain",
    issuer: "IBM",
    date: "October 2026",
    category: "AI Agents",
  },
  {
    title: "Generative AI Advanced Fine-Tuning for LLMs",
    issuer: "IBM",
    date: "October 2026",
    category: "Generative AI",
  },
  {
    title: "Generative AI Engineering and Fine-Tuning Transformers",
    issuer: "IBM",
    date: "October 2026",
    category: "Generative AI",
  },
  {
    title: "Generative AI Language Modeling with Transformers",
    issuer: "IBM",
    date: "October 2026",
    category: "Generative AI",
  },
  {
    title: "Microsoft UX Design",
    issuer: "Microsoft",
    date: "October 2026",
    category: "Professional Certificate",
    link: "https://www.coursera.org/verify/professional-cert/YIU3PSY1DPBB",
  },
];


const projects = [
  
{
  number: "01",
  title: "Placement Prep",
  category: "WEB DEVELOPMENT",
  description:
    "A placement preparation platform for students featuring aptitude practice, coding challenges, mock tests, interview preparation, progress tracking and a leaderboard.",
  stack: ["Web Development", "GitHub Pages"],
  symbol: "🚀",
  liveUrl:
    "https://bharathyt530-design.github.io/Placement-Prep/",
},

  {
    number: "02",
    title: "AI Resume Screening",
    category: "ARTIFICIAL INTELLIGENCE",
    description:
      "An AI project concept for analyzing resumes and matching candidate skills with job requirements.",
    stack: ["Python", "AI", "NLP"],
    symbol: "🤖",
  },
  {
    number: "03",
    title: "Attendance Management",
    category: "WEB APPLICATION",
    description:
      "A student attendance system concept with dashboards, records and attendance reports.",
    stack: ["React", "JavaScript", "Database"],
    symbol: "📊",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-wrapper">
      <header className="navbar">
        <a href="#home" className="logo">
          <span className="logo-icon">B.</span>
          Bharath<span className="accent">V</span>
        </a>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Let's Talk ↗
        </a>
      </header>

      <main>
        <section id="home" className="hero section-container">
          <div className="hero-content">
            <div className="status-badge">
              <span className="status-dot"></span>
              OPEN TO LEARNING & OPPORTUNITIES
            </div>

            <p className="eyebrow">HELLO WORLD, I'M</p>

            <h1>
              Bharath <span className="gradient-text">V.</span>
              <br />
              <span className="hero-subtitle">Aspiring Full Stack Developer</span>
            </h1>

            <p className="hero-description">
              I'm an Information Technology student passionate about
              building modern websites, exploring artificial intelligence,
              and solving real-world problems through technology.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                Explore My Projects ↗
              </a>
              <a href="#contact" className="secondary-button">
                Contact Me →
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <strong>IT</strong>
                <span>Engineering Student</span>
              </div>
              <div>
                <strong>2029</strong>
                <span>Graduation Batch</span>
              </div>
              <div>
                <strong>∞</strong>
                <span>Learning Mindset</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="glow-orb"></div>
            <div className="code-window">
              <div className="window-header">
                <div className="window-dots">
                  <i></i><i></i><i></i>
                </div>
                <span>developer.js</span>
                <span>✦</span>
              </div>
              <div className="code-content">
                <p><span className="purple">const</span> developer = {"{"}</p>
                <p className="indent">name: <span className="green">"Bharath V"</span>,</p>
                <p className="indent">role: <span className="green">"Full Stack Learner"</span>,</p>
                <p className="indent">passion: <span className="green">"Building Ideas"</span>,</p>
                <p className="indent">skills: [</p>
                <p className="indent2"><span className="green">"React", "Python", "AWS"</span></p>
                <p className="indent">],</p>
                <p className="indent">hardWorker: <span className="orange">true</span></p>
                <p>{"};"}</p>
                <br />
                <p><span className="purple">function</span> <span className="cyan">buildFuture</span>() {"{"}</p>
                <p className="indent"><span className="purple">return</span> <span className="green">"Keep Learning 🚀"</span>;</p>
                <p>{"}"}</p>
              </div>
              <div className="window-footer">
                <span>● JavaScript</span>
                <span>Ready to build</span>
              </div>
            </div>
            <div className="floating-tag">⚡ Creative Developer</div>
          </div>
        </section>

        <section id="about" className="about-section section-container">
          <div className="section-heading">
            <p className="eyebrow">01 / ABOUT ME</p>
            <h2>Turning Curiosity Into <span className="gradient-text">Code.</span></h2>
          </div>
          <div className="about-card">
            <div className="about-icon">👨‍💻</div>
            <div>
              <h3>A Little About Me</h3>
              <p>
                I'm Bharath V, a B.Tech Information Technology student at
                Saveetha Engineering College. I'm learning full stack
                development and exploring cloud computing and AI.
                My goal is to become a skilled software engineer by
                building practical projects and improving every day.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="skills-section section-container">
          <div className="section-heading">
            <p className="eyebrow">02 / TECHNICAL SKILLS</p>
            <h2>My Technology <span className="gradient-text">Stack.</span></h2>
            <p>Technologies I'm learning and exploring.</p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.title}>
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.title}</h3>
                <div className="skill-tags">
                  {skill.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="projects-section section-container">
          <div className="section-heading">
            <p className="eyebrow">03 / FEATURED WORK</p>
            <h2>Projects & <span className="gradient-text">Ideas.</span></h2>
            <p>Ideas I'm exploring as I develop my technical skills.</p>
          </div>

          
<div className="projects-grid">
  {projects.map((project) => (
    <article className="project-card" key={project.number}>

                
<div className="project-stack">
  {project.stack.map((item) => (
    <span key={item}>{item}</span>
  ))}
</div>

                <div className="project-body">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
<div className="project-stack">
  {project.stack.map((item) => (
    <span key={item}>{item}</span>
  ))}
</div>

{project.liveUrl && (
  <a
    href={project.liveUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="project-live-button"
  >
    View Live Demo ↗
  </a>
)}
                </div>
              </article>
            ))}
          </div>
        </section>


<section id="certifications" className="section-container">
  <div className="section-heading">
    <p className="eyebrow">04 / ACHIEVEMENTS</p>
    <h2>
      My <span className="gradient-text">
        Certifications.
      </span>
    </h2>
    <p>
      {certificates.length} certificates from leading
      technology organizations.
    </p>
  </div>

  <div className="cert-stats">
    <div>
      <strong>{certificates.length}</strong>
      <span>Certificates</span>
    </div>
    <div>
      <strong>IBM</strong>
      <span>AI & Machine Learning</span>
    </div>
    <div>
      <strong>Microsoft</strong>
      <span>UI/UX Design</span>
    </div>
  </div>

  <div className="certificates-grid">
    {certificates.map((cert, index) => (
      <div className="cert-item" key={index}>
        <div className="cert-top">
          <span className="cert-logo">
            {cert.issuer === "IBM" ? "IBM" :
             cert.issuer === "Microsoft" ? "Microsoft" : "VU"}
          </span>
          <span className="cert-number">
            #{String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <span className="cert-category">{cert.category}</span>

        <h3>{cert.title}</h3>

        <p className="cert-issuer">
          Issued by {cert.issuer}
        </p>

        <p className="cert-date">
          {cert.date || "Completed"}
        </p>

        {cert.link && (
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-link"
          >
            Verify Certificate ↗
          </a>
        )}
      </div>
    ))}
  </div>
</section>

<section id="contact" className="contact-section section-container">
  <div className="contact-box">
    <p className="eyebrow">04 / GET IN TOUCH</p>

    <h2>
      Let's Work <span className="gradient-text">Together.</span>
    </h2>

    <p>
      Have a project idea or want to connect?
      Feel free to reach out!
    </p>

    <div className="contact-socials">
      <a
        href="mailto:bharathyt530@gmail.com"
        className="social-button"
      >
        ✉ Email Me
      </a>

      <a
        href="https://github.com/bharathyt530-design"
        target="_blank"
        rel="noopener noreferrer"
        className="social-button"
      >
        GitHub ↗
      </a>

      <a
        href="https://www.linkedin.com/in/v-bharath-it/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-button"
      >
        LinkedIn ↗
      </a>

      <a
        href="https://www.instagram.com/v_bharath_03/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-button"
      >
        Instagram ↗
      </a>
      
<a
  href="tel:+917548803639"
  className="social-button"
>
  📞 Call Me
</a>

<a
  href="https://wa.me/917548803639"
  target="_blank"
  rel="noopener noreferrer"
  className="social-button"
>
  💬 WhatsApp
</a>
  </div>
  </div>
</section>

      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Bharath V. Built with React.</p>
        <a href="#home">Back to Top ↑</a>
      </footer>
    </div>
  );
}

export default App;
