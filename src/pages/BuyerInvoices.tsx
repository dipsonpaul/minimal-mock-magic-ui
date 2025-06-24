import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table as TableIcon } from 'lucide-react';
import TopNavigation from "@/components/shared/TopNavigation";
import Footer from "@/components/shared/Footer";

const BuyerInvoices = () => {
  // State for invoices
  const [invoices, setInvoices] = useState([
    {
      id: 1,
      buyer: "Jane Doe",
      project: "Living Room Redesign",
      invoiceNo: "INV001",
      amount: 12000,
      sgst: 9,
      cgst: 9,
      igst: 0,
      status: "Pending",
      invoiceDate: "2025-06-20",
      createdBy: "Emma Johnson",
    },
    {
      id: 2,
      buyer: "John Smith",
      project: "Master Bedroom",
      invoiceNo: "INV002",
      amount: 18000,
      sgst: 9,
      cgst: 9,
      igst: 0,
      status: "Paid",
      invoiceDate: "2025-06-18",
      createdBy: "Michael Chen",
    },
    {
      id: 3,
      buyer: "ABC Corp",
      project: "Kitchen Renovation",
      invoiceNo: "INV003",
      amount: 10000,
      sgst: 0,
      cgst: 0,
      igst: 18,
      status: "Draft",
      invoiceDate: "2025-06-15",
      createdBy: "Sarah Patel",
    },
  ]);

  // State for form visibility and form data
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    buyer: '',
    project: '',
    invoiceNo: '',
    amount: '',
    sgst: '',
    cgst: '',
    igst: '',
    status: 'Draft',
    createdBy: '',
  });

  // State for date filter (null for "See All")
  const [selectedDate, setSelectedDate] = useState('2025-06-19'); // Default date

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
    const newInvoice = {
      id: invoices.length + 1,
      ...formData,
      amount: parseFloat(formData.amount) || 0,
      sgst: parseFloat(formData.sgst) || 0,
      cgst: parseFloat(formData.cgst) || 0,
      igst: parseFloat(formData.igst) || 0,
      invoiceDate: new Date().toISOString().split('T')[0], // Current date
    };
    setInvoices([newInvoice, ...invoices]);
    handleReset();
    setIsFormVisible(false);
  };

  // Handle form reset
  const handleReset = () => {
    setFormData({
      buyer: '',
      project: '',
      invoiceNo: '',
      amount: '',
      sgst: '',
      cgst: '',
      igst: '',
      status: 'Draft',
      createdBy: '',
    });
  };

  // Toggle form visibility
  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
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

  // Filter invoices based on selected date
  const filteredInvoices = selectedDate
    ? invoices.filter((inv) => inv.invoiceDate === selectedDate)
    : invoices;

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavigation />

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Buyer Invoices</h1>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center">
                  <TableIcon className="h-6 w-6 mr-2" />
                  Create New Invoice
                </CardTitle>
                <Button
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={toggleForm}
                >
                  {isFormVisible ? 'Hide Form' : 'Create Invoice'}
                </Button>
              </div>
            </CardHeader>
            {isFormVisible && (
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
                      <Label htmlFor="invoiceNo">Invoice No</Label>
                      <Input id="invoiceNo" value={formData.invoiceNo} onChange={handleInputChange} placeholder="Invoice No" required />
                    </div>
                    <div>
                      <Label htmlFor="amount">Amount</Label>
                      <Input
                        id="amount"
                        value={formData.amount}
                        onChange={handleInputChange}
                        placeholder="Amount"
                        type="number"
                        step="0.01"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="sgst">SGST(%)</Label>
                      <Input
                        id="sgst"
                        value={formData.sgst}
                        onChange={handleInputChange}
                        placeholder="SGST"
                        type="number"
                        step="0.01"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cgst">CGST(%)</Label>
                      <Input
                        id="cgst"
                        value={formData.cgst}
                        onChange={handleInputChange}
                        placeholder="CGST"
                        type="number"
                        step="0.01"
                      />
                    </div>
                    <div>
                      <Label htmlFor="igst">IGST(%)</Label>
                      <Input
                        id="igst"
                        value={formData.igst}
                        onChange={handleInputChange}
                        placeholder="IGST"
                        type="number"
                        step="0.01"
                      />
                    </div>
                    <div>
                      <Label htmlFor="status">Status</Label>
                      <Select value={formData.status} onValueChange={handleSelectChange('status')}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Draft">Draft</SelectItem>
                          <SelectItem value="Pending">Pending</SelectItem>
                          <SelectItem value="Paid">Paid</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="createdBy">Created By</Label>
                      <Input id="createdBy" value={formData.createdBy} onChange={handleInputChange} placeholder="Created By" required />
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button
                      type="button"
                      className="bg-gray-500 hover:bg-gray-600"
                      onClick={() => {
                        handleReset();
                        setIsFormVisible(false);
                      }}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                      Submit
                    </Button>
                  </div>
                </form>
              </CardContent>
            )}
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TableIcon className="h-6 w-6 mr-2" />
                Invoice Log
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
                      <th className="px-3 py-3">Buyer</th>
                      <th className="px-3 py-3">Project</th>
                      <th className="px-3 py-3">Invoice No</th>
                      <th className="px-3 py-3 text-right">Amount</th>
                      <th className="px-3 py-3 text-right">SGST</th>
                      <th className="px-3 py-3 text-right">CGST</th>
                      <th className="px-3 py-3 text-right">IGST</th>
                      <th className="px-2 py-3">Status</th>
                      <th className="px-3 py-3">Date</th>
                      <th className="px-3 py-3">Created By</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredInvoices.length > 0 ? (
                      filteredInvoices.map((inv) => (
                        <tr key={inv.id} className="border-b bg-white hover:bg-gray-50">
                          <td className="px-4 py-3">{inv.id}</td>
                          <td className="px-4 py-3">{inv.buyer}</td>
                          <td className="px-4 py-3">{inv.project}</td>
                          <td className="px-4 py-3">{inv.invoiceNo}</td>
                          <td className="px-4 py-3 text-right font-semibold">${inv.amount.toFixed(2)}</td>
                          <td className="px-4 py-3 text-right">{inv.sgst}%</td>
                          <td className="px-4 py-3 text-right">{inv.cgst}%</td>
                          <td className="px-4 py-3 text-right">{inv.igst}%</td>
                          <td className="px-2 py-3">
                            <span
                              className={`px-2 py-1 rounded text-xs font-semibold ${
                                inv.status === 'Paid'
                                  ? 'bg-green-100 text-green-800'
                                  : inv.status === 'Pending'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : 'bg-gray-100 text-gray-800'
                              }`}
                            >
                              {inv.status}
                            </span>
                          </td>
                          <td className="px-4 py-3">{inv.invoiceDate}</td>
                          <td className="px-4 py-3">{inv.createdBy}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={11} className="px-4 py-3 text-center text-gray-500">
                          No invoices found for the selected date.
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

export default BuyerInvoices;