import './ExpenseItem.css';
function ExpenseItem(props) {
    const date = props.date;
    const description = props.description;
    const price = props.price;
    const location = props.location;
    return (
        <div className="expense-item">
            <div>{date}</div>
            <div className="expense-item__description">
                <h2>{description}</h2>
                <div className="expense-item__price">${price}</div>
                <div className='expense-item__location'>{location}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;