
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Table } from 'lucide-react';

const LabourReport = () => {
  const mockData = [
    { designer: "Alice Brown", hoursWorked: 40, project: "Kitchen Renovation", cost: 2000, rate: 50 },
    { designer: "Bob Smith", hoursWorked: 35, project: "Living Room Design", cost: 1750, rate: 50 },
    { designer: "Carol Johnson", hoursWorked: 45, project: "Office Space", cost: 2700, rate: 60 },
    { designer: "David Wilson", hoursWorked: 30, project: "Bedroom Makeover", cost: 1500, rate: 50 },
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
          <h1 className="text-3xl font-bold text-gray-800">Labour Report</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Table className="h-6 w-6 mr-2" />
              Designer Labor Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th className="px-6 py-3">Designer</th>
                    <th className="px-6 py-3">Hours Worked</th>
                    <th className="px-6 py-3">Project</th>
                    <th className="px-6 py-3">Rate/Hour</th>
                    <th className="px-6 py-3">Total Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {mockData.map((row, index) => (
                    <tr key={index} className="bg-white border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">{row.designer}</td>
                      <td className="px-6 py-4">{row.hoursWorked}</td>
                      <td className="px-6 py-4">{row.project}</td>
                      <td className="px-6 py-4">${row.rate}/hr</td>
                      <td className="px-6 py-4 font-medium">${row.cost.toLocaleString()}</td>
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

export default LabourReport;
