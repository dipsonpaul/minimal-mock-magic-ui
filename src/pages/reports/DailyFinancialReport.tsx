
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Table } from 'lucide-react';

const DailyFinancialReport = () => {
  const mockData = [
    { date: "2025-06-09", revenue: 20000, expenses: 4200, profit: 15800 },
    { date: "2025-06-08", revenue: 18500, expenses: 3800, profit: 14700 },
    { date: "2025-06-07", revenue: 22000, expenses: 5100, profit: 16900 },
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
          <h1 className="text-3xl font-bold text-gray-800">Daily Financial Report</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Table className="h-6 w-6 mr-2" />
              Daily Financial Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th className="px-6 py-3">Date</th>
                    <th className="px-6 py-3">Revenue</th>
                    <th className="px-6 py-3">Expenses</th>
                    <th className="px-6 py-3">Profit</th>
                  </tr>
                </thead>
                <tbody>
                  {mockData.map((row, index) => (
                    <tr key={index} className="bg-white border-b hover:bg-gray-50">
                      <td className="px-6 py-4">{row.date}</td>
                      <td className="px-6 py-4 text-green-600">${row.revenue.toLocaleString()}</td>
                      <td className="px-6 py-4 text-red-600">${row.expenses.toLocaleString()}</td>
                      <td className="px-6 py-4 font-medium text-blue-600">${row.profit.toLocaleString()}</td>
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

export default DailyFinancialReport;
