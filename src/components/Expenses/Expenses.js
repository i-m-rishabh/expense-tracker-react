import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem.js";

function Expenses(props) {
    
    return (
        <Card className='expenses'>
            {
                props.expenses.map((item) => {
                    return (
                        <Card className=''>
                            <ExpenseItem
                                date={item.date}
                                title={item.title}
                                amount={item.amount}
                                location={item.location}
                            />
                        </Card>
                    )
                })
            }
        </Card>
    )
}

export default Expenses;