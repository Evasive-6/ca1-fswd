import React from 'react';
import './team.css';
const TeamMemberCard = ({ name, jobTitle }) => (
  <div className="team-member-card">
    <h2>{name}</h2>
    <p>{jobTitle}</p>
  </div>
);

export default TeamMemberCard;
