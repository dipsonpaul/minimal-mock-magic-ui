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

const SubcontractorsQuotations = () => {
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const [quotations, setQuotations] = useState([
    {
      id: uuidv4(),
      slNo: 1,
      company: 'Elegant Interiors Ltd',
      subContractor: 'Skyline Builders',
      project: 'Elite Residences Kochi',
      date: '2025-06-19',
      amount: 950000.50,
      taxAmount: 171000.09,
      scQuotationNo: 'SUB-QT-K-3001',
      approvalStatus: 'Approved',
    },
    {
      id: uuidv4(),
      slNo: 2,
      company: 'Modern Designs Pvt Ltd',
      subContractor: 'Crystal Constructions',
      project: 'Ocean View Apartments Calicut',
      date: '2025-06-19',
      amount: 520000.75,
      taxAmount: 93600.14,
      scQuotationNo: 'SUB-QT-K-3002',
      approvalStatus: 'Pending',
    },
    {
      id: uuidv4(),
      slNo: 3,
      company: 'Elegant Interiors Ltd',
      subContractor: 'Crystal Constructions',
      project: 'Green Valley Villas Trivandrum',
      date: '2025-06-18',
      amount: 400000.25,
      taxAmount: 72000.05,
      scQuotationNo: 'SUB-QT-K-3003',
      approvalStatus: 'Approved',
    },
    {
      id: uuidv4(),
      slNo: 4,
      company: 'Modern Designs Pvt Ltd',
      subContractor: 'Vishal Contractors',
      project: 'Elite Residences Kochi',
      date: '2025-06-18',
      amount: 30000.00,
      taxAmount: 5400.00,
      scQuotationNo: 'SUB-QT-K-3004',
      approvalStatus: 'Pending',
    },
    {
      id: uuidv4(),
      slNo: 5,
      company: 'Elegant Interiors Ltd',
      subContractor: 'Nexgen Solutions',
      project: 'Cityscape Mall Ernakulam',
      date: '2025-06-17',
      amount: 250000.00,
      taxAmount: 45000.00,
      scQuotationNo: 'SUB-QT-K-3005',
      approvalStatus: 'Approved',
    },
  ]);

  const [formData, setFormData] = useState({
    company: '',
    subContractor: '',
    project: '',
    date: '2025-06-19',
    amount: '',
    taxAmount: '',
    scQuotationNo: '',
    approvalStatus: '',
  });

  const [filterData, setFilterData] = useState({
    company: '',
    project: '',
    subContractor: '',
    scQuotationNo: '',
    approvalStatus: '',
  });

  const handleAddQuotation = () => {
    setShowForm(true);
    setEditId(null);
    setFormData({
      company: '',
      subContractor: '',
      project: '',
      date: '2025-06-19',
      amount: '',
      taxAmount: '',
      scQuotationNo: '',
      approvalStatus: '',
    });
  };

  const handleEditQuotation = (quotation) => {
    setShowForm(true);
    setEditId(quotation.id);
    setFormData({
      company: quotation.company,
      subContractor: quotation.subContractor,
      project: quotation.project,
      date: quotation.date,
      amount: quotation.amount,
      taxAmount: quotation.taxAmount,
      scQuotationNo: quotation.scQuotationNo,
      approvalStatus: quotation.approvalStatus,
    });
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditId(null);
    setFormData({
      company: '',
      subContractor: '',
      project: '',
      date: '2025-06-19',
      amount: '',
      taxAmount: '',
      scQuotationNo: '',
      approvalStatus: '',
    });
  };

  const handleDelete = (id) => {
    const updatedQuotations = quotations
      .filter(quotation => quotation.id !== id)
      .map((quotation, index) => ({ ...quotation, slNo: index + 1 }));
    setQuotations(updatedQuotations);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (id) => (value) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleFilterInputChange = (e) => {
    const { id, value } = e.target;
    setFilterData(prev => ({ ...prev, [id]: value }));
  };

  const handleFilterSelectChange = (id) => (value) => {
    setFilterData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newQuotation = {
      id: editId || uuidv4(),
      slNo: editId ? quotations.find(q => q.id === editId).slNo : quotations.length + 1,
      company: formData.company || 'Unknown',
      subContractor: formData.subContractor || 'Unknown',
      project: formData.project || 'Unknown',
      date: formData.date || new Date().toISOString().split('T')[0],
      amount: parseFloat(formData.amount) || 0.00,
      taxAmount: parseFloat(formData.taxAmount) || 0.00,
      scQuotationNo: formData.scQuotationNo || 'N/A',
      approvalStatus: formData.approvalStatus || 'Pending',
    };
    if (editId) {
      setQuotations(quotations.map(q => (q.id === editId ? newQuotation : q)));
    } else {
      setQuotations([...quotations, newQuotation]);
    }
    handleCancel();
  };

  const handleFilterGo = () => {
    // Filter logic is handled in filteredQuotations
  };

  const handleFilterClear = () => {
    setFilterData({
      company: '',
      project: '',
      subContractor: '',
      scQuotationNo: '',
      approvalStatus: '',
    });
  };

  const filteredQuotations = quotations.filter((quotation) => {
    return (
      (!filterData.company || quotation.company.toLowerCase().includes(filterData.company.toLowerCase())) &&
      (!filterData.project || quotation.project.toLowerCase().includes(filterData.project.toLowerCase())) &&
      (!filterData.subContractor || quotation.subContractor.toLowerCase().includes(filterData.subContractor.toLowerCase())) &&
      (!filterData.scQuotationNo || quotation.scQuotationNo.toLowerCase().includes(filterData.scQuotationNo.toLowerCase())) &&
      (!filterData.approvalStatus || quotation.approvalStatus.toLowerCase().includes(filterData.approvalStatus.toLowerCase()))
    );
  });

  const totalQuotationAmount = filteredQuotations.reduce((sum, quotation) => sum + quotation.amount, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavigation />

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Subcontractors Quotations</h1>
            <Button
              className="bg-blue-600 hover:bg-blue-700"
              onClick={handleAddQuotation}
              disabled={showForm}
            >
              Add Quotation
            </Button>
          </div>

          {/* Filter Section */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6 bg-gray-50 p-4 rounded">
            <Select
              value={filterData.company}
              onValueChange={handleFilterSelectChange('company')}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Company" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Elegant Interiors Ltd">Elegant Interiors Ltd</SelectItem>
                <SelectItem value="Modern Designs Pvt Ltd">Modern Designs Pvt Ltd</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={filterData.project}
              onValueChange={handleFilterSelectChange('project')}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Project" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Elite Residences Kochi">Elite Residences Kochi</SelectItem>
                <SelectItem value="Ocean View Apartments Calicut">Ocean View Apartments Calicut</SelectItem>
                <SelectItem value="Green Valley Villas Trivandrum">Green Valley Villas Trivandrum</SelectItem>
                <SelectItem value="Cityscape Mall Ernakulam">Cityscape Mall Ernakulam</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={filterData.subContractor}
              onValueChange={handleFilterSelectChange('subContractor')}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Subcontractor" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Skyline Builders">Skyline Builders</SelectItem>
                <SelectItem value="Crystal Constructions">Crystal Constructions</SelectItem>
                <SelectItem value="Vishal Contractors">Vishal Contractors</SelectItem>
                <SelectItem value="Nexgen Solutions">Nexgen Solutions</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={filterData.scQuotationNo}
              onValueChange={handleFilterSelectChange('scQuotationNo')}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Quotation No" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="SUB-QT-K-3001">SUB-QT-K-3001</SelectItem>
                <SelectItem value="SUB-QT-K-3002">SUB-QT-K-3002</SelectItem>
                <SelectItem value="SUB-QT-K-3003">SUB-QT-K-3003</SelectItem>
                <SelectItem value="SUB-QT-K-3004">SUB-QT-K-3004</SelectItem>
                <SelectItem value="SUB-QT-K-3005">SUB-QT-K-3005</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={filterData.approvalStatus}
              onValueChange={handleFilterSelectChange('approvalStatus')}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Approval Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Approved">Approved</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end space-x-2 mb-4">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-xs"
              onClick={handleFilterGo}
            >
              Go
            </Button>
            <Button
              variant="outline"
              className="text-xs"
              onClick={handleFilterClear}
            >
              Clear
            </Button>
          </div>

          <div className="mb-4 text-right">
            <span className="text-sm font-medium">Total Quotation Amount: ₹{totalQuotationAmount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
          </div>

          <div className="mb-4 text-right">
            <span className="text-sm">Displaying 1-{Math.min(quotations.length, 10)} of {quotations.length} results.</span>
          </div>

          {showForm && (
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" onClick={handleCancel}>
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <CardTitle>{editId ? 'Edit Quotation' : 'Add New Quotation'}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
                      <Label htmlFor="subContractor">Sub Contractor</Label>
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
                          <SelectItem value="Nexgen Solutions">Nexgen Solutions</SelectItem>
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
                          <SelectItem value="Cityscape Mall Ernakulam">Cityscape Mall Ernakulam</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
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
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <Label htmlFor="amount">Amount</Label>
                      <Input
                        id="amount"
                        type="number"
                        step="0.01"
                        value={formData.amount}
                        onChange={handleInputChange}
                        placeholder="0.00"
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
                    <div>
                      <Label htmlFor="scQuotationNo">SC Quotation No</Label>
                      <Input
                        id="scQuotationNo"
                        value={formData.scQuotationNo}
                        onChange={handleInputChange}
                        placeholder="Enter Quotation No"
                      />
                    </div>
                    <div>
                      <Label htmlFor="approvalStatus">Approval Status</Label>
                      <Select
                        value={formData.approvalStatus}
                        onValueChange={handleSelectChange('approvalStatus')}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Approved">Approved</SelectItem>
                          <SelectItem value="Pending">Pending</SelectItem>
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
                Subcontractors Quotations
              </CardTitle>
            </CardHeader>
            <CardContent>
              {filteredQuotations.length === 0 ? (
                <p className="text-sm text-gray-600 text-center py-12">No quotations found.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm text-left text-gray-800">
                    <thead className="text-xs uppercase bg-gray-50 text-gray-700">
                      <tr>
                        <th className="px-3 py-3">Action</th>
                        <th className="px-3 py-3">Sl No.</th>
                        <th className="px-3 py-3">Company</th>
                        <th className="px-3 py-3">Sub Contractor</th>
                        <th className="px-3 py-3">Project</th>
                        <th className="px-3 py-3">Date</th>
                        <th className="px-3 py-3 text-right">Amount</th>
                        <th className="px-3 py-3 text-right">Tax Amount</th>
                        <th className="px-3 py-3">SC Quotation No</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredQuotations.map((quotation) => (
                        <tr key={quotation.id} className="border-b bg-white hover:bg-gray-50">
                          <td className="px-4 py-3">
                            <div className="flex space-x-1">
                              <Button
                                size="sm"
                                variant="ghost"
                                className="h-6 w-6 p-0"
                                onClick={() => handleEditQuotation(quotation)}
                              >
                                <Pencil className="h-4 w-4 text-blue-600" />
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                className="h-6 w-6 p-0"
                                onClick={() => handleDelete(quotation.id)}
                              >
                                <Trash className="h-4 w-4 text-red-600" />
                              </Button>
                            </div>
                          </td>
                          <td className="px-4 py-3">{quotation.slNo}</td>
                          <td className="px-4 py-3">{quotation.company}</td>
                          <td className="px-4 py-3">{quotation.subContractor}</td>
                          <td className="px-4 py-3">{quotation.project}</td>
                          <td className="px-4 py-3">{quotation.date}</td>
                          <td className="px-4 py-3 text-right">₹{quotation.amount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                          <td className="px-4 py-3 text-right">₹{quotation.taxAmount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                          <td className="px-4 py-3">{quotation.scQuotationNo}</td>
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

export default SubcontractorsQuotations;