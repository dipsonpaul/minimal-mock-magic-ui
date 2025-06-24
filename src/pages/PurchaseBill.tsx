import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import TopNavigation from "@/components/shared/TopNavigation";
import Footer from "@/components/shared/Footer";

const PurchaseBill = () => {
  // State for purchase bills
  const [purchaseBills, setPurchaseBills] = useState([
    {
      id: 1,
      billNumber: "PB-001",
      supplier: "FabricWorld Inc.",
      itemDescription: "Velvet Upholstery Fabric",
      quantity: 15,
      unitPrice: 45.00,
      totalAmount: 675.00,
      paymentStatus: "Pending",
      billDate: "2025-06-20",
      issuedBy: "Emma Johnson",
    },
    {
      id: 2,
      billNumber: "PB-002",
      supplier: "TimberCraft Ltd.",
      itemDescription: "Oak Wood Flooring",
      quantity: 200,
      unitPrice: 12.50,
      totalAmount: 2500.00,
      paymentStatus: "Paid",
      billDate: "2025-06-18",
      issuedBy: "Michael Chen",
    },
    {
      id: 3,
      billNumber: "PB-003",
      supplier: "StoneSurfaces Co.",
      itemDescription: "Quartz Countertop",
      quantity: 30,
      unitPrice: 80.00,
      totalAmount: 2400.00,
      paymentStatus: "Pending",
      billDate: "2025-06-15",
      issuedBy: "Sarah Patel",
    },
    {
      id: 4,
      billNumber: "PB-004",
      supplier: "AcousticSolutions",
      itemDescription: "Acoustic Wall Panels",
      quantity: 12,
      unitPrice: 150.00,
      totalAmount: 1800.00,
      paymentStatus: "Paid",
      billDate: "2025-06-10",
      issuedBy: "David Kim",
    },
  ]);

  // State for modal visibility and form data
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    billNumber: "",
    supplier: "",
    itemDescription: "",
    quantity: "",
    unitPrice: "",
    paymentStatus: "Pending",
    issuedBy: "",
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
    const newBill = {
      id: purchaseBills.length + 1,
      ...formData,
      quantity: parseInt(formData.quantity),
      unitPrice: parseFloat(formData.unitPrice),
      totalAmount: totalAmount,
      billDate: new Date().toISOString().split('T')[0], // Current date
    };
    setPurchaseBills([newBill, ...purchaseBills]);
    setIsModalOpen(false);
    setFormData({
      billNumber: "",
      supplier: "",
      itemDescription: "",
      quantity: "",
      unitPrice: "",
      paymentStatus: "Pending",
      issuedBy: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavigation />

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Purchase Bill</h1>
            <Button
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => setIsModalOpen(true)}
            >
              Add Bill
            </Button>
          </div>

          {purchaseBills.length > 0 ? (
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bill #</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supplier</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issued By</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {purchaseBills.map((bill) => (
                    <tr key={bill.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bill.billNumber}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{bill.supplier}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{bill.itemDescription}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bill.quantity}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${bill.unitPrice}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${bill.totalAmount}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bill.paymentStatus}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bill.billDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bill.issuedBy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center text-gray-500 text-lg py-12">
              No purchase bills found.
            </div>
          )}
        </div>
      </div>

      {/* Modal for Adding Purchase Bill */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Purchase Bill</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Bill Number</label>
                <input
                  type="text"
                  name="billNumber"
                  value={formData.billNumber}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                  placeholder="e.g., PB-005"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Supplier</label>
                <input
                  type="text"
                  name="supplier"
                  value={formData.supplier}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
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
              <div className="mb-4">
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
              <div className="mb-4">
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
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Payment Status</label>
                <select
                  name="paymentStatus"
                  value={formData.paymentStatus}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                >
                  <option value="Pending">Pending</option>
                  <option value="Paid">Paid</option>
                  <option value="Overdue">Overdue</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Issued By</label>
                <input
                  type="text"
                  name="issuedBy"
                  value={formData.issuedBy}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button
                  type="button"
                  className="bg-gray-500 hover:bg-gray-600"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default PurchaseBill;