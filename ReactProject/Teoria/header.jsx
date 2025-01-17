import React from 'react'; 
// Importuje bibliotekę React, niezbędną do tworzenia komponentów React.

import ThemeToggle from './ThemeToggle'; 
// Importuje komponent ThemeToggle, który prawdopodobnie służy do przełączania motywu aplikacji.

import '../styles/header.css'; 
// Importuje plik CSS, który zawiera style dla komponentu Header.

const Header = () => { 
  // Deklaruje funkcjonalny komponent Header.

  return (
    // Zwraca JSX, który definiuje strukturę nagłówka strony.
    <header className="header">
      {/* Główny element nagłówka z klasą CSS "header". */}
      <img 
        className="header-image" 
        // Klasa CSS "header-image" do stylowania obrazka.
        src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/5992673/cover_image/retina_1708x683/1005_Design-Patterns-in-React_Cover-44247834a5b31e8d08e5bbbdac4a6750.png" 
        // URL obrazka do wyświetlenia w nagłówku.
        alt="Design Patterns in React" 
        // Tekst alternatywny dla obrazka, przydatny dla dostępności.
      />
      <h1 className="header-title">My React Project</h1> 
      {/* Nagłówek z tytułem projektu, używa klasy CSS "header-title". */}
      <ThemeToggle /> 
      {/* Komponent ThemeToggle, który prawdopodobnie pozwala użytkownikom przełączać motyw aplikacji. */}
    </header>
  );
};

export default Header; 
// Eksportuje komponent Header jako domyślny eksport modułu.
