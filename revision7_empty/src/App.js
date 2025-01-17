import React from 'react';
import {useState} from 'react';

// don't change the Component name "App"
export default function App() {

const[highlighted,setHighlighted]=useState(false);

function handleClick(){
    setHighlighted(highlighted=>!highlighted)
}

    return (
        <>
            <p className={highlighted?'active':undefined}>Style me!</p>
            <button onClick={handleClick}>Toggle style</button>
        </>
    );
}
