import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-layout">
          {/* Left Column - Heading */}
          <div className="about-left">
            <h2 className="about-title">A Few Words About Who We Are And Our Team.</h2>
          </div>
          
          {/* Right Column - Mission Paragraph */}
          <div className="about-right">
            <p className="about-mission">
              At DevCortex, our mission is to empower businesses through innovative technology solutions that drive growth, efficiency, and competitive advantage in an increasingly digital world. Our clients' success is our success. We envision a future where every organization, regardless of size or industry, can harness the full potential of cutting-edge technologies to achieve their business objectives and create meaningful impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
