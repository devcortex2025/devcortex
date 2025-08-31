import React from 'react';
import './HeroContent.css';
import TechnologySphereScene from './TechnologySphere';

const HeroContent = () => {
  return (
    <section className="hero-content-section">
      <div className="container">
        <div className="hero-content-wrapper">
          <div className="hero-content-grid">
            <div className="hero-content-left" style={{ flex: '0 0 35%', paddingRight: '2rem' }}>
              <p className="hero-subtitle fade-in">
                We build cutting-edge software solutions that transform businesses and drive growth in the digital era. From AI-powered applications to scalable cloud infrastructure.
              </p>
              <div className="hero-buttons fade-in">
                <a href="#contact" className="btn btn-primary">Get Started Now</a>
              </div>
            </div>
            <div className="hero-content-right" style={{ flex: '0 0 65%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <TechnologySphereScene />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
