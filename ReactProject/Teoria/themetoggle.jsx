import React from 'react'; 
// Importuje bibliotekę React.

import { useTheme } from '../hooks/useTheme'; 
// Importuje customowy hook useTheme do zarządzania tematyką aplikacji.

import '../styles/themeToggle.css'; 
// Importuje plik CSS dla stylów komponentu ThemeToggle.

const ThemeToggle = () => {
  // Definiuje komponent funkcyjny ThemeToggle.
  const { theme, toggleTheme } = useTheme(); 
  // Używa hooka useTheme do uzyskania aktualnego tematu i funkcji przełączania tematów.

  return (
    // Renderuje przycisk, który zmienia temat po kliknięciu.
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'JavaScript' : 'React'} Mode
      {/* Zmienia tekst przycisku w zależności od obecnego tematu. */}
    </button>
  );
};

export default ThemeToggle; 
// Eksportuje komponent ThemeToggle jako domyślny eksport modułu.
