import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowCounterclockwise } from "react-icons/bs";
import { CiWallet } from "react-icons/ci";

const ExpenseList = ({ expenses }) => {
  return (
    <div className="w-[100%] mx-auto px-10 rounded-lg mt-6 poppins-regular">
      {expenses.length === 0 ? (
        <p className="text-center text-gray-500">No expenses added yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-[#4557BF] text-white">
                <th className="border border-gray-300 px-4 py-2 poppins-regular">Date</th>
                <th className="border border-gray-300 px-4 py-2 poppins-regular">Category</th>
                <th className="border border-gray-300 px-4 py-2 poppins-regular ">Sub-Category</th>
                <th className="border border-gray-300 px-4 py-2 poppins-regular">Details</th>
                <th className="border border-gray-300 px-4 py-2 poppins-regular">Amount</th>
                <th className="border border-gray-300 px-4 py-2 poppins-regular">Payment Method</th>
                <th className="border border-gray-300 px-4 py-2 poppins-regular">Type</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense) => (
                <tr key={expense.id} className="odd:bg-white even:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">
                    {expense.selectedDate}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 capitalize">
                    {expense.category}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 capitalize">
                    {expense.subCategory}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {expense.transactionDetails}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    ${expense.amount.toFixed(2)}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 capitalize">
                    {expense.paymentMethod}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 italic">
                    {expense.isRecurring ? (
                      <div className="flex items-center space-x-2">
                        <BsArrowCounterclockwise size={16} className="text-[#F20C1F]" />
                        <span>Recurring</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <CiWallet size={16} className="text-[#F20C1F]" />
                        <span>One-Time</span>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

ExpenseList.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      subCategory: PropTypes.string.isRequired,
      transactionDetails: PropTypes.string.isRequired,
      paymentMethod: PropTypes.string.isRequired,
      isRecurring: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default ExpenseList;
