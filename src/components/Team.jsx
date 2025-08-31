import React from 'react';
import TeamMember from './TeamMember';
import './Team.css';
import ashutoshImg from '../assets/team/ashutosh.jpg';

const Team = () => {
  
  const teamMembers = [
    {
      name: "Ashutosh Gupta",
      qualification: "AI & ML Engineer",
      role: "Founder, CEO"
    }
  ];

  return (
    <section id="team" className="team-section section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Meet The Team</h2>
          <p className="section-subtitle">
            Founded by Alumnus of IIT Jodhpur
          </p>
        </div>
        
        <div className="team-layout">
          {/* Single team member centered */}
          <div className="team-members-row">
            <TeamMember
              name={teamMembers[0].name}
              qualification={teamMembers[0].qualification}
              role={teamMembers[0].role}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
