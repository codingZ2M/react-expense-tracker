import React from "react";
import ExpenseForm from "../components/ExpenseForm";

const AddExpense = ({ addExpense }) => {
  return (
    <div>
      <ExpenseForm addExpense={addExpense} />
    </div>
  );
};

export default AddExpense;
