import './Card.css';
import '../Expenses/ExpenseItem.css';
import '../Expenses/Expenses.css';

function Card(props){
    const classes = `${props.className} card`;
    return(
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default Card;