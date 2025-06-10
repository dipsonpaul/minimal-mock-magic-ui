import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Trash } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

const DailyExpense = () => {
  const [showForm, setShowForm] = useState(false);
  const [expenses, setExpenses] = useState([
    {
      id: uuidv4(),
      company: 'company1',
      billNo: 'BILL001',
      transactionHead: 'expense1',
      transactionType: 'debit',
      amount: '5000.00',
      sgst: '9.00',
      cgst: '9.00',
      igst: '0.00',
      purchaseType: 'cash',
      paid: '5000.00',
      tds: '0.00',
      description: 'Office supplies purchase'
    },
    {
      id: uuidv4(),
      company: 'company2',
      billNo: 'BILL002',
      transactionHead: 'expense2',
      transactionType: 'credit',
      amount: '3000.00',
      sgst: '0.00',
      cgst: '0.00',
      igst: '18.00',
      purchaseType: 'credit',
      paid: '0.00',
      tds: '0.00',
      description: 'Travel expenses for client meeting'
    },
    {
      id: uuidv4(),
      company: 'company1',
      billNo: 'BILL003',
      transactionHead: 'expense1',
      transactionType: 'debit',
      amount: '1500.00',
      sgst: '9.00',
      cgst: '9.00',
      igst: '0.00',
      purchaseType: 'cash',
      paid: '1500.00',
      tds: '0.00',
      description: 'Stationery for office'
    }
  ]);

  const [formData, setFormData] = useState({
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
    description: ''
  });

  const handleAddEntry = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setFormData({
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
      description: ''
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
      company: formData.company || 'Unknown',
      billNo: formData.billNo || 'N/A',
      transactionHead: formData.transactionHead || 'Unknown',
      transactionType: formData.transactionType || 'Unknown',
      amount: formData.amount || '0.00',
      sgst: formData.sgst || '0.00',
      cgst: formData.cgst || '0.00',
      igst: formData.igst || '0.00',
      purchaseType: formData.purchaseType || 'Unknown',
      paid: formData.paid || '0.00',
      tds: formData.tds || '0.00',
      description: formData.description || ''
    };
    setExpenses(prev => [...prev, newExpense]);
    handleCancel();
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
                <Link to="/reports/daybook" className="text-gray-300 hover:text-white text-sm font-medium">DAY BOOK</Link>
                <Link to="/reports/daily-expense" className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium">DAILY EXPENSES</Link>
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
            <h1 className="text-3xl font-bold text-gray-800">DAILY EXPENSE ENTRIES</h1>
            <div className="flex space-x-2">
              <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleAddEntry} disabled={showForm}>Add Entries</Button>
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
                      <Label htmlFor="company">Company</Label>
                      <Select value={formData.company} onValueChange={handleSelectChange('company')}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Company" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="company1">Company 1</SelectItem>
                          <SelectItem value="company2">Company 2</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="billNo">Bill No</Label>
                      <Input id="billNo" value={formData.billNo} onChange={handleInputChange} placeholder="Enter Bill No" />
                    </div>
                    <div>
                      <Label htmlFor="transactionHead">Transaction Head</Label>
                      <Select value={formData.transactionHead} onValueChange={handleSelectChange('transactionHead')}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Transaction Head" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="expense1">Office Expenses</SelectItem>
                          <SelectItem value="expense2">Travel Expenses</SelectItem>
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
                          <SelectItem value="debit">Debit</SelectItem>
                          <SelectItem value="credit">Credit</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Amount Details */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <Label htmlFor="amount">Amount</Label>
                      <Input id="amount" value={formData.amount} onChange={handleInputChange} placeholder="0.00" />
                    </div>
                    <div>
                      <Label htmlFor="sgst">SGST(%)</Label>
                      <Input id="sgst" value={formData.sgst} onChange={handleInputChange} placeholder="0.00" />
                    </div>
                    <div>
                      <Label htmlFor="cgst">CGST(%)</Label>
                      <Input id="cgst" value={formData.cgst} onChange={handleInputChange} placeholder="0.00" />
                    </div>
                    <div>
                      <Label htmlFor="igst">IGST(%)</Label>
                      <Input id="igst" value={formData.igst} onChange={handleInputChange} placeholder="0.00" />
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
                          <SelectItem value="cash">Cash</SelectItem>
                          <SelectItem value="credit">Credit</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="paid">Paid</Label>
                      <Input id="paid" value={formData.paid} onChange={handleInputChange} placeholder="0.00" />
                    </div>
                    <div>
                      <Label htmlFor="tds">TDS(%)</Label>
                      <Input id="tds" value={formData.tds} onChange={handleInputChange} placeholder="0.00" />
                    </div>
                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea id="description" value={formData.description} onChange={handleInputChange} placeholder="Enter description" className="h-20" />
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

          {/* Expenses Table (moves below the form when form is shown) */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Expense Entries</CardTitle>
            </CardHeader>
            <CardContent>
              {expenses.length === 0 ? (
                <p className="text-sm text-gray-600">No entries found</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bill No</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction Head</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SGST</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CGST</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">IGST</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purchase Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Paid</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TDS</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {expenses.map((expense) => (
                        <tr key={expense.id} className="hover:bg-blue-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{expense.company}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{expense.billNo}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{expense.transactionHead}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{expense.transactionType}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{expense.amount}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{expense.sgst}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{expense.cgst}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{expense.igst}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{expense.purchaseType}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{expense.paid}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{expense.tds}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{expense.description}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <Button variant="ghost" size="sm" onClick={() => handleDelete(expense.id)}>
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
    </div>
  );
};

export default DailyExpense;
