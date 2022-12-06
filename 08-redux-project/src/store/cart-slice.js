import { createSlice } from "@reduxjs/toolkit";

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

export const cartActions = cartSlice.actions;
export default cartSlice.reducer
