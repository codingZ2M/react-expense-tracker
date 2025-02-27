import React, { useState } from "react";
import ExpenseList from "../components/ExpenseList";
import { selectedMonthTotalExpenses, selectedMonthFilteredExpenses } from "../../data/expenses-calculations";
import { PiEmpty } from "react-icons/pi";

import { useExpenses } from "../../context/ExpensesContext";

const ExpensesSummary = () => {
  const {expenses} = useExpenses();
  const [selectedMonth, setSelectedMonth] = useState(); 

  // Calculate total expenses for selected month
  const selectedMonthExpenses = selectedMonthTotalExpenses(expenses, selectedMonth);
  const monthlyFilteredExpenses = selectedMonthFilteredExpenses(expenses, selectedMonth);

  return (
    <div className="w-[90%] lg:w-[80%] mx-auto bg-white mt-6 py-12 rounded-lg shadow-md">
      <div className="flex flex-col items-center gap-4 w-full md:w-2/3 lg:w-1/2 mx-auto px-4 md:px-10">
        <div className="p-4 bg-[#f2f2f2] rounded-md poppins-regular">
              <label htmlFor="month" className="block text-sm text-[#260101] mb-2">
                   Select Month and Year
              </label>
              <input type="month"
                     className="w-full px-3 py-2 border-2 border-[#F20C1F] rounded-md shadow-sm text-sm
                                focus:outline-none focus:ring-2 focus:ring-[#4557BF] focus:border-[#4557BF] 
                               text-[#260101] bg-[#F2F2F2] placeholder-[#BFB304]"
                      value={selectedMonth} 
                      onChange={(e) => {
                                         const value = e.target.value;
                                         const [year, month] = value.split("-");
                                         setSelectedMonth(`${year}-${month}`); // Format as YYYY-MM
                                }}
               />
        </div>

        <div className="flex items-center justify-center gap-2 poppins-semibold mt-8">
          <p className="text-[#260101] text-center text-sm lg:text-2xl">
            Total Expenses for {selectedMonth}:
          </p>
          <p className="text-[#4557BF] text-center text-lg lg:text-2xl">${selectedMonthExpenses}</p>
        </div>
      </div>

      <ul>
        {monthlyFilteredExpenses.length > 0 ? (
          <ExpenseList expenses={monthlyFilteredExpenses} />
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 poppins-regular text-base md:text-xl mt-16 md:mt-20 text-[#F20C1F]">
            <PiEmpty size={32} color="#260101" />
            <p className="text-center">
              No expenses for {selectedMonth}
            </p>
          </div>
        )}
      </ul>
    </div>
  );
};

export default ExpensesSummary;
