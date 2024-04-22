import React from 'react';
import './home.css'; // Import CSS file for custom styles

const Home = () => {
  return (
    <div className="home-container">
      <div className="job-title">
        <h2>Job Title</h2>
      </div>
      <div className="profile-picture"><img src='https://i.imgur.com/NXfnhso.jpg'/></div> 
      <div className="current-goal">
        <h2>Current Goal</h2>
      </div>
    </div>
  );
}

export default Home;
