import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Trash, Table as TableIcon } from 'lucide-react';
import TopNavigation from "@/components/shared/TopNavigation";
import Footer from "@/components/shared/Footer";

const Daybook = () => {
  const [showForm, setShowForm] = useState(false);
  const [entries, setEntries] = useState([
    {
      id: 1,
      date: '2025-06-09',
      company: 'Company 1',
      project: 'Living Room Redesign',
      billInvoice: 'Bill 001',
      expenseHead: 'Materials',
      vendor: 'Vendor 1',
      transactionType: 'Debit',
      amount: 5000.00,
      sgst: '0.00',
      cgst: '0.00',
      igst: '0.00',
      purchaseType: 'Cash',
      paid: '5000.00',
      tds: '0.00',
      description: 'Purchase of upholstery fabric',
    },
    {
      id: 2,
      date: '2025-06-08',
      company: 'Company 2',
      project: 'Master Bedroom',
      billInvoice: 'Bill 002',
      expenseHead: 'Labor',
      vendor: 'Vendor 2',
      transactionType: 'Credit',
      amount: 3000.00,
      sgst: '0.00',
      cgst: '0.00',
      igst: '0.00',
      purchaseType: 'Credit',
      paid: '0.00',
      tds: '0.00',
      description: 'Labor charges for carpentry',
    },
  ]);

  // State for form data
  const [formData, setFormData] = useState({
    date: '2025-06-09',
    company: '',
    project: '',
    billInvoice: '',
    expenseHead: '',
    vendor: '',
    transactionType: '',
    amount: '',
    sgst: '',
    cgst: '',
    igst: '',
    purchaseType: '',
    paid: '',
    tds: '',
    description: '',
  });

  // State for date filter (null for "See All")
  const [selectedDate, setSelectedDate] = useState('2025-06-09'); // Default to the provided entry date

  // Handle form input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle select changes
  const handleSelectChange = (id) => (value) => {
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      id: entries.length + 1,
      date: formData.date || new Date().toISOString().split('T')[0],
      company: formData.company || 'Unknown',
      project: formData.project || 'Unknown',
      billInvoice: formData.billInvoice || 'N/A',
      expenseHead: formData.expenseHead || 'Unknown',
      vendor: formData.vendor || 'Unknown',
      transactionType: formData.transactionType || 'Unknown',
      amount: parseFloat(formData.amount) || 0.00,
      sgst: formData.sgst || '0.00',
      cgst: formData.cgst || '0.00',
      igst: formData.igst || '0.00',
      purchaseType: formData.purchaseType || 'Unknown',
      paid: formData.paid || '0.00',
      tds: formData.tds || '0.00',
      description: formData.description || '',
    };
    setEntries([newEntry, ...entries]);
    handleCancel();
  };

  // Handle form cancel
  const handleCancel = () => {
    setShowForm(false);
    setFormData({
      date: '2025-06-09',
      company: '',
      project: '',
      billInvoice: '',
      expenseHead: '',
      vendor: '',
      transactionType: '',
      amount: '',
      sgst: '',
      cgst: '',
      igst: '',
      purchaseType: '',
      paid: '',
      tds: '',
      description: '',
    });
  };

  // Handle delete entry
  const handleDelete = (id) => {
    setEntries(entries.filter(entry => entry.id !== id));
  };

  // Handle date navigation
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

  // Filter entries based on selected date
  const filteredEntries = selectedDate
    ? entries.filter((entry) => entry.date === selectedDate)
    : entries;

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavigation />

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Daybook Entries</h1>
            <div className="flex space-x-2">
              <Button
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => setShowForm(true)}
                disabled={showForm}
              >
                Add Entries
              </Button>
              <Button variant="outline">Close</Button>
            </div>
          </div>

          {showForm && (
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" onClick={handleCancel}>
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <CardTitle>Add New Entry</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Transaction Details */}
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
                      <Label htmlFor="billInvoice">Bill / Invoice No</Label>
                      <Select value={formData.billInvoice} onValueChange={handleSelectChange('billInvoice')}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Bill No/ Invoice No." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Bill 001">Bill 001</SelectItem>
                          <SelectItem value="Bill 002">Bill 002</SelectItem>
                          <SelectItem value="Bill 003">Bill 003</SelectItem>
                          <SelectItem value="Bill 004">Bill 004</SelectItem>
                          <SelectItem value="Bill 005">Bill 005</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <Label htmlFor="expenseHead">Expense Head</Label>
                      <Select value={formData.expenseHead} onValueChange={handleSelectChange('expenseHead')}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Expense Head" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Materials">Materials</SelectItem>
                          <SelectItem value="Labor">Labor</SelectItem>
                          <SelectItem value="Equipment">Equipment</SelectItem>
                          <SelectItem value="Travel">Travel</SelectItem>
                          <SelectItem value="Maintenance">Maintenance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="vendor">Vendor</Label>
                      <Select value={formData.vendor} onValueChange={handleSelectChange('vendor')}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Vendor" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Vendor 1">Vendor 1</SelectItem>
                          <SelectItem value="Vendor 2">Vendor 2</SelectItem>
                          <SelectItem value="Vendor 3">Vendor 3</SelectItem>
                          <SelectItem value="Vendor 4">Vendor 4</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="transactionType">Transaction Type</Label>
                      <Select value={formData.transactionType} onValueChange={handleSelectChange('transactionType')}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Transaction Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Debit">Debit</SelectItem>
                          <SelectItem value="Credit">Credit</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Amount Details */}
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
                      <Label htmlFor="sgst">SGST(%)</Label>
                      <Input
                        id="sgst"
                        type="number"
                        step="0.01"
                        value={formData.sgst}
                        onChange={handleInputChange}
                        placeholder="0.00"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cgst">CGST(%)</Label>
                      <Input
                        id="cgst"
                        type="number"
                        step="0.01"
                        value={formData.cgst}
                        onChange={handleInputChange}
                        placeholder="0.00"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Label htmlFor="igst">IGST(%)</Label>
                      <Input
                        id="igst"
                        type="number"
                        step="0.01"
                        value={formData.igst}
                        onChange={handleInputChange}
                        placeholder="0.00"
                        className="w-full"
                      />
                    </div>
                  </div>

                  {/* Payment Details */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <Label htmlFor="purchaseType">Purchase Type</Label>
                      <Select value={formData.purchaseType} onValueChange={handleSelectChange('purchaseType')}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Purchase Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Cash">Cash</SelectItem>
                          <SelectItem value="Credit">Credit</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="paid">Paid / Receipt</Label>
                      <Input
                        id="paid"
                        type="number"
                        step="0.01"
                        value={formData.paid}
                        onChange={handleInputChange}
                        placeholder="0.00"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Label htmlFor="tds">TDS(%)</Label>
                      <Input
                        id="tds"
                        type="number"
                        step="0.01"
                        value={formData.tds}
                        onChange={handleInputChange}
                        placeholder="0.00"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Enter description"
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
                Daybook Entries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex items-center space-x-4">
                <div>
                  <span className="text-sm font-medium">Filter Date:</span>
                  <span className="ml-2 text-sm">{selectedDate || 'All'}</span>
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
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left text-gray-800">
                  <thead className="text-xs uppercase bg-gray-50 text-gray-700">
                    <tr>
                      <th className="px-3 py-3">Date</th>
                      <th className="px-3 py-3">Company</th>
                      <th className="px-3 py-3">Project</th>
                      <th className="px-3 py-3">Bill/Invoice No</th>
                      <th className="px-3 py-3">Expense Head</th>
                      <th className="px-3 py-3">Vendor</th>
                      <th className="px-3 py-3">Type</th>
                      <th className="px-3 py-3 text-right">Amount</th>
                      <th className="px-3 py-3 text-right">SGST</th>
                      <th className="px-3 py-3 text-right">CGST</th>
                      <th className="px-3 py-3 text-right">IGST</th>
                      <th className="px-3 py-3">Purchase Type</th>
                      <th className="px-3 py-3 text-right">Paid</th>
                      <th className="px-3 py-3 text-right">TDS</th>
                      <th className="px-3 py-3">Description</th>
                      <th className="px-3 py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEntries.length > 0 ? (
                      filteredEntries.map((entry) => (
                        <tr key={entry.id} className="border-b bg-white hover:bg-gray-50">
                          <td className="px-4 py-3">{entry.date}</td>
                          <td className="px-4 py-3">{entry.company}</td>
                          <td className="px-4 py-3">{entry.project}</td>
                          <td className="px-4 py-3">{entry.billInvoice}</td>
                          <td className="px-4 py-3">{entry.expenseHead}</td>
                          <td className="px-4 py-3">{entry.vendor}</td>
                          <td className="px-4 py-3">
                            <span
                              className={`px-2 py-1 rounded text-xs font-semibold ${
                                entry.transactionType === 'Debit'
                                  ? 'bg-red-100 text-red-800'
                                  : 'bg-green-100 text-green-800'
                              }`}
                            >
                              {entry.transactionType}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-right font-semibold">₹{entry.amount.toFixed(2)}</td>
                          <td className="px-4 py-3 text-right">{entry.sgst}%</td>
                          <td className="px-4 py-3 text-right">{entry.cgst}%</td>
                          <td className="px-4 py-3 text-right">{entry.igst}%</td>
                          <td className="px-4 py-3">{entry.purchaseType}</td>
                          <td className="px-4 py-3 text-right">₹{parseFloat(entry.paid).toFixed(2)}</td>
                          <td className="px-4 py-3 text-right">{entry.tds}%</td>
                          <td className="px-4 py-3 text-sm">{entry.description}</td>
                          <td className="px-4 py-3">
                            <Button variant="ghost" size="sm" onClick={() => handleDelete(entry.id)}>
                              <Trash className="h-4 w-4" />
                            </Button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="16" className="px-4 py-3 text-center text-gray-500">
                          No entries found for the selected date.
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

export default Daybook;