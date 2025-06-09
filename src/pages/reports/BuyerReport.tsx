
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Table } from 'lucide-react';

const BuyerReport = () => {
  const mockData = [
    { buyer: "Luxury Homes Inc.", projects: 3, totalSpent: 45000, lastPurchase: "2025-06-05" },
    { buyer: "Modern Living Corp", projects: 5, totalSpent: 67500, lastPurchase: "2025-06-08" },
    { buyer: "Elite Interiors", projects: 2, totalSpent: 28000, lastPurchase: "2025-06-03" },
    { buyer: "Premium Designs Ltd", projects: 4, totalSpent: 52000, lastPurchase: "2025-06-07" },
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
          <h1 className="text-3xl font-bold text-gray-800">Buyer Report</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Table className="h-6 w-6 mr-2" />
              Buyer Performance Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th className="px-6 py-3">Buyer</th>
                    <th className="px-6 py-3">Projects</th>
                    <th className="px-6 py-3">Total Spent</th>
                    <th className="px-6 py-3">Last Purchase</th>
                    <th className="px-6 py-3">Average per Project</th>
                  </tr>
                </thead>
                <tbody>
                  {mockData.map((row, index) => (
                    <tr key={index} className="bg-white border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">{row.buyer}</td>
                      <td className="px-6 py-4">{row.projects}</td>
                      <td className="px-6 py-4">${row.totalSpent.toLocaleString()}</td>
                      <td className="px-6 py-4">{row.lastPurchase}</td>
                      <td className="px-6 py-4">${(row.totalSpent / row.projects).toLocaleString()}</td>
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

export default BuyerReport;
