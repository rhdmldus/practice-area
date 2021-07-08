import React from 'react'

import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'
const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e3',
      title: 'KFC',
      amount: 25.12,
      date: new Date(2021, 1, 14),
    },
    {
      id: 'e4',
      title: 'Water Bottle',
      amount: 15.9,
      date: new Date(2021, 3, 15),
    },
  ];

  const addExpenseHandler = (expenseData) => {
    console.log('In App.js');
    console.log(expenseData);
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
  // return React.createElement('div', {},
  //   React.createElement('h2', {}, 'Let\'s get started!'),
  //   React.createElement(Expenses, {items: expenses})
  //   )
}

export default App;
