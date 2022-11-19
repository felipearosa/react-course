import { useRef, useState } from 'react';

import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = props => {
  const [amountIsValid, setAmountIsValid] = useState(true)
  const inputRef = useRef();

  const submitHandler = e => {
    e.preventDefault();

    const amount = inputRef.current.value;
    const numberAmount = +amount;

    if(amount.trim().length === 0 || numberAmount < 1 || numberAmount > 5)  {
      setAmountIsValid(false)
      return;
    }

    props.onAddItem(numberAmount)

  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input ref={inputRef} id="amount" label="Amount" input={{
        id: 'amount_' + props.id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1'
      }} />
      <button>+ Add</button>
      {!amountIsValid && <p>Enter a valid amount (1-5)</p> }
    </form>
  )
}

export default MealItemForm
