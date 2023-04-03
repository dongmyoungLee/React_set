import React, {useState} from 'react'
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
    const [filterdYear, setFilterdYear] = useState("2023");

    const filterChangeHandler = selectedYear => {
        setFilterdYear(selectedYear);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filterdYear} onChangeFilter={filterChangeHandler} />
                <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date} />
                <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date} />
                <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date} />
                <ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date} />
            </Card>
        </div>
    );
}

export default Expenses;