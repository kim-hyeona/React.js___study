import React, { useEffect, useState } from 'react';
import "./ExpenseForm.css"

function ExpenseForm(props) {
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [entereddate,setEnteredDate] = useState('');

    /* const [userInput,setUserInput] = useState({
        enteredTitle: "",
        enteredAmount:"",
        enteredDate:"",
    }) */
    

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: e.target.value,
        //})
        // setUserInput((prevState) =>{
        //     return {...prevState, enteredTitle:e.target.value}
        // })

    }

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: e.target.value
        // })
    }

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value)
        // setUserInput({
            // ...userInput,
            // enteredDate: e.target.value
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const expensData = {
            title: enteredTitle,
            amount: enteredAmount,
            data: new Date(entereddate)
        };

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
            <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount}  min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                    <label>Date</label>
                    <input type="data" value={entereddate} min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler}/>
            </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit' onClick="">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;