
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Table } from 'lucide-react';

const AgeingReport = () => {
  const mockData = [
    { client: "John Doe", project: "Living Room Redesign", daysOverdue: 45, amount: 2500, status: "Critical" },
    { client: "Jane Smith", project: "Bedroom Makeover", daysOverdue: 30, amount: 1800, status: "Warning" },
    { client: "Mike Johnson", project: "Kitchen Renovation", daysOverdue: 15, amount: 3200, status: "Moderate" },
    { client: "Sarah Wilson", project: "Office Space Design", daysOverdue: 60, amount: 4500, status: "Critical" },
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
          <h1 className="text-3xl font-bold text-gray-800">Ageing Report</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Table className="h-6 w-6 mr-2" />
              Outstanding Payments by Age
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th className="px-6 py-3">Client</th>
                    <th className="px-6 py-3">Project</th>
                    <th className="px-6 py-3">Days Overdue</th>
                    <th className="px-6 py-3">Amount</th>
                    <th className="px-6 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {mockData.map((row, index) => (
                    <tr key={index} className="bg-white border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">{row.client}</td>
                      <td className="px-6 py-4">{row.project}</td>
                      <td className="px-6 py-4">{row.daysOverdue}</td>
                      <td className="px-6 py-4">${row.amount}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-xs ${
                          row.status === 'Critical' ? 'bg-red-100 text-red-800' :
                          row.status === 'Warning' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {row.status}
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

export default AgeingReport;
