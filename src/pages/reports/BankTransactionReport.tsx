
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Table } from 'lucide-react';

const BankTransactionReport = () => {
  const mockData = [
    { date: "2025-06-01", description: "Payment for Furniture", amount: -15000, balance: 35000 },
    { date: "2025-06-03", description: "Client Payment - Kitchen Project", amount: 20000, balance: 55000 },
    { date: "2025-06-05", description: "Vendor Payment - Textile Supplier", amount: -5000, balance: 50000 },
    { date: "2025-06-07", description: "Material Purchase", amount: -3500, balance: 46500 },
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
          <h1 className="text-3xl font-bold text-gray-800">Bank Transaction Report</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Table className="h-6 w-6 mr-2" />
              Bank Transactions
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
                    <th className="px-6 py-3">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {mockData.map((row, index) => (
                    <tr key={index} className="bg-white border-b hover:bg-gray-50">
                      <td className="px-6 py-4">{row.date}</td>
                      <td className="px-6 py-4">{row.description}</td>
                      <td className={`px-6 py-4 font-medium ${row.amount < 0 ? 'text-red-600' : 'text-green-600'}`}>
                        ${row.amount.toLocaleString()}
                      </td>
                      <td className="px-6 py-4">${row.balance.toLocaleString()}</td>
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

export default BankTransactionReport;
