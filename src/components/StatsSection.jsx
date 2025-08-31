import React, { useState, useEffect, useRef } from 'react';
import './StatsSection.css';

const StatsSection = () => {
  const [counts, setCounts] = useState({
    clients: 0,
    employees: 0,
    projects: 0
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const targetCounts = {
    clients: 150,
    employees: 25,
    projects: 200
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      
      const progress = currentStep / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounts({
        clients: Math.round(targetCounts.clients * easeOutQuart),
        employees: Math.round(targetCounts.employees * easeOutQuart),
        projects: Math.round(targetCounts.projects * easeOutQuart)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targetCounts);
      }
    }, stepDuration);
  };

  return (
    <section ref={sectionRef} className="stats-section">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">{counts.clients}+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-number">{counts.employees}+</div>
            <div className="stat-label">Team Members</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-number">{counts.projects}+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
