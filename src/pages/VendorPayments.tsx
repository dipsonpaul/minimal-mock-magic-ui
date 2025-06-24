import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table as TableIcon, ArrowLeft, Trash } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import TopNavigation from "@/components/shared/TopNavigation";
import Footer from "@/components/shared/Footer";

const VendorPayments = () => {
  const [showForm, setShowForm] = useState(false);
  const [entries, setEntries] = useState([
    {
      id: uuidv4(),
      vendorName: 'Dynamic Architectural Hardware',
      company: 'Capchure Designs India Pvt Ltd',
      project: 'Living Room Redesign',
      billNumber: 'BILL001',
      paymentAmount: 5000.00,
      paymentDate: '2025-06-19',
      paymentMethod: 'Bank Transfer',
    },
    {
      id: uuidv4(),
      vendorName: 'Fashion Paints Edappally',
      company: 'Capchure Designs India Pvt Ltd',
      project: 'Master Bedroom',
      billNumber: 'BILL002',
      paymentAmount: 3000.00,
      paymentDate: '2025-06-18',
      paymentMethod: 'Cash',
    },
    {
      id: uuidv4(),
      vendorName: 'Project Solutions',
      company: 'Capchure Designs India Pvt Ltd',
      project: 'Kitchen Renovation',
      billNumber: 'BILL003',
      paymentAmount: 4500.00,
      paymentDate: '2025-06-15',
      paymentMethod: 'Credit Card',
    },
  ]);

  const [formData, setFormData] = useState({
    vendorName: '',
    company: '',
    project: '',
    billNumber: '',
    paymentAmount: '',
    paymentDate: '2025-06-19',
    paymentMethod: '',
  });

  const [selectedDate, setSelectedDate] = useState('2025-06-19'); // Default to provided date

  const handleAddEntry = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setFormData({
      vendorName: '',
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
      id: uuidv4(),
      vendorName: formData.vendorName || 'Unknown',
      company: formData.company || 'Unknown',
      project: formData.project || 'Unknown',
      billNumber: formData.billNumber || 'N/A',
      paymentAmount: parseFloat(formData.paymentAmount) || 0.00,
      paymentDate: formData.paymentDate || new Date().toISOString().split('T')[0],
      paymentMethod: formData.paymentMethod || 'Unknown',
    };
    setEntries([newEntry, ...entries]);
    handleCancel();
  };

  const handlePreviousDate = () => {
    const currentDate = new Date(selectedDate);
    currentDate.setDate(currentDate.getDate() - 1);
    setSelectedDate(currentDate.toISOString().split('T')[0]);
  };

  const handleNextDate = () => {
    const currentDate = new Date(selectedDate);
    currentDate.setDate(currentDate.getDate() + 1);
    setSelectedDate(currentDate.toISOString().split('T')[0]);
  };

  const handleCurrentDate = () => {
    setSelectedDate(new Date().toISOString().split('T')[0]);
  };

  const handleSeeAll = () => {
    setSelectedDate(null); // Null indicates no date filter
  };

  const handleDatePickerChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const filteredEntries = selectedDate
    ? entries.filter((entry) => entry.paymentDate === selectedDate)
    : entries;

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavigation />

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Vendor Payments</h1>
            <Button
              className="bg-blue-600 hover:bg-blue-700"
              onClick={handleAddEntry}
              disabled={showForm}
            >
              Add Entries
            </Button>
          </div>


          {showForm && (
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" onClick={handleCancel}>
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <CardTitle>Add New Payment</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
                      <Label htmlFor="vendorName">Vendor Name</Label>
                      <Select
                        value={formData.vendorName}
                        onValueChange={handleSelectChange('vendorName')}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Vendor" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Dynamic Architectural Hardware">Dynamic Architectural Hardware</SelectItem>
                          <SelectItem value="Fashion Paints Edappally">Fashion Paints Edappally</SelectItem>
                          <SelectItem value="Project Solutions">Project Solutions</SelectItem>
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
                      <Label htmlFor="billNumber">Bill Number</Label>
                      <Input
                        id="billNumber"
                        value={formData.billNumber}
                        onChange={handleInputChange}
                        placeholder="Enter Bill Number"
                      />
                    </div>
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
                Vendor Payments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex items-center space-x-4">
                <div>
                  <span className="text-sm font-medium">Entry Date:</span>
                  <span className="ml-2 text-sm">{selectedDate || 'All'}</span>
                </div>
                <div>
                  <Input
                    type="date"
                    value={selectedDate || ''}
                    onChange={handleDatePickerChange}
                    className="w-40"
                  />
                </div>
                <div className="flex space-x-2">
                  <Button variant="link" className="text-blue-600 text-sm" onClick={handlePreviousDate}>
                    Previous
                  </Button>
                  <span className="text-sm">|</span>
                  <Button variant="link" className="text-blue-600 text-sm" onClick={handleCurrentDate}>
                    Current
                  </Button>
                  <span className="text-sm">|</span>
                  <Button variant="link" className="text-blue-600 text-sm" onClick={handleNextDate}>
                    Next
                  </Button>
                  <span className="text-sm">|</span>
                  <Button variant="link" className="text-blue-600 text-sm" onClick={handleSeeAll}>
                    See All
                  </Button>
                </div>
                <div className="ml-auto">
                  <span className="text-sm font-medium">Last Entry Date: 2024-09-30</span>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left text-gray-800">
                  <thead className="text-xs uppercase bg-gray-50 text-gray-700">
                    <tr>
                      <th className="px-3 py-3">ID</th>
                      <th className="px-3 py-3">Vendor Name</th>
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
                    {filteredEntries.length > 0 ? (
                      filteredEntries.map((entry) => (
                        <tr key={entry.id} className="border-b bg-white hover:bg-gray-50">
                          <td className="px-4 py-3">{entry.id.slice(0, 8)}</td>
                          <td className="px-4 py-3">{entry.vendorName}</td>
                          <td className="px-4 py-3">{entry.company}</td>
                          <td className="px-4 py-3">{entry.project}</td>
                          <td className="px-4 py-3">{entry.billNumber}</td>
                          <td className="px-4 py-3 text-right font-semibold">₹{entry.paymentAmount.toFixed(2)}</td>
                          <td className="px-4 py-3">{entry.paymentDate}</td>
                          <td className="px-4 py-3">{entry.paymentMethod}</td>
                          <td className="px-4 py-3">
                            <Button variant="ghost" size="sm" onClick={() => handleDelete(entry.id)}>
                              <Trash className="h-4 w-4" />
                            </Button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={9} className="px-4 py-3 text-center text-gray-500">
                          No vendor payments found for the selected date.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VendorPayments;