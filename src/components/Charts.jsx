import React from "react";

// Importing Chart & Individual Chart Components (ArcElement, BarElement, etc.)
/* We import these from chart.js because React uses react-chartjs-2 as a wrapper for Chart.js, and chart.js itself
   needs explicit component imports.
   Chart is the core class of Chart.js and it acts as the main engine that initializes and renders charts.
   Individual Chart Components: Building blocks that the Chart core needs to display different chart types and features.
*/
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";

import { Pie, Bar } from "react-chartjs-2";
import {formatDate} from "../../data/expenses-calculations.js"

// Register Chart.js Individual Chart Components
// Registering ensures only necessary parts of Chart.js are loaded, improving efficiency.
ChartJS.register(
  ArcElement,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale
);

const Charts = ({ expenses, selectedMonth }) => {
  
  // Extract unique categories from an array of expenses
  // Ref: https://www.codingz2m.com/post/get-unique-values-from-array-javascript-using-set
  const categories = [...new Set(expenses.map((expense) => expense.category))];

  // Calculate total amount per category
  // Ref: https://www.codingz2m.com/post/reduce-array-of-objects-javascript
  const categoryTotals = categories.map((cat) =>
    expenses
      .filter((expense) => expense.category === cat && formatDate(expense.selectedDate) === selectedMonth)
      .reduce((sum, expense) => sum + expense.amount, 0)
  );

  // Data for the Pie chart
  const pieData = {
    labels: categories,
    datasets: [
      {
        data: categoryTotals,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#260101", "#4557BF", "#734A40", "#8480F2"],
      },
    ],
  };

  // Data for the Bar chart
  const barData = {
    labels: categories,
    datasets: [
      {
        label: "Total Amount by Category",
        data: categoryTotals,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#260101", "#4557BF", "#734A40", "#8480F2"],
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-between gap-10 lg:gap-24 poppins-regular">
      <div className="w-full max-w-sm lg:max-w-xs h-80 p-0 lg:p-4">
        <h3 className="text-center text-sm lg:text-lg poppins-semibold mb-4">
          Expenses Distribution (Pie Chart)
        </h3>
        <Pie data={pieData} />
      </div>
      <div className="w-full h-auto p-0 lg:p-4">
        <h3 className="text-center text-sm lg:text-lg poppins-semibold mb-4">
          Expenses Distribution (Bar Chart)
        </h3>
        <Bar data={barData} />
      </div>
    </div>
  );
};

export default Charts;
