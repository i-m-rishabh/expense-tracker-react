import './ExpenseItem.css';
function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <div>May 26th 2023</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">$300.56</div>
                <div className='expense-item__location'>prayagraj</div>
            </div>
        </div>
    )
}

export default ExpenseItem;