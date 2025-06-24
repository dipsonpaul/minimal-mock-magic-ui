import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import TopNavigation from "@/components/shared/TopNavigation";
import Footer from "@/components/shared/Footer";

const PreviewPurchase = () => {
  // State for purchase previews
  const [previews, setPreviews] = useState([
    {
      id: 1,
      project: "Living Room Redesign",
      itemDescription: "Velvet Upholstery Fabric",
      quantity: 15,
      unitPrice: 45.00,
      totalAmount: 675.00,
      status: "Draft",
      previewDate: "2025-06-20",
      requestedBy: "Emma Johnson",
    },
    {
      id: 2,
      project: "Master Bedroom",
      itemDescription: "Oak Wood Flooring",
      quantity: 200,
      unitPrice: 12.50,
      totalAmount: 2500.00,
      status: "Reviewed",
      previewDate: "2025-06-18",
      requestedBy: "Michael Chen",
    },
    {
      id: 3,
      project: "Kitchen Renovation",
      itemDescription: "Quartz Countertop",
      quantity: 30,
      unitPrice: 80.00,
      totalAmount: 2400.00,
      status: "Draft",
      previewDate: "2025-06-15",
      requestedBy: "Sarah Patel",
    },
    {
      id: 4,
      project: "Office Space",
      itemDescription: "Acoustic Wall Panels",
      quantity: 12,
      unitPrice: 150.00,
      totalAmount: 1800.00,
      status: "Approved",
      previewDate: "2025-06-10",
      requestedBy: "David Kim",
    },
  ]);

  // State for modal visibility and form data
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    project: "",
    itemDescription: "",
    quantity: "",
    unitPrice: "",
    status: "Draft",
    requestedBy: "",
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
    const newPreview = {
      id: previews.length + 1,
      ...formData,
      quantity: parseInt(formData.quantity),
      unitPrice: parseFloat(formData.unitPrice),
      totalAmount: totalAmount,
      previewDate: new Date().toISOString().split('T')[0], // Current date
    };
    setPreviews([newPreview, ...previews]);
    setIsModalOpen(false);
    setFormData({
      project: "",
      itemDescription: "",
      quantity: "",
      unitPrice: "",
      status: "Draft",
      requestedBy: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavigation />

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Preview Purchase</h1>
            <Button
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => setIsModalOpen(true)}
            >
              Generate Preview
            </Button>
          </div>

          {previews.length > 0 ? (
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Preview ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Requested By</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {previews.map((preview) => (
                    <tr key={preview.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{preview.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{preview.project}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{preview.itemDescription}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{preview.quantity}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${preview.unitPrice}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${preview.totalAmount}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{preview.status}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{preview.previewDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{preview.requestedBy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center text-gray-500 text-lg py-12">
              No purchase previews available.
            </div>
          )}
        </div>
      </div>

      {/* Modal for Generating Purchase Preview */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Generate New Purchase Preview</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
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
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                >
                  <option value="Draft">Draft</option>
                  <option value="Reviewed">Reviewed</option>
                  <option value="Approved">Approved</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Requested By</label>
                <input
                  type="text"
                  name="requestedBy"
                  value={formData.requestedBy}
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

export default PreviewPurchase;