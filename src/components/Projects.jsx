import React, { useState } from 'react';
import './Projects.css';

// Import project images
import cwdImg from '../assets/projects/cwd.png';
import lawInforcementImg from '../assets/projects/lawInforcement.png';
import smartBinImg from '../assets/projects/smartBin.png';
import veghighImg from '../assets/projects/veghigh.png';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Law Enforcement Portal',
      detailedDescription: 'A secure portal for law enforcement agencies to manage cases, evidence, and investigations with advanced analytics and reporting capabilities.',
      type: 'Public Safety',
      image: lawInforcementImg,
      websiteUrl: '#',
      features: [
        'Case management system',
        'Evidence tracking',
        'Biometric authentication',
        'Advanced reporting',
        'Mobile app integration',
        'Compliance management'
      ]
    },
    {
      id: 2,
      title: 'Smart Waste Management',
      detailedDescription: 'An IoT-based waste management system that optimizes collection routes, monitors bin levels, and promotes recycling through gamification.',
      type: 'Environmental & IoT',
      image: smartBinImg,
      websiteUrl: '#',
      features: [
        'Smart bin monitoring',
        'Route optimization',
        'Recycling incentives',
        'Real-time tracking',
        'Analytics dashboard',
        'Mobile app'
      ]
    },
    {
      id: 3,
      title: 'VegHigh',
      detailedDescription: 'A platform that connects farmers directly to consumers, enabling transparent and fair pricing of fresh, organic produce.',
      type: 'Agriculture & Food Tech',
      image: veghighImg,
      websiteUrl: 'https://veghigh.in',
      features: [
        'Direct farmer-consumer connection',
        'Transparent pricing',
        'Quality assurance',
        'Real-time inventory tracking',
        'Secure payment processing',
        'Mobile app'
      ]
    },
    {
      id: 4,
      title: 'Smart City Dashboard',
      detailedDescription: 'A comprehensive smart city management dashboard that monitors and controls various urban infrastructure systems including traffic, utilities, and public services.',
      type: 'Smart City & IoT',
      image: cwdImg,
      websiteUrl: '#',
      features: [
        'Real-time city monitoring',
        'IoT sensor integration',
        'Traffic flow optimization',
        'Utility management',
        'Emergency response system',
        'Data visualization'
      ]
    }
  ];

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Have A Look At<br />Some Examples Of<br />Our Work.</h2>
          <p className="section-subtitle">
            A selection of our impactful projects and partnerships across industries
          </p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div className="project-tile" key={idx} onClick={() => handleOpenModal(project)}>
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <h3 className="project-title-overlay">{project.title}</h3>
                  <div className="project-type-overlay">{project.type}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal" onClick={handleCloseModal}>
          <div className="project-dialog-content" onClick={(e) => e.stopPropagation()}>
            <div className="project-detail-container">
              <div className="project-dialog-header">
                <div className="project-header-content">
                  <h2 className="project-dialog-title">{selectedProject.title}</h2>
                  <span className="project-type-badge">{selectedProject.type}</span>
                </div>
                <p className="project-dialog-subtitle">{selectedProject.detailedDescription}</p>
              </div>
              
              <div className="project-detail-content">
                <div className="project-image-section">
                  {selectedProject.image && (
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="project-detail-image"
                    />
                  )}
                </div>
                
                <div className="project-info-grid">
                  <div className="project-info-card">
                    <h3 className="info-card-title">Key Features</h3>
                    <ul className="features-list">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="feature-item">
                          <span className="feature-icon">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    {selectedProject.websiteUrl && selectedProject.websiteUrl !== '#' && (
                      <div className="project-visit-site">
                        <a 
                          href={selectedProject.websiteUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="visit-site-btn"
                        >
                          Visit Site
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects; 