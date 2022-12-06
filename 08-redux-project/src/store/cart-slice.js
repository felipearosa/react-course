import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
  items: [],
  cartShowing: false,
  totalQuantity: 0,
  changed: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    addToCart(state, action) {
      state.totalQuantity++;
      const existingItem = state.items.find(item => item.id === action.payload.id);
      state.changed = true

      if (!existingItem) {
        action.payload.quantity = 1;
        state.items.push(action.payload);
      } else {
        existingItem.quantity++;
      }
    },

    removeFromCart(state, action) {
      state.totalQuantity--;
      const existingItem = state.items.find(item => item.id === action.payload);
      state.changed = true
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.title !== existingItem.title);
      } else {
        existingItem.quantity--;
      }

    },

    replaceCart(state, action) {
      state.items = action.payload.items;
      state.cartShowing = action.payload.cartShowing;
      state.totalQuantity = action.payload.totalQuantity;
    },

    toggle(state) {
      state.cartShowing = !state.cartShowing
    }
  }
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer
