import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem.js";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2023');
    function handleFilterChange(selectedYear){
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.expenses.filter((expense)=>{
        return expense.date.toLocaleString('default',{year:'numeric'}).toString() === filteredYear;
    })
    return (
        <Card className='expenses'>
            <ExpenseFilter 
            seletect={filteredYear}
            onChangeFilter={handleFilterChange}   
            />
            {
                    filteredExpenses.map((item) => {
                    return <ExpenseItem
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