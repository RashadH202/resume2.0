import React from 'react';
import './education.css'; // Import CSS file for custom styles
import educationData from './educationData.json'; // Import sample education data

const Education = () => {
  return (
    <div className='edu-container'>
        <h2>Education</h2>
    <div className="education-container">
        
      {educationData.map((school, index) => (
        <div className="card" key={index}>
          <div className="card-content">
            <span className="card-title">{school.name}</span>
            <p>{school.degree}</p>
            <p>Completion Date: {school.completionDate}</p>
          </div>
        </div>
        
      ))}
    </div>
    </div>
  );
}

export default Education;
