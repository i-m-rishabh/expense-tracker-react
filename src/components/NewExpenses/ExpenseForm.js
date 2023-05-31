import './ExpenseForm.css';
import {useState} from 'react';

const ExpenseForm = (props) =>{
    const [enteredTitle, setTitle] = useState(''); 
    const [enteredAmount, setAmount] = useState(''); 
    const [enteredDate, setDate] = useState(new Date()); 
    function titleChangeHandler(event){
        setTitle(event.target.value);
    }
    function amountChangeHandler(event){
        setAmount(parseFloat(event.target.value));
    }
    function dateChangeHandler(event){
        setDate(event.target.value);
    }
    function formSubmitHandler(event){
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)            
        };
        // console.log(expenseData);
        props.onAddExpenseData(expenseData);

        setAmount(0);
        setDate('');
        setTitle('');
    }

    return(
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm;