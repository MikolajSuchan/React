import ExpenseItem from "./ExpenseItem";

function Expenses(props){

    const items=props.expenses;


    return(
        <div>
            {items.map(item =>  
            (<ExpenseItem 
                title={item.title} 
                amount={item.amount} 
                date={item.date} 
                id={item.id}>
                </ExpenseItem>))};
        </div>
    );

}

export default Expenses;