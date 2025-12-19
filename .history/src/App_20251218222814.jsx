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
        <div className="about-section">
          <h2>About</h2>
          <p>I am a computer science graduate from the University of the West Indies, Mona. I am a passionate about technology and software development. I am a quick learner and I am always looking to improve my skills.</p>
        </div>
        <div className="projects-section">
          <h2>Projects</h2>
          <p>I have worked on a variety of projects, including a web application for a local business and a mobile application for a local business.</p>
        </div>
        <div className="clips-section">
          <h2>Clips</h2>
          <p>I have worked on a variety of clips, including a video for a local business and a video for a local business.</p>
        </div>
        <div className="contact-section">
          <h2>Contact</h2>
          <p>I am always looking to connect with new people. If you would like to get in touch, please feel free to contact me.</p>
        </div>
      </section>
    </div>
  );
}
