import ExpenseDate from './ExpenseDate.js';
import './ExpenseItem.css';
import ExpenseDetails from './ExpenseDetails.js';

function ExpenseItem(props) {
    const amount = props.amount;
    const title = props.title;
    const location = props.location;
    return (
        <div className="expense-item">
            <ExpenseDate
                date={props.date}
            />
            <ExpenseDetails
                amount={amount}
                title={title}
                location={location}
            />
        </div>
    )
}

export default ExpenseItem;