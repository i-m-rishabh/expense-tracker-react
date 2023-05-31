import './ExpenseFilter.css';
import ExpenseItem from './ExpenseItem.js';
const ExpenseFilter = (props) => {
    function handleDropDownChange(event){
        props.onChangeFilter(event.target.value);
    }
    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label htmlFor="filterYear">Filter By Year</label>
                <select name="filterYear" id="filterYear" onChange={handleDropDownChange}>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter;