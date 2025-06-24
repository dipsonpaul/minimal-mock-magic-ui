import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table } from 'lucide-react';
import TopNavigation from "@/components/shared/TopNavigation";
import Footer from "@/components/shared/Footer";

const Quotation = () => {
  // State for quotations
  const [quotations, setQuotations] = useState([
    {
      id: 1,
      client: "Jane Doe",
      project: "Living Room Redesign",
      itemDescription: "Velvet Upholstery Fabric",
      quantity: 15,
      unitPrice: 45.00,
      totalAmount: 675.00,
      status: "Pending",
      quotationDate: "2025-06-20",
      createdBy: "Emma Johnson",
    },
    {
      id: 2,
      client: "John Smith",
      project: "Master Bedroom",
      itemDescription: "Oak Wood Flooring",
      quantity: 200,
      unitPrice: 12.50,
      totalAmount: 2500.00,
      status: "Approved",
      quotationDate: "2025-06-18",
      createdBy: "Michael Chen",
    },
    {
      id: 3,
      client: "ABC Corp",
      project: "Kitchen Renovation",
      itemDescription: "Quartz Countertop",
      quantity: 30,
      unitPrice: 80.00,
      totalAmount: 2400.00,
      status: "Draft",
      quotationDate: "2025-06-15",
      createdBy: "Sarah Patel",
    },
    {
      id: 4,
      client: "XYZ Ltd",
      project: "Office Space",
      itemDescription: "Acoustic Wall Panels",
      quantity: 12,
      unitPrice: 150.00,
      totalAmount: 1800.00,
      status: "Sent",
      quotationDate: "2025-06-10",
      createdBy: "David Kim",
    },
  ]);

  // State for form visibility and form data
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    client: "",
    project: "",
    itemDescription: "",
    quantity: "",
    unitPrice: "",
    status: "Draft",
    createdBy: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const totalAmount = parseFloat(formData.quantity) * parseFloat(formData.unitPrice);
    const newQuotation = {
      id: quotations.length + 1,
      ...formData,
      quantity: parseInt(formData.quantity),
      unitPrice: parseFloat(formData.unitPrice).toFixed(2),
      totalAmount: totalAmount.toFixed(2),
      quotationDate: new Date().toISOString().split('T')[0], // Current date
    };
    setQuotations([newQuotation, ...quotations]);
    setFormData({
      client: "",
      project: "",
      itemDescription: "",
      quantity: "",
      unitPrice: "",
      status: "Draft",
      createdBy: "",
    });
    setIsFormVisible(false);
  };

  // Toggle form visibility
  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavigation />

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Quotation</h1>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center">
                  <Table className="h-6 w-6 mr-2" />
                  Create New Quotation
                </CardTitle>
                <Button
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={toggleForm}
                >
                  {isFormVisible ? 'Hide Form' : 'Create Quotation'}
                </Button>
              </div>
            </CardHeader>
            {isFormVisible && (
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Client</label>
                    <input
                      type="text"
                      name="client"
                      value={formData.client}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full border rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Project</label>
                    <input
                      type="text"
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full border rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Item Description</label>
                    <input
                      type="text"
                      name="itemDescription"
                      value={formData.itemDescription}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full border rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Quantity</label>
                    <input
                      type="number"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full border rounded-md"
                      required
                      min="1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Unit Price ($)</label>
                    <input
                      type="number"
                      name="unitPrice"
                      value={formData.unitPrice}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full border rounded-md"
                      required
                      min="0"
                      step="0.01"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Status</label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full border rounded-md"
                      required
                    >
                      <option value="Draft">Draft</option>
                      <option value="Pending">Pending</option>
                      <option value="Sent">Sent</option>
                      <option value="Approved">Approved</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Created By</label>
                    <input
                      type="text"
                      name="createdBy"
                      value={formData.createdBy}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full border rounded-md"
                      required
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button
                      type="button"
                      className="bg-gray-500 hover:bg-gray-600"
                      onClick={() => setIsFormVisible(false)}
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
                <Table className="h-6 w-6 mr-2" />
                Quotation Log
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table class="min-w-full text-sm text-left text-gray-800">
                  <thead class="text-xs uppercase bg-gray-50 text-gray-700">
                    <tr>
                      <th className="px-3 py-3">ID</th>
                      <th className="px-3 py-3">Client</th>
                      <th className="px-3 py-3">Project</th>
                      <th className="px-3 py-3">Item</th>
                      <th className="px-3 py-3 text-right">Quantity</th>
                      <th className="px-3 py-3 text-right">Unit Price</th>
                      <th className="px-3 py-3 text-right">Total</th>
                      <th className="px-2 py-3">Status</th>
                      <th className="px-3 py-3">Date</th>
                      <th className="px-3 py-3">Created</th>
                    </tr>
                  </thead>
                  <tbody>
                    {quotations.map((quotation) => (
                      <tr key={quotation.id} class="border-b bg-white hover:bg-gray-50">
                        <td className="px-4 py-3">{quotation.id}</td>
                        <td className="px-4 py-3">{quotation.client}</td>
                        <td className="px-4 py-3">{quotation.project}</td>
                        <td className="px-4 py-3">{quotation.itemDescription}</td>
                        <td className="px-4 py-3 text-right">{quotation.quantity}</td>
                        <td className="px-4 py-3 text-right">${quotation.unitPrice}</td>
                        <td className="px-4 py-3 text-right font-semibold">${quotation.totalAmount}</td>
                        <td className="px-2 py-3">
                          <span
                            className={`px-2 py-1 rounded text-xs font-semibold ${
                              quotation.status === 'Approved'
                                ? 'bg-green-100 text-green-800'
                                : quotation.status === 'Pending'
                                ? 'bg-yellow-100 text-yellow-800'
                                : quotation.status === 'Sent'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {quotation.status}
                          </span>
                        </td>
                        <td className="px-4 py-3">{quotation.quotationDate}</td>
                        <td className="px-4 py-3">{quotation.createdBy}</td>
                      </tr>
                    ))}
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

export default Quotation;