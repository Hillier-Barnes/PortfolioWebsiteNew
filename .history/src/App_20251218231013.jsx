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

        <section id="projects" className="content-section">
          <h2>Projects</h2>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', margin: '1.25rem 0' }}>
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
              alt="Project 1"
              style={{ width: '180px', borderRadius: '12px', objectFit: 'cover', boxShadow: '0 2px 8px #e9eaebbb' }}
            />
            <img
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
              alt="Project 2"
              style={{ width: '180px', borderRadius: '12px', objectFit: 'cover', boxShadow: '0 2px 8px #e9eaebbb' }}
            />
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
              alt="Project 3"
              style={{ width: '180px', borderRadius: '12px', objectFit: 'cover', boxShadow: '0 2px 8px #e9eaebbb' }}
            />
          </div>
          <p>
            I&apos;m a quick learner and I&apos;ll deadass do anything.
          </p>
        </section>

      </section>

      
    </div>
  );
}
