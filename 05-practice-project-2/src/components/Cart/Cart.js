import classes from './Cart.module.css'
import Modal from '../UI/Modal'

const Cart = props => {
  const cardItems = [{id: 'c1', name: 'Sushi', amount: 2, price: 12.99}].map(item => <li>item.name</li>)

  return(
    <Modal>
      {cardItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart
