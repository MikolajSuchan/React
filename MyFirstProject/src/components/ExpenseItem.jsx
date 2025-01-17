import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem({title, amount, date, id}){
 
    return(
        <Card className="expense-item">
            <div className = "expense-item__id"> {id} </div>
            
            <ExpenseDate date={date}/>
           
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{amount}</div>
            </div>
        </Card>
    );
}
export default ExpenseItem;