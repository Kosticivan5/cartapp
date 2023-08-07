import { useContext, createContext, useReducer } from "react";
import { data } from "./data";
import reducer from "./reducer";
import {
  DISPLAY_ITEMS,
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
} from "./actions";
import { countTotal } from "./utils";

// global context
const globalContext = createContext();
export const useGlobalContext = () => useContext(globalContext);

// initial State

const mapCartItems = new Map(data.map((item) => [item.id, item]));

const initialState = {
  isLoading: false,
  cart: mapCartItems,
};

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayItems = () => {
    dispatch({ type: DISPLAY_ITEMS });
  };

  const removeItems = () => {
    dispatch({ type: CLEAR_CART });
  };
  const removeItem = (id) => {
    dispatch({ type: REMOVE, payload: { id } });
  };

  const increase = (id) => {
    dispatch({ type: INCREASE, payload: { id } });
  };
  const decrease = (id) => {
    dispatch({ type: DECREASE, payload: { id } });
  };

  const { totalAmount, totalCost } = countTotal(state.cart);

  return (
    <globalContext.Provider
      value={{
        ...state,
        removeItems,
        removeItem,
        increase,
        decrease,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};

export default AppContext;
