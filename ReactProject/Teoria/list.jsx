import React, { useState } from 'react'; 
// Importuje bibliotekę React oraz hook useState do zarządzania stanem komponentu.

import { useTransition, animated } from 'react-spring'; 
// Importuje funkcje useTransition i animated z react-spring do animacji elementów.

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'; 
// Importuje komponenty z react-beautiful-dnd do implementacji funkcjonalności drag-and-drop.

import '../styles/list.css'; 
// Importuje plik CSS do stylowania komponentu List.

const List = () => {
  const [items, setItems] = useState([]); 
  // Definiuje stan dla listy elementów.
  
  const [inputName, setInputName] = useState(''); 
  // Definiuje stan dla wartości nazwy elementu.
  
  const [inputDescription, setInputDescription] = useState(''); 
  // Definiuje stan dla wartości opisu elementu.
  
  const [inputPriority, setInputPriority] = useState(''); 
  // Definiuje stan dla wartości priorytetu elementu.

  const addItem = () => {
    // Funkcja do dodawania nowego elementu do listy.
    if (inputName.trim() && inputDescription.trim() && inputPriority.trim()) {
      const newItem = {
        name: inputName,
        description: inputDescription,
        priority: inputPriority,
      };
      setItems([...items, newItem]); 
      // Dodaje nowy element do listy.
      setInputName(''); 
      // Czyści pole nazwy.
      setInputDescription(''); 
      // Czyści pole opisu.
      setInputPriority(''); 
      // Czyści pole priorytetu.
    }
  };

  const removeItem = (index) => {
    // Funkcja do usuwania elementu z listy.
    setItems(items.filter((_, i) => i !== index)); 
    // Filtruje listę, usuwając wybrany element.
  };

  const sortItems = () => {
    // Funkcja sortująca elementy alfabetycznie po nazwie.
    const sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));
    setItems(sortedItems); 
    // Ustawia posortowaną listę.
  };

  const handleDragEnd = (result) => {
    // Funkcja obsługująca zakończenie przeciągania elementu.
    const { destination, source } = result;
    if (!destination) return; 
    // Jeśli element nie został upuszczony w nowym miejscu, nie robi nic.

    const reorderedItems = Array.from(items);
    const [removed] = reorderedItems.splice(source.index, 1); 
    // Usuwa element ze starej pozycji.
    reorderedItems.splice(destination.index, 0, removed); 
    // Wstawia element na nową pozycję.
    setItems(reorderedItems); 
    // Aktualizuje stan listy.
  };

  return (
    <div className="list-container">
      <h1>Dynamic List</h1>
      {/* Nagłówek komponentu. */}

      <div className="input-container">
        {/* Formularz z trzema polami do wprowadzania danych. */}
        <input
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          className="input-field"
          placeholder="Enter item name"
        />
        <input
          type="text"
          value={inputDescription}
          onChange={(e) => setInputDescription(e.target.value)}
          className="input-field"
          placeholder="Enter item description"
        />
        <input
          type="text"
          value={inputPriority}
          onChange={(e) => setInputPriority(e.target.value)}
          className="input-field"
          placeholder="Enter item priority"
        />
        <button className="add-button" onClick={addItem}>Add Item</button>
        {/* Przycisk dodający nowy element do listy. */}
      </div>

      <button className="sort-button" onClick={sortItems}>Sort Alphabetically</button>
      {/* Przycisk sortujący listę alfabetycznie. */}

      <DragDropContext onDragEnd={handleDragEnd}>
        {/* Kontekst obsługujący przeciąganie i upuszczanie elementów. */}
        <Droppable droppableId="droppable-list">
          {(provided) => (
            <ul
              className="list"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {items.map((item, index) => (
                <Draggable key={index} draggableId={`item-${index}`} index={index}>
                  {(provided) => (
                    <animated.li
                      className="list-item"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={provided.draggableProps.style}
                    >
                      <strong>{item.name}</strong> - {item.description} - {item.priority}
                      <button className="remove-button" onClick={() => removeItem(index)}>Remove</button>
                      {/* Przycisk usuwający element z listy. */}
                    </animated.li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
              {/* Placeholder do obsługi przeciągania elementów. */}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default List;
// Eksportuje komponent List jako domyślny eksport modułu.
