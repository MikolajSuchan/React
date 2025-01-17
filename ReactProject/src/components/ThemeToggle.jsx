import React from 'react';
import { useTheme } from '../hooks/useTheme';
import '../styles/themeToggle.css'; 

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'JavaScript' : 'React'} Mode
    </button>
  );
};

export default ThemeToggle;
