import './ExpenseForm.css';
import {useState} from 'react';
const ExpenseForm = () =>{
    const [enteredTitle, setTitle] = useState(''); 
    const [enteredAmount, setAmount] = useState(''); 
    const [enteredDate, setDate] = useState(''); 
    function titleChangeHandler(event){
        // console.log(event.target.value);
        setTitle(event.target.value);
    }
    function amountChangeHandler(event){
        // console.log(event.target.value);
        setAmount(event.target.value);
    }
    function dateChangeHandler(event){
        // console.log(event.target.value);
        setDate(event.target.value);
    }

    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min="2023-05-01" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm;