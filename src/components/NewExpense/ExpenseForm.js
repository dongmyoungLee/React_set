import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enterdTitle, setEnterdTitle] = useState('');
    const [enterdAmount, setEnterdAmount] = useState('');
    const [enterdDate, setEnterdDate] = useState('');


    // 이전 props 값에 의존하는 경우엔 이런식의 로직이 들어가줘야 한다..

    /*
    const [userInput, setUserInput] = useState({
        enterdTitle : '',
        enterdAmount : '',
        enterdDate : '',
    })

    const titleObjectChangeHandler = (e) => {
        setUserInput((prevState) => {
            return {...prevState, enterdTitle: e.target.value};
        });
    }
     */

    const titleChangeHandler = (e) => {
        setEnterdTitle(e.target.value);
    }

    const amountChangeHandler = (e) => {
        setEnterdAmount(e.target.value);
    }

    const dateChangeHandler = (e) => {
        setEnterdDate(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title : enterdTitle,
            amount : enterdAmount,
            date : new Date(enterdDate),
        }

        props.onSaveExpenseData(expenseData);

        setEnterdTitle('');
        setEnterdAmount('');
        setEnterdDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enterdTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enterdAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enterdDate} min="2023-01-01" max="2023-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button tyle="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;