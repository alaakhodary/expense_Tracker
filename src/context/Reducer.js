// Constants
export const constants = {
  add: "ADD_TRANSACTION",
  delete: "DELETE_TRANSACTION",
};

// reducer function
export const reducer = (state, action) => {
  switch (action.type) {
    case constants.add:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case constants.delete:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
