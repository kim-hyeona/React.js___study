import "./ExpenseItem.css"

function ExpenseItem(props) {
    const expensDate = new Date(2021, 2, 28);
    const expenseTitle = 'car Insurance';
    const expenseAmount = 294.67;

    return (
        <div className="expense-item">
            <div>
                <div>{props.date.toLocaleString('ko',{month:'long'})}</div>
                <div></div>
                <div></div>
            </div>
         <div>{expensDate.toISOString()}</div>
         <div className="expense-item__description" >
            <h2>{props.title}</h2>
            <div className="expense-item__price" >{expenseAmount}</div>
         </div>
        </div>
    );
}

export default ExpenseItem;