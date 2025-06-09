
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Table } from 'lucide-react';

const ProjectReport = () => {
  const mockData = [
    { project: "Kitchen Renovation", status: "In Progress", completion: "75%", budgetUsed: 22500, totalBudget: 30000 },
    { project: "Living Room Design", status: "Completed", completion: "100%", budgetUsed: 25000, totalBudget: 25000 },
    { project: "Office Space", status: "Planning", completion: "25%", budgetUsed: 10000, totalBudget: 40000 },
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
          <h1 className="text-3xl font-bold text-gray-800">Project Report</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Table className="h-6 w-6 mr-2" />
              Project Status Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th className="px-6 py-3">Project</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Completion</th>
                    <th className="px-6 py-3">Budget Used</th>
                    <th className="px-6 py-3">Total Budget</th>
                    <th className="px-6 py-3">Budget Status</th>
                  </tr>
                </thead>
                <tbody>
                  {mockData.map((row, index) => (
                    <tr key={index} className="bg-white border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">{row.project}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-xs ${
                          row.status === 'Completed' ? 'bg-green-100 text-green-800' :
                          row.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">{row.completion}</td>
                      <td className="px-6 py-4">${row.budgetUsed.toLocaleString()}</td>
                      <td className="px-6 py-4">${row.totalBudget.toLocaleString()}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-xs ${
                          row.budgetUsed <= row.totalBudget ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {row.budgetUsed <= row.totalBudget ? 'On Budget' : 'Over Budget'}
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

export default ProjectReport;
