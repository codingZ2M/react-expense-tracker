import React from "react";
import ExpenseForm from "../components/ExpenseForm";
import { useExpenses } from "../../context/ExpensesContext";

const AddExpense = () => {
  const {addExpense} = useExpenses();

  return (
    <div>
      <ExpenseForm addExpense={addExpense} />
    </div>
  );
};

export default AddExpense;
