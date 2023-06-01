import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';
const ExpenseList = props => {
    let expensesContent;
    if (props.item.length === 0) {
        return <h2 className='expenses-list__fallback'>No Item to display!</h2>
    }
    
    return (
        <ul className='expenses-list'>
            {
                props.item.map((item) => {
                    return( <> 
                    {(props.item.length===1) && <h2 className='expenses-list__fallback'>Only Single item to display. add more!</h2>}
                    <ExpenseItem
                        key={item.id}
                        date={item.date}
                        title={item.title}
                        amount={item.amount}
                        location={item.location}
                    />
                    </>
                    )
                })
            }
        </ul>
    )
}
export default ExpenseList;