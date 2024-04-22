import React, { useEffect } from 'react';
import './header.css'; // Import CSS file for custom styles

const Header = () => {
  useEffect(() => {
    const landingPage = document.querySelector('.landing-page');
    
    // Show content after half a second
    setTimeout(() => {
      landingPage.classList.add('show-content');
    }, 500);

    // Scroll down after 2 seconds
    const scrollDown = setTimeout(() => {
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }, 2000); // One minute delay

    // Clear the timeout on component unmount
    return () => clearTimeout(scrollDown);
  }, []);

  return (
    <div className="landing-page">
      <div className="landing-background">
        {/* Background Image */}
      </div>
      <div className="container landing-content">
        <h1>Rashad Hammonds</h1>
        <p>Portfolio/Resume</p>
        <a href="#home"><i className="material-icons">arrow_downward</i></a>
      </div>
    </div>
  );
}

export default Header;
