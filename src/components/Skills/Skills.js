import React from 'react';
import './skills.css'; // Import CSS file for custom styles
import skillsData from './skillsData.json'; // Import JSON data

const Skills = () => {
  const { overallSkills, individualSkills, certifications } = skillsData;

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
      <div className="certifications">
        <h2>Certifications</h2>
        <ul>
          {certifications.map((certification, index) => (
            <li key={index}>{certification}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
