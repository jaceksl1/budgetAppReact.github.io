import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ExpenseTransaction = ({ expenseTransaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <>
      <li className="transaction">
        <span className="transaction-text">
          {expenseTransaction.expenseText}
        </span>
        <span className="transaction-amount">
          ${expenseTransaction.expenseAmount}
        </span>
      </li>
      <div className="btn-wrapper">
        <button
          onClick={() => deleteTransaction(expenseTransaction.id)}
          className="btn">
          Delete
        </button>
      </div>
    </>
  );
};

export default ExpenseTransaction;
