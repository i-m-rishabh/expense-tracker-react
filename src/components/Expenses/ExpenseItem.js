import ExpenseDate from './ExpenseDate.js';
import ExpenseDetails from './ExpenseDetails.js';
import Card from '../UI/Card.js';
import { useState } from 'react';

function ExpenseItem(props) {
    // const amount = props.amount;
    const [amount, setAmount] = useState(props.amount);
    // let  title = props.title;
    const location = props.location;
    const [title, setTitle] = useState(props.title);

    const handleClick = () => {
        setAmount(amount+100);
    }
    

    return (
        <Card className="expense-item">
            <ExpenseDate
                date={props.date}
            />
            <ExpenseDetails
                amount={amount}
                title={title}
                location={location}
            />
            <button onClick={handleClick}>+ $100</button>
        </Card>
    )
}

export default ExpenseItem;