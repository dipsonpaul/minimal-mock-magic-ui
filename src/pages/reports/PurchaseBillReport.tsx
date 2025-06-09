
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Table } from 'lucide-react';

const PurchaseBillReport = () => {
  const mockData = [
    { billNo: "PB001", vendor: "Furniture Co.", amount: 12000, date: "2025-06-05", status: "Paid" },
    { billNo: "PB002", vendor: "Textile Supplier", amount: 5000, date: "2025-06-06", status: "Pending" },
    { billNo: "PB003", vendor: "Paint & Materials", amount: 3500, date: "2025-06-07", status: "Paid" },
    { billNo: "PB004", vendor: "Lighting Solutions", amount: 8200, date: "2025-06-08", status: "Pending" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-6">
          <Link to="/">
            <Button variant="outline" className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-800">Purchase Bill Report</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Table className="h-6 w-6 mr-2" />
              Purchase Order Bills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th className="px-6 py-3">Bill No</th>
                    <th className="px-6 py-3">Vendor</th>
                    <th className="px-6 py-3">Amount</th>
                    <th className="px-6 py-3">Date</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {mockData.map((row, index) => (
                    <tr key={index} className="bg-white border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">{row.billNo}</td>
                      <td className="px-6 py-4">{row.vendor}</td>
                      <td className="px-6 py-4">${row.amount.toLocaleString()}</td>
                      <td className="px-6 py-4">{row.date}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-xs ${
                          row.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PurchaseBillReport;
