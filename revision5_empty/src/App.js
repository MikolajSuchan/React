import React from 'react';
import {useState} from 'react';

export default function App() {

  const[IsDeleting,setIsDeleting]= useState(false);

  let warning;

  if(IsDeleting){
    warning=(
    <div>
      <div data-testid="alert" id="alert">
        <h2>Are you sure?</h2>
        <p>These changes can't be reverted!</p>
        <button onClick={proceedHandler}>Proceed</button>
      </div>
    </div>
    )
  }

  function handleClick(){
    return(
      setIsDeleting(true)
    );
  }

  function proceedHandler(){
    return(
      setIsDeleting(false)
    );
  }

    return (
      <div>
        {warning}
        <button onClick={handleClick}>Delete</button>
      </div>    
    );
}