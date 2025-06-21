
import React from 'react';
import { Button } from "@/components/ui/button";
import TopNavigation from "@/components/shared/TopNavigation";
import Footer from "@/components/shared/Footer";

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
      <TopNavigation />

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

      <Footer />
    </div>
  );
};

export default VendorsList;
