function ExpenseItemDate(props) {
    const month = props.date.toLocaleString('ko-kr',{month:'long'});
    const day = props.date.toLocaleString('ko-kr',{day:'2-digit'});
    const year = props.date.getFullYear();

    return (
        <div>
        <div>{props.month}</div>
        <div>{props.day}</div>
        <div>{props.year}</div>
    </div>
    );
}

export default ExpenseItemDate;