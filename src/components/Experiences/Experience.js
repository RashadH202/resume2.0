import React from 'react';
import './experience.css'; // Import CSS file for custom styles
import experienceData from './experienceData.json'; // Import JSON data for work experience

const Experience = () => {
  return (
    <div className='exp-cont'>
        <h2>Experience</h2>
    <div className="experience-container">
      
      <div className="row">
        {experienceData.map((job, index) => (
          <div className="col s12 m6 l4" key={index}>
            <div className="card">
              <div className="card-content">
                <span className="card-title">{job.title}</span>
                <p className="company">{job.company}</p>
                <p>{job.duration}</p>
                <ul>
                  {job.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Experience;
