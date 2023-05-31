import { useState } from 'react';
import Expenses from './components/Expenses/Expenses.js';
import NewExpense from './components/NewExpenses/NewExpense.js';

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date('2023-07-05'),
      location: 'allahabad',
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12), location:'delhi' },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date('2023-05-28'),
      location:'mumbai',
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date('2022-05-12'),
      location:'chennai',
    },
  ]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);


  function AddExpensesHandler(expense){
     setExpenses((prevData)=>{
      return([
        ...prevData,
        expense,
      ])
     })
    // console.log(expense);
  }
  function filterHandler(filteredExpenses){
    setFilteredExpenses(filteredExpenses);
  }
  
  return (
    <div>
      <NewExpense OnAddExpenses={AddExpensesHandler}/>
      <Expenses filteredExpenses={filteredExpenses} expenses={expenses} onFilter={filterHandler}/>

    </div>
  )
}

export default App;