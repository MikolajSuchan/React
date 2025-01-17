import { useState, useEffect } from 'react'; 
// Importuje hooki useState i useEffect z React.

export const useTheme = () => {
  // Eksportuje niestandardowy hook useTheme.

  const [theme, setTheme] = useState('light'); 
  // Definiuje stan theme z początkową wartością 'light'.

  useEffect(() => {
    // Hook useEffect wykonuje się po zamontowaniu komponentu.

    const savedTheme = localStorage.getItem('theme'); 
    // Pobiera zapisany temat z localStorage.

    if (savedTheme) {
      setTheme(savedTheme); 
      // Ustawia temat na zapisany temat, jeśli istnieje.
    }
  }, []); 
  // Efekt wykonuje się tylko raz przy zamontowaniu komponentu.

  useEffect(() => {
    document.body.className = theme; 
    // Ustawia klasę elementu body na aktualny temat.
  }, [theme]); 
  // Efekt wykonuje się za każdym razem, gdy zmienia się theme.

  const toggleTheme = () => {
    // Definiuje funkcję toggleTheme do przełączania tematu.

    const newTheme = theme === 'light' ? 'dark' : 'light'; 
    // Określa nowy temat, zmieniając z 'light' na 'dark' i odwrotnie.

    setTheme(newTheme); 
    // Aktualizuje stan theme na nowy temat.

    localStorage.setItem('theme', newTheme); 
    // Zapisuje nowy temat w localStorage.
  };

  return { theme, toggleTheme }; 
  // Zwraca aktualny temat i funkcję toggleTheme.
};
