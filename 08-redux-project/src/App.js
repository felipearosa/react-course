import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { uiActions } from './store/ui-slice';
import { sendCartData } from './store/cart-slice';


let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const isCartShowing = useSelector(state => state.cart.cartShowing);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);


  useEffect(() => {

    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart))


  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && <Notification title={notification.title} message={notification.message} status={notification.status} />}
      <Layout>
        {isCartShowing && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
