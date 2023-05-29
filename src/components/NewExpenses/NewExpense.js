import './NewExpense.css';
import ExpenseForm from './ExpenseForm.js';

const NewExpense = (props) => {
    function addExpenseDataHandler(data){
        const expenseData = {
            ...data,
            id: Math.random().toString()
        }
        props.OnAddExpenses(expenseData);
    }
    return(
        <div className='new-expense'>
            <ExpenseForm onAddExpenseData={addExpenseDataHandler}/>
        </div>
    )
}
export default NewExpense;