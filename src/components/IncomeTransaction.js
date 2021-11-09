import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeTransaction = ({ incomeTransaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <>
      <li className="transaction">
        <span className="transaction-text">{incomeTransaction.incomeText}</span>
        <span className="transaction-amount">
          ${incomeTransaction.incomeAmount}
        </span>
      </li>
      <div className="btn-wrapper">
        <button
          onClick={() => deleteTransaction(incomeTransaction.id)}
          className="btn-del-income">
          Delete
        </button>
      </div>
    </>
  );
};

export default IncomeTransaction;
