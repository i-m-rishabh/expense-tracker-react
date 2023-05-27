import ExpenseDate from './ExpenseDate.js';
import ExpenseDetails from './ExpenseDetails.js';
import Card from '../UI/Card.js';

function ExpenseItem(props) {
    const amount = props.amount;
    const title = props.title;
    const location = props.location;
    const handleDelete = () => {
        console.log('deleted');
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
            <button onClick={handleDelete}>Delete</button>
        </Card>
    )
}

export default ExpenseItem;