
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Table } from 'lucide-react';

const DayBookTransactions = () => {
  const mockData = [
    { date: "2025-06-09", description: "Client Payment", amount: 10000, type: "Credit" },
    { date: "2025-06-09", description: "Vendor Payment", amount: -5000, type: "Debit" },
    { date: "2025-06-09", description: "Material Purchase", amount: -1200, type: "Debit" },
    { date: "2025-06-09", description: "Service Revenue", amount: 8000, type: "Credit" },
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
          <h1 className="text-3xl font-bold text-gray-800">Day Book Transactions</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Table className="h-6 w-6 mr-2" />
              Daily Transaction Log
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th className="px-6 py-3">Date</th>
                    <th className="px-6 py-3">Description</th>
                    <th className="px-6 py-3">Amount</th>
                    <th className="px-6 py-3">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {mockData.map((row, index) => (
                    <tr key={index} className="bg-white border-b hover:bg-gray-50">
                      <td className="px-6 py-4">{row.date}</td>
                      <td className="px-6 py-4">{row.description}</td>
                      <td className={`px-6 py-4 font-medium ${row.amount >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        ${Math.abs(row.amount).toLocaleString()}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-xs ${
                          row.type === 'Credit' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {row.type}
                        </span>
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

export default DayBookTransactions;
