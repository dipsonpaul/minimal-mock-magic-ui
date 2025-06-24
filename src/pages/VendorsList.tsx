import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Trash, Pencil, Table as TableIcon } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import TopNavigation from "@/components/shared/TopNavigation";

const VendorsList = () => {
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const [vendors, setVendors] = useState([
    {
      id: uuidv4(),
      slNo: 1,
      vendorName: 'Dynamic Architectural Hardware',
      company: 'Capchure Designs India Pvt Ltd',
      phone: '',
      emailId: '',
      paymentDateRange: '',
      expenseHead: 'Carpentry Materials, Painting Materials, Local Purchases, Fittings & Hardwares, Glass & Mirrors, Veneers, Consumables, Laminates, Plumbing Materials',
      miscellaneous: 'No',
      address: '33/34, Issac Ave, City',
    },
    {
      id: uuidv4(),
      slNo: 2,
      vendorName: 'Fashion Paints Edappally',
      company: '',
      phone: '',
      emailId: '',
      paymentDateRange: '',
      expenseHead: '',
      miscellaneous: '',
      address: '',
    },
    {
      id: uuidv4(),
      slNo: 3,
      vendorName: 'Project Solutions',
      company: '',
      phone: '',
      emailId: '',
      paymentDateRange: '',
      expenseHead: '',
      miscellaneous: '',
      address: '',
    },
  ]);

  const [formData, setFormData] = useState({
    vendorName: '',
    company: '',
    phone: '',
    emailId: '',
    paymentDateRange: '',
    expenseHead: '',
    miscellaneous: '',
    address: '',
  });

  const handleAddVendor = () => {
    setShowForm(true);
    setEditId(null);
    setFormData({
      vendorName: '',
      company: '',
      phone: '',
      emailId: '',
      paymentDateRange: '',
      expenseHead: '',
      miscellaneous: '',
      address: '',
    });
  };

  const handleEditVendor = (vendor) => {
    setShowForm(true);
    setEditId(vendor.id);
    setFormData({
      vendorName: vendor.vendorName,
      company: vendor.company,
      phone: vendor.phone,
      emailId: vendor.emailId,
      paymentDateRange: vendor.paymentDateRange,
      expenseHead: vendor.expenseHead,
      miscellaneous: vendor.miscellaneous,
      address: vendor.address,
    });
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditId(null);
    setFormData({
      vendorName: '',
      company: '',
      phone: '',
      emailId: '',
      paymentDateRange: '',
      expenseHead: '',
      miscellaneous: '',
      address: '',
    });
  };

  const handleDelete = (id) => {
    const updatedVendors = vendors
      .filter(vendor => vendor.id !== id)
      .map((vendor, index) => ({ ...vendor, slNo: index + 1 }));
    setVendors(updatedVendors);
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
    if (editId) {
      // Edit existing vendor
      const updatedVendors = vendors.map(vendor =>
        vendor.id === editId
          ? {
            ...vendor,
            vendorName: formData.vendorName || 'Unknown',
            company: formData.company || 'N/A',
            phone: formData.phone || '',
            emailId: formData.emailId || '',
            paymentDateRange: formData.paymentDateRange || '',
            expenseHead: formData.expenseHead || 'N/A',
            miscellaneous: formData.miscellaneous || 'No',
            address: formData.address || 'N/A',
          }
          : vendor
      );
      setVendors(updatedVendors);
    } else {
      // Add new vendor
      const newVendor = {
        id: uuidv4(),
        slNo: vendors.length + 1,
        vendorName: formData.vendorName || 'Unknown',
        company: formData.company || 'N/A',
        phone: formData.phone || '',
        emailId: formData.emailId || '',
        paymentDateRange: formData.paymentDateRange || '',
        expenseHead: formData.expenseHead || 'N/A',
        miscellaneous: formData.miscellaneous || 'No',
        address: formData.address || 'N/A',
      };
      setVendors([...vendors, newVendor]);
    }
    handleCancel();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavigation />

      {/* Left Sidebar */}
      <div className="flex">
        <div className="ml-12 flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold text-gray-800">Vendors</h1>
              <div className="flex items-center space-x-2">
                <Button
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={handleAddVendor}
                  disabled={showForm}
                >
                  Add Vendor
                </Button>
                <Button variant="ghost" size="sm">⚙️</Button>
              </div>
            </div>

            {showForm && (
              <Card className="mb-6">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" onClick={handleCancel}>
                      <ArrowLeft className="h-4 w-4" />
                    </Button>
                    <CardTitle>{editId ? 'Edit Vendor' : 'Add New Vendor'}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <Label htmlFor="vendorName">Vendor Name</Label>
                        <Input
                          id="vendorName"
                          value={formData.vendorName}
                          onChange={handleInputChange}
                          placeholder="Enter Vendor Name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Enter Company Name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter Phone Number"
                        />
                      </div>
                      <div>
                        <Label htmlFor="emailId">Email ID</Label>
                        <Input
                          id="emailId"
                          type="email"
                          value={formData.emailId}
                          onChange={handleInputChange}
                          placeholder="Enter Email ID"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <Label htmlFor="paymentDateRange">Payment Date Range</Label>
                        <Input
                          id="paymentDateRange"
                          value={formData.paymentDateRange}
                          onChange={handleInputChange}
                          placeholder="Enter Payment Date Range"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="expenseHead">Expense Head</Label>
                        <Textarea
                          id="expenseHead"
                          value={formData.expenseHead}
                          onChange={handleInputChange}
                          placeholder="Enter Expense Heads"
                          className="h-20"
                        />
                      </div>
                      <div>
                        <Label htmlFor="miscellaneous">Miscellaneous</Label>
                        <Select
                          value={formData.miscellaneous}
                          onValueChange={handleSelectChange('miscellaneous')}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select Option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Yes">Yes</SelectItem>
                            <SelectItem value="No">No</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="md:col-span-4">
                        <Label htmlFor="address">Address</Label>
                        <Textarea
                          id="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="Enter Address"
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
                  Vendor List
                </CardTitle>
              </CardHeader>
              <CardContent>
                {vendors.length === 0 ? (
                  <p className="text-sm text-gray-600 text-center py-12">No vendors found.</p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left text-gray-800">
                      <thead className="text-xs uppercase bg-gray-50 text-gray-700">
                        <tr>
                          <th className="px-3 py-3">Sl No.</th>
                          <th className="px-3 py-3">Vendor Name</th>
                          <th className="px-3 py-3">Company</th>
                          <th className="px-3 py-3">Phone</th>
                          <th className="px-3 py-3">Email ID</th>
                          <th className="px-3 py-3">Payment Date Range</th>
                          <th className="px-3 py-3">Expense Head</th>
                          <th className="px-3 py-3">Miscellaneous</th>
                          <th className="px-3 py-3">Address</th>
                          <th className="px-3 py-3">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {vendors.map((vendor) => (
                          <tr key={vendor.id} className="border-b bg-white hover:bg-gray-50">
                            <td className="px-4 py-3">{vendor.slNo}</td>
                            <td className="px-4 py-3">{vendor.vendorName}</td>
                            <td className="px-4 py-3">{vendor.company}</td>
                            <td className="px-4 py-3">{vendor.phone || 'N/A'}</td>
                            <td className="px-4 py-3">{vendor.emailId || 'N/A'}</td>
                            <td className="px-4 py-3">{vendor.paymentDateRange || 'N/A'}</td>
                            <td className="px-4 py-3 max-w-xs">
                              <div className="truncate">{vendor.expenseHead}</div>
                            </td>
                            <td className="px-4 py-3">{vendor.miscellaneous}</td>
                            <td className="px-4 py-3 max-w-xs">
                              <div className="truncate">{vendor.address}</div>
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex space-x-1">
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="h-6 w-6 p-0"
                                  onClick={() => handleEditVendor(vendor)}
                                >
                                  <Pencil className="h-4 w-4 text-blue-600" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="h-6 w-6 p-0"
                                  onClick={() => handleDelete(vendor.id)}
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
      </div>

    </div>
  );
};

export default VendorsList;