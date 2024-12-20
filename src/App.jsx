import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import AddExpense from './pages/AddExpense';
import ExpensesSummary from './pages/ExpensesSummary';
import NavBar from './components/NavBar';

const App = () => {
  // Managing expenses state globally..
  // Load expenses from localStorage or initialize as an empty array
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = [...prevExpenses, expense];
      
      // Save updated expenses to localStorage
      localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
      return updatedExpenses;
    });
  };

  console.log("App Expenses:", expenses); // Log expenses here
  
  return (
    // Passing the expenses state to the Dashboard component as 'prop'
    <div className='mb-12'>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Dashboard expenses={expenses} />} />
        <Route path="/add-expense" element={<AddExpense addExpense={addExpense} />} />
        <Route path="/expenses-summary" element={<ExpensesSummary expenses={expenses} />} />
      </Routes>
    </div>
  );
};

export default App;
