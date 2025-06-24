import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Table as TableIcon } from 'lucide-react';
import TopNavigation from "@/components/shared/TopNavigation";
import Footer from "@/components/shared/Footer";

const BuyerTransactions = () => {
  // State for transactions
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      company: "Company 1",
      buyer: "Jane Doe",
      project: "Living Room Redesign",
      apartmentNo: "Apt 101",
      transactionType: "Advance",
      transactionNo: "TXN001",
      amount: 10000,
      sgst: 9,
      cgst: 9,
      igst: 0,
      tds: 2,
      bank: "Bank 1",
      chequeNo: "CHQ12345",
      description: "Initial payment for upholstery fabric",
      entryDate: "2025-06-20",
    },
    {
      id: '2',
      company: "Company 2",
      buyer: "John Smith",
      project: "Master Bedroom",
      apartmentNo: "Apt 202",
      transactionType: "Receipt",
      transactionNo: "TXN002",
      amount: 15000,
      sgst: 9,
      cgst: 9,
      igst: 0,
      tds: 1,
      bank: "Bank 2",
      chequeNo: "",
      description: "Payment for oak wood flooring",
      entryDate: "2025-06-18",
    },
    {
      id: 3,
      company: "Company 1",
      buyer: "ABC Corp",
      project: "Kitchen Renovation",
      apartmentNo: "Apt 303",
      transactionType: "Expense",
      transactionNo: "TXN003",
      amount: 8000,
      sgst: 0,
      cgst: 0,
      igst: 18,
      tds: 0,
      bank: "Bank 1",
      chequeNo: "CHQ11223",
      description: "Purchase of quartz countertop",
      entryDate: "2025-06-15",
    },
  ]);

  // State for form data
  const [formData, setFormData] = useState({
    company: '',
    buyer: '',
    project: '',
    apartmentNo: '',
    transactionType: '',
    transactionNo: '',
    amount: '',
    sgst: '',
    cgst: '',
    igst: '',
    tds: '',
    bank: '',
    chequeNo: '',
    description: '',
  });

  // State for date filter (null for "See All")
  const [selectedDate, setSelectedDate] = useState('2025-06-19'); // Default to the provided entry date

  // Handle form input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Handle select changes
  const handleSelectChange = (id) => (value) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: transactions.length + 1,
      ...formData,
      amount: parseFloat(formData.amount) || 0,
      sgst: parseFloat(formData.sgst) || 0,
      cgst: parseFloat(formData.cgst) || 0,
      igst: parseFloat(formData.igst) || 0,
      tds: parseFloat(formData.tds) || 0,
      entryDate: new Date().toISOString().split('T')[0], // Current date
    };
    setTransactions([newTransaction, ...transactions]);
    handleReset();
  };

  // Handle form reset
  const handleReset = () => {
    setFormData({
      company: '',
      buyer: '',
      project: '',
      apartmentNo: '',
      transactionType: '',
      transactionNo: '',
      amount: '',
      sgst: '',
      cgst: '',
      igst: '',
      tds: '',
      bank: '',
      chequeNo: '',
      description: '',
    });
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

  // Filter transactions based on selected date
  const filteredTransactions = selectedDate
    ? transactions.filter((txn) => txn.entryDate === selectedDate)
    : transactions;

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavigation />

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Buyer Transactions</h1>
            <Button className="bg-blue-600 hover:bg-blue-700">Close</Button>
          </div>


          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Transaction Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Transaction Details */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
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
                    <Label htmlFor="buyer">Buyer</Label>
                    <Select value={formData.buyer} onValueChange={handleSelectChange('buyer')}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Buyer" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Jane Doe">Jane Doe</SelectItem>
                        <SelectItem value="John Smith">John Smith</SelectItem>
                        <SelectItem value="ABC Corp">ABC Corp</SelectItem>
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
                    <Label htmlFor="apartmentNo">Apartment No</Label>
                    <Select value={formData.apartmentNo} onValueChange={handleSelectChange('apartmentNo')}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Apartment No" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Apt 101">Apt 101</SelectItem>
                        <SelectItem value="Apt 202">Apt 202</SelectItem>
                        <SelectItem value="Apt 303">Apt 303</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="transactionType">Advance/Receipt/Expense</Label>
                    <Select value={formData.transactionType} onValueChange={handleSelectChange('transactionType')}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Transaction Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Advance">Advance</SelectItem>
                        <SelectItem value="Receipt">Receipt</SelectItem>
                        <SelectItem value="Expense">Expense</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="transactionNo">Transaction No</Label>
                    <Input id="transactionNo" value={formData.transactionNo} onChange={handleInputChange} placeholder="Transaction No" />
                  </div>
                </div>

                {/* Amount Details */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Amount Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <Label htmlFor="amount">Amount</Label>
                      <Input id="amount" value={formData.amount} onChange={handleInputChange} placeholder="Amount" type="number" step="0.01" />
                    </div>
                    <div>
                      <Label htmlFor="sgst">SGST(%)</Label>
                      <Input id="sgst" value={formData.sgst} onChange={handleInputChange} placeholder="SGST" type="number" step="0.01" />
                    </div>
                    <div>
                      <Label htmlFor="cgst">CGST(%)</Label>
                      <Input id="cgst" value={formData.cgst} onChange={handleInputChange} placeholder="CGST" type="number" step="0.01" />
                    </div>
                    <div>
                      <Label htmlFor="igst">IGST(%)</Label>
                      <Input id="igst" value={formData.igst} onChange={handleInputChange} placeholder="IGST" type="number" step="0.01" />
                    </div>
                  </div>
                </div>

                {/* Payment Details */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Payment Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea id="description" value={formData.description} onChange={handleInputChange} placeholder="Description" className="h-20" />
                    </div>
                    <div>
                      <Label htmlFor="tds">TDS(%)</Label>
                      <Input id="tds" value={formData.tds} onChange={handleInputChange} placeholder="TDS" type="number" step="0.01" />
                    </div>
                    <div>
                      <Label htmlFor="bank">Bank</Label>
                      <Select value={formData.bank} onValueChange={handleSelectChange('bank')}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Bank" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Bank 1">Bank 1</SelectItem>
                          <SelectItem value="Bank 2">Bank 2</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="chequeNo">Cheque No</Label>
                      <Input id="chequeNo" value={formData.chequeNo} onChange={handleInputChange} placeholder="Cheque No" />
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700">Add</Button>
                  <Button type="button" onClick={handleReset} className="bg-orange-500 hover:bg-orange-600">Reset</Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TableIcon className="h-6 w-6 mr-2" />
                Transaction Log
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
                      <th className="px-3 py-3">ID</th>
                      <th className="px-3 py-3">Company</th>
                      <th className="px-3 py-3">Buyer</th>
                      <th className="px-3 py-3">Project</th>
                      <th className="px-3 py-3">Apt No</th>
                      <th className="px-3 py-3">Type</th>
                      <th className="px-3 py-3">Txn No</th>
                      <th className="px-3 py-3 text-right">Amount</th>
                      <th className="px-3 py-3 text-right">SGST</th>
                      <th className="px-3 py-3 text-right">CGST</th>
                      <th className="px-3 py-3 text-right">IGST</th>
                      <th className="px-3 py-3 text-right">TDS</th>
                      <th className="px-3 py-3">Bank</th>
                      <th className="px-3 py-3">Cheque No</th>
                      <th className="px-3 py-3">Description</th>
                      <th className="px-3 py-3">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredTransactions.length > 0 ? (
                      filteredTransactions.map((txn) => (
                        <tr key={txn.id} className="border-b bg-white hover:bg-gray-50">
                          <td className="px-4 py-3">{txn.id}</td>
                          <td className="px-4 py-3">{txn.company}</td>
                          <td className="px-4 py-3">{txn.buyer}</td>
                          <td className="px-4 py-3">{txn.project}</td>
                          <td className="px-4 py-3">{txn.apartmentNo}</td>
                          <td className="px-4 py-3">
                            <span
                              className={`px-2 py-1 rounded text-xs font-semibold ${txn.transactionType === 'Advance'
                                  ? 'bg-blue-100 text-blue-800'
                                  : txn.transactionType === 'Receipt'
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-red-100 text-red-800'
                                }`}
                            >
                              {txn.transactionType}
                            </span>
                          </td>
                          <td className="px-4 py-3">{txn.transactionNo}</td>
                          <td className="px-4 py-3 text-right font-semibold">${txn.amount.toFixed(2)}</td>
                          <td className="px-4 py-3 text-right">{txn.sgst}%</td>
                          <td className="px-4 py-3 text-right">{txn.cgst}%</td>
                          <td className="px-4 py-3 text-right">{txn.igst}%</td>
                          <td className="px-4 py-3 text-right">{txn.tds}%</td>
                          <td className="px-4 py-3">{txn.bank}</td>
                          <td className="px-4 py-3">{txn.chequeNo}</td>
                          <td className="px-4 py-3 text-sm">{txn.description}</td>
                          <td className="px-4 py-3">{txn.entryDate}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={16} className="px-4 py-3 text-center text-gray-500">
                          No transactions found for the selected date.
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

export default BuyerTransactions;