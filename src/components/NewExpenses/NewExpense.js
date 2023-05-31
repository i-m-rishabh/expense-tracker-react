import './NewExpense.css';
import ExpenseForm from './ExpenseForm.js';

const NewExpense = (props) => {
    function addExpenseDataHandler(data){
        const expenseData = {
            id: Math.random().toString(),
            ...data,
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