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

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear() === enteredYear * 1;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={enteredYear} onYearChange={changeGraphYear}/>
        {filteredExpenses.map(expense => {
          return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
        })}
      </Card>
    </div>
  )
}

export default Expenses
