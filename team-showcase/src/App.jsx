import React from 'react';
import TeamMemberCard from './componnents/TeamMemberCard';

const App = () => {
  const teamMembers = [
    { name: 'Alice Smith', jobTitle: 'Developer' },
    { name: 'Bob Johnson', jobTitle: 'Designer' },
  ];

  return (
    <div className="app">
      {teamMembers.map((member, index) => (
        <TeamMemberCard
          key={index}
          name={member.name}
          jobTitle={member.jobTitle}
        />
      ))}
    </div>
  );
};

export default App;
