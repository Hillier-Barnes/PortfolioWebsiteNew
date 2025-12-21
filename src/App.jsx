import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import ShaderBackground from './ShaderBackground';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const sectionsRef = useRef({});

  useEffect(() => {
    // Observer options to detect when a section is in view
    const observerOptions = {
      root: document.querySelector('.scroll-section'),
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    // Observer callback function to set the active section
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observer options for scroll animations
    const animationObserverOptions = {
      root: document.querySelector('.scroll-section'),
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.2,
    };

    // Observer callback for scroll animations
    const animationCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    };

    const animationObserver = new IntersectionObserver(animationCallback, animationObserverOptions);

    // Observe all content sections
    Object.values(sectionsRef.current).forEach((section) => {
      if (section) {
        observer.observe(section);
        animationObserver.observe(section);
      }
    });

    return () => {
      observer.disconnect();
      animationObserver.disconnect();
    };
  }, []);

  const setSectionRef = (id) => (el) => {
    if (el) sectionsRef.current[id] = el;
  };

  return (
    <div className="page">
      <ShaderBackground />
      <section className="navbar-section">
        <div className="navbar">

          <button onClick={() => {
            sectionsRef.current?.home?.scrollIntoView({ behavior: 'smooth' });
          }} className={activeSection === 'home' ? 'active' : ''}
          >Home</button>
          
          <button onClick={() => {
            sectionsRef.current?.about?.scrollIntoView({ behavior: 'smooth' });
          }} className={activeSection === 'about' ? 'active' : ''}
          >About</button>
          
          <button onClick={() => {
            sectionsRef.current?.projects?.scrollIntoView({ behavior: 'smooth' });
          }} className={activeSection === 'projects' ? 'active' : ''}
          >Projects</button>

          <button onClick={() => {
            sectionsRef.current?.experience?.scrollIntoView({ behavior: 'smooth' });
          }} className={activeSection === 'experience' ? 'active' : ''}
          >Experience</button>

          <button onClick={() => {
            sectionsRef.current?.personal?.scrollIntoView({ behavior: 'smooth' });
          }} className={activeSection === 'personal' ? 'active' : ''}
          >Personal</button>
          
          <button onClick={() => {
            sectionsRef.current?.clips?.scrollIntoView({ behavior: 'smooth' });
          }} className={activeSection === 'clips' ? 'active' : ''}
          >Clips</button>

          <button onClick={() => {
            sectionsRef.current?.contact?.scrollIntoView({ behavior: 'smooth' });
          }} className={activeSection === 'contact' ? 'active' : ''}
          >Contact</button>
          
        </div>
        <div className="navbar-footer">
          <a href="https://github.com/hillier-barnes" target="_blank" rel="noopener noreferrer">
            <img src="/images/github.png" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/sosaiah-hillier-barnes-051041211/" target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="mailto:sosaiah.dev@outlook.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/email.png" alt="Email" />
          </a>
        </div>
      </section>


      <section className="scroll-section">
        <section id="home" ref={setSectionRef('home')} className="content-section">
          <header className="header">
            <img src="/images/img.jpg" alt="Profile" className="profile-image" />
            <h1>Sosaiah Hillier-Barnes</h1>
            <p>Computer Science Graduate &amp; Aspiring Employed Person</p>
          </header>
        </section>

        <section id="about" ref={setSectionRef('about')} className="content-section">
          <h2>About</h2>
          <div className="about-container">
            <div className="about-grid"> 
              <div className="about-grid-item" style={{ gridColumn: '3 / span 2', gridRow: '1 / span 3' }}>
                <h3>Education</h3>
                <p style={{ marginBottom: '0.25rem' }}><strong>Queensland University of Technology (2022 - 2026)</strong></p>
                <p style={{ marginBottom: '0.25rem' }}>Bachelor of Information Technology (Distinction)</p>
                <p style={{ marginBottom: '0.25rem' }}>Major in Computer Science</p>
                <p style={{ marginBottom: 0 }}>Minor in Networks and Security</p>
                <br />
                <br />
                <h3>Languages and Tools</h3>
                <p>I have experience with most popular languages, but my core proficiency lies in HTML, CSS, JavaScript, and C#. I am also proficient with industry-standard development and collaboration tools, such as GitHub for version control and Jira for project management. More importantly, I am a quick learner and a highly motivated person; I would be more than happy to learn any new technology or skill needed to help the team succeed.</p>
              </div>
              <div className="about-grid-item" style={{ gridColumn: '1 / span 2', gridRow: '1 / span 3' }}>
                <h3>A Professional POV</h3>
                <p>Hi, I'm Sosaiah Hillier-Barnes. I am a recent Computer Science graduate from QUT with a deep interest in modern web development and software engineering. Though I have a lot of experience in building responsive, scalable applications using the React.js ecosystem and implementing reliable backend services with Node.js, I believe my true strength lies in my ability to learn and acquire new skills. I am actively seeking an entry-level Software Engineer role where I can bring my technical foundation, problem-solving skills, and enthusiasm for learning to a forward-thinking team. Outside of coding, I am committed to continuous improvement, I am disciplined, and I believe that any problem between two people can be solved with kindness and understanding.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" ref={setSectionRef('projects')} className="content-section projects-section">
          <h2>Projects</h2>
          <div className="projects-scroller">
            <article className="project-card">
              <img src="/images/cloud-credentials.png" alt="Cloud Credentials project" />
              <div className="project-info">
                <h3>Cloud Credentials</h3>
                <p>Blah blah blah</p>
              </div>
            </article>
            <article className="project-card">
            <img src="/images/cloud-credentials.png" alt="Cloud Credentials project" />
            <div className="project-info">
                <h3>Project Two</h3>
                <p>Blah blah blah</p>
              </div>
            </article>
            <article className="project-card">
            <img src="/images/cloud-credentials.png" alt="Cloud Credentials project" />
            <div className="project-info">
                <h3>Project Three</h3>
                <p>Blah blah blah</p>
              </div>
            </article>
          </div>
        </section>

        <section id="experience" ref={setSectionRef('experience')} className="content-section">
          <h2>Experience</h2>
        </section>

        <section id="personal" ref={setSectionRef('personal')} className="content-section">
          <h2>Personal</h2>
        </section>

        <section id="clips" ref={setSectionRef('clips')} className="content-section projects-section">
          <h2>Clips</h2>
          <div className="projects-scroller">
            <article className="project-card">
              <video
                className="project-media"
                src="/videos/clip1.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="project-info">
                <h3>Clip One</h3>
                <p>Fortnite monster</p>
              </div>
            </article>
            <article className="project-card">
              <video
                className="project-media"
                src="/videos/clip2.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="project-info">
                <h3>Clip Two</h3>
                <p>Fortnite monster</p>
              </div>
            </article>
            <article className="project-card">
              <video
                className="project-media"
                src="/videos/clip3.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="project-info">
                <h3>Clip Three</h3>
                <p>Fortnite monster</p>
              </div>
            </article>
          </div>
        </section>

        <section id="contact" ref={setSectionRef('contact')} className="content-section">
          <h2>Contact</h2>
          <div className="contact-container">
            <p>Email: sosaiah.dev@outlook.com</p>
            <p>Phone: +61 421 323 311</p>
            <p>Location: Logan, Australia</p>
          </div>
        </section>

      </section>
    </div>
  );
}
