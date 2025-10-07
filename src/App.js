import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaDownload, FaTimes } from 'react-icons/fa';

function App() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="nav-brand">AJ</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#certifications">Certifications</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Aleena Jomy</h1>
          <h2>Software Engineer & Cybersecurity Enthusiast</h2>
          <p>Full-Stack Developer passionate about creating secure, scalable applications</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-secondary">Get In Touch</a>
          </div>
          <div className="resume-download">
            <a href="/resume.pdf" download="Aleena_Jomy_Resume.pdf" className="download-btn">
              <FaDownload /> Download Resume
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>Results-driven Software Engineer with expertise in full-stack development and cybersecurity. Currently enhancing MERN stack expertise at NxtWave while applying secure coding practices from my cybersecurity internship at EdiGlobe.</p>
              <div className="stats">
               {/* <div className="stat">
                  <h3>2+</h3>
                  <p>Years Experience</p>
                </div>  */}
                <div className="stat">
                  <h3>10+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat">
                  <h3>5+</h3>
                  <p>Technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section bg-light">
        <div className="container">
          <h2>Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Full Stack Development Trainee</h3>
                <h4>NxtWave Training Program</h4>
                <span className="date">Jun 2024 – Present</span>
                <p>Built full-stack applications with React.js, Node.js, Express.js, MongoDB. Applied Agile and SDLC best practices.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Cybersecurity Trainee & Intern</h3>
                <h4>EdiGlobe (Remote)</h4>
                <span className="date">Jun 2025 – Aug 2025</span>
                <p>Performed vulnerability assessments and applied secure coding practices. Collaborated with an Agile team.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>SMT Machine Operator & Quality Controller</h3>
                <h4>SS Technology, Mysore</h4>
                <span className="date">May 2019 – Oct 2021</span>
                <p>Operated SMT lines, performed inspections, and reduced defects by 15%. Ensured 95% compliance with quality standards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="certifications" className="section">
        <div className="container">
          <h2>Certifications</h2>
          <div className="certifications-grid">
            <a href="https://drive.google.com/file/d/1JqZEYKI2mlK2mCFTCE7lClec4RbxjBEd/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="cert-card">
              <h3>Foundations of Cybersecurity</h3>
              <p>Google</p>
            </a>
            <a href="https://drive.google.com/file/d/1uulQWyH1xXE97rpaomWFzQQ3TCA2pule/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="cert-card">
              <h3>Power BI for Beginners</h3>
              <p>Coursera</p>
            </a>
            <a href="https://drive.google.com/file/d/1NpbcxTH5HwJ49kmBk36gTlueACJMMETF/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="cert-card">
              <h3>Build Your Own Static Website</h3>
              <p>NxtWave</p>
            </a>
            <a href="https://drive.google.com/file/d/1UyX8Nl3gUTJV1pFb_tpzX9qh8Du-0Vrv/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="cert-card">
              <h3>Programming Foundations with Python</h3>
              <p>NxtWave</p>
            </a>
            <a href="https://drive.google.com/file/d/15r4kCMH3ibAllRd9m32Pj-Vbu1xkJ7QF/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="cert-card">
              <h3>Developer Foundations</h3>
              <p>NxtWave</p>
            </a>
            <a href="https://drive.google.com/file/d/1byCEarC1SyVZSV9Xw8eCHi6rJEKrKK4B/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="cert-card">
              <h3>Introduction to Databases</h3>
              <p>NxtWave</p>
            </a>
            <a href="https://drive.google.com/file/d/1mSxOYCQXqiUkjlTp4R-16YK4yCpkTXkM/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="cert-card">
              <h3>JavaScript Essentials</h3>
              <p>NxtWave</p>
            </a>
            <a href="https://drive.google.com/file/d/1laB7Xh3rQjSixil3GxpQcd2T_hfAOA2t/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="cert-card">
              <h3>Node JS</h3>
              <p>NxtWave</p>
            </a>
            <a href="https://drive.google.com/file/d/1AuVfx_VKfWcJ1ZMC5XQy_v2qCjuMkwlK/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="cert-card">
              <h3>React JS</h3>
              <p>NxtWave</p>
            </a>
          </div>
        </div>
      </section>

      <section id="skills" className="section bg-light">
        <div className="container">
          <h2>Skills</h2>
          <div className="skills-bars">
            <div className="skill-item">
              <span className="skill-name">Python</span>
              <div className="skill-bar">
                <div className="skill-progress" data-width="90%"></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">JavaScript (ES6+)</span>
              <div className="skill-bar">
                <div className="skill-progress" data-width="85%"></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">React.js</span>
              <div className="skill-bar">
                <div className="skill-progress" data-width="85%"></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">Node.js & Express.js</span>
              <div className="skill-bar">
                <div className="skill-progress" data-width="80%"></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">Django</span>
              <div className="skill-bar">
                <div className="skill-progress" data-width="80%"></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">MySQL & SQLite</span>
              <div className="skill-bar">
                <div className="skill-progress" data-width="75%"></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">Cybersecurity</span>
              <div className="skill-bar">
                <div className="skill-progress" data-width="70%"></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">Java</span>
              <div className="skill-bar">
                <div className="skill-progress" data-width="70%"></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">Generative AI & LLMs</span>
              <div className="skill-bar">
                <div className="skill-progress" data-width="75%"></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">Git & GitHub</span>
              <div className="skill-bar">
                <div className="skill-progress" data-width="85%"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <h3>Stylo – Virtual Wardrobe App</h3>
                <span className="project-tag">Web & ML</span>
              </div>
              <p>Developed wardrobe app with outfit recommendations using Django, SQLite, ML. Integrated chatbot for personalized styling.</p>
              <div className="project-tech">
                <span>Django</span>
                <span>SQLite</span>
                <span>ML</span>
              </div>
            </div>
            <div className="project-card">
              <div className="project-header">
                <h3>GASSETS – Facility Management</h3>
                <span className="project-tag">Python</span>
              </div>
              <p>Created digital system to manage campus facilities including canteen, store, and printing services.</p>
              <div className="project-tech">
                <span>Python</span>
                <span>SQLite</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section bg-dark">
        <div className="container">
          <h2>Let's Connect</h2>
          <div className="contact-wrapper">
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
            <div className="social-section">
              <h3>Follow Me</h3>
              <div className="social-links">
                <a href="https://linkedin.com/in/aleena-jomy" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin /> LinkedIn
                </a>
                <a href="https://github.com/Aleenajomy" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {selectedCert && (
        <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedCert(null)}>
              <FaTimes />
            </button>
            <h3>{selectedCert.title}</h3>
            <p>{selectedCert.provider}</p>
            <img src={selectedCert.image} alt={selectedCert.title} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;