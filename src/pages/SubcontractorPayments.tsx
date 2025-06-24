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

const SubcontractorPayments = () => {
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [entries, setEntries] = useState([
    {
      id: uuidv4(),
      subContractor: 'Skyline Builders',
      company: 'Elegant Interiors Ltd',
      project: 'Elite Residences Kochi',
      billNumber: 'BILL-SUB001',
      paymentAmount: 750000.00,
      paymentDate: '2025-06-19',
      paymentMethod: 'Bank Transfer',
    },
    {
      id: uuidv4(),
      subContractor: 'Crystal Constructions',
      company: 'Modern Designs Pvt Ltd',
      project: 'Ocean View Apartments Calicut',
      billNumber: 'BILL-SUB002',
      paymentAmount: 450000.00,
      paymentDate: '2025-06-18',
      paymentMethod: 'Cash',
    },
    {
      id: uuidv4(),
      subContractor: 'Vishal Contractors',
      company: 'Elegant Interiors Ltd',
      project: 'Green Valley Villas Trivandrum',
      billNumber: 'BILL-SUB003',
      paymentAmount: 300000.00,
      paymentDate: '2025-06-17',
      paymentMethod: 'Credit Card',
    },
  ]);

  const [formData, setFormData] = useState({
    subContractor: '',
    company: '',
    project: '',
    billNumber: '',
    paymentAmount: '',
    paymentDate: '2025-06-19',
    paymentMethod: '',
  });

  const handleAddPayment = () => {
    setShowForm(true);
    setEditId(null);
    setFormData({
      subContractor: '',
      company: '',
      project: '',
      billNumber: '',
      paymentAmount: '',
      paymentDate: '2025-06-19',
      paymentMethod: '',
    });
  };

  const handleEditPayment = (entry) => {
    setShowForm(true);
    setEditId(entry.id);
    setFormData({
      subContractor: entry.subContractor,
      company: entry.company,
      project: entry.project,
      billNumber: entry.billNumber,
      paymentAmount: entry.paymentAmount,
      paymentDate: entry.paymentDate,
      paymentMethod: entry.paymentMethod,
    });
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditId(null);
    setFormData({
      subContractor: '',
      company: '',
      project: '',
      billNumber: '',
      paymentAmount: '',
      paymentDate: '2025-06-19',
      paymentMethod: '',
    });
  };

  const handleDelete = (id) => {
    setEntries(entries.filter(entry => entry.id !== id));
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
    const newEntry = {
      id: editId || uuidv4(),
      subContractor: formData.subContractor || 'Unknown',
      company: formData.company || 'Unknown',
      project: formData.project || 'Unknown',
      billNumber: formData.billNumber || 'N/A',
      paymentAmount: parseFloat(formData.paymentAmount) || 0.00,
      paymentDate: formData.paymentDate || new Date().toISOString().split('T')[0],
      paymentMethod: formData.paymentMethod || 'Unknown',
    };
    if (editId) {
      setEntries(entries.map(entry => (entry.id === editId ? newEntry : entry)));
    } else {
      setEntries([newEntry, ...entries]);
    }
    handleCancel();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavigation />

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Subcontractor Payments</h1>
            <Button
              className="bg-blue-600 hover:bg-blue-700"
              onClick={handleAddPayment}
              disabled={showForm}
            >
              Add Payment
            </Button>
          </div>

          {showForm && (
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" onClick={handleCancel}>
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <CardTitle>{editId ? 'Edit Payment' : 'Add New Payment'}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <Label htmlFor="subContractor">Subcontractor</Label>
                      <Select
                        value={formData.subContractor}
                        onValueChange={handleSelectChange('subContractor')}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Subcontractor" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Skyline Builders">Skyline Builders</SelectItem>
                          <SelectItem value="Crystal Constructions">Crystal Constructions</SelectItem>
                          <SelectItem value="Vishal Contractors">Vishal Contractors</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Select
                        value={formData.company}
                        onValueChange={handleSelectChange('company')}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Company" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Elegant Interiors Ltd">Elegant Interiors Ltd</SelectItem>
                          <SelectItem value="Modern Designs Pvt Ltd">Modern Designs Pvt Ltd</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
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
                      <Label htmlFor="billNumber">Bill Number</Label>
                      <Input
                        id="billNumber"
                        value={formData.billNumber}
                        onChange={handleInputChange}
                        placeholder="Enter Bill Number"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <Label htmlFor="paymentAmount">Payment Amount</Label>
                      <Input
                        id="paymentAmount"
                        type="number"
                        step="0.01"
                        value={formData.paymentAmount}
                        onChange={handleInputChange}
                        placeholder="0.00"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Label htmlFor="paymentDate">Payment Date</Label>
                      <Input
                        id="paymentDate"
                        type="date"
                        value={formData.paymentDate}
                        onChange={handleInputChange}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Label htmlFor="paymentMethod">Payment Method</Label>
                      <Select
                        value={formData.paymentMethod}
                        onValueChange={handleSelectChange('paymentMethod')}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Payment Method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Bank Transfer">Bank Transfer</SelectItem>
                          <SelectItem value="Cash">Cash</SelectItem>
                          <SelectItem value="Credit Card">Credit Card</SelectItem>
                        </SelectContent>
                      </Select>
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
                Subcontractor Payments
              </CardTitle>
            </CardHeader>
            <CardContent>
              {entries.length === 0 ? (
                <p className="text-sm text-gray-600 text-center py-12">No subcontractor payments found.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm text-left text-gray-800">
                    <thead className="text-xs uppercase bg-gray-50 text-gray-700">
                      <tr>
                        <th className="px-3 py-3">ID</th>
                        <th className="px-3 py-3">Subcontractor</th>
                        <th className="px-3 py-3">Company</th>
                        <th className="px-3 py-3">Project</th>
                        <th className="px-3 py-3">Bill Number</th>
                        <th className="px-3 py-3 text-right">Payment Amount</th>
                        <th className="px-3 py-3">Payment Date</th>
                        <th className="px-3 py-3">Payment Method</th>
                        <th className="px-3 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {entries.map((entry) => (
                        <tr key={entry.id} className="border-b bg-white hover:bg-gray-50">
                          <td className="px-4 py-3">{entry.id.slice(0, 8)}</td>
                          <td className="px-4 py-3">{entry.subContractor}</td>
                          <td className="px-4 py-3">{entry.company}</td>
                          <td className="px-4 py-3">{entry.project}</td>
                          <td className="px-4 py-3">{entry.billNumber}</td>
                          <td className="px-4 py-3 text-right font-semibold">₹{entry.paymentAmount.toFixed(2)}</td>
                          <td className="px-4 py-3">{entry.paymentDate}</td>
                          <td className="px-4 py-3">{entry.paymentMethod}</td>
                          <td className="px-4 py-3">
                            <div className="flex space-x-1">
                              <Button
                                size="sm"
                                variant="ghost"
                                className="h-6 w-6 p-0"
                                onClick={() => handleEditPayment(entry)}
                              >
                                <Pencil className="h-4 w-4 text-blue-600" />
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                className="h-6 w-6 p-0"
                                onClick={() => handleDelete(entry.id)}
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

export default SubcontractorPayments;