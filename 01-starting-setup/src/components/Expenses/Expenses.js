import { useState } from 'react';
import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card"
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter"

const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState('2020');

  const changeGraphYear = year => {
    setEnteredYear(year);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={enteredYear} onYearChange={changeGraphYear}/>
        {props.expenses.map(expense => {
          return <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
        })}
      </Card>
    </div>
  )
}

export default Expenses
