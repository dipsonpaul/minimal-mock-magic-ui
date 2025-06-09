
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Table } from 'lucide-react';

const FinancialReports = () => {
  const mockData = [
    { period: "Q2 2025", revenue: 175000, expenses: 65000, profit: 110000, margin: "62.9%" },
    { period: "Q1 2025", revenue: 150000, expenses: 55000, profit: 95000, margin: "63.3%" },
    { period: "Q4 2024", revenue: 165000, expenses: 70000, profit: 95000, margin: "57.6%" },
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
          <h1 className="text-3xl font-bold text-gray-800">Financial Reports</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Table className="h-6 w-6 mr-2" />
              Quarterly Financial Performance
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

export default FinancialReports;
