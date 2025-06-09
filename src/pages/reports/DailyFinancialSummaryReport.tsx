
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Table } from 'lucide-react';

const DailyFinancialSummaryReport = () => {
  const mockData = [
    { date: "2025-06-09", openingBalance: 50000, closingBalance: 55000, netChange: 5000 },
    { date: "2025-06-08", openingBalance: 48000, closingBalance: 50000, netChange: 2000 },
    { date: "2025-06-07", openingBalance: 45000, closingBalance: 48000, netChange: 3000 },
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
          <h1 className="text-3xl font-bold text-gray-800">Daily Financial Summary Report</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Table className="h-6 w-6 mr-2" />
              Daily Financial Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th className="px-6 py-3">Date</th>
                    <th className="px-6 py-3">Opening Balance</th>
                    <th className="px-6 py-3">Closing Balance</th>
                    <th className="px-6 py-3">Net Change</th>
                  </tr>
                </thead>
                <tbody>
                  {mockData.map((row, index) => (
                    <tr key={index} className="bg-white border-b hover:bg-gray-50">
                      <td className="px-6 py-4">{row.date}</td>
                      <td className="px-6 py-4">${row.openingBalance.toLocaleString()}</td>
                      <td className="px-6 py-4">${row.closingBalance.toLocaleString()}</td>
                      <td className={`px-6 py-4 font-medium ${row.netChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        ${row.netChange.toLocaleString()}
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

export default DailyFinancialSummaryReport;
