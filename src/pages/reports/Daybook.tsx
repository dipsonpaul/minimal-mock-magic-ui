
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Table } from 'lucide-react';

const Daybook = () => {
  const mockData = [
    { date: "2025-06-09", totalCredit: 18000, totalDebit: 6200, net: 11800 },
    { date: "2025-06-08", totalCredit: 15000, totalDebit: 5500, net: 9500 },
    { date: "2025-06-07", totalCredit: 22000, totalDebit: 8000, net: 14000 },
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
          <h1 className="text-3xl font-bold text-gray-800">Daybook</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Table className="h-6 w-6 mr-2" />
              Daily Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th className="px-6 py-3">Date</th>
                    <th className="px-6 py-3">Total Credit</th>
                    <th className="px-6 py-3">Total Debit</th>
                    <th className="px-6 py-3">Net</th>
                  </tr>
                </thead>
                <tbody>
                  {mockData.map((row, index) => (
                    <tr key={index} className="bg-white border-b hover:bg-gray-50">
                      <td className="px-6 py-4">{row.date}</td>
                      <td className="px-6 py-4 text-green-600">${row.totalCredit.toLocaleString()}</td>
                      <td className="px-6 py-4 text-red-600">${row.totalDebit.toLocaleString()}</td>
                      <td className="px-6 py-4 font-medium text-blue-600">${row.net.toLocaleString()}</td>
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

export default Daybook;
