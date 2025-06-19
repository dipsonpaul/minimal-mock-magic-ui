
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const VendorsList = () => {
  const vendors = [
    {
      slNo: 1,
      vendorName: "Dynamic Architectural Hardware",
      company: "Capchure designs India Pvt Ltd",
      phone: "",
      emailId: "",
      paymentDateRange: "",
      expenseHead: "carpentory materials, Painting materials, Local Purchases, Fittings&Hardwares, Glass & Mirrors, Veneers, Consumables, Laminates, Plumbing materials",
      miscellaneous: "No",
      address: "33/2159-A1 Issac Towers, Oppo Spices Board N H Byepass, Vennala, PO Kochin"
    },
    {
      slNo: 2,
      vendorName: "FASHION PAINTS EDAPPALLY",
      company: "Capchure designs India Pvt Ltd",
      phone: "9249490411",
      emailId: "",
      paymentDateRange: "",
      expenseHead: "carpentory materials, Painting materials, Local Purchases, Fittings&Hardwares, Glass & Mirrors, Veneers, Consumables, Laminates, Plumbing materials",
      miscellaneous: "No",
      address: "POST OFFICE METRO PILLER NO 439,EDAPPALLY"
    },
    {
      slNo: 3,
      vendorName: "PROJECT SOLUTIONS",
      company: "Capchure designs India Pvt Ltd",
      phone: "",
      emailId: "projects@projectsolutionsind.com",
      paymentDateRange: "",
      expenseHead: "carpentory materials, Painting materials, Local Purchases, Fittings&Hardwares, Glass & Mirrors, Veneers, Consumables, Laminates, Plumbing materials",
      miscellaneous: "No",
      address: "HB ARCADE,73/386-B,SCHOOL PADY BUS STOP,ANGLO INDIAN SCHOOL VADUTHALA,ERANAKULAM,COCHIN,PIN 682023"
    }
  ];

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
                <Link to="/vendors-list" className="bg-blue-600 text-white px-2 py-0.5 rounded text-xs font-medium">VENDORS</Link>
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

      {/* Left Sidebar */}
      <div className="flex">
        <div className="w-12 bg-white border-r h-screen fixed left-0 top-12">
          <div className="p-2 space-y-2">
            <div className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded">
              <span className="text-xs">📊</span>
            </div>
            <div className="w-8 h-8 bg-red-500 text-white flex items-center justify-center rounded text-xs font-bold">
              39+
            </div>
            <div className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded">
              <span className="text-xs">📈</span>
            </div>
            <div className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded">
              <span className="text-xs">💰</span>
            </div>
            <div className="w-8 h-8 bg-red-500 text-white flex items-center justify-center rounded text-xs font-bold">
              39+
            </div>
            <div className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded">
              <span className="text-xs">📋</span>
            </div>
            <div className="w-8 h-8 bg-red-500 text-white flex items-center justify-center rounded text-xs font-bold">
              99+
            </div>
            <div className="w-8 h-8 bg-red-500 text-white flex items-center justify-center rounded text-xs font-bold">
              1
            </div>
          </div>
        </div>

        <div className="ml-12 flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-800">Vendors</h1>
              <div className="flex items-center space-x-2">
                <Button className="bg-blue-600 hover:bg-blue-700">Add Vendor</Button>
                <Button variant="ghost" size="sm">⚙️</Button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 border">Sl No.</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 border">Vendor Name</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 border">Company</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 border">Phone</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 border">Email ID</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 border">Payment Date Range</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 border">Expense Head</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 border">Miscellaneous</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 border">Address</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 border">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {vendors.map((vendor) => (
                    <tr key={vendor.slNo} className="hover:bg-gray-50">
                      <td className="px-4 py-2 text-xs border">{vendor.slNo}</td>
                      <td className="px-4 py-2 text-xs border">{vendor.vendorName}</td>
                      <td className="px-4 py-2 text-xs border">{vendor.company}</td>
                      <td className="px-4 py-2 text-xs border">{vendor.phone}</td>
                      <td className="px-4 py-2 text-xs border">{vendor.emailId}</td>
                      <td className="px-4 py-2 text-xs border">{vendor.paymentDateRange}</td>
                      <td className="px-4 py-2 text-xs border max-w-xs">
                        <div className="truncate">{vendor.expenseHead}</div>
                      </td>
                      <td className="px-4 py-2 text-xs border">{vendor.miscellaneous}</td>
                      <td className="px-4 py-2 text-xs border max-w-xs">
                        <div className="truncate">{vendor.address}</div>
                      </td>
                      <td className="px-4 py-2 text-xs border">
                        <div className="flex space-x-1">
                          <Button size="sm" variant="ghost" className="h-6 w-6 p-0 text-blue-600">✏️</Button>
                          <Button size="sm" variant="ghost" className="h-6 w-6 p-0 text-red-600">🗑️</Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t py-4 ml-12">
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

export default VendorsList;
