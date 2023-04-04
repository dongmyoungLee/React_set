import React, {useState} from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    const [filterdYear, setFilterdYear] = useState("2023");

    const filterChangeHandler = selectedYear => {
        setFilterdYear(selectedYear);
    }

    const filteredExpense = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filterdYear;
    })



    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filterdYear} onChangeFilter={filterChangeHandler} />
                <ExpensesList expense={filteredExpense} />
            </Card>
        </div>
    );
}

export default Expenses;