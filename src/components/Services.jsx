import React from 'react';
import './Services.css';

// Import icons
import aiIcon from '../assets/icons/artificial-intelligence_12475931.png';
import developmentIcon from '../assets/icons/programming_6932049.png';
import cloudIcon from '../assets/icons/edge-computing_17757119.png';
import digitalIcon from '../assets/icons/data-transformation_7440452.png';
import analyticsIcon from '../assets/icons/monitor_2782058.png';
import infrastructureIcon from '../assets/icons/infrastructure_18363924.png';

const Services = () => {
  const services = [
    {
      number: "01",
      title: "Development",
      description: "Tailored software solutions designed to address your unique business challenges and optimize your operations.",
      icon: developmentIcon
    },
    {
      number: "02",
      title: "Custom AI/ML Solutions",
      description: "Intelligent solutions across diverse industries including finance, healthcare, retail, and manufacturing. From predictive analytics in banking to diagnostic assistance in healthcare, we build AI systems that drive innovation and efficiency.",
      icon: aiIcon
    },
    {
      number: "03",
      title: "Cloud Computing & Serverless",
      description: "Build scalable, resilient cloud infrastructure that optimizes performance while reducing operational costs.",
      icon: cloudIcon
    },
    {
      number: "04",
      title: "Digital Transformation",
      description: "Strategic guidance to help your organization navigate digital transformation and technological evolution.",
      icon: digitalIcon
    },
    {
      number: "05",
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with advanced analytics, business intelligence dashboards, and real-time reporting systems that empower data-driven decision making across your organization.",
      icon: analyticsIcon
    },
    {
      number: "06",
      title: "Infra Management",
      description: "Comprehensive infrastructure management solutions including cloud orchestration, containerization, monitoring, and automation. We design, deploy, and maintain robust IT infrastructure that ensures high availability, security, and scalability for your business operations.",
      icon: infrastructureIcon
    }
  ];

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Cutting-edge solutions powered by innovation and expertise</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-item" key={index}>
              <ServiceCard
                number={service.number}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ number, title, description, icon }) => {
  return (
    <div className="service-card">
      <div className="service-number">{number}</div>
      <div className="service-icon">
        <img src={icon} alt={title} />
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
    </div>
  );
};

export default Services;
