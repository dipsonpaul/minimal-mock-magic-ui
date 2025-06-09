
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Table } from 'lucide-react';

const NewProjects = () => {
  const mockData = [
    { project: "Office Redesign", client: "Tech Corp", startDate: "2025-06-10", estimatedCost: 30000, status: "Planning" },
    { project: "Hotel Lobby", client: "Luxury Hotels", startDate: "2025-06-15", estimatedCost: 75000, status: "Approved" },
    { project: "Restaurant Interior", client: "Fine Dining Ltd", startDate: "2025-06-20", estimatedCost: 45000, status: "Proposal" },
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
          <h1 className="text-3xl font-bold text-gray-800">New Projects</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Table className="h-6 w-6 mr-2" />
              Upcoming Project Pipeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th className="px-6 py-3">Project</th>
                    <th className="px-6 py-3">Client</th>
                    <th className="px-6 py-3">Start Date</th>
                    <th className="px-6 py-3">Estimated Cost</th>
                    <th className="px-6 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {mockData.map((row, index) => (
                    <tr key={index} className="bg-white border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">{row.project}</td>
                      <td className="px-6 py-4">{row.client}</td>
                      <td className="px-6 py-4">{row.startDate}</td>
                      <td className="px-6 py-4">${row.estimatedCost.toLocaleString()}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-xs ${
                          row.status === 'Approved' ? 'bg-green-100 text-green-800' :
                          row.status === 'Planning' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
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

export default NewProjects;
