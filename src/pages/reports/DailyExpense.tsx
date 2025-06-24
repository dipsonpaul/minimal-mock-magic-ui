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

const DailyExpense = () => {
  const [showForm, setShowForm] = useState(false);
  const [expenses, setExpenses] = useState([
    {
      id: uuidv4(),
      date: '2025-06-09',
      company: 'Company 1',
      billNo: 'BILL001',
      transactionHead: 'Office Expenses',
      transactionType: 'Debit',
      amount: 5000.00,
      sgst: 9.00,
      cgst: 9.00,
      igst: 0.00,
      purchaseType: 'Cash',
      paid: 5000.00,
      tds: 0.00,
      description: 'Office supplies purchase',
    },
    {
      id: uuidv4(),
      date: '2025-06-08',
      company: 'Company 2',
      billNo: 'BILL002',
      transactionHead: 'Travel Expenses',
      transactionType: 'Credit',
      amount: 3000.00,
      sgst: 0.00,
      cgst: 0.00,
      igst: 18.00,
      purchaseType: 'Credit',
      paid: 0.00,
      tds: 0.00,
      description: 'Travel expenses for client meeting',
    },
    {
      id: uuidv4(),
      date: '2025-06-07',
      company: 'Company 1',
      billNo: 'BILL003',
      transactionHead: 'Office Expenses',
      transactionType: 'Debit',
      amount: 1500.00,
      sgst: 9.00,
      cgst: 9.00,
      igst: 0.00,
      purchaseType: 'Cash',
      paid: 1500.00,
      tds: 0.00,
      description: 'Stationery for office',
    },
  ]);

  const [formData, setFormData] = useState({
    date: '2025-06-09',
    company: '',
    billNo: '',
    transactionHead: '',
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
  const [selectedDate, setSelectedDate] = useState('2025-06-09'); // Default to provided date

  const handleAddEntry = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setFormData({
      date: '2025-06-09',
      company: '',
      billNo: '',
      transactionHead: '',
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

  const handleDelete = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
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
    const newExpense = {
      id: uuidv4(),
      date: formData.date || new Date().toISOString().split('T')[0],
      company: formData.company || 'Unknown',
      billNo: formData.billNo || 'N/A',
      transactionHead: formData.transactionHead || 'Unknown',
      transactionType: formData.transactionType || 'Unknown',
      amount: parseFloat(formData.amount) || 0.00,
      sgst: parseFloat(formData.sgst) || 0.00,
      cgst: parseFloat(formData.cgst) || 0.00,
      igst: parseFloat(formData.igst) || 0.00,
      purchaseType: formData.purchaseType || 'Unknown',
      paid: parseFloat(formData.paid) || 0.00,
      tds: parseFloat(formData.tds) || 0.00,
      description: formData.description || '',
    };
    setExpenses(prev => [newExpense, ...prev]);
    handleCancel();
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

  // Filter expenses based on selected date
  const filteredExpenses = selectedDate
    ? expenses.filter((expense) => expense.date === selectedDate)
    : expenses;

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavigation />
      
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Daily Expense Entries</h1>
            <div className="flex space-x-2">
              <Button
                className="bg-blue-600 hover:bg-blue-700"
                onClick={handleAddEntry}
                disabled={showForm}
              >
                Add Entries
              </Button>
              <Button variant="outline">Fund Transfer</Button>
              <Button variant="outline">Close</Button>
            </div>
          </div>

          {/* Due Bills Section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Due Bills</h2>
            <p className="text-sm text-gray-600">No results found</p>
          </div>

          {showForm && (
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" onClick={handleCancel}>
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <CardTitle>Add New Expense</CardTitle>
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
                      <Label htmlFor="billNo">Bill No</Label>
                      <Input
                        id="billNo"
                        value={formData.billNo}
                        onChange={handleInputChange}
                        placeholder="Enter Bill No"
                      />
                    </div>
                    <div>
                      <Label htmlFor="transactionHead">Transaction Head</Label>
                      <Select value={formData.transactionHead} onValueChange={handleSelectChange('transactionHead')}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Transaction Head" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Office Expenses">Office Expenses</SelectItem>
                          <SelectItem value="Travel Expenses">Travel Expenses</SelectItem>
                          <SelectItem value="Maintenance">Maintenance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
                      <Label htmlFor="paid">Paid</Label>
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
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="md:col-span-2">
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
                Expense Entries
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
                      <th className="px-3 py-3">Bill No</th>
                      <th className="px-3 py-3">Transaction Head</th>
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
                    {filteredExpenses.length > 0 ? (
                      filteredExpenses.map((expense) => (
                        <tr key={expense.id} className="border-b bg-white hover:bg-gray-50">
                          <td className="px-4 py-3">{expense.date}</td>
                          <td className="px-4 py-3">{expense.company}</td>
                          <td className="px-4 py-3">{expense.billNo}</td>
                          <td className="px-4 py-3">{expense.transactionHead}</td>
                          <td className="px-4 py-3">
                            <span
                              className={`px-2 py-1 rounded text-xs font-semibold ${
                                expense.transactionType === 'Debit'
                                  ? 'bg-red-100 text-red-800'
                                  : 'bg-green-100 text-green-800'
                              }`}
                            >
                              {expense.transactionType}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-right font-semibold">₹{expense.amount.toFixed(2)}</td>
                          <td className="px-4 py-3 text-right">{expense.sgst}%</td>
                          <td className="px-4 py-3 text-right">{expense.cgst}%</td>
                          <td className="px-4 py-3 text-right">{expense.igst}%</td>
                          <td className="px-4 py-3">{expense.purchaseType}</td>
                          <td className="px-4 py-3 text-right">₹{expense.paid.toFixed(2)}</td>
                          <td className="px-4 py-3 text-right">{expense.tds}%</td>
                          <td className="px-4 py-3 text-sm">{expense.description}</td>
                          <td className="px-4 py-3">
                            <Button variant="ghost" size="sm" onClick={() => handleDelete(expense.id)}>
                              <Trash className="h-4 w-4" />
                            </Button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="14" className="px-4 py-3 text-center text-gray-500">
                          No expenses found for the selected date.
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

export default DailyExpense;