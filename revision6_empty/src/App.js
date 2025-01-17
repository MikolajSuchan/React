import React from 'react';
import './index.css';

import Todo from './Todo'

// don't remove the export keyword here!
export const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];

// don't change the Component name "App"
export default function App() {
    return(
        // <div>
        //     <Todo>{DUMMY_TODOS[0]}</Todo>
        //     <Todo>{DUMMY_TODOS[1]}</Todo>
        //     <Todo>{DUMMY_TODOS[2]}</Todo>
        // </div>

        <ul>
            {DUMMY_TODOS.map(todo=>(<Todo text={todo}/>))}
        </ul>


);
}
