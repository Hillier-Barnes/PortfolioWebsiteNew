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
      <section className="-section"></section>

      <header className="header">
        <h1>Sosaiah Hillier-Barnes</h1>
        <p>Computer Science Graduate &amp; Aspiring Employed Person</p>
      </header>
    </div>
  );
}
