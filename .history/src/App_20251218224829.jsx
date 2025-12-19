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
          <div style={{ marginTop: '2rem', maxWidth: 600 }}>
            <h2 style={{ fontSize: '1.35rem', marginBottom: '0.5rem', fontWeight: 600 }}>
              About Me
            </h2>
            <p style={{ fontSize: '1.08rem', lineHeight: '1.7', opacity: 0.82 }}>
              Hi! I'm Sosaiah, a recent Computer Science graduate with a strong passion for solving real-world problems with code. 
              I enjoy building clean interfaces, experimenting with new technologies, and collaborating in teams. 
              When I'm not coding, you'll find me learning something new, making short clips, or dreaming up creative projects.
            </p>
          </div>
        </header>
      </section>
    </div>
  );
}
