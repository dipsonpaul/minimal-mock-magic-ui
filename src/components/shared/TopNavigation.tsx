
import React from 'react';
import { Link } from 'react-router-dom';

const TopNavigation = () => {
  return (
    <header className="bg-slate-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center space-x-6">
            <div className="text-lg font-bold text-blue-400">CoMS</div>
            <nav className="hidden md:flex space-x-4">
              <Link to="/" className="text-gray-300 hover:text-white text-xs font-medium">HOME</Link>
              <Link to="/procurement" className="text-gray-300 hover:text-white text-xs font-medium">PURCHASE</Link>
              <Link to="/inventory" className="text-gray-300 hover:text-white text-xs font-medium">WAREHOUSE</Link>
              <Link to="/sales" className="text-gray-300 hover:text-white text-xs font-medium">SALES</Link>
              <Link to="/reports/daybook" className="text-gray-300 hover:text-white text-xs font-medium">DAY BOOK</Link>
              <Link to="/reports/daily-expense" className="text-gray-300 hover:text-white text-xs font-medium">DAILY EXPENSES</Link>
              <Link to="/buyer-transactions" className="text-gray-300 hover:text-white text-xs font-medium">BUYER</Link>
              <Link to="/hrms" className="text-gray-300 hover:text-white text-xs font-medium">LABOUR</Link>
              <Link to="/vendor-payments" className="text-gray-300 hover:text-white text-xs font-medium">VENDORS</Link>
              <Link to="/subcontractors-quotations" className="text-gray-300 hover:text-white text-xs font-medium">SUB CONTRACTORS</Link>
              <Link to="/resource-management" className="text-gray-300 hover:text-white text-xs font-medium">RMS</Link>
              <Link to="#" className="text-gray-300 hover:text-white text-xs font-medium">SETTINGS</Link>
              <Link to="#" className="text-gray-300 hover:text-white text-xs font-medium">REPORTS</Link>
            </nav>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-white text-xs">Admin Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavigation;
