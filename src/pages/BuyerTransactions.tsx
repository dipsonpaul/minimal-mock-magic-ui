
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import TopNavigation from "@/components/shared/TopNavigation";
import Footer from "@/components/shared/Footer";

const BuyerTransactions = () => {
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
    description: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (id) => (value) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

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
      description: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavigation />

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-800">BUYER TRANSACTIONS</h1>
            <Button className="bg-blue-600 hover:bg-blue-700">Close</Button>
          </div>

          <div className="mb-4 flex items-center space-x-4">
            <div>
              <span className="text-sm font-medium">Entry Date:</span>
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
              <span className="text-sm font-medium">Last Entry date</span>
            </div>
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
                        <SelectItem value="company1">Company 1</SelectItem>
                        <SelectItem value="company2">Company 2</SelectItem>
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
                        <SelectItem value="buyer1">Buyer 1</SelectItem>
                        <SelectItem value="buyer2">Buyer 2</SelectItem>
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
                        <SelectItem value="project1">Project 1</SelectItem>
                        <SelectItem value="project2">Project 2</SelectItem>
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
                        <SelectItem value="apt1">Apartment 1</SelectItem>
                        <SelectItem value="apt2">Apartment 2</SelectItem>
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
                        <SelectItem value="advance">Advance</SelectItem>
                        <SelectItem value="receipt">Receipt</SelectItem>
                        <SelectItem value="expense">Expense</SelectItem>
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
                      <Input id="amount" value={formData.amount} onChange={handleInputChange} placeholder="Amount" />
                    </div>
                    <div>
                      <Label htmlFor="sgst">SGST(%)</Label>
                      <Input id="sgst" value={formData.sgst} onChange={handleInputChange} placeholder="SGST" />
                    </div>
                    <div>
                      <Label htmlFor="cgst">CGST(%)</Label>
                      <Input id="cgst" value={formData.cgst} onChange={handleInputChange} placeholder="CGST" />
                    </div>
                    <div>
                      <Label htmlFor="igst">IGST(%)</Label>
                      <Input id="igst" value={formData.igst} onChange={handleInputChange} placeholder="IGST" />
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
                      <Input id="tds" value={formData.tds} onChange={handleInputChange} placeholder="TDS" />
                    </div>
                    <div>
                      <Label htmlFor="bank">Bank</Label>
                      <Select value={formData.bank} onValueChange={handleSelectChange('bank')}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Bank" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bank1">Bank 1</SelectItem>
                          <SelectItem value="bank2">Bank 2</SelectItem>
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
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700">ADD</Button>
                  <Button type="button" onClick={handleReset} className="bg-orange-500 hover:bg-orange-600">RESET</Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="text-center text-gray-500 text-lg py-12">
            No results found
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BuyerTransactions;
