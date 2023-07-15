import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      {transactions.length > 0 ? (
        <ul className="list">
          {transactions.map((transaction) => (
            <Transaction transaction={transaction} key={transaction.id} />
          ))}
        </ul>
      ) : (
        <h4 style={{ color: "red" }}>Empty transaction</h4>
      )}
    </>
  );
};

export default TransactionList;
