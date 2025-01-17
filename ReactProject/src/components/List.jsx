import React, { useState } from 'react';
import { animated } from 'react-spring';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '../styles/list.css'; 

const List = () => {
  const [items, setItems] = useState([]);
  const [inputName, setInputName] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [inputPriority, setInputPriority] = useState('');


  const addItem = () => {
    if (inputName.trim() && inputDescription.trim() && inputPriority.trim()) {
      const newItem = {
        name: inputName,
        description: inputDescription,
        priority: inputPriority,
      };
      setItems([...items, newItem]);
      setInputName('');
      setInputDescription('');
      setInputPriority('');
    }
  };


  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };


  const sortItems = () => {
    const sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));
    setItems(sortedItems);
  };


  const handleDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return; 

    const reorderedItems = Array.from(items);
    const [removed] = reorderedItems.splice(source.index, 1); 
    reorderedItems.splice(destination.index, 0, removed); 

    setItems(reorderedItems); 
  };

  return (
    <div className="list-container">
      <h1>Dynamic List</h1>


      <div className="input-container">
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
      </div>


      <button className="sort-button" onClick={sortItems}>Sort Alphabetically</button>

      <DragDropContext onDragEnd={handleDragEnd}>
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
                    </animated.li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default List;
