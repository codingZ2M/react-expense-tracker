import React, { useState } from 'react';
import { FaRegChartBar, FaRegPlusSquare, FaRegMoneyBillAlt } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { PiNotepad } from "react-icons/pi";
import { GiExpense } from "react-icons/gi";
import { MdOutlineCastForEducation, MdOutlineSavings } from "react-icons/md";
import { IoFitnessOutline } from "react-icons/io5";
import { FcDebt } from "react-icons/fc";
import { PiEmpty } from "react-icons/pi";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import Charts from '../components/Charts';
import { Link } from 'react-router-dom';

import { selectedMonthTotalExpenses, calculateCategoryExpenses } from '../../data/expenses-calculations';

const Dashboard = ({ expenses }) => {
  const [selectedMonth, setSelectedMonth] = useState('11-2024');

  // Calling functions to calculate Total & Categorywise Monthly Expenses 
  const selectedMonthExpenses = selectedMonthTotalExpenses(expenses, selectedMonth);
  const essentialsExpenses = calculateCategoryExpenses(expenses, "Essentials", selectedMonth);
  const discretionaryExpenses = calculateCategoryExpenses(expenses, "Discretionary", selectedMonth);
  const educationExpenses = calculateCategoryExpenses(expenses, "Education", selectedMonth);
  const investmentsExpenses = calculateCategoryExpenses(expenses, "Savings & Investments", selectedMonth);
  const healthExpenses = calculateCategoryExpenses(expenses, "Health & Fitness", selectedMonth);
  const loanExpenses = calculateCategoryExpenses(expenses, "Debts & Loans", selectedMonth);
  const subscriptionsExpenses = calculateCategoryExpenses(expenses, "Subscriptions", selectedMonth);
  const miscellaneouExpenses = calculateCategoryExpenses(expenses, "Miscellaneous", selectedMonth);

  const targetAmount = 3000;
  const percentage = Math.min((selectedMonthExpenses / targetAmount) * 100, 100);

  return (
    <div className="w-[90%] xl:w-[80%] mx-auto bg-white flex flex-col lg:flex-row h-full pb-4 rounded-b-xl">
      {/* Sidebar */}
      <aside className="w-[100px] bg-[#fff] text-[#260102] flex flex-row lg:flex-col py-6 justify-around lg:justify-start">
        <div className="flex flex-row gap-2 pl-4 lg:gap-0 lg:flex-col lg:justify-center items-center space-y-0 lg:space-y-8 h-full w-full">
          <div className="flex flex-col items-center">
            <Link to="/">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#260101] hover:bg-[#F20C1F]">
                <RxDashboard size={24} color="#F2F2F2" />
              </div>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Link to="/expenses-summary">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#260101] hover:bg-[#F20C1F]">
                <FaRegMoneyBillAlt size={24} color="#F2F2F2" />
              </div>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Link to="/add-expense">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#260101] hover:bg-[#F20C1F]">
                <FaRegPlusSquare size={24} color="#F2F2F2" />
              </div>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#260101] hover:bg-[#F20C1F]">
              <FaRegChartBar size={24} color="#F2F2F2" />
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-2 bg-white rounded-lg mx-0 lg:mx-4">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="p-4 rounded-xl border border-[#BFBFBF]">
            <div className="p-4 bg-[#f2f2f2] rounded-md poppins-regular">
                <label htmlFor="month" className="block text-sm  text-[#260101] mb-2">
                    Select Month and Year
                </label>
                <input type="month"
                        className="w-full px-3 py-2 border-2 border-[#F20C1F] rounded-md shadow-sm text-sm
                                focus:outline-none focus:ring-2 focus:ring-[#4557BF] focus:border-[#4557BF] 
                               text-[#260101] bg-[#F2F2F2] placeholder-[#BFB304]"
                      value={selectedMonth.split("-").reverse().join("-")} // Format MM-YYYY back to YYYY-MM
                      onChange={(e) => {
                                         const value = e.target.value;
                                         const [year, month] = value.split("-");
                                         setSelectedMonth(`${month}-${year}`); // Format as MM-YYYY
                                }}
               />
            </div>

            <div className="flex flex-col items-center justify-start gap-2 poppins-regular text-2xl mt-4">
              {selectedMonthExpenses > 0 ? (
                <>
                  <div className="flex items-center justify-center gap-2 poppins-semibold">
                    <p className="text-[#260101] text-sm lg:text-2xl">Total Expenses for {selectedMonth}:</p>
                    <p className="text-[#4557BF] text-lg lg:text-2xl">${selectedMonthExpenses}</p>
                  </div>
                  <p className="poppins-medium text-sm lg:text-lg mt-6 text-[#260101]">Target: ${targetAmount}</p>
                  <div className="mt-2 w-full">
                    <div className="w-full bg-gray-300 h-12">
                      <div
                        style={{ width: `${percentage}%` }}
                        className="h-full bg-[#4557BF]"
                      ></div>
                    </div>
                    <div className="mt-2 poppins-regular text-sm text-[#F20C1F]">{percentage.toFixed(2)}% of target reached</div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2 lg:p-6 mt-8 poppins-medium">
                    <div className="flex items-center justify-between bg-white shadow-sm p-2 lg:p-6 rounded-2xl border border-[#f2f2f2]">
                      <div className="flex flex-col items-start justify-center gap-2">
                        <span className="text-sm lg:text-xl text-[#4557BF]">${essentialsExpenses}</span>
                        <span className="text-xs lg:text-sm  text-[#260101]">Essentials</span>
                      </div>
                      <PiNotepad size={32} color="#BFB304" />
                    </div>
                    <div className="flex items-center justify-between bg-white shadow-sm p-2 lg:p-6 rounded-2xl border border-[#f2f2f2]">
                      <div className="flex flex-col items-start justify-center gap-2">
                        <span className="text-sm lg:text-xl  text-[#4557BF]">${discretionaryExpenses}</span>
                        <span className="text-xs lg:text-sm text-[#260101]">Discretionary</span>
                      </div>
                      <GiExpense size={32} color="#BFB304" />
                    </div>
                    <div className="flex items-center justify-between bg-white shadow-sm p-2 lg:p-6 rounded-2xl border border-[#f2f2f2]">
                      <div className="flex flex-col items-start justify-center gap-2">
                        <span className="text-sm lg:text-xl text-[#4557BF]">${educationExpenses}</span>
                        <span className="text-xs lg:text-sm text-[#260101]">Education</span>
                      </div>
                      <MdOutlineCastForEducation size={28} color="#BFB304" />
                    </div>
                    <div className="flex items-center justify-between bg-white shadow-sm p-2 lg:p-6 rounded-2xl border border-[#f2f2f2]">
                      <div className="flex flex-col items-start justify-center gap-2">
                        <span className="text-sm lg:text-xl text-[#4557BF]">${investmentsExpenses}</span>
                        <span className="text-xs lg:text-sm text-[#260101]">Investment</span>
                      </div>
                      <MdOutlineSavings size={32} color="#BFB304" />
                    </div>
                    <div className="flex items-center justify-between bg-white shadow-sm p-2 lg:p-6 rounded-2xl border border-[#f2f2f2]">
                      <div className="flex flex-col items-start justify-center gap-2">
                        <span className="text-sm lg:text-xl text-[#4557BF]">${healthExpenses}</span>
                        <span className="text-xs lg:text-sm text-[#260101]">Health</span>
                      </div>
                      <IoFitnessOutline size={32} color="#BFB304" />
                    </div>
                    <div className="flex items-center justify-between bg-white shadow-sm p-2 lg:p-6 rounded-2xl border border-[#f2f2f2]">
                      <div className="flex flex-col items-start justify-center gap-2">
                        <span className="text-sm lg:text-xl text-[#4557BF]">${loanExpenses}</span>
                        <span className="text-xs lg:text-sm text-[#260101]">Loans</span>
                      </div>
                      <FcDebt size={32} color="#BFB304" />
                    </div>
                    <div className="flex items-center justify-between bg-white shadow-sm p-2 lg:p-6 rounded-2xl border border-[#f2f2f2]">
                      <div className="flex flex-col items-start justify-center gap-2">
                        <span className="text-sm lg:text-xl text-[#4557BF]">${subscriptionsExpenses}</span>
                        <span className="text-xs lg:text-sm text-[#260101]">Subscriptions</span>
                      </div>
                      <MdOutlineSubscriptions size={30} color="#BFB304" />
                    </div>
                    <div className="flex items-center justify-between bg-white shadow-sm p-2 lg:p-6 rounded-2xl border border-[#f2f2f2]">
                      <div className="flex flex-col items-start justify-center gap-2">
                        <span className="text-sm lg:text-xl text-[#4557BF]">${miscellaneouExpenses}</span>
                        <span className="text-xs lg:text-sm text-[#260101]">Miscellaneous</span>
                      </div>
                      <MdMiscellaneousServices size={38} color="#BFB304" />
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-center gap-2 poppins-regular text-xl mt-20 text-[#F20C1F]">
                  <PiEmpty size={32} color="#260101" />
                  <p>No expenses for {selectedMonth}</p>
                </div>
              )}
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg border border-[#BFBFBF]">
            <Charts selectedMonth={selectedMonth} expenses={expenses} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
