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
              <img src="" alt="Credentials Cloud" />
              <div className="project-info">
                <h3>Project One</h3>
                <p>Short description of a cool thing you built.</p>
              </div>
            </article>
            <article className="project-card">
              <img src="https://via.placeholder.com/1200x700?text=Project+Two" alt="Project Two" />
              <div className="project-info">
                <h3>Project Two</h3>
                <p>Another project highlight goes here.</p>
              </div>
            </article>
            <article className="project-card">
              <img src="https://via.placeholder.com/1200x700?text=Project+Three" alt="Project Three" />
              <div className="project-info">
                <h3>Project Three</h3>
                <p>Replace these with real screenshots and copy.</p>
              </div>
            </article>
          </div>
        </section>

      </section>

      
    </div>
  );
}
