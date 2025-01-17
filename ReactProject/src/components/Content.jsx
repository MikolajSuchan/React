import React, { useState } from 'react';
import '../styles/content.css'; 

const Content = () => {
  const [content, setContent] = useState({
    text: 'Welcome to my React project! This project demonstrates how to build a modern web application using React, CSS, and other front-end technologies.',
    updated: false,
  });

  const updateContent = () => {
    setContent({
      text: (
        <>
          <p>This website uses the following technologies:</p>
          <ul>
            <li>React for building the user interface</li>
            <li>CSS for styling and transitions</li>
            <li>Responsive design to ensure the website works on all devices</li>
          </ul>
          <p>
            The goal of the project is to create a dynamic and interactive web experience.
          </p>
          <h3 className="section-title">Code Snippets:</h3>
          <div className="code-snippets">
            <div className="code-block">
              <p>React Component (Header.jsx):</p>
              <pre>
                <code>{`import React from 'react';
import ThemeToggle from './ThemeToggle';
import '../styles/header.css'; 

const Header = () => {
  return (
    <header className="header">
      <img
        className="header-image"
        src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/5992673/cover_image/retina_1708x683/1005_Design-Patterns-in-React_Cover-44247834a5b31e8d08e5bbbdac4a6750.png"
        alt="Design Patterns in React"
      />
      <h1 className="header-title">My React Project</h1>
      <ThemeToggle />
    </header>
  );
};

export default Header;
`}</code>
              </pre>
            </div>
            <div className="code-block">
              <p>CSS Styling (theme.css):</p>
              <pre>
                <code>{`body.light {
    background: linear-gradient(90deg, #00d8ff, #FFFFFF);
    color: #000000;
}
  
body.dark {
    background: linear-gradient(90deg, #f7df1e, #FFFFFF);
    color: #000000;
}


.app {
    height: 100%; 
    min-height: 100vh; 
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
}
  
button {
    background-color: #4CAF50; 
    color: white;
    border: none;
    border-radius: 25px; 
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
}

button:hover {
    background-color: #388E3C; 
    transform: scale(1.05); 
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); 
}`}</code>
              </pre>
            </div>
          </div>
        </>
      ),
      updated: true,
    });
  };

  return (
    <main>
      <p>{content.text}</p>
      <button onClick={updateContent}>Update Content</button>
    </main>
  );
};

export default Content;
