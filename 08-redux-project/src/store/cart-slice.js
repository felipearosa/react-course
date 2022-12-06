import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartInitialState = {
  items: [],
  cartShowing: false,
  totalQuantity: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    addToCart(state, action) {
      state.totalQuantity++
      const existingItem = state.items.find(item => item.id === action.payload.id)

      if (!existingItem) {
        action.payload.quantity = 1;
        state.items.push(action.payload);
      } else {
        existingItem.quantity++
      }
    },

    removeFromCart(state, action) {
      state.totalQuantity--
      const existingItem = state.items.find(item => item.id === action.payload);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.title !== existingItem.title);
      } else {
        existingItem.quantity--;
      }

    },

    toggle(state) {
      state.cartShowing = !state.cartShowing
    }
  }
})

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
        body: JSON.stringify(cart)
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

export const cartActions = cartSlice.actions;
export default cartSlice.reducer
