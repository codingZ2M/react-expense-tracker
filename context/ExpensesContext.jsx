import React, { createContext, useContext, useState, useEffect } from "react";

const ExpensesContext = createContext();

export const ExpensesProvider = ({ children }) => {
    
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]); // Auto-save expenses whenever they change

  // Ref: https://www.codingz2m.com/post/spread-operator-in-react
  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  return (
    <ExpensesContext.Provider value={{ expenses, addExpense }}>
      {children}
    </ExpensesContext.Provider>
  );
};

export const useExpenses = () => useContext(ExpensesContext);
