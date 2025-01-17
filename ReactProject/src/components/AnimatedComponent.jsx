import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import '../styles/animatedcomponent.css'; 

const AnimatedComponent = () => {
  const [toggle, setToggle] = useState(false);
  
  const props = useSpring({
    opacity: toggle ? 1 : 0,
    transform: toggle ? 'scale(1) rotate(0deg)' : 'scale(0.8) rotate(180deg)',
    config: { mass: 1, tension: 210, friction: 20 },
    from: { opacity: 0, transform: 'scale(0.8) rotate(180deg)' }
  });

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <animated.div style={props} className="animated-box">
        <p style={{ fontSize: '20px', margin: '10px 0' }}>I am an animated component!</p>
      </animated.div>
      <button onClick={handleToggle} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
        Switch Animation
      </button>
    </div>
  );
};

export default AnimatedComponent;
