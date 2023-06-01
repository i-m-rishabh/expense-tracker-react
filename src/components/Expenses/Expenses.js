import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2023');
    function handleFilterChange(selectedYear) {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.toLocaleString('default', { year: 'numeric' }).toString() === filteredYear;
    })
    return (
        <Card className='expenses'>
            <ExpenseFilter
                seletect={filteredYear}
                onChangeFilter={handleFilterChange}
            />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpenseList item={filteredExpenses}/>
        </Card>
    )
}

export default Expenses;