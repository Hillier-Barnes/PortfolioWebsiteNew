import React from 'react';
import './index.css';

export default function App() {
  return (
    <div className="page">
      <section className="navbar-section">
        <div className="navbar">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#clips">Clips</a>
          <a href="#contact">Contact</a>
        </div>
      </section>


      <section className="scroll-section">
        <section id="home" className="content-section">
          <header className="header">
            <h1>Sosaiah Hillier-Barnes</h1>
            <p>Computer Science Graduate &amp; Aspiring Employed Person</p>
          </header>
        </section>


        <section id="about" className="content-section">
          <h2>About</h2>
          <p>
            I&apos;m a quick learner and I&apos;ll deadass do anything.
          </p>
        </section>

        <section id="projects" className="content-section projects-section">
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

        <section id="clips" className="content-section projects-section">
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

        <section id="contact" className="content-section">
          <h2>About</h2>
          <p>
            Feel free to reach out to me via email at <a href="mailto:sosaiah@gmail.com">sosaiah@gmail.com</a>.
          </p>
          
        </section>

      </section>

      
    </div>
  );
}
