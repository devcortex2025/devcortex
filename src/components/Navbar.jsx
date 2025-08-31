import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Smooth scroll handler for anchor links
  const handleNavClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        closeMenu();
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" onClick={closeMenu}>
            <span className="logo-text">DevCortex</span>
          </Link>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`menu-line ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`menu-line ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`menu-line ${isMenuOpen ? "open" : ""}`}></div>
        </div>

        <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <li className="navbar-item">
            <a href="#home" onClick={e => handleNavClick(e, "#home")}>Home</a>
          </li>
          <li className="navbar-item">
            <a href="#services" onClick={e => handleNavClick(e, "#services")}>Services</a>
          </li>
          <li className="navbar-item">
            <a href="#industries" onClick={e => handleNavClick(e, "#industries")}>Industries</a>
          </li>
          <li className="navbar-item">
            <a href="#projects" onClick={e => handleNavClick(e, "#projects")}>Projects</a>
          </li>
          <li className="navbar-item">
            <a href="#about" onClick={e => handleNavClick(e, "#about")}>About</a>
          </li>
          <li className="navbar-item">
            <a href="#contact" onClick={e => handleNavClick(e, "#contact")}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
