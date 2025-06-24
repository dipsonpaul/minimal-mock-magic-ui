import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Table as TableIcon, ArrowLeft, Trash } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import TopNavigation from "@/components/shared/TopNavigation";
import Footer from "@/components/shared/Footer";

const Vouchers = () => {
  const [showForm, setShowForm] = useState(false);
  const [vouchers, setVouchers] = useState([
    {
      id: uuidv4(),
      voucherType: 'Vendor',
      voucherDate: '2025-06-19',
      company: 'Capchure Designs India Pvt Ltd',
      project: 'Living Room Redesign',
      voucherNumber: 'VCH001',
      amount: 5000.00,
      description: 'Payment for carpentry materials',
    },
    {
      id: uuidv4(),
      voucherType: 'Employee',
      voucherDate: '2025-06-18',
      company: 'Company 2',
      project: 'Master Bedroom',
      voucherNumber: 'VCH002',
      amount: 2000.00,
      description: 'Reimbursement for travel expenses',
    },
    {
      id: uuidv4(),
      voucherType: 'Contractor',
      voucherDate: '2025-06-15',
      company: 'Capchure Designs India Pvt Ltd',
      project: 'Kitchen Renovation',
      voucherNumber: 'VCH003',
      amount: 7500.00,
      description: 'Payment for tiling work',
    },
  ]);

  const [formData, setFormData] = useState({
    voucherType: '',
    voucherDate: '2025-06-19',
    company: '',
    project: '',
    voucherNumber: '',
    amount: '',
    description: '',
  });

  const [filterData, setFilterData] = useState({
    voucherType: '',
    voucherDate: '',
    company: '',
    project: '',
    voucherNumber: '',
  });

  const handleAddEntry = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setFormData({
      voucherType: '',
      voucherDate: '2025-06-19',
      company: '',
      project: '',
      voucherNumber: '',
      amount: '',
      description: '',
    });
  };

  const handleDelete = (id) => {
    setVouchers(vouchers.filter(voucher => voucher.id !== id));
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
    const newVoucher = {
      id: uuidv4(),
      voucherType: formData.voucherType || 'Unknown',
      voucherDate: formData.voucherDate || new Date().toISOString().split('T')[0],
      company: formData.company || 'Unknown',
      project: formData.project || 'Unknown',
      voucherNumber: formData.voucherNumber || 'N/A',
      amount: parseFloat(formData.amount) || 0.00,
      description: formData.description || '',
    };
    setVouchers([newVoucher, ...vouchers]);
    handleCancel();
  };

  const handleFilterGo = () => {
    // Filter logic is handled in filteredVouchers
  };

  const handleFilterClear = () => {
    setFilterData({
      voucherType: '',
      voucherDate: '',
      company: '',
      project: '',
      voucherNumber: '',
    });
  };

  const filteredVouchers = vouchers.filter((voucher) => {
    return (
      (!filterData.voucherType || voucher.voucherType.toLowerCase().includes(filterData.voucherType.toLowerCase())) &&
      (!filterData.voucherDate || voucher.voucherDate === filterData.voucherDate) &&
      (!filterData.company || voucher.company.toLowerCase().includes(filterData.company.toLowerCase())) &&
      (!filterData.project || voucher.project.toLowerCase().includes(filterData.project.toLowerCase())) &&
      (!filterData.voucherNumber || voucher.voucherNumber.toLowerCase().includes(filterData.voucherNumber.toLowerCase()))
    );
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavigation />

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Vouchers</h1>
            <Button
              className="bg-blue-600 hover:bg-blue-700"
              onClick={handleAddEntry}
              disabled={showForm}
            >
              Add Entry
            </Button>
          </div>

          {/* Filter Section */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-6">
            <Select
              value={filterData.voucherType}
              onValueChange={handleFilterSelectChange('voucherType')}
            >
              <SelectTrigger>
                <SelectValue placeholder="-Select Voucher for-" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Vendor">Vendor</SelectItem>
                <SelectItem value="Employee">Employee</SelectItem>
                <SelectItem value="Contractor">Contractor</SelectItem>
              </SelectContent>
            </Select>
            <Input
              id="voucherDate"
              placeholder="Voucher Date"
              type="date"
              value={filterData.voucherDate}
              onChange={handleFilterInputChange}
            />
            <Select
              value={filterData.company}
              onValueChange={handleFilterSelectChange('company')}
            >
              <SelectTrigger>
                <SelectValue placeholder="-Select Company-" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Capchure Designs India Pvt Ltd">Capchure Designs India Pvt Ltd</SelectItem>
                <SelectItem value="Company 2">Company 2</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={filterData.project}
              onValueChange={handleFilterSelectChange('project')}
            >
              <SelectTrigger>
                <SelectValue placeholder="-Select Project-" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Living Room Redesign">Living Room Redesign</SelectItem>
                <SelectItem value="Master Bedroom">Master Bedroom</SelectItem>
                <SelectItem value="Kitchen Renovation">Kitchen Renovation</SelectItem>
              </SelectContent>
            </Select>
            <Input
              id="voucherNumber"
              placeholder="Voucher Number"
              value={filterData.voucherNumber}
              onChange={handleFilterInputChange}
            />
            <div className="flex space-x-2">
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
          </div>

          {showForm && (
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" onClick={handleCancel}>
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <CardTitle>Add New Voucher</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <Label htmlFor="voucherType">Voucher Type</Label>
                      <Select
                        value={formData.voucherType}
                        onValueChange={handleSelectChange('voucherType')}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Voucher Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Vendor">Vendor</SelectItem>
                          <SelectItem value="Employee">Employee</SelectItem>
                          <SelectItem value="Contractor">Contractor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="voucherDate">Voucher Date</Label>
                      <Input
                        id="voucherDate"
                        type="date"
                        value={formData.voucherDate}
                        onChange={handleInputChange}
                        className="w-full"
                      />
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
                          <SelectItem value="Capchure Designs India Pvt Ltd">Capchure Designs India Pvt Ltd</SelectItem>
                          <SelectItem value="Company 2">Company 2</SelectItem>
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
                          <SelectItem value="Living Room Redesign">Living Room Redesign</SelectItem>
                          <SelectItem value="Master Bedroom">Master Bedroom</SelectItem>
                          <SelectItem value="Kitchen Renovation">Kitchen Renovation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <Label htmlFor="voucherNumber">Voucher Number</Label>
                      <Input
                        id="voucherNumber"
                        value={formData.voucherNumber}
                        onChange={handleInputChange}
                        placeholder="Enter Voucher Number"
                      />
                    </div>
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
                    <div className="md:col-span-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Enter Description"
                        className="h-20"
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
                Voucher Entries
              </CardTitle>
            </CardHeader>
            <CardContent>
              {filteredVouchers.length === 0 ? (
                <p className="text-sm text-gray-600 text-center py-12">No vouchers found.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm text-left text-gray-800">
                    <thead className="text-xs uppercase bg-gray-50 text-gray-700">
                      <tr>
                        <th className="px-3 py-3">ID</th>
                        <th className="px-3 py-3">Voucher Type</th>
                        <th className="px-3 py-3">Voucher Date</th>
                        <th className="px-3 py-3">Company</th>
                        <th className="px-3 py-3">Project</th>
                        <th className="px-3 py-3">Voucher Number</th>
                        <th className="px-3 py-3 text-right">Amount</th>
                        <th className="px-3 py-3">Description</th>
                        <th className="px-3 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredVouchers.map((voucher) => (
                        <tr key={voucher.id} className="border-b bg-white hover:bg-gray-50">
                          <td className="px-4 py-3">{voucher.id.slice(0, 8)}</td>
                          <td className="px-4 py-3">{voucher.voucherType}</td>
                          <td className="px-4 py-3">{voucher.voucherDate}</td>
                          <td className="px-4 py-3">{voucher.company}</td>
                          <td className="px-4 py-3">{voucher.project}</td>
                          <td className="px-4 py-3">{voucher.voucherNumber}</td>
                          <td className="px-4 py-3 text-right font-semibold">₹{voucher.amount.toFixed(2)}</td>
                          <td className="px-4 py-3">{voucher.description}</td>
                          <td className="px-4 py-3">
                            <Button variant="ghost" size="sm" onClick={() => handleDelete(voucher.id)}>
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

export default Vouchers;