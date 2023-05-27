import ExpenseItem from "./components/ExpenseItem.js";
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: 'allahabad',
    },
    // { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12).toISOString(), location:'delhi' },
    // {
    //   id: 'e3',
    //   title: 'Car Insurance',
    //   amount: 294.67,
    //   date: new Date(2021, 2, 28).toISOString(),
    //   location:'mumbai',
    // },
    // {
    //   id: 'e4',
    //   title: 'New Desk (Wooden)',
    //   amount: 450,
    //   date: new Date(2021, 5, 12).toISOString(),
    //   location:'chennai',
    // },
  ];
  return (
    <div>
      <h2>Expenses</h2>
      {/* <ExpenseItem
        date = {new Date(2023,5,25)}
        description = {'Food'}
        price = {10}
        location = {'prayagraj'}
      /> */}

      {
        expenses.map((item) => {
          return (
            <div>
              <ExpenseItem
                date={item.date}
                title={item.title}
                amount={item.amount}
                location={item.location}
              />
            </div>
          )
        })
      }
    </div>

  );
}

export default App;