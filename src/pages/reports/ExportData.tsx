
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Table, Download } from 'lucide-react';

const ExportData = () => {
  const mockData = [
    { project: "Living Room Redesign", client: "John Doe", totalCost: 25000, exportDate: "2025-06-09" },
    { project: "Kitchen Renovation", client: "Jane Smith", totalCost: 35000, exportDate: "2025-06-08" },
    { project: "Office Space Design", client: "Mike Johnson", totalCost: 42000, exportDate: "2025-06-07" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Link to="/">
              <Button variant="outline" className="mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-gray-800">Export Data</h1>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Download className="h-4 w-4 mr-2" />
            Export All
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Table className="h-6 w-6 mr-2" />
              Exportable Project Data
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th className="px-6 py-3">Project</th>
                    <th className="px-6 py-3">Client</th>
                    <th className="px-6 py-3">Total Cost</th>
                    <th className="px-6 py-3">Export Date</th>
                    <th className="px-6 py-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {mockData.map((row, index) => (
                    <tr key={index} className="bg-white border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">{row.project}</td>
                      <td className="px-6 py-4">{row.client}</td>
                      <td className="px-6 py-4">${row.totalCost.toLocaleString()}</td>
                      <td className="px-6 py-4">{row.exportDate}</td>
                      <td className="px-6 py-4">
                        <Button size="sm" variant="outline">
                          <Download className="h-3 w-3 mr-1" />
                          Export
                        </Button>
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

export default ExportData;
