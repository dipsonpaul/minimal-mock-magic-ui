import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Trash, Pencil, Table as TableIcon } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import TopNavigation from "@/components/shared/TopNavigation";
import Footer from "@/components/shared/Footer";

const ConsumptionReports = () => {
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [reports, setReports] = useState([
    {
      id: uuidv4(),
      project: 'Elite Residences Kochi',
      material: 'Teak Wood',
      quantity: 50,
      unit: 'Cubic Feet',
      date: '2025-06-19',
      supplier: 'WoodMart Suppliers',
      cost: 250000.00,
    },
    {
      id: uuidv4(),
      project: 'Ocean View Apartments Calicut',
      material: 'Ceramic Tiles',
      quantity: 2000,
      unit: 'Square Feet',
      date: '2025-06-18',
      supplier: 'TileWorld',
      cost: 120000.00,
    },
    {
      id: uuidv4(),
      project: 'Green Valley Villas Trivandrum',
      material: 'Emulsion Paint',
      quantity: 100,
      unit: 'Liters',
      date: '2025-06-17',
      supplier: 'ColorHaven Paints',
      cost: 30000.00,
    },
  ]);

  const [formData, setFormData] = useState({
    project: '',
    material: '',
    quantity: '',
    unit: '',
    date: '2025-06-19',
    supplier: '',
    cost: '',
  });

  const handleGenerateReport = () => {
    setShowForm(true);
    setEditId(null);
    setFormData({
      project: '',
      material: '',
      quantity: '',
      unit: '',
      date: '2025-06-19',
      supplier: '',
      cost: '',
    });
  };

  const handleEditReport = (report) => {
    setShowForm(true);
    setEditId(report.id);
    setFormData({
      project: report.project,
      material: report.material,
      quantity: report.quantity,
      unit: report.unit,
      date: report.date,
      supplier: report.supplier,
      cost: report.cost,
    });
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditId(null);
    setFormData({
      project: '',
      material: '',
      quantity: '',
      unit: '',
      date: '2025-06-19',
      supplier: '',
      cost: '',
    });
  };

  const handleDelete = (id) => {
    setReports(reports.filter(report => report.id !== id));
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (id) => (value) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReport = {
      id: editId || uuidv4(),
      project: formData.project || 'Unknown',
      material: formData.material || 'Unknown',
      quantity: parseFloat(formData.quantity) || 0,
      unit: formData.unit || 'Unknown',
      date: formData.date || new Date().toISOString().split('T')[0],
      supplier: formData.supplier || 'Unknown',
      cost: parseFloat(formData.cost) || 0.00,
    };
    if (editId) {
      setReports(reports.map(report => (report.id === editId ? newReport : report)));
    } else {
      setReports([newReport, ...reports]);
    }
    handleCancel();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavigation />

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Consumption Reports</h1>
            <Button
              className="bg-blue-600 hover:bg-blue-700"
              onClick={handleGenerateReport}
              disabled={showForm}
            >
              Generate Report
            </Button>
          </div>

          {showForm && (
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" onClick={handleCancel}>
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <CardTitle>{editId ? 'Edit Report' : 'Generate New Report'}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <Label htmlFor="project">Project</Label>
                      <Select
                        value={formData.project}
                        onValueChange={handleSelectChange('project')}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Project" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Elite Residences Kochi">Elite Residences Kochi</SelectItem>
                          <SelectItem value="Ocean View Apartments Calicut">Ocean View Apartments Calicut</SelectItem>
                          <SelectItem value="Green Valley Villas Trivandrum">Green Valley Villas Trivandrum</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="material">Material</Label>
                      <Select
                        value={formData.material}
                        onValueChange={handleSelectChange('material')}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Material" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Teak Wood">Teak Wood</SelectItem>
                          <SelectItem value="Ceramic Tiles">Ceramic Tiles</SelectItem>
                          <SelectItem value="Emulsion Paint">Emulsion Paint</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="quantity">Quantity</Label>
                      <Input
                        id="quantity"
                        type="number"
                        step="0.01"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        placeholder="Enter Quantity"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Label htmlFor="unit">Unit</Label>
                      <Select
                        value={formData.unit}
                        onValueChange={handleSelectChange('unit')}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Unit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Cubic Feet">Cubic Feet</SelectItem>
                          <SelectItem value="Square Feet">Square Feet</SelectItem>
                          <SelectItem value="Liters">Liters</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <Label htmlFor="date">Date</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Label htmlFor="supplier">Supplier</Label>
                      <Select
                        value={formData.supplier}
                        onValueChange={handleSelectChange('supplier')}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Supplier" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="WoodMart Suppliers">WoodMart Suppliers</SelectItem>
                          <SelectItem value="TileWorld">TileWorld</SelectItem>
                          <SelectItem value="ColorHaven Paints">ColorHaven Paints</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="cost">Cost</Label>
                      <Input
                        id="cost"
                        type="number"
                        step="0.01"
                        value={formData.cost}
                        onChange={handleInputChange}
                        placeholder="0.00"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button type="submit" className="bg-blue-600 hover:bg-blue-700">Save</Button>
                    <Button type="button" variant="outline" onClick={handleCancel}>Cancel</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TableIcon className="h-6 w-6 mr-2" />
                Consumption Reports
              </CardTitle>
            </CardHeader>
            <CardContent>
              {reports.length === 0 ? (
                <p className="text-sm text-gray-600 text-center py-12">No consumption reports found.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm text-left text-gray-800">
                    <thead className="text-xs uppercase bg-gray-50 text-gray-700">
                      <tr>
                        <th className="px-3 py-3">ID</th>
                        <th className="px-3 py-3">Project</th>
                        <th className="px-3 py-3">Material</th>
                        <th className="px-3 py-3">Quantity</th>
                        <th className="px-3 py-3">Unit</th>
                        <th className="px-3 py-3">Date</th>
                        <th className="px-3 py-3">Supplier</th>
                        <th className="px-3 py-3 text-right">Cost</th>
                        <th className="px-3 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {reports.map((report) => (
                        <tr key={report.id} className="border-b bg-white hover:bg-gray-50">
                          <td className="px-4 py-3">{report.id.slice(0, 8)}</td>
                          <td className="px-4 py-3">{report.project}</td>
                          <td className="px-4 py-3">{report.material}</td>
                          <td className="px-4 py-3">{report.quantity}</td>
                          <td className="px-4 py-3">{report.unit}</td>
                          <td className="px-4 py-3">{report.date}</td>
                          <td className="px-4 py-3">{report.supplier}</td>
                          <td className="px-4 py-3 text-right font-semibold">₹{report.cost.toFixed(2)}</td>
                          <td className="px-4 py-3">
                            <div className="flex space-x-1">
                              <Button
                                size="sm"
                                variant="ghost"
                                className="h-6 w-6 p-0"
                                onClick={() => handleEditReport(report)}
                              >
                                <Pencil className="h-4 w-4 text-blue-600" />
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                className="h-6 w-6 p-0"
                                onClick={() => handleDelete(report.id)}
                              >
                                <Trash className="h-4 w-4 text-red-600" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ConsumptionReports;