import React,  { useEffect } from 'react'

import './header.css'; 

function Home() {
    useEffect(() => {
        const landingPage = document.querySelector('.landing-page');
        setTimeout(() => {
          landingPage.classList.add('show-content');
        }, 500); // Delay for half a second
      }, []);
    
      return (
        <div className="landing-page">
          <div className="landing-background">
            {/* Background Image */}
          </div>
          <div className="container landing-content">
            <h1>Rashad Hammonds</h1>
            <p>Portfolio/Resume</p>
            <a href="#next-section"><i className="material-icons">arrow_downward</i></a>
          </div>
        </div>
      );
    }

export default Home