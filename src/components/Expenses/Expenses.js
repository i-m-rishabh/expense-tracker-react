import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem.js";

function Expenses() {
    const expenses = [
        {
          id: 'e1',
          title: 'Toilet Paper',
          amount: 94.12,
          date: new Date(2020, 7, 14),
          location: 'allahabad',
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12), location:'delhi' },
        {
          id: 'e3',
          title: 'Car Insurance',
          amount: 294.67,
          date: new Date(2021, 2, 28),
          location:'mumbai',
        },
        {
          id: 'e4',
          title: 'New Desk (Wooden)',
          amount: 450,
          date: new Date(2021, 5, 12),
          location:'chennai',
        },
      ];
    return (
        <Card className='expenses'>
            {
                expenses.map((item) => {
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