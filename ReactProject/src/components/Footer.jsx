import React from 'react';
import '../styles/footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Addictional sources</h4>
          <ul>
            <li>
              <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                React Official Site
              </a>
            </li>
            <li>
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                Google Search
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 My React App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
