import React from 'react';
import './Industries.css';
import heartbeatIcon from '../assets/icons/heartbeat.gif';
import healthyFoodIcon from '../assets/icons/healthy-food.gif';
import analyticsIcon from '../assets/icons/analytics.gif';
import manufactureIcon from '../assets/icons/manufacture.gif';
import pathIcon from '../assets/icons/path.gif';
import shoppingCartIcon from '../assets/icons/shopping-cart.gif';
import nursesIcon from '../assets/icons/international-nurses-day.gif';
import educationIcon from '../assets/icons/education.gif';

const Industries = () => {
  const industries = [
    { icon: heartbeatIcon, title: 'Healthcare' },
    { icon: nursesIcon, title: 'Pharmacy, Dental & Medical Supplies' },
    { icon: manufactureIcon, title: 'Manufacturing' },
    { icon: shoppingCartIcon, title: 'Retail & e-commerce' },
    { icon: healthyFoodIcon, title: 'Food & Beverages' },
    { icon: pathIcon, title: 'Logistics & Transportation' },
    { icon: analyticsIcon, title: 'Banking & Finance' },
    { icon: educationIcon, title: 'Education & E-Learning' },
  ];

  return (
    <section id="industries" className="industries-section section">
      <div className="container">
        <div className="industries-layout">
          {/* Left Column - Text Content */}
          <div className="industries-text">
            <div className="section-header">
              <h2 className="section-title">Customized Solutions for Various Industries</h2>
              <p className="section-subtitle">
                We deliver customized web, app and software solutions.
              </p>
            </div>
          </div>
          
          {/* Right Column - Industries Grid */}
          <div className="industries-content">
            <div className="industries-grid">
              {industries.map((industry, idx) => (
                <div className="industry-pill" key={idx}>
                  <img src={industry.icon} alt={industry.title} className="industry-icon" />
                  <span className="industry-name">{industry.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
