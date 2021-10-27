import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Balance from "./components/Balance";
import IncomeList from "./components/IncomeList";
import ExpenseList from "./components/ExpenseList";
import AddTransaction from "./components/AddTransaction";
import { GlobalContextProvider } from "./context/GlobalState";
import "./App.css";

const App = () => {
  return (
    <GlobalContextProvider>
      <Header />
      <div className="container">
        <div className="app-wrapper">
          <Balance />
          <AddTransaction />
          <div className="list-wrapper">
            <IncomeList />
            <ExpenseList />
          </div>
        </div>
      </div>
      <Footer />
    </GlobalContextProvider>
  );
};

export default App;
