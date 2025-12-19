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
        <header className="header" id="about">
          <h1>Sosaiah Hillier-Barnes</h1>
          <p>Computer Science Graduate &amp; Aspiring Employed Person</p>
        </header>
        <section id="about" style={{ marginTop: '2rem' }}>
          <h2>About Me</h2>
          <p>
            Hi! I'm Sosaiah, a recent Computer Science graduate passionate about designing clean and impactful solutions with code.
            I enjoy working on web projects, experimenting with new technologies, and tackling challenging problems.
      </section>
    </div>
  );
}
