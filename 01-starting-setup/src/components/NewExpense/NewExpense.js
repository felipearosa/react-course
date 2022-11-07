import { useState } from 'react';

import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const [formActive, setFormActive] = useState(false)

  const saveFormInfo = (newExpense) => {
    const finalExpense = {
      ...newExpense,
      id: Math.random().toString()
    };

    setFormActive(false)
    props.onSaveForm(finalExpense);
  }

  const showForm = () => {
    setFormActive(true);
  }

  const addNewExpenseBtn = <button onClick={showForm}>Add New Expense</button>


  return (
    <div className='new-expense'>
      {formActive ? <ExpenseForm onSaveForm={saveFormInfo} onCancelForm={showForm} /> : addNewExpenseBtn}
    </div>
  )
};

export default NewExpense;
