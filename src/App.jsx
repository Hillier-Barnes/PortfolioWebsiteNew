import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import ShaderBackground from './ShaderBackground';
import VideoPlayer from './VideoPlayer';

// MAKE DARK MODE AND MORE/BETTER FONT TO LOOK LESS VIBE CODED 

// OPENING ANIMATION
// ADD FADE TO PROJECTS SCROLLER
// CONTRAST IS HARSH W DARK IMAGES
// IMPROVE VIDEO PLAYER
// HEADER FOR PERSONAL
// SHIFT BACKGROUND FOR SECTIONS - gradual hue shift
// DARK MODE
// NAVBAR HYPERLINKS DONT CATCH EYE 
// SOMETHING INTERACTABLE - maybe webgl lil game or something
// MOUSE INTERACTION FOR BACKGROUND
// FONTS W MORE CHARACTER

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sectionsRef = useRef({});
  const navbarRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (navbarRef.current) {
        navbarRef.current.classList.add('visible');
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: document.querySelector('.scroll-section'),
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

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

  const handleNavClick = (sectionId) => {
    sectionsRef.current?.[sectionId]?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="page">
      <ShaderBackground />
      <button 
        className={`mobile-menu-toggle ${isMobileMenuOpen ? 'menu-open' : ''}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div 
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'show' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>
      <section ref={navbarRef} className={`navbar-section ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="navbar">

          <button onClick={() => handleNavClick('home')} className={activeSection === 'home' ? 'active' : ''}>
            Home
          </button>
          
          <button onClick={() => handleNavClick('about')} className={activeSection === 'about' ? 'active' : ''}>
            About
          </button>
          
          <button onClick={() => handleNavClick('projects')} className={activeSection === 'projects' ? 'active' : ''}>
            Projects
          </button>

          <button onClick={() => handleNavClick('experience')} className={activeSection === 'experience' ? 'active' : ''}>
            Experience
          </button>

          <button onClick={() => handleNavClick('personal')} className={activeSection === 'personal' ? 'active' : ''}>
            Personal
          </button>
          
          <button onClick={() => handleNavClick('clips')} className={activeSection === 'clips' ? 'active' : ''}>
            Clips
          </button>

          <button onClick={() => handleNavClick('contact')} className={activeSection === 'contact' ? 'active' : ''}>
            Contact
          </button>
          
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
          <div className="flip-card-container">
            <div className="flip-card">
              <div className="flip-card-front">
                <img src="/images/img.jpg" alt="img" className="profile-image" />
              </div>
              <div className="flip-card-back">
                <img src="/images/kid.jpg" alt="ki" className="profile-image" />
              </div>
            </div>
          </div>
            <h1>Sosaiah Hillier-Barnes</h1>
            <p>Computer Science Graduate &amp; Aspiring Employed Person</p>
          </header>
        </section>

        <section id="about" ref={setSectionRef('about')} className="content-section">
          <h2>About</h2>
          <div className="about-container">
            <div className="grid"> 
              <div className="grid-item" style={{ gridColumn: '3 / span 2', gridRow: '1 / span 3' }}>
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
              <div className="grid-item" style={{ gridColumn: '1 / span 2', gridRow: '1 / span 3' }}>
                <h3>About Me</h3>
                <p>I am a recent Computer Science graduate from QUT with a strong interest in UI/UX design, web development, and software engineering. I am most experienced in building responsive, scalable applications using the React.js ecosystem and Node.js for backend services. While my technical foundation is strong, my true strength is my ability to quickly learn and acquire new skills. I hope to obtain an entry-level Software Engineer (or adjacent) role where I can contribute to a team, improve personally, and grow within the industry.</p>
              </div>

            </div>
          </div>
        </section>

        <section id="projects" ref={setSectionRef('projects')} className="content-section projects-section">
          <h2>Projects</h2>
          <div className="projects-scroller">
            <article className="project-card">
              <VideoPlayer src="/videos/cc-demo.mp4" />
              <div className="project-info">
                <h3>Cloud Credentials</h3>
                <p>An AI-powered react based web application that maps individual capabilities against the international SFIA framework to provide organisations with data-driven insights for hiring, training, and resource allocation.</p>
              </div>
            </article>
            <article className="project-card">
            <img src="/images/cloud-credentials.png" alt="Cloud Credentials project" />
            <div className="project-info">
                <h3>YourTube</h3>
                <p>A secure and scalable AWS hosted website built with React.js and Node.js that allows users to upload a video, find related videos, and transcode and download uploaded videos.</p>
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
          <div className="experience-container">
            <div className="grid">
              <div className="grid-item" style={{ gridColumn: '1 / span 2', gridRow: '1 / span 3' }}>
                <h3>TECHNICAL <br /> <br />
                Website Development, Work Integrated Learning Project</h3>
                <p>As a team of four, we worked with Dr. Peter Beven of IEC Professional to create a web application that would allow users to upload course content and have it mapped against the international SFIA (Skills Framework for the Information Age) standards.</p>
                <p><strong>Project Leadership &amp; Liaison:</strong> Directed team as needed and served as the primary liaison for the team, communicating with our partner and translating high-level client feedback into actionable development tasks for the team.</p>
                <p><strong>Development:</strong> Led the initial implementation of the application's user interface (UI), as well as the integration of the OpenAI API (GPT-5-nano). Worked with team to constantly improve the application and resolve issues as they arose,</p>
                <p><strong>Credentials Cloud (Project):</strong> Co-developed an AI-powered web application designed to automate the process of mapping textual data (like course content) against the international SFIA (Skills Framework for the Information Age) standards.</p>
                <p><strong>Stack:</strong> React (Vite), JavaScript, HTML5, CSS3 (Tailwind), OpenAI API (GPT-5-nano), and Vercel Deployment.</p>
              </div>
              <div className="grid-item" style={{ gridColumn: '3 / span 2', gridRow: '1 / span 3' }}>
                <h3>NON-TECHNICAL <br /> <br />
                  Past Experience</h3>
                <p><strong>Storeman</strong>, Lind &amp; Sons Pty Ltd</p>
                <p>Readied large orders for companies such as Coles and Woolworths, cleaned the warehouse, and counted inventory. This role taught me discipline, efficiency, and the importance of work ethic and comradery  </p>
                <br />
                <p><strong>Storeman</strong>, Country Fresh Food</p>
                <p>Prepared wholesale orders counted inventory, stocked shelves, served as a cashier, and cleaned the store and warehouse. This role taught me how to work efficiently and effectively alone, making the hard decisions when needed </p>
                <br />
                <p><strong>Sales Associate</strong>, EB Games</p>
                <p>Sold pop culture and gaming related products, provided customer service, and served as a cashier. This role helped me improve my communication and customer service skills, it also showed me how much I enjoy helping people</p>
              </div>
            </div>
          </div>
        </section>

        <section id="personal" ref={setSectionRef('personal')} className="content-section">
          <div className="personal-container">
            <div className="grid">
              <div className="grid-item grid-img-item" style={{ gridColumn: '3 / span 1', gridRow: '1 / span 1' }}>
              <img src="/images/pc.JPG" alt="PC" />
              </div>
              <div className="grid-item" style={{ gridColumn: '1 / span 2', gridRow: '1 / span 2' }}>
                <h3>Hobbies &amp; Interests</h3>
                <p>Outside of coding, I enjoy a lot of different hobbies and interests such as:</p>
                <p>Video Games</p>
                <p>Music</p>
                <p>Gym &amp; Sports</p>
                <p>Reading</p>
                <p>Philosophy</p>
                <p>Film and TV</p>
                <p>PC Hardware &amp; Peripherals</p>
              </div>
              <div className="grid-item grid-img-item" style={{ gridColumn: '3 / span 1', gridRow: '2 / span 2' }}>
                <img src="/images/img.jpg" alt="img" />
              </div>
              <div className="grid-item grid-img-item" style={{ gridColumn: '2 / span 1', gridRow: '3 / span 1' }}>
                <img src="/images/cohle.JPG" alt="cohle" />
              </div>
              <div className="grid-item grid-img-item" style={{ gridColumn: '1 / span 1', gridRow: '3 / span 1' }}>
                <img src="/images/water.JPG" alt="water" />
              </div>
              <div className="grid-item" style={{ gridColumn: '4 / span 1', gridRow: '2 / span 2' }}>
                <h2>"You have what you deserve. You could be good today, but instead you choose tomorrow"</h2>
                <p>- Marcus Aurelius</p>
              </div>
              <div className="grid-item grid-img-item" style={{ gridColumn: '4 / span 1', gridRow: '1 / span 1' }}>
                <img src="/images/boogie.jpg" alt="boogie" />
              </div>
            </div>
          </div>
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
                <p>clip</p>
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
                <p>clip</p>
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
                <p>clip</p>
              </div>
            </article>
          </div>
        </section>

        <section id="contact" ref={setSectionRef('contact')} className="content-section">
          <h2>Contact</h2>
          <div className="contact-container">
            <p>Email: sosaiah.dev@outlook.com</p>
            <p>Phone: +61 421 323 311</p>
            <p>Location: Brisbane, Australia</p>
          </div>
        </section>

      </section>
    </div>
  );
}
