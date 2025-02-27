import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import { FiDivideCircle } from "react-icons/fi";
import { MdOutlineDateRange } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { categories, subCategories, paymentMethods } from "../../data/expenses-categories";

const ExpenseForm = ({ addExpense }) => {

  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState(""); 
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [transactionDetails, setTransactionDetails] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isRecurring, setIsRecurring] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({
      selectedDate,
      amount: parseFloat(amount),
      category,
      subCategory,
      transactionDetails,
      paymentMethod,
      isRecurring,
    });
    setAmount("");
    setCategory("");
    setSubCategory("");
    setTransactionDetails("");
    setPaymentMethod("");
    setIsRecurring(false);
    setSelectedDate(""),
    navigate("/");
  };

  return (
    <div className="w-[90%] lg:w-[80%] mx-auto bg-white mt-6 py-6 rounded-lg">
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto p-6 bg-[#F2F2F2] shadow-lg rounded-lg space-y-6"
      >
        <h1 className="poppins-medium text-xl lg:text-2xl text-[#4557BF] text-center mb-4">Add Expense</h1>
        
        {/* Select Date */}
        <div className="flex items-center space-x-2">
        <MdOutlineDateRange className="text-[#F20C1F] text-2xl" />
          <input type="date" 
                className="poppins-regular text-lg w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                value={selectedDate}
                onChange={(e) => {
                                  const value = e.target.value;  // value in format YYYY-MM-DD
                                  setSelectedDate(value);  // No need to split or format, just set it as is
                }}
          />
        </div>

        {/* Amount Field */}
        <div className="flex items-center space-x-2">
          <FaDollarSign className="text-[#F20C1F] text-lg" />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="poppins-regular text-lg w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#BFB304]"
          />
        </div>
        {/* Category Field */}
        <div className="poppins-regular text-lg flex items-center justify-center gap-2">
          <BiCategoryAlt className="text-[#F20C1F] text-2xl" />
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4557BF]"
          >
            <option value="" disabled>
              Select a category
            </option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Subcategory Field */}
        <div className="poppins-regular text-lg flex items-center justify-center gap-2">
          <FiDivideCircle className="text-[#F20C1F] text-2xl" />
          <select
            id="subCategory"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4557BF]"
          >
            <option value="" disabled>
              Select a subcategory
            </option>
            {subCategories.map((subcat, index) => (
              <option key={index} value={subcat}>
                {subcat}
              </option>
            ))}
          </select>
        </div>

        {/* Description Field */}
        <div className="poppins-regular text-lg">
          <textarea
            rows="4"
            placeholder="Enter transaction details (e.g., Grocery shopping at Walmart / Transaction ID)"
            value={transactionDetails}
            onChange={(e) => setTransactionDetails(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#BFB304]"
          ></textarea>
        </div>

        {/* Payment Method */}
        <fieldset className="mb-4 poppins-regular text-lg">
          <legend className="text-[#260101] mb-2 flex items-center justify-center gap-2">
            <MdPayment className="text-[#F20C1F] text-2xl" />
            Payment Method
          </legend>
          <div className="flex flex-wrap gap-4">
            {paymentMethods.map((method) => (
              <label key={method} className="flex items-center space-x-2">
                <input
                  type="radio"
                  value={method}
                  checked={paymentMethod === method}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="text-[#F20C1F] focus:ring-[#BFB304]"
                />
                <span className="text-[#260101]">{method}</span>
              </label>
            ))}
          </div>
        </fieldset>

        {/* Recurring Checkbox */}
        <div className="mb-6 flex items-center poppins-regular text-lg">
          <input
            type="checkbox"
            checked={isRecurring}
            onChange={(e) => setIsRecurring(e.target.checked)}
            className="w-4 h-4 text-[#BFB304] border-gray-300 rounded focus:ring-[#4557BF]"
          />
          <label htmlFor="recurring" className="ml-2 text-[#260101]">
            Recurring Expense
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-[#F20C1F] text-[#F2F2F2] poppins-regular text-lg rounded-md hover:bg-[#BFB304] transition duration-300"
        >
          Add Expense
        </button>
      
      </form>
    </div>
  );
};

export default ExpenseForm;
