
// Convert timestamp (id) to 'MM-YYYY' format
export const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');  // pad month to 2 digits
  const year = date.getFullYear();
  return `${month}-${year}`;  // 'MM-YYYY' format for comparison
};

export const selectedMonthTotalExpenses = (expenses, selectedMonth) => {
  const filteredExpenses = expenses.filter(expense => formatDate(expense.selectedDate) === selectedMonth);
  const totalExpenses = filteredExpenses.reduce((total, expense) => total + expense.amount, 0);
  return totalExpenses;
};

export const selectedMonthFilteredExpenses = (expenses, selectedMonth) => {
  const filteredExpenses = expenses.filter(expense => formatDate(expense.selectedDate) === selectedMonth);
  return filteredExpenses;
};

export const calculateCategoryExpenses = (expenses, category, selectedMonth) => {
  return expenses
    .filter(expense => expense.category === category && formatDate(expense.selectedDate) === selectedMonth)
    .reduce((total, expense) => total + expense.amount, 0);
};