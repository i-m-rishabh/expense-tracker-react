import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem.js";

function Expenses(props) {
    return (
        <Card className='expenses'>
            {
                props.expenses.map((item) => {
                  return  <ExpenseItem
                        key={item.id}
                        date={item.date}
                        title={item.title}
                        amount={item.amount}
                        location={item.location}
                    />
                })
            }
        </Card>
    )
}

export default Expenses;