import React, { useState, useEffect, useRef } from 'react';
import './index.css';

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

    // Observe all content sections
    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const setSectionRef = (id) => (el) => {
    if (el) sectionsRef.current[id] = el;
  };

  return (
    <div className="page">
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
            sectionsRef.current?.clips?.scrollIntoView({ behavior: 'smooth' });
          }} className={activeSection === 'clips' ? 'active' : ''}
          >Clips</button>

          <button onClick={() => {
            sectionsRef.current?.resume?.scrollIntoView({ behavior: 'smooth' });
          }} className={activeSection === 'resume' ? 'active' : ''}
          >Resume</button>
          
        </div>
        <div className="navbar-footer">
          <button onClick={() => {
            sectionsRef.current?.home?.scrollIntoView({ behavior: 'smooth' });
          }}>
            <img src="/images/pfp.jpeg" alt="Profile" className="profile-image-navbar" />
          </button>
          <a href="https://github.com/hillier-barnes" target="_blank" rel="noopener noreferrer">
            <img src="/images/github.png" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/sosaiah-hillier-barnes-051041211/" target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
      </section>


      <section className="scroll-section">
        <section id="home" ref={setSectionRef('home')} className="content-section">
          <header className="header">
            <img src="/images/pfp.jpeg" alt="Profile" className="profile-image" />
            <h1>Sosaiah Hillier-Barnes</h1>
            <p>Computer Science Graduate &amp; Aspiring Employed Person</p>
          </header>
        </section>

        <section id="about" ref={setSectionRef('about')} className="content-section">
          <h2>About</h2>
          <div className="about-container">
            <div className="about-grid"> 
              <div className="about-grid-item" style={{ gridColumn: '1', gridRow: '1' }}>
                <p>placeholder text (spans columns 1 and 2 in row 1)</p>
              </div>
              <div className="about-grid-item" style={{ gridColumn: '1', gridRow: '2 / span 2' }}>
                <p>placeholder text (spans rows 2 and 3 in column 1)</p>
              </div>
              <div className="about-grid-item" style={{ gridColumn: '2 / span 2', gridRow: '1 / span 2' }}>
                <p>placeholder text</p>
              </div>
              <div className="about-grid-item" style={{ gridColumn: '2', gridRow: '3' }}>
                <p>placeholder text</p>
              </div>
              <div className="about-grid-item" style={{ gridColumn: '3 / span 2', gridRow: '3' }}>
                <p>placeholder text</p>
              </div>
              <div className="about-grid-item" style={{ gridColumn: '4', gridRow: '1' }}>
                <p>placeholder text</p>
              </div>
              <div className="about-grid-item" style={{ gridColumn: '4', gridRow: '2' }}>
                <p>placeholder text</p>
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
                <h3>Project One</h3>
                <p>Short description of a cool thing you built.</p>
              </div>
            </article>
            <article className="project-card">
            <img src="/images/cloud-credentials.png" alt="Cloud Credentials project" />
            <div className="project-info">
                <h3>Project Two</h3>
                <p>Another project highlight goes here.</p>
              </div>
            </article>
            <article className="project-card">
            <img src="/images/cloud-credentials.png" alt="Cloud Credentials project" />
            <div className="project-info">
                <h3>Project Three</h3>
                <p>Replace these with real screenshots and copy.</p>
              </div>
            </article>
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
                <p>A quick highlight reel of one of my recent projects.</p>
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
                <p>Another short demo showcasing interaction and UX.</p>
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
                <p>Replace these sources with your own gameplay or app clips.</p>
              </div>
            </article>
          </div>
        </section>

      </section>
    </div>
  );
}
