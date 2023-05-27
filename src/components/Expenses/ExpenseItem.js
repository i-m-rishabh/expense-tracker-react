import ExpenseDate from './ExpenseDate.js';
import ExpenseDetails from './ExpenseDetails.js';
import Card from '../UI/Card.js';

function ExpenseItem(props) {
    const amount = props.amount;
    const title = props.title;
    const location = props.location;
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
        </Card>
    )
}

export default ExpenseItem;