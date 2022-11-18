import { useContext } from 'react'

import CartIcon from './../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context'


const HeaderCartButton = props => {
  const cartCtx = useContext(CartContext);

  const itemsNumber = cartCtx.items.reduce((currentItem, item) => currentItem + item.amount, 0);


  return(
    <button className={classes.button} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{itemsNumber}</span>
    </button>
  )
}

export default HeaderCartButton
