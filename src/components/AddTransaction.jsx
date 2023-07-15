import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [textError, setTextError] = useState(false);
  const [amountError, setAmountError] = useState(false);

  const { addTransition } = useContext(GlobalContext);

  const handlerSubmite = (e) => {
    e.preventDefault();

    // validation
    if (text.trim() === "") {
      setTextError(true);
      return;
    }
    if (isNaN(amount) || +amount === 0) {
      setAmountError(true);
      return;
    }

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount,
    };

    addTransition(newTransaction);

    // reset fields
    setText("");
    setAmount("");
    setTextError(false);
    setAmountError(false);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handlerSubmite}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              setTextError(false);
            }}
            placeholder="Enter text..."
          />
          {textError && (
            <p className="error-message">Please enter a valid text.</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
              setAmountError(false);
            }}
            placeholder="Enter amount..."
          />
          {amountError && (
            <p className="error-message">Please enter a valid amount.</p>
          )}
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
