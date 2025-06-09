
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Table } from 'lucide-react';

const PLReport = () => {
  const mockData = [
    { period: "June 2025", revenue: 85000, expenses: 32000, profit: 53000, margin: "62.4%" },
    { period: "May 2025", revenue: 78000, expenses: 29000, profit: 49000, margin: "62.8%" },
    { period: "April 2025", revenue: 92000, expenses: 35000, profit: 57000, margin: "62.0%" },
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
          <h1 className="text-3xl font-bold text-gray-800">P/L Report</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Table className="h-6 w-6 mr-2" />
              Profit & Loss Statement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th className="px-6 py-3">Period</th>
                    <th className="px-6 py-3">Revenue</th>
                    <th className="px-6 py-3">Expenses</th>
                    <th className="px-6 py-3">Profit</th>
                    <th className="px-6 py-3">Margin</th>
                  </tr>
                </thead>
                <tbody>
                  {mockData.map((row, index) => (
                    <tr key={index} className="bg-white border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">{row.period}</td>
                      <td className="px-6 py-4 text-green-600">${row.revenue.toLocaleString()}</td>
                      <td className="px-6 py-4 text-red-600">${row.expenses.toLocaleString()}</td>
                      <td className="px-6 py-4 font-medium text-blue-600">${row.profit.toLocaleString()}</td>
                      <td className="px-6 py-4">{row.margin}</td>
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

export default PLReport;
