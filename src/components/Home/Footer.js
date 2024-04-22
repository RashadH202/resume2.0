import React from 'react';
import './footer.css'; // Import CSS file for custom styles

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col s12 m4">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Resume</span>
                <p>Brief description about your resume.</p>
              </div>
              <div className="card-action">
                <a href="/resume">View Resume</a>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Contact</span>
                <p>Email: your@email.com</p>
                <p>Phone: +123456789</p>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Thank You</span>
                <p>Thank you for visiting my portfolio!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
