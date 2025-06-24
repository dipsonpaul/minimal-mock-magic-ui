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

const SubcontractorBills = () => {
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [bills, setBills] = useState([
    {
      id: uuidv4(),
      subContractor: 'Skyline Builders',
      company: 'Elegant Interiors Ltd',
      project: 'Elite Residences Kochi',
      billNumber: 'BILL-SUB101',
      billAmount: 800000.00,
      billDate: '2025-06-19',
      taxAmount: 144000.00,
    },
    {
      id: uuidv4(),
      subContractor: 'Crystal Constructions',
      company: 'Modern Designs Pvt Ltd',
      project: 'Ocean View Apartments Calicut',
      billNumber: 'BILL-SUB102',
      billAmount: 500000.00,
      billDate: '2025-06-18',
      taxAmount: 90000.00,
    },
    {
      id: uuidv4(),
      subContractor: 'Vishal Contractors',
      company: 'Elegant Interiors Ltd',
      project: 'Green Valley Villas Trivandrum',
      billNumber: 'BILL-SUB103',
      billAmount: 350000.00,
      billDate: '2025-06-17',
      taxAmount: 63000.00,
    },
  ]);

  const [formData, setFormData] = useState({
    subContractor: '',
    company: '',
    project: '',
    billNumber: '',
    billAmount: '',
    billDate: '2025-06-19',
    taxAmount: '',
  });

  const handleAddBill = () => {
    setShowForm(true);
    setEditId(null);
    setFormData({
      subContractor: '',
      company: '',
      project: '',
      billNumber: '',
      billAmount: '',
      billDate: '2025-06-19',
      taxAmount: '',
    });
  };

  const handleEditBill = (bill) => {
    setShowForm(true);
    setEditId(bill.id);
    setFormData({
      subContractor: bill.subContractor,
      company: bill.company,
      project: bill.project,
      billNumber: bill.billNumber,
      billAmount: bill.billAmount,
      billDate: bill.billDate,
      taxAmount: bill.taxAmount,
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
      billAmount: '',
      billDate: '2025-06-19',
      taxAmount: '',
    });
  };

  const handleDelete = (id) => {
    setBills(bills.filter(bill => bill.id !== id));
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
    const newBill = {
      id: editId || uuidv4(),
      subContractor: formData.subContractor || 'Unknown',
      company: formData.company || 'Unknown',
      project: formData.project || 'Unknown',
      billNumber: formData.billNumber || 'N/A',
      billAmount: parseFloat(formData.billAmount) || 0.00,
      billDate: formData.billDate || new Date().toISOString().split('T')[0],
      taxAmount: parseFloat(formData.taxAmount) || 0.00,
    };
    if (editId) {
      setBills(bills.map(bill => (bill.id === editId ? newBill : bill)));
    } else {
      setBills([newBill, ...bills]);
    }
    handleCancel();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavigation />

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Subcontractor Bills</h1>
            <Button
              className="bg-blue-600 hover:bg-blue-700"
              onClick={handleAddBill}
              disabled={showForm}
            >
              Add Bill
            </Button>
          </div>

          {showForm && (
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" onClick={handleCancel}>
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <CardTitle>{editId ? 'Edit Bill' : 'Add New Bill'}</CardTitle>
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
                      <Label htmlFor="billAmount">Bill Amount</Label>
                      <Input
                        id="billAmount"
                        type="number"
                        step="0.01"
                        value={formData.billAmount}
                        onChange={handleInputChange}
                        placeholder="0.00"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Label htmlFor="billDate">Bill Date</Label>
                      <Input
                        id="billDate"
                        type="date"
                        value={formData.billDate}
                        onChange={handleInputChange}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Label htmlFor="taxAmount">Tax Amount</Label>
                      <Input
                        id="taxAmount"
                        type="number"
                        step="0.01"
                        value={formData.taxAmount}
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
                Subcontractor Bills
              </CardTitle>
            </CardHeader>
            <CardContent>
              {bills.length === 0 ? (
                <p className="text-sm text-gray-600 text-center py-12">No subcontractor bills found.</p>
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
                        <th className="px-3 py-3 text-right">Bill Amount</th>
                        <th className="px-3 py-3">Bill Date</th>
                        <th className="px-3 py-3 text-right">Tax Amount</th>
                        <th className="px-3 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bills.map((bill) => (
                        <tr key={bill.id} className="border-b bg-white hover:bg-gray-50">
                          <td className="px-4 py-3">{bill.id.slice(0, 8)}</td>
                          <td className="px-4 py-3">{bill.subContractor}</td>
                          <td className="px-4 py-3">{bill.company}</td>
                          <td className="px-4 py-3">{bill.project}</td>
                          <td className="px-4 py-3">{bill.billNumber}</td>
                          <td className="px-4 py-3 text-right font-semibold">₹{bill.billAmount.toFixed(2)}</td>
                          <td className="px-4 py-3">{bill.billDate}</td>
                          <td className="px-4 py-3 text-right font-semibold">₹{bill.taxAmount.toFixed(2)}</td>
                          <td className="px-4 py-3">
                            <div className="flex space-x-1">
                              <Button
                                size="sm"
                                variant="ghost"
                                className="h-6 w-6 p-0"
                                onClick={() => handleEditBill(bill)}
                              >
                                <Pencil className="h-4 w-4 text-blue-600" />
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                className="h-6 w-6 p-0"
                                onClick={() => handleDelete(bill.id)}
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

export default SubcontractorBills;