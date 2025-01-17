import React from 'react';

export default function Product(props) {  

return ( 

    <div> 

        <h2 className="expense-item">{props.title}</h2> 

        <p className="expense-item__price">{props.price}</p>  

        <p className="expense-item__id">{props.description}</p>  
    
    </div>    
    
);

}

