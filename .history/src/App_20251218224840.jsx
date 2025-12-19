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
        <section id="about" style={{ marginTop: '2rem' }}>
          <h2>About</h2>
          <p>
            Hello! I'm Sosaiah Hillier-Barnes, a recent graduate in Computer Science with a passion for building things that matter.
            I enjoy solving problems, working with new technologies, and collaborating with others to create meaningful software.
          </p>
        </section>
      </section>
    </div>
  );
}
