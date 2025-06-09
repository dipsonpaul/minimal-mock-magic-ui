
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Table } from 'lucide-react';

const MaterialConsumptionReport = () => {
  const mockData = [
    { material: "Paint", quantity: 25, unit: "liters", project: "Bedroom Makeover", cost: 1250, supplier: "Paint Pro" },
    { material: "Fabric", quantity: 40, unit: "meters", project: "Living Room", cost: 1600, supplier: "Textile Co" },
    { material: "Wood Panels", quantity: 15, unit: "pieces", project: "Kitchen Renovation", cost: 2250, supplier: "Wood Works" },
    { material: "Tiles", quantity: 100, unit: "pieces", project: "Bathroom Design", cost: 3000, supplier: "Tile Master" },
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
          <h1 className="text-3xl font-bold text-gray-800">Material Consumption Report</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Table className="h-6 w-6 mr-2" />
              Material Usage Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th className="px-6 py-3">Material</th>
                    <th className="px-6 py-3">Quantity</th>
                    <th className="px-6 py-3">Unit</th>
                    <th className="px-6 py-3">Project</th>
                    <th className="px-6 py-3">Cost</th>
                    <th className="px-6 py-3">Supplier</th>
                  </tr>
                </thead>
                <tbody>
                  {mockData.map((row, index) => (
                    <tr key={index} className="bg-white border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">{row.material}</td>
                      <td className="px-6 py-4">{row.quantity}</td>
                      <td className="px-6 py-4">{row.unit}</td>
                      <td className="px-6 py-4">{row.project}</td>
                      <td className="px-6 py-4">${row.cost.toLocaleString()}</td>
                      <td className="px-6 py-4">{row.supplier}</td>
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

export default MaterialConsumptionReport;
