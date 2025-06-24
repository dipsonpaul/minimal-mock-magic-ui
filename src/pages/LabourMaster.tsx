import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Trash, Table as TableIcon } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import TopNavigation from "@/components/shared/TopNavigation";
import Footer from "@/components/shared/Footer";

const LabourMaster = () => {
  const [showForm, setShowForm] = useState(false);
  const [labours, setLabours] = useState([
    {
      id: uuidv4(),
      name: 'John Doe',
      company: 'Company 1',
      project: 'Living Room Redesign',
      skill: 'Painting',
      contactNumber: '9876543210',
      address: '123 Main St, City',
      wageRate: 25.00,
    },
    {
      id: uuidv4(),
      name: 'Jane Smith',
      company: 'Company 2',
      project: 'Master Bedroom',
      skill: 'Carpentry',
      contactNumber: '8765432109',
      address: '456 Oak Ave, Town',
      wageRate: 30.00,
    },
    {
      id: uuidv4(),
      name: 'Mike Johnson',
      company: 'Company 1',
      project: 'Kitchen Renovation',
      skill: 'Tiling',
      contactNumber: '7654321098',
      address: '789 Pine Rd, Village',
      wageRate: 28.00,
    },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    project: '',
    skill: '',
    contactNumber: '',
    address: '',
    wageRate: '',
  });

  const handleAddLabour = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setFormData({
      name: '',
      company: '',
      project: '',
      skill: '',
      contactNumber: '',
      address: '',
      wageRate: '',
    });
  };

  const handleDelete = (id) => {
    setLabours(labours.filter(labour => labour.id !== id));
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
    const newLabour = {
      id: uuidv4(),
      name: formData.name || 'Unknown',
      company: formData.company || 'Unknown',
      project: formData.project || 'Unknown',
      skill: formData.skill || 'Unknown',
      contactNumber: formData.contactNumber || 'N/A',
      address: formData.address || 'N/A',
      wageRate: parseFloat(formData.wageRate) || 0.00,
    };
    setLabours([newLabour, ...labours]);
    handleCancel();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavigation />

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Labour Master</h1>
            <Button
              className="bg-blue-600 hover:bg-blue-700"
              onClick={handleAddLabour}
              disabled={showForm}
            >
              Add Labour
            </Button>
          </div>

          {showForm && (
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" onClick={handleCancel}>
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <CardTitle>Add New Labour</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter Name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Select value={formData.company} onValueChange={handleSelectChange('company')}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Company" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Company 1">Company 1</SelectItem>
                          <SelectItem value="Company 2">Company 2</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="project">Project</Label>
                      <Select value={formData.project} onValueChange={handleSelectChange('project')}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Project" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Living Room Redesign">Living Room Redesign</SelectItem>
                          <SelectItem value="Master Bedroom">Master Bedroom</SelectItem>
                          <SelectItem value="Kitchen Renovation">Kitchen Renovation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="skill">Skill</Label>
                      <Select value={formData.skill} onValueChange={handleSelectChange('skill')}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Skill" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Painting">Painting</SelectItem>
                          <SelectItem value="Carpentry">Carpentry</SelectItem>
                          <SelectItem value="Tiling">Tiling</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <Label htmlFor="contactNumber">Contact Number</Label>
                      <Input
                        id="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleInputChange}
                        placeholder="Enter Contact Number"
                        type="tel"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="address">Address</Label>
                      <Textarea
                        id="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Enter Address"
                        className="h-20"
                      />
                    </div>
                    <div>
                      <Label htmlFor="wageRate">Wage Rate (per Hour)</Label>
                      <Input
                        id="wageRate"
                        type="number"
                        step="0.01"
                        value={formData.wageRate}
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
                Labour Records
              </CardTitle>
            </CardHeader>
            <CardContent>
              {labours.length === 0 ? (
                <p className="text-sm text-gray-600 text-center py-12">No labour records found.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm text-left text-gray-800">
                    <thead className="text-xs uppercase bg-gray-50 text-gray-700">
                      <tr>
                        <th className="px-3 py-3">ID</th>
                        <th className="px-3 py-3">Name</th>
                        <th className="px-3 py-3">Company</th>
                        <th className="px-3 py-3">Project</th>
                        <th className="px-3 py-3">Skill</th>
                        <th className="px-3 py-3">Contact Number</th>
                        <th className="px-3 py-3">Address</th>
                        <th className="px-3 py-3 text-right">Wage Rate</th>
                        <th className="px-3 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {labours.map((labour) => (
                        <tr key={labour.id} className="border-b bg-white hover:bg-gray-50">
                          <td className="px-4 py-3">{labour.id.slice(0, 8)}</td>
                          <td className="px-4 py-3">{labour.name}</td>
                          <td className="px-4 py-3">{labour.company}</td>
                          <td className="px-4 py-3">{labour.project}</td>
                          <td className="px-4 py-3">{labour.skill}</td>
                          <td className="px-4 py-3">{labour.contactNumber}</td>
                          <td className="px-4 py-3">{labour.address}</td>
                          <td className="px-4 py-3 text-right font-semibold">₹{labour.wageRate.toFixed(2)}</td>
                          <td className="px-4 py-3">
                            <Button variant="ghost" size="sm" onClick={() => handleDelete(labour.id)}>
                              <Trash className="h-4 w-4" />
                            </Button>
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

export default LabourMaster;