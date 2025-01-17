import React from 'react';
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
