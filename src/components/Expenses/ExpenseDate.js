import './ExpenseDate.css';
function ExpenseDate(props){
     const date = new Date(props.date);
    const month = date.toLocaleString('defaul',{month:'long'});
    const year = date.toLocaleString('default',{year:'numeric'});
    const day = date.toLocaleString('default',{day:'numeric'});
    
    return(
        <div className='expense-date'>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year'>{year}</div>
        <div className='expense-date__day'>{day}</div>
    </div>
    )
}

export default ExpenseDate;