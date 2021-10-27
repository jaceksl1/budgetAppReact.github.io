import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { incomeTransactions, expenseTransactions } = useContext(GlobalContext);

  const incomeAmounts = incomeTransactions.map(
    (incomeTransaction) => incomeTransaction.incomeAmount
  );

  const expenseAmounts = expenseTransactions.map(
    (expenseTransaction) => expenseTransaction.expenseAmount
  );

  const totalIncome = incomeAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const totalExpenses = expenseAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const sumBalance = (totalIncome - totalExpenses).toFixed(2);

  const H3 = () => {
    if (sumBalance > 0) {
      return <h3>You can spend {sumBalance}</h3>;
    } else if (sumBalance < 0) {
      return <h3>Your expenses are higher than incomes: {sumBalance}</h3>;
    } else return <h3>Your balance is 0</h3>;
  };

  return (
    <div className="balance">
      <h2>Your Balance</h2>
      <H3 />
      <div className="income-expense">
        <div className="plus">
          <h3>Income</h3>
          <p>+{totalIncome}</p>
        </div>
        <div className="minus">
          <h3>Expenses</h3>
          <p>-{totalExpenses}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
