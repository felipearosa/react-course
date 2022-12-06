import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';

import { cartActions } from '../../store/cart-slice';

const CartButton = (props) => {
  const dispatch = useDispatch()
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  const toggleCart = () => {
    dispatch(cartActions.toggle());
  }


  return (
    <button onClick={toggleCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
