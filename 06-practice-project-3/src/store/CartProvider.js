import { useReducer } from "react"

import CartContext from "./cart-context"

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedAmount = state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex(item => {
      return item.id === action.item.id
    });

    const existingCartItem = state.items[existingCartItemIndex];

    let updateItems;

    if (existingCartItem) {
      const updateItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      }
      updateItems = [...state.items]
      updateItems[existingCartItemIndex] = updateItem;
    } else {
      updateItems = state.items.concat(action.item);
    }

    return {
      items: updateItems,
      totalAmount: updatedAmount
    }
  }

  if (action.type === "REMOVE") {
    const existingCartItem = state.items.findIndex(item => {
      return action.id === item.id
    });

    const existingItem = state.items[existingCartItem]

    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(item => {
        return action.id !== item.id
      })
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 }
      updatedItems = [...state.items]
      updatedItems[existingCartItem] = updatedItem
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }

  if (action.type === "CLEAR") {
    return defaultCartState;
  }

  return defaultCartState;
}


const CartProvider = props => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = item => {
    dispatchCartAction({ type: 'ADD', item: item })
  }
  const removeItemFromCartHandler = id => {
    dispatchCartAction({ type: 'REMOVE', id: id })
  }

  const clearCartHandler = () => {
    dispatchCartAction({ type: 'CLEAR' })
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
