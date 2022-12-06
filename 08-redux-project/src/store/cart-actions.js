import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch('https://react-course-e2fa3-default-rtdb.firebaseio.com/cart.json')

      if (!response.ok) {
        throw new Error('Could not fetch data!');
      }

      const data = await response.json();
      return data;
    }

    try {
      const cart = await fetchData();
      dispatch(cartActions.replaceCart({
        items: cart.items || [],
        totalQuantity: cart.totalQuantity
      }));

    } catch (err) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Getting cart data failed!'
      }))
    }
  }
}


export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(uiActions.showNotification({
      status: 'pending',
      title: 'Sending...',
      message: 'Sending cart data'
    }))


    const sendRequest = async () => {
      const response = await fetch('https://react-course-e2fa3-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity
        })
      });

      if (!response.ok) {
        throw new Error('There was something wrong!')
      }
    }

    try {
      await sendRequest();
      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully!'
      }))
    } catch (err) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!'
      }))

    }
  }
}
