
function ExpenseDetails({ amount, location, title }) {
    return (
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">${amount}</div>
            <div className='expense-item__location'>{location}</div>
        </div>
    )
}

export default ExpenseDetails;