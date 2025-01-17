import React, { useState } from 'react'; 
// Importuje React i funkcję useState do zarządzania stanem w komponencie.

import '../styles/content.css'; 
// Importuje plik CSS dla stylizacji komponentu Content.

const Content = () => { 
  // Deklaruje funkcjonalny komponent Content.

  const [content, setContent] = useState({ 
    // Używa useState do zdefiniowania stanu content z obiektem zawierającym tekst i flagę updated.
    text: 'Welcome to my React project! This project demonstrates how to build a modern web application using React, CSS, and other front-end technologies.', 
    // Tekst początkowy wyświetlany na stronie.
    updated: false, 
    // Flaga oznaczająca, czy zawartość została zaktualizowana.
  });

  const updateContent = () => { 
    // Funkcja do aktualizacji zawartości.
    setContent({ 
      // Ustawia nową wartość dla stanu content.
      text: ( 
        <> 
          {/* Fragment zawierający zaktualizowaną zawartość jako element JSX. */}
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
              <p>React Component (App.jsx):</p>
              <pre>
                <code>{`import React, { useEffect } from 'react';
// Kod komponentu React App z wykorzystaniem hooka useEffect i useTheme.`}</code>
              </pre>
            </div>
            <div className="code-block">
              <p>CSS Styling (theme.css):</p>
              <pre>
                <code>{`body.light {
// Stylowanie dla motywu jasnego.`}</code>
              </pre>
            </div>
          </div>
        </>
      ),
      updated: true, 
      // Ustawia flagę updated na true, aby wskazać, że zawartość została zaktualizowana.
    });
  };

  return (
    <main> 
      {/* Główny element zawierający zawartość i przycisk. */}
      <p>{content.text}</p> 
      {/* Wyświetla tekst zawartości. */}
      <button onClick={updateContent}>Update Content</button> 
      {/* Przycisk do aktualizacji zawartości, wywołuje funkcję updateContent przy kliknięciu. */}
    </main>
  );
};

export default Content; 
// Eksportuje komponent Content jako domyślny eksport modułu.
