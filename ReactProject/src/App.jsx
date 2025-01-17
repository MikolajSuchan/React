import React, { useEffect } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import List from './components/List';
import AnimatedComponent from './components/AnimatedComponent';
import { useTheme } from './hooks/useTheme';
import './styles/global.css';
import './styles/theme.css';

const App = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <div className="app">
        <Header />
        <Content />
        <List />
        <AnimatedComponent />
        <Footer />
      </div>
    </div>
  );
};

export default App;
