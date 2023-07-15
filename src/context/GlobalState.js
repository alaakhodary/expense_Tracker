import { createContext, useReducer } from "react";
import { constants, reducer } from "./Reducer";

// initial state
const initialState = {
  transactions: [],
};

// create context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTransition = (transaction) => {
    dispatch({
      type: constants.add,
      payload: transaction,
    });
  };

  const deleteTransition = (id) => {
    dispatch({
      type: constants.delete,
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransition,
        deleteTransition,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
