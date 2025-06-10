import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Trash } from 'lucide-react';

const Daybook = () => {
  const [showForm, setShowForm] = useState(false);
  const [entries, setEntries] = useState([
    {
      id: 1,
      date: '09-06-2025',
      company: 'Company 1',
      project: 'Project 1',
      billInvoice: 'Bill 001',
      expenseHead: 'Materials',
      vendor: 'Vendor 1',
      transactionType: 'Debit',
      amount: 5000.00,
      description: 'Purchase of raw materials',
    },
    {
      id: 2,
      date: '08-06-2025',
      company: 'Company 2',
      project: 'Project 2',
      billInvoice: 'Bill 002',
      expenseHead: 'Labor',
      vendor: 'Vendor 2',
      transactionType: 'Credit',
      amount: 3000.00,
      description: 'Labor charges',
    },
  ]);

  // Form state
  const [formData, setFormData] = useState({
    date: '09-06-2025',
    company: '',
    project: '',
    billInvoice: '',
    expenseHead: '',
    vendor: '',
    transactionType: '',
    amount: '',
    description: '',
  });

  const handleAddEntry = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    // Reset form
    setFormData({
      date: '09-06-2025',
      company: '',
      project: '',
      billInvoice: '',
      expenseHead: '',
      vendor: '',
      transactionType: '',
      amount: '',
      description: '',
    });
  };

  const handleDelete = (id) => {
    setEntries(entries.filter(entry => entry.id !== id));
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSelectChange = (id, value) => {
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      id: entries.length + 1,
      date: formData.date,
      company: formData.company || 'Unknown',
      project: formData.project || 'Unknown',
      billInvoice: formData.billInvoice || 'N/A',
      expenseHead: formData.expenseHead || 'Unknown',
      vendor: formData.vendor || 'Unknown',
      transactionType: formData.transactionType || 'Unknown',
      amount: parseFloat(formData.amount) || 0.00,
      description: formData.description || '',
    };
    setEntries([...entries, newEntry]);
    handleCancel(); // Reset form and show table
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <header className="bg-slate-900 text-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="text-xl font-bold text-blue-400">CoMS</div>
              <nav className="hidden md:flex space-x-6">
                <Link to="/" className="text-gray-300 hover:text-white text-sm font-medium">HOME</Link>
                <Link to="/procurement" className="text-gray-300 hover:text-white text-sm font-medium">PURCHASE</Link>
                <Link to="/inventory" className="text-gray-300 hover:text-white text-sm font-medium">WAREHOUSE</Link>
                <Link to="/sales" className="text-gray-300 hover:text-white text-sm font-medium">SALES</Link>
                <Link to="/reports/daybook" className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium">DAY BOOK</Link>
                <Link to="/reports/daily-expense" className="text-gray-300 hover:text-white text-sm font-medium">DAILY EXPENSES</Link>
                <Link to="/crm" className="text-gray-300 hover:text-white text-sm font-medium">BUYER</Link>
                <Link to="/hrms" className="text-gray-300 hover:text-white text-sm font-medium">LABOUR</Link>
                <Link to="/crm" className="text-gray-300 hover:text-white text-sm font-medium">VENDORS</Link>
                <Link to="/hrms" className="text-gray-300 hover:text-white text-sm font-medium">SUB CONTRACTORS</Link>
                <Link to="/resource-management" className="text-gray-300 hover:text-white text-sm font-medium">RMS</Link>
                <Link to="#" className="text-gray-300 hover:text-white text-sm font-medium">SETTINGS</Link>
                <Link to="#" className="text-gray-300 hover:text-white text-sm font-medium">REPORTS</Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-white text-sm">Admin Admin</span>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-800">DAYBOOK ENTRIES</h1>
            <div className="flex space-x-2">
              <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleAddEntry}>Add Entries</Button>
              <Button variant="outline">Close</Button>
            </div>
          </div>

          {!showForm ? (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Existing Entries</CardTitle>
              </CardHeader>
              <CardContent>
                {entries.length === 0 ? (
                  <p className="text-sm text-gray-600">No entries found</p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bill/Invoice No</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expense Head</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vendor</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction Type</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {entries.map((entry) => (
                          <tr key={entry.id} className="hover:bg-blue-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.date}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.company}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.project}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.billInvoice}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.expenseHead}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.vendor}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.transactionType}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{entry.amount.toFixed(2)}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <Button variant="ghost" size="sm" onClick={() => handleDelete(entry.id)}>
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
          ) : (
            <Card>
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
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <Label htmlFor="date">Date</Label>
                      <Input
                        id="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Select onValueChange={(value) => handleSelectChange('company', value)}>
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
                      <Select onValueChange={(value) => handleSelectChange('project', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Project" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Project 1">Project 1</SelectItem>
                          <SelectItem value="Project 2">Project 2</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="billInvoice">Bill / Invoice No</Label>
                      <Select onValueChange={(value) => handleSelectChange('billInvoice', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Bill No/ Invoice No." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Bill 001">Bill 001</SelectItem>
                          <SelectItem value="Bill 002">Bill 002</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <Label htmlFor="expenseHead">Expense Head</Label>
                      <Select onValueChange={(value) => handleSelectChange('expenseHead', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Expense Head" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Materials">Materials</SelectItem>
                          <SelectItem value="Labor">Labor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="vendor">Vendor</Label>
                      <Select onValueChange={(value) => handleSelectChange('vendor', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Vendor" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Vendor 1">Vendor 1</SelectItem>
                          <SelectItem value="Vendor 2">Vendor 2</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="transactionType">Transaction Type</Label>
                      <Select onValueChange={(value) => handleSelectChange('transactionType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Transaction Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Debit">Debit</SelectItem>
                          <SelectItem value="Credit">Credit</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="amount">Amount</Label>
                      <Input
                        id="amount"
                        type="number"
                        value={formData.amount}
                        onChange={handleInputChange}
                        placeholder="0.00"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
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
        </div>
      </div>
    </div>
  );
};

export default Daybook;
