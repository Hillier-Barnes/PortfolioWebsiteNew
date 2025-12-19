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
        
        <header className="header">
          <h1>Sosaiah Hillier-Barnes</h1>
          <p>Computer Science Graduate &amp; Aspiring Employed Person</p>
        </header>
        <section id="about" className="content-section">
          <h2>About</h2>
          <p>
            I&apos;m a Computer Science graduate who enjoys building clean, user-focused
            interfaces and learning new technologies. I&apos;m especially interested in
            frontend development, developer experience, and polished UI design.
          </p>
        </section>
      </section>
    </div>
  );
}
