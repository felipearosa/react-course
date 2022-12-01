import { useContext, useState } from 'react'

import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'
import Checkout from './Checkout'

const Cart = props => {
  const [isCheckingOut, setCheckingOut] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmout = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = item => {
    cartCtx.addItem({ ...item, amount: 1 })
  };

  const cardItems = cartCtx.items.map(item => <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)} />);

  const orderHandler = () => {
    setCheckingOut(true);
  }

  const submitOrderHandler = async (userData) => {
    await fetch('https://react-course-e2fa3-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items
      }),

    })
  }

  const btns = <div className={classes.actions}>
  <button onClick={props.onHideCart} className={classes['button--alt']}>Close</button>
  {hasItems && <button onClick={orderHandler} className={classes.button}>Order</button>}
</div>

  return (
    <Modal onHideCart={props.onHideCart}>
      {cardItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmout}</span>
      </div>
      {isCheckingOut && <Checkout onConfirm={submitOrderHandler} closeModal={props.onHideCart} />}
      {!isCheckingOut && btns}
    </Modal>
  )
}

export default Cart
