import React from 'react';
import { Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import AddExpense from './pages/AddExpense';
import ExpensesSummary from './pages/ExpensesSummary';
import NavBar from './components/NavBar';
import { ExpensesProvider } from '../context/ExpensesContext';

const App = () => {
  
  return (
  
    <div className='mb-12'>
      <ExpensesProvider>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/add-expense" element={<AddExpense/>} />
        <Route path="/expenses-summary" element={<ExpensesSummary/>} />
      </Routes>
      </ExpensesProvider>
    </div>
  );
};

export default App;
