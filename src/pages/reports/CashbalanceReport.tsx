
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Table } from 'lucide-react';

const CashbalanceReport = () => {
  const mockData = [
    { date: "2025-06-09", cashInHand: 15000, bankBalance: 40000, total: 55000 },
    { date: "2025-06-08", cashInHand: 12000, bankBalance: 38000, total: 50000 },
    { date: "2025-06-07", cashInHand: 18000, bankBalance: 35000, total: 53000 },
    { date: "2025-06-06", cashInHand: 20000, bankBalance: 32000, total: 52000 },
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
          <h1 className="text-3xl font-bold text-gray-800">Cash Balance Report</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Table className="h-6 w-6 mr-2" />
              Daily Cash Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th className="px-6 py-3">Date</th>
                    <th className="px-6 py-3">Cash In Hand</th>
                    <th className="px-6 py-3">Bank Balance</th>
                    <th className="px-6 py-3">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {mockData.map((row, index) => (
                    <tr key={index} className="bg-white border-b hover:bg-gray-50">
                      <td className="px-6 py-4">{row.date}</td>
                      <td className="px-6 py-4">${row.cashInHand.toLocaleString()}</td>
                      <td className="px-6 py-4">${row.bankBalance.toLocaleString()}</td>
                      <td className="px-6 py-4 font-medium">${row.total.toLocaleString()}</td>
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

export default CashbalanceReport;
