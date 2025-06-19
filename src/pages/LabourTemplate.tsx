
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LabourTemplate = () => {
  const templates = [
    {
      slNo: 1,
      templateName: "Civil",
      description: "",
      labourTypes: "Mason (1500),Electrician (1250),Helper (850)"
    },
    {
      slNo: 2,
      templateName: "Electrical",
      description: "",
      labourTypes: "Electrician (1250),Helper (850)"
    },
    {
      slNo: 3,
      templateName: "Civil+Electrical",
      description: "",
      labourTypes: "Mason (1500),Electrician (1250),Carpenter (1000),Helper (850)"
    },
    {
      slNo: 4,
      templateName: "FACTORY RELATED WORKS ETC..",
      description: "FACTORY RELATED WORKS ETC..",
      labourTypes: "Carpenter (1000),Helper (850)"
    },
    {
      slNo: 5,
      templateName: "OFFICE CLEANING",
      description: "OFFICE CLEANING",
      labourTypes: "Helper (850),local cleaning (900)"
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
                <Link to="/labour-template" className="bg-blue-600 text-white px-2 py-0.5 rounded text-xs font-medium">LABOUR</Link>
                <Link to="/vendors-list" className="text-gray-300 hover:text-white text-xs font-medium">VENDORS</Link>
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
            <h1 className="text-2xl font-bold text-gray-800">LABOUR TEMPLATE</h1>
            <Button className="bg-blue-600 hover:bg-blue-700">Add Labour Template</Button>
          </div>

          <div className="mb-4 flex justify-end">
            <div className="flex items-center space-x-2">
              <span className="text-sm">Search:</span>
              <Input placeholder="Search..." className="w-48" />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border">
              <thead className="bg-teal-100">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 border">Action</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 border">Sl No</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 border">Template Name</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 border">Description</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 border">Labour Types</th>
                </tr>
              </thead>
              <tbody>
                {templates.map((template, index) => (
                  <tr key={template.slNo} className={index % 2 === 0 ? "bg-teal-50" : "bg-white"}>
                    <td className="px-4 py-2 text-xs border">
                      <div className="flex space-x-1">
                        <Button size="sm" variant="ghost" className="h-6 w-6 p-0 text-blue-600">✏️</Button>
                        <Button size="sm" variant="ghost" className="h-6 w-6 p-0 text-red-600">🗑️</Button>
                      </div>
                    </td>
                    <td className="px-4 py-2 text-xs border">{template.slNo}</td>
                    <td className="px-4 py-2 text-xs border">{template.templateName}</td>
                    <td className="px-4 py-2 text-xs border">{template.description}</td>
                    <td className="px-4 py-2 text-xs border">{template.labourTypes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            Showing 1 to 5 of 5 entries
          </div>

          <div className="mt-4 flex justify-end space-x-2">
            <Button variant="outline" size="sm">Previous</Button>
            <Button variant="outline" size="sm" className="bg-blue-600 text-white">1</Button>
            <Button variant="outline" size="sm">Next</Button>
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

export default LabourTemplate;
