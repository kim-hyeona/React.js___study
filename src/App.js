
/* import React, { useState } from "react";

import Expenses from "./components/udemyReact/Expenses";
import NewExpense from "./components/udemyReact/NewEX/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(PrevExpenses => {
      return [expense, ...PrevExpenses]
    })
  }
} */


import ReactBasicMemo from "./ReactBasicMemo"

function App (props) {
  

  // return React.createElement('div',{},
  // React.createElement('h2',{},"Let's get started!"),
  // React.createElement(Expenses,{ item:expenses })
  //   );

  return (
    <div>
     {/*  <NewExpense onAddExpense={addExpenseHandler}/>
     <Expenses item={expenses}/> */}
     <ReactBasicMemo/>
    </div>
  );
}

export default App;
