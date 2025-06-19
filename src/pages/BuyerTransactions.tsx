
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const BuyerTransactions = () => {
  const [formData, setFormData] = useState({
    company: '',
    buyer: '',
    project: '',
    apartmentNo: '',
    advanceReceiptExpense: '',
    transactionNo: '',
    transactionType: '',
    amount: '',
    sgst: '',
    cgst: '',
    igst: '',
    description: '',
    tds: '',
    bank: '',
    chequeNo: ''
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <header className="bg-slate-900 text-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center space-x-6">
              <div className="text-lg font-bold text-blue-400">CoMS</div>
              <nav className="hidden md:flex space-x-4">
                <Link to="/" className="text-gray-300 hover:text-white text-xs font-medium">HOME</Link>
                <Link to="/procurement" className="text-gray-300 hover:text-white text-xs font-medium">PURCHASE</Link>
                <Link to="/inventory" className="text-gray-300 hover:text-white text-xs font-medium">WAREHOUSE</Link>
                <Link to="/sales" className="text-gray-300 hover:text-white text-xs font-medium">SALES</Link>
                <Link to="/reports/daybook" className="text-gray-300 hover:text-white text-xs font-medium">DAY BOOK</Link>
                <Link to="/reports/daily-expense" className="text-gray-300 hover:text-white text-xs font-medium">DAILY EXPENSES</Link>
                <Link to="/buyer-transactions" className="bg-blue-600 text-white px-2 py-0.5 rounded text-xs font-medium">BUYER</Link>
                <Link to="/hrms" className="text-gray-300 hover:text-white text-xs font-medium">LABOUR</Link>
                <Link to="/vendors" className="text-gray-300 hover:text-white text-xs font-medium">VENDORS</Link>
                <Link to="/hrms" className="text-gray-300 hover:text-white text-xs font-medium">SUB CONTRACTORS</Link>
                <Link to="/resource-management" className="text-gray-300 hover:text-white text-xs font-medium">RMS</Link>
                <Link to="#" className="text-gray-300 hover:text-white text-xs font-medium">SETTINGS</Link>
                <Link to="#" className="text-gray-300 hover:text-white text-xs font-medium">REPORTS</Link>
              </nav>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-white text-xs">Admin Admin</span>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800">BUYER TRANSACTIONS</h1>
            <Button className="bg-blue-600 hover:bg-blue-700">Close</Button>
          </div>

          <div className="mb-4 flex items-center space-x-4">
            <div>
              <Label className="text-sm font-medium">Entry Date:</Label>
              <span className="ml-2 text-sm">19-06-2025</span>
            </div>
            <div className="flex space-x-2">
              <Button variant="link" className="text-blue-600 text-sm">Previous</Button>
              <span className="text-sm">|</span>
              <Button variant="link" className="text-blue-600 text-sm">Current</Button>
              <span className="text-sm">|</span>
              <Button variant="link" className="text-blue-600 text-sm">Next</Button>
            </div>
            <div className="ml-auto">
              <Label className="text-sm font-medium">Last Entry date</Label>
            </div>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Transaction Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-6">
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="-Select Company-" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="company1">Company 1</SelectItem>
                      <SelectItem value="company2">Company 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="buyer">Buyer</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="-Select Buyer-" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="buyer1">Buyer 1</SelectItem>
                      <SelectItem value="buyer2">Buyer 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="project">Project</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="-Select Project-" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="project1">Project 1</SelectItem>
                      <SelectItem value="project2">Project 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="apartmentNo">Apartment No</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="-Select Apartment No-" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apt1">Apartment 1</SelectItem>
                      <SelectItem value="apt2">Apartment 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="advanceReceiptExpense">Advance/Receipt/Expense</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="-Select Transaction Type-" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="advance">Advance</SelectItem>
                      <SelectItem value="receipt">Receipt</SelectItem>
                      <SelectItem value="expense">Expense</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="transactionType">Transaction Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="-Select Transaction Type-" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="debit">Debit</SelectItem>
                      <SelectItem value="credit">Credit</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
                <div>
                  <Label htmlFor="transactionNo">Transaction No</Label>
                  <Input placeholder="Transaction No" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Amount Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <Label htmlFor="amount">Amount</Label>
                  <Input placeholder="Amount" type="number" />
                </div>
                <div>
                  <Label htmlFor="sgst">SGST(%)</Label>
                  <Input placeholder="SGST" />
                </div>
                <div>
                  <Label htmlFor="cgst">CGST(%)</Label>
                  <Input placeholder="CGST" />
                </div>
                <div>
                  <Label htmlFor="igst">IGST(%)</Label>
                  <Input placeholder="IGST" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Payment Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea placeholder="Description" className="h-20" />
                </div>
                <div>
                  <Label htmlFor="tds">TDS(%)</Label>
                  <Input placeholder="TDS" />
                </div>
                <div>
                  <Label htmlFor="bank">Bank</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="-Select Bank-" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bank1">Bank 1</SelectItem>
                      <SelectItem value="bank2">Bank 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="chequeNo">Cheque No</Label>
                  <Input placeholder="Cheque No" />
                </div>
              </div>

              <div className="flex space-x-2">
                <Button className="bg-blue-600 hover:bg-blue-700">ADD</Button>
                <Button variant="outline" className="bg-orange-500 text-white hover:bg-orange-600">RESET</Button>
              </div>
            </CardContent>
          </Card>

          <div className="text-center text-gray-500 text-sm">
            No results found
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-8 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-sm text-gray-600">
            Version 25.06.3
          </div>
          <div className="text-sm text-gray-600 text-center">
            Powered by <span className="text-blue-600">bluehorizoninfotech.com</span><br />
            Copyright © 2025. All Rights Reserved.
          </div>
          <div className="text-sm text-gray-600">
            <Select>
              <SelectTrigger className="w-32">
                <SelectValue defaultValue="admin">Admin Admin</SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Admin Admin</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BuyerTransactions;
