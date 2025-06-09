
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Table } from 'lucide-react';

const ProjectPaymentReport = () => {
  const mockData = [
    { project: "Living Room Redesign", client: "John Doe", amountPaid: 20000, totalAmount: 25000, remaining: 5000 },
    { project: "Kitchen Renovation", client: "Jane Smith", amountPaid: 35000, totalAmount: 35000, remaining: 0 },
    { project: "Office Design", client: "Mike Johnson", amountPaid: 30000, totalAmount: 42000, remaining: 12000 },
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
          <h1 className="text-3xl font-bold text-gray-800">Project Payment Report</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Table className="h-6 w-6 mr-2" />
              Project Payment Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th className="px-6 py-3">Project</th>
                    <th className="px-6 py-3">Client</th>
                    <th className="px-6 py-3">Amount Paid</th>
                    <th className="px-6 py-3">Total Amount</th>
                    <th className="px-6 py-3">Remaining</th>
                    <th className="px-6 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {mockData.map((row, index) => (
                    <tr key={index} className="bg-white border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">{row.project}</td>
                      <td className="px-6 py-4">{row.client}</td>
                      <td className="px-6 py-4 text-green-600">${row.amountPaid.toLocaleString()}</td>
                      <td className="px-6 py-4">${row.totalAmount.toLocaleString()}</td>
                      <td className="px-6 py-4 text-red-600">${row.remaining.toLocaleString()}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-xs ${
                          row.remaining === 0 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {row.remaining === 0 ? 'Paid' : 'Pending'}
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

export default ProjectPaymentReport;
