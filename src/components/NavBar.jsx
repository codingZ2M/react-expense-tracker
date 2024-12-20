import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaRegChartBar, FaRegPlusSquare, FaRegMoneyBillAlt } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { TbCashRegister } from "react-icons/tb";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="w-[90%] lg:w-[80%] mx-auto bg-white mt-6  rounded-t-xl">
      {/* Menu Bar */}
      <nav className="flex justify-between items-center py-4 px-4 lg:px-12">
        <Link to="/">
          <div className='flex items-center justify-center gap-2'> 
            <TbCashRegister className="text-[#260101] text-2xl" />
            <h1 className="poppins-medium text-xl md:text-2xl font-bold text-[#4557BF]">ExpenseTrackerPro</h1>
          </div>
        </Link>
        {/* Hamburger Icon */}
        <div className="md:hidden text-xl cursor-pointer z-50" onClick={toggleMenu}>
          {menuOpen ? <FaTimes className="text-[#071226]" /> : <FaBars className="text-[#071226]" />}
        </div>
        {/* Desktop Menu */}
        <ul className="md:flex gap-6 text-sm font-medium text-[#071226] hidden poppins-regular">
          <Link to="/">
            <div className="flex items-center justify-center gap-2">
              <RxDashboard className="text-[#260101] text-lg" />
              <li className="cursor-pointer hover:text-[#F20C1F]">Dashboard</li>
            </div>
          </Link>
          <Link to="/expenses-summary">
            <div className="flex items-center justify-center gap-2">
              <FaRegMoneyBillAlt className="text-[#260101] text-lg" />
              <li className="cursor-pointer hover:text-[#F20C1F]">Expenses</li>
            </div>
          </Link>
          <Link to="/add-expense">
            <div className="flex items-center justify-center gap-2">
              <FaRegPlusSquare className="text-[#260101] text-lg" />
              <li className="cursor-pointer hover:text-[#F20C1F]">Add Expenses</li>
            </div>
          </Link>
          <div className="flex items-center justify-center gap-2">
            <FaRegChartBar className="text-[#260101] text-lg" />
            <li className="cursor-pointer hover:text-[#F20C1F]">Reports</li>
          </div>
        </ul>
        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="absolute top-16 w-[85%] bg-white shadow-md text-center flex flex-col gap-4 py-6 text-sm font-medium text-[#071226] md:hidden">
            <Link to="/">
              <div className="flex items-center justify-center gap-2">
                <RxDashboard className="text-[#260101] text-lg" />
                <li className="cursor-pointer hover:text-[#F20C1F]" onClick={closeMenu}>
                  Dashboard
                </li>
              </div>
            </Link>
            <Link to="/expenses-summary">
              <div className="flex items-center justify-center gap-2">
                <FaRegMoneyBillAlt className="text-[#260101] text-lg" />
                <li className="cursor-pointer hover:text-[#F20C1F]" onClick={closeMenu}>
                  Expenses
                </li>
              </div>
            </Link>
            <Link to="/add-expense">
              <div className="flex items-center justify-center gap-2">
                <FaRegPlusSquare className="text-[#260101] text-lg" />
                <li className="cursor-pointer hover:text-[#F20C1F]" onClick={closeMenu}>
                  Add Expenses
                </li>
              </div>
            </Link>
            <div className="flex items-center justify-center gap-2">
              <FaRegChartBar className="text-[#260101] text-lg" />
              <li className="cursor-pointer hover:text-[#F20C1F]" onClick={closeMenu}>
                Reports
              </li>
            </div>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
