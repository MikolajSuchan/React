import React from 'react'; 
// Importuje bibliotekę React, aby użyć jej do tworzenia komponentów.

import '../styles/footer.css'; 
// Importuje plik CSS, który zawiera style dla komponentu Footer.

const Footer = () => { 
  // Deklaruje funkcjonalny komponent Footer.

  return ( 
    // Zwraca JSX, który reprezentuje strukturę HTML stopki.
    <footer className="footer"> 
      {/* Główny element stopki z klasą CSS "footer". */}
      <div className="footer-content"> 
        {/* Sekcja zawierająca główną zawartość stopki. */}
        <div className="footer-section">
          {/* Sekcja w stopce, zawierająca nagłówek i listę linków. */}
          <h4>Resources</h4> 
          {/* Nagłówek sekcji zasobów. */}
          <ul> 
            {/* Lista nieuporządkowana z linkami do zewnętrznych zasobów. */}
            <li>
              <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                {/* Link do oficjalnej strony React, otwiera się w nowej karcie. */}
                React Official Site
              </a>
            </li>
            <li>
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                {/* Link do wyszukiwarki Google, otwiera się w nowej karcie. */}
                Google Search
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom"> 
        {/* Sekcja stopki dolnej z tekstem praw autorskich. */}
        <p>© 2025 My React App. All rights reserved.</p>
        {/* Informacja o prawach autorskich. */}
      </div>
    </footer>
  );
};

export default Footer; 
// Eksportuje komponent Footer jako domyślny eksport modułu.
