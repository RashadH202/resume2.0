import React from 'react';
import './skills.css'; // Import CSS file for custom styles

const Skills = () => {
  // Sample data for overall skills
  const overallSkills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 80 },
    { name: "JavaScript", level: 75 },
    // Add more skills as needed
  ];

  // Sample data for individual skills
  const individualSkills = [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Bootstrap",
    // Add more skills as needed
  ];

  return (
    <div className="skills-container">
      <div className="overall-skills">
        <h2>Overall Skills</h2>
        {overallSkills.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill-name">{skill.name}</div>
            <div className="skill-level">
              <div className="level-bar" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
      <div className="individual-skills">
        <h2>Individual Skills</h2>
        <ul>
          {individualSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
