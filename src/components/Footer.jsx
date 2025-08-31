
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-main">
          <div className="footer-info">
            <h3 className="footer-logo">DevCortex</h3>
            <p className="footer-tagline">Technology that empowers your dreams</p>
            <p className="footer-description">
              We build cutting-edge software solutions that transform businesses and drive growth in the digital era.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#industries">Industries</a></li>
                <li><a href="#case-studies">Case Studies</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Custom Software</a></li>
                <li><a href="#services">AI Solutions</a></li>
                <li><a href="#services">Cloud Computing</a></li>
                <li><a href="#services">Data Science</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4>Connect</h4>
              <ul>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} DevCortex. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
