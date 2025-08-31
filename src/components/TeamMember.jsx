import React from 'react';
import './TeamMember.css';

const TeamMember = ({ name, qualification, role }) => {
  return (
    <div className="team-member">
      <div className="member-info">
        <h3 className="member-name">{name}</h3>
        {role && <p className="member-role">{role}</p>}
        {qualification && <p className="member-qualification">{qualification}</p>}
      </div>
    </div>
  );
};

export default TeamMember;
