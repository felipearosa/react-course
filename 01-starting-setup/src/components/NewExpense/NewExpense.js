import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const saveFormInfo = (newExpense) => {
    const finalExpense = {
      ...newExpense,
      id: Math.random().toString()
    };

    props.onSaveForm(finalExpense);
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveForm={saveFormInfo}/>
    </div>
  )
};

export default NewExpense;
