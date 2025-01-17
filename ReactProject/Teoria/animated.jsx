import React, { useState } from 'react'; 
// Importuje React i funkcję useState do zarządzania stanem w komponencie.

import { useSpring, animated } from 'react-spring'; 
// Importuje useSpring do tworzenia animacji i animated do animowanych elementów.

import '../styles/animatedcomponent.css'; 
// Importuje plik CSS dla stylizacji komponentu.

const AnimatedComponent = () => { 
  // Deklaruje funkcjonalny komponent AnimatedComponent.

  const [toggle, setToggle] = useState(false); 
  // Używa useState do zdefiniowania stanu toggle z wartością początkową false.

  const props = useSpring({ 
    // Definiuje animację z właściwościami opacity i transform.
    opacity: toggle ? 1 : 0, 
    // Zmienia przezroczystość w zależności od stanu toggle.
    transform: toggle ? 'scale(1) rotate(0deg)' : 'scale(0.8) rotate(180deg)', 
    // Zmienia skalę i obrót w zależności od stanu toggle.
    config: { mass: 1, tension: 210, friction: 20 }, 
    // Ustawia konfigurację fizyki animacji.
    from: { opacity: 0, transform: 'scale(0.8) rotate(180deg)' } 
    // Definiuje stan początkowy animacji.
  });

  const handleToggle = () => { 
    setToggle(!toggle); 
    // Funkcja do przełączania stanu toggle.
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}> 
      {/* Kontener z wyrównaniem tekstu do środka i marginesem górnym 20px. */}

      <animated.div style={props} className="animated-box"> 
        {/* Animowany element div z zastosowaną animacją i klasą CSS. */}
        <p style={{ fontSize: '20px', margin: '10px 0' }}>I am an animated component!</p> 
        {/* Tekst wyświetlany wewnątrz animowanego elementu. */}
      </animated.div>

      <button onClick={handleToggle} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}> 
        {/* Przycisk, który wywołuje handleToggle przy kliknięciu, z dodanymi stylami. */}
        Switch Animation
        {/* Tekst wyświetlany na przycisku. */}
      </button>
    </div>
  );
};

export default AnimatedComponent; 
// Eksportuje AnimatedComponent jako domyślny eksport modułu.
