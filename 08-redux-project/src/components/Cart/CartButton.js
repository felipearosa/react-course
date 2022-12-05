import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';

import { cartActions } from '../../store/cart-slice';

const CartButton = (props) => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.items);

  let totalItems = 0;

  if (items !== undefined) {
    totalItems = items.reduce((accumulator, item) => accumulator + item.quantity , 0);
  }



  const toggleCart = () => {
    dispatch(cartActions.toggle());
  }

  return (
    <button onClick={toggleCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
