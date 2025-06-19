
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SubcontractorsQuotations = () => {
  const quotations = [
    {
      slNo: 1,
      company: "Capchure designs India Pvt Ltd",
      subContractor: "POWER TECH",
      project: "JOB-2130 LAKSHYA KOTTYAM",
      date: "19-06-2025",
      amount: "8,49,657.82",
      taxAmount: "0.00",
      scQuotationNo: "SUB-WO-K-2007"
    },
    {
      slNo: 2,
      company: "Capchure designs India Pvt Ltd",
      subContractor: "ALANA CONSTRUCTION SOLUTIONS",
      project: "JOB-2078-SABINE HOSPITAL & RESEARCH CENTRE PRIVATE LIMITED @ TANUR",
      date: "19-06-2025",
      amount: "4,21,791.00",
      taxAmount: "0.00",
      scQuotationNo: "SUB-WO-K-2005"
    },
    {
      slNo: 3,
      company: "Capchure designs India Pvt Ltd",
      subContractor: "ALANA CONSTRUCTION SOLUTIONS",
      project: "JOB-2078-SABINE HOSPITAL & RESEARCH CENTRE PRIVATE LIMITED @ TANUR",
      date: "19-06-2025",
      amount: "3,41,866.64",
      taxAmount: "0.00",
      scQuotationNo: "SUB-WO-K-2003"
    },
    {
      slNo: 4,
      company: "Capchure designs India Pvt Ltd",
      subContractor: "DIPAK KUMAR MANDAL-4338 4334 4408",
      project: "JOB-2130 LAKSHYA KOTTYAM",
      date: "19-06-2025",
      amount: "24,000.00",
      taxAmount: "0.00",
      scQuotationNo: "SB-WO-1520"
    },
    {
      slNo: 5,
      company: "Capchure designs India Pvt Ltd",
      subContractor: "FARSANA SAMAD (9966 0379 6396)",
      project: "JOB-2127-SABINE HOSPITAL MUVATTUPUZHA",
      date: "19-06-2025",
      amount: "2,000.00",
      taxAmount: "0.00",
      scQuotationNo: "SUB-WO-1519"
    },
    {
      slNo: 6,
      company: "Capchure designs India Pvt Ltd",
      subContractor: "ALUTECH ALUMINIUM FABRICATION",
      project: "JOB-2129LAKSHYA TVM",
      date: "18-06-2025",
      amount: "3,70,155.00",
      taxAmount: "0.00",
      scQuotationNo: "SUB-WO-K-2004"
    },
    {
      slNo: 7,
      company: "Capchure designs India Pvt Ltd",
      subContractor: "AMBER SOLUTIONS",
      project: "JOB-2102-SABINE HOSPITAL TVM",
      date: "18-06-2025",
      amount: "5,31,000.00",
      taxAmount: "0.00",
      scQuotationNo: "SUB-WO-K-2006"
    },
    {
      slNo: 8,
      company: "Capchure designs India Pvt Ltd",
      subContractor: "Subair",
      project: "JOB-2121 XYLEM BALUSSERY",
      date: "18-06-2025",
      amount: "4,000.00",
      taxAmount: "0.00",
      scQuotationNo: "SUB-WO-1518"
    },
    {
      slNo: 9,
      company: "Capchure designs India Pvt Ltd",
      subContractor: "TRAVANCORE HYDRO TECH PVT LTD",
      project: "JOB-2140-SABINE HOSPITAL KOLLAM",
      date: "17-06-2025",
      amount: "3,36,943.00",
      taxAmount: "0.00",
      scQuotationNo: "SUB-WO-K-2002"
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
                <Link to="/vendors" className="text-gray-300 hover:text-white text-xs font-medium">VENDORS</Link>
                <Link to="/subcontractors-quotations" className="bg-blue-600 text-white px-2 py-0.5 rounded text-xs font-medium">SUB CONTRACTORS</Link>
                <Link to="/resource-management" className="text-gray-300 hover:text-white text-xs font-medium">RMS</Link>
                <Link to="#" className="text-gray-300 hover:text-white text-xs font-medium">SETTINGS</Link>
                <Link to="#" className="text-gray-300 hover:text-white text-xs font-medium">REPORTS</Link>
              </nav>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-orange-500 text-white px-2 py-1 rounded text-xs">CONSUMPTION REQUEST</div>
              <span className="text-white text-xs">Admin Admin</span>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800">SUBCONTRACTORS QUOTATIONS</h1>
            <Button className="bg-blue-600 hover:bg-blue-700">Add Quotation</Button>
          </div>

          {/* Filter Section */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6 bg-gray-100 p-4 rounded">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Company" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="company1">Capchure designs India Pvt Ltd</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Project" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="project1">Project 1</SelectItem>
                <SelectItem value="project2">Project 2</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Subcontractor" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sub1">POWER TECH</SelectItem>
                <SelectItem value="sub2">ALANA CONSTRUCTION SOLUTIONS</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Quotation no" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="quote1">SUB-WO-K-2007</SelectItem>
                <SelectItem value="quote2">SUB-WO-K-2005</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Approval Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end space-x-2 mb-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-xs">Go</Button>
            <Button variant="outline" className="text-xs">Clear</Button>
          </div>

          <div className="mb-4 text-right">
            <span className="text-sm font-medium">Total Quotation Amount: 33,21,41,066.77</span>
          </div>

          <div className="mb-4 text-right">
            <span className="text-sm">Displaying 1-10 of 1485 results.</span>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 border">Action</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 border">Sl No.</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 border">Company</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 border">Sub Contractor</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 border">Project</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 border">Date</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 border">Amount</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 border">Tax Amount</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 border">SC Quotation No</th>
                </tr>
              </thead>
              <tbody>
                {quotations.map((quotation, index) => (
                  <tr key={quotation.slNo} className={index % 2 === 0 ? "bg-red-50" : "bg-white"}>
                    <td className="px-4 py-2 text-xs border">
                      <div className="flex space-x-1">
                        <Button size="sm" variant="ghost" className="h-6 w-6 p-0">⋮</Button>
                      </div>
                    </td>
                    <td className="px-4 py-2 text-xs border">{quotation.slNo}</td>
                    <td className="px-4 py-2 text-xs border">{quotation.company}</td>
                    <td className="px-4 py-2 text-xs border">{quotation.subContractor}</td>
                    <td className="px-4 py-2 text-xs border">{quotation.project}</td>
                    <td className="px-4 py-2 text-xs border">{quotation.date}</td>
                    <td className="px-4 py-2 text-xs border">{quotation.amount}</td>
                    <td className="px-4 py-2 text-xs border">{quotation.taxAmount}</td>
                    <td className="px-4 py-2 text-xs border">{quotation.scQuotationNo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
            Admin Admin
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SubcontractorsQuotations;
