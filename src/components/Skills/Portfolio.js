import React from 'react';
import './portfolio.css'; // Import CSS file for custom styles
import projectsData from './projectsData.json'; // Import JSON data for projects

const Portfolio = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="row">
        {projectsData.map((project, index) => (
          <div className="col s12 m6 l4" key={index}>
            <div className="card">
              <div className="card-image">
                <img src={project.image} alt={project.name} />
                <span className="card-title">{project.name}</span>
              </div>
              <div className="card-content">
                <p>{project.description}</p>
              </div>
              <div className="card-action">
                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
