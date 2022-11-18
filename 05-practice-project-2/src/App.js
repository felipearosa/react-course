import React, { Fragment, useState } from 'react'
import Cart from './components/Cart/Cart';
import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals';

function App() {
  const [cartShow, setCartShow] = useState(false);

  const showCart = () => {
    setCartShow(true);
  };

  const hideCart = () => {
    setCartShow(false);
  };

  return (
    <Fragment>
      {cartShow && <Cart onHideCart={hideCart} />}
      <Header onShowCart={showCart} />
      <Meals />
    </Fragment>
  );
}

export default App;
