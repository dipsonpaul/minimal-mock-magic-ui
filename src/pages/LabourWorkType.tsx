
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TopNavigation from "@/components/shared/TopNavigation";
import Footer from "@/components/shared/Footer";

const LabourWorkType = () => {
  const workTypes = [
    {
      slNo: 1,
      workType: "local cleaning",
      rate: "900",
      shortKeyword: ""
    },
    {
      slNo: 2,
      workType: "Helper",
      rate: "850",
      shortKeyword: ""
    },
    {
      slNo: 3,
      workType: "Carpenter",
      rate: "1000",
      shortKeyword: ""
    },
    {
      slNo: 4,
      workType: "Electrician",
      rate: "1250",
      shortKeyword: ""
    },
    {
      slNo: 5,
      workType: "Mason",
      rate: "1500",
      shortKeyword: ""
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavigation />

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Labour Work Type</h1>
            <Button className="bg-blue-600 hover:bg-blue-700">Add Labour WorkType</Button>
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
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 border">Work Type</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 border">Rate</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 border">Short Keyword</th>
                </tr>
              </thead>
              <tbody>
                {workTypes.map((workType, index) => (
                  <tr key={workType.slNo} className={index % 2 === 0 ? "bg-teal-50" : "bg-white"}>
                    <td className="px-4 py-2 text-xs border">
                      <div className="flex space-x-1">
                        <Button size="sm" variant="ghost" className="h-6 w-6 p-0 text-blue-600">✏️</Button>
                        <Button size="sm" variant="ghost" className="h-6 w-6 p-0 text-red-600">🗑️</Button>
                      </div>
                    </td>
                    <td className="px-4 py-2 text-xs border">{workType.slNo}</td>
                    <td className="px-4 py-2 text-xs border">{workType.workType}</td>
                    <td className="px-4 py-2 text-xs border">{workType.rate}</td>
                    <td className="px-4 py-2 text-xs border">{workType.shortKeyword}</td>
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

      <Footer />
    </div>
  );
};

export default LabourWorkType;
