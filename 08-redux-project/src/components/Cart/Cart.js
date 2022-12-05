import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const items = useSelector(state=> state.cart.items)

  const finalItems = items.map(item => {

    return (<CartItem
      title={item.title}
      price={item.price}
      description={item.description}
      quantity={item.quantity}
      total = {item.price * item.quantity}
      key={item.id}
      id={item.id}
    />)
  })


  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {finalItems}
      </ul>
    </Card>
  );
};

export default Cart;
