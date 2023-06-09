import React, {useState} from 'react';
import './App.css';
import './components/Expenses/ExpenseItem';
import './components/Expenses/Expenses';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2023, 4, 1),
    },
    {   id: 'e2',
        title: 'New TV',
        amount: 799.49,
        date: new Date(2021, 2, 12) },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2023, 5, 2),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2023, 6, 3),
    },{
        id: 'e5',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2023, 7, 3),
    },
];

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = expense => {
        setExpenses((prevExpenses) => {
            return [expense, ...expenses];
        });
    };

  return (
    <div className="App">
        <NewExpense addExpenseData={addExpenseHandler} />
        <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
