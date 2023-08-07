import {
  DISPLAY_ITEMS,
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ITEMS) {
    return { ...state };
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }
  if (action.type === REMOVE) {
    const newCart = new Map(state.cart);
    newCart.delete(action.payload.id);
    return { ...state, cart: newCart };
  }

  if (action.type === INCREASE) {
    const newCart = new Map(state.cart);
    const itemId = action.payload.id;
    const item = newCart.get(itemId);
    const newItem = { ...item, amount: item.amount + 1 };
    newCart.set(item.id, newItem);
    return { ...state, cart: newCart };
  }

  if (action.type === DECREASE) {
    const newCart = new Map(state.cart);
    const itemId = action.payload.id;
    const item = newCart.get(itemId);
    if (item.amount === 1) {
      newCart.delete(itemId);
      return { ...state, cart: newCart };
    }
    const newItem = { ...item, amount: item.amount - 1 };
    newCart.set(item.id, newItem);
    return { ...state, cart: newCart };
  }

  if (action.type === TOTAL) {
    const cartArray = Array.from(state.cart.entries()).map((arr) => {
      const [id, item] = arr;
      return item;
    });
  }

  throw new Error(`Action by the name of:${action} couldn't be found`);
};

export default reducer;
