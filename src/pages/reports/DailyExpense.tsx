
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const DailyExpense = () => {
  const [entryDate, setEntryDate] = useState('09-06-2025');
  const [unReconciled, setUnReconciled] = useState(false);

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
              <Button className="bg-blue-600 hover:bg-blue-700">Add Entries</Button>
              <Button variant="outline">Fund Transfer</Button>
              <Button variant="outline">Close</Button>
            </div>
          </div>

          {/* Entry Controls */}
          <div className="mb-6 flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Label htmlFor="entryDate">Entry Date:</Label>
              <Input 
                id="entryDate" 
                value={entryDate} 
                onChange={(e) => setEntryDate(e.target.value)}
                className="w-40"
              />
            </div>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm">Previous</Button>
              <Button variant="outline" size="sm">Current</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
            <div className="ml-auto text-sm text-gray-600">
              Last Entry date: 31-Oct-2023
            </div>
          </div>

          {/* Checkboxes */}
          <div className="mb-6 flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="unReconciled" 
                checked={unReconciled}
                onCheckedChange={setUnReconciled}
              />
              <Label htmlFor="unReconciled" className="text-sm">UnReconciled</Label>
            </div>
            <span className="text-sm text-gray-600">No results found</span>
          </div>

          {/* Due Bills Section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Due Bills</h2>
            <p className="text-sm text-gray-600">No results found</p>
          </div>

          {/* Transaction Details Card */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Transaction Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Row 1 */}
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Select>
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
                  <Input id="billNo" placeholder="Enter Bill No" />
                </div>
                <div>
                  <Label htmlFor="transactionHead">Transaction Head</Label>
                  <Select>
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
                  <Select>
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
            </CardContent>
          </Card>

          {/* Amount Details Card */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Amount Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <Label htmlFor="amount">Amount</Label>
                  <Input id="amount" placeholder="0.00" />
                </div>
                <div>
                  <Label htmlFor="sgst">SGST(%)</Label>
                  <Input id="sgst" placeholder="0.00" />
                </div>
                <div>
                  <Label htmlFor="cgst">CGST(%)</Label>
                  <Input id="cgst" placeholder="0.00" />
                </div>
                <div>
                  <Label htmlFor="igst">IGST(%)</Label>
                  <Input id="igst" placeholder="0.00" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Details Card */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Payment Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <Label htmlFor="purchaseType">Purchase Type</Label>
                  <Select>
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
                  <Input id="paid" placeholder="0.00" />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Enter description" className="h-20" />
                </div>
                <div className="flex flex-col justify-end">
                  <div className="flex space-x-2">
                    <Button className="bg-blue-600 hover:bg-blue-700">ADD</Button>
                    <Button variant="outline">RESET</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* UnReconciled Section */}
          <div className="mb-6">
            <span className="text-sm text-gray-600">UnReconciled</span>
          </div>

          {/* Footer */}
          <div className="mt-8 flex justify-between items-center text-sm text-gray-600">
            <div>Version 25.05.2</div>
            <div className="text-center">
              <p>Powered by bluehorizoninfotech.com</p>
              <p>Copyright © 2025. All Rights Reserved</p>
            </div>
            <div>Admin Admin</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyExpense;
