
import React from 'react';
import './IndustryCard.css';

const IndustryCard = ({ title, description, icon }) => {
  return (
    <div className="industry-card">
      <div className="industry-icon">{icon}</div>
      <h3 className="industry-title">{title}</h3>
      <p className="industry-description">{description}</p>
    </div>
  );
};

export default IndustryCard;
