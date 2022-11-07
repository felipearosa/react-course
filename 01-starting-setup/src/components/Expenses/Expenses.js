import { useState } from 'react';
import Card from "../UI/Card"
import './Expenses.css'
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from "./ExpensesFilter"
import ExpenseList from './ExpenseList';

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
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses
