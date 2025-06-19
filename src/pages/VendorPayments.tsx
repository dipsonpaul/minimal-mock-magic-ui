
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const VendorPayments = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
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
                <Link to="/vendor-payments" className="bg-blue-600 text-white px-2 py-0.5 rounded text-xs font-medium">VENDORS</Link>
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

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Vendor Payments</h1>
            <Button className="bg-blue-600 hover:bg-blue-700">Add Entries</Button>
          </div>

          <div className="mb-4 flex items-center space-x-4">
            <div>
              <span className="text-sm font-medium">Entry Date:</span>
              <span className="ml-2 text-sm">19-06-2025</span>
            </div>
            <div className="flex space-x-2">
              <Button variant="link" className="text-blue-600 text-sm">Previous</Button>
              <span className="text-sm">|</span>
              <Button variant="link" className="text-blue-600 text-sm">Current</Button>
              <span className="text-sm">|</span>
              <Button variant="link" className="text-blue-600 text-sm">Next</Button>
            </div>
            <div className="ml-auto">
              <span className="text-sm font-medium">Last Entry date : 30-09-2024</span>
            </div>
          </div>

          <div className="text-center text-gray-500 text-lg py-12">
            No results found.
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-8 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-sm text-gray-600">
            Version 25.06.3
          </div>
          <div className="text-sm text-gray-600 text-center">
            Powered by <span className="text-blue-600">bluehorizoninfotech.com</span><br />
            Copyright © 2025. All Rights Reserved.
          </div>
          <div className="text-sm text-gray-600">
            <select className="bg-transparent border-none">
              <option>Admin Admin</option>
            </select>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VendorPayments;
