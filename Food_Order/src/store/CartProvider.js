import CartContext from "./cart-context";
import {useReducer} from "react";

const defaultCartState = {
  items : [],
  totalAmount : 0
}

const cartReducer = (state, action) => {

  switch (action.type) {
    case 'ADD' :
      const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;

      const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);

      const existingCartItem = state.items[existingCartItemIndex];

      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount : existingCartItem.amount + action.item.amount,
        };

        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }


      const updateItems = state.items.concat(action.item);
      return {
        items : updateItems,
        totalAmount : updateTotalAmount,
      };
    break;
  }

  return defaultCartState;
}

const CartProvider = (props) => {

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({type: 'ADD', item: item});
  }

  const removeItemToCartHandler = (id) => {
    dispatchCartAction({type: 'REMOVE', id: id});
  }

  const cartContext = {
    items : cartState.items,
    totalAmount : cartState.totalAmount,
    addItem : addItemToCartHandler,
    removeItem : removeItemToCartHandler,
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;