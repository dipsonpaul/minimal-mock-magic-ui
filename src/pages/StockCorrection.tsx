import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import TopNavigation from "@/components/shared/TopNavigation";
import Footer from "@/components/shared/Footer";

const StockCorrection = () => {
  // State for stock corrections
  const [stockCorrections, setStockCorrections] = useState([
    {
      id: 1,
      itemName: "Velvet Upholstery Fabric",
      category: "Textiles",
      quantityAdjusted: -5,
      unit: "Yards",
      reason: "Damaged during storage",
      status: "Completed",
      correctionDate: "2025-06-20",
      correctedBy: "Emma Johnson",
    },
    {
      id: 2,
      itemName: "Oak Wood Flooring",
      category: "Flooring",
      quantityAdjusted: 20,
      unit: "Sq Ft",
      reason: "Inventory miscount",
      status: "Pending",
      correctionDate: "2025-06-18",
      correctedBy: "Michael Chen",
    },
    {
      id: 3,
      itemName: "Quartz Countertop",
      category: "Surfaces",
      quantityAdjusted: -10,
      unit: "Sq Ft",
      reason: "Defective batch",
      status: "Completed",
      correctionDate: "2025-06-15",
      correctedBy: "Sarah Patel",
    },
    {
      id: 4,
      itemName: "Acoustic Wall Panels",
      category: "Acoustics",
      quantityAdjusted: 5,
      unit: "Panels",
      reason: "Found additional stock",
      status: "Approved",
      correctionDate: "2025-06-10",
      correctedBy: "David Kim",
    },
  ]);

  // State for modal visibility and form data
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    itemName: "",
    category: "",
    quantityAdjusted: "",
    unit: "",
    reason: "",
    status: "Pending",
    correctedBy: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCorrection = {
      id: stockCorrections.length + 1,
      ...formData,
      quantityAdjusted: parseInt(formData.quantityAdjusted),
      correctionDate: new Date().toISOString().split('T')[0], // Current date
    };
    setStockCorrections([newCorrection, ...stockCorrections]);
    setIsModalOpen(false);
    setFormData({
      itemName: "",
      category: "",
      quantityAdjusted: "",
      unit: "",
      reason: "",
      status: "Pending",
      correctedBy: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavigation />

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Stock Correction</h1>
            <Button
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => setIsModalOpen(true)}
            >
              Add Correction
            </Button>
          </div>

          {stockCorrections.length > 0 ? (
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Correction ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qty Adjusted</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reason</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Corrected By</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {stockCorrections.map((correction) => (
                    <tr key={correction.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{correction.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{correction.itemName}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{correction.category}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{correction.quantityAdjusted}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{correction.unit}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{correction.reason}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{correction.status}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{correction.correctionDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{correction.correctedBy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center text-gray-500 text-lg py-12">
              No stock corrections found.
            </div>
          )}
        </div>
      </div>

      {/* Modal for Adding Stock Correction */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Stock Correction</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Item Name</label>
                <input
                  type="text"
                  name="itemName"
                  value={formData.itemName}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Textiles">Textiles</option>
                  <option value="Flooring">Flooring</option>
                  <option value="Surfaces">Surfaces</option>
                  <option value="Acoustics">Acoustics</option>
                  <option value="Furniture">Furniture</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Quantity Adjusted</label>
                <input
                  type="number"
                  name="quantityAdjusted"
                  value={formData.quantityAdjusted}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                  placeholder="Positive or negative number"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Unit</label>
                <select
                  name="unit"
                  value={formData.unit}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                >
                  <option value="">Select Unit</option>
                  <option value="Yards">Yards</option>
                  <option value="Sq Ft">Sq Ft</option>
                  <option value="Panels">Panels</option>
                  <option value="Units">Units</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Reason</label>
                <input
                  type="text"
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                  placeholder="e.g., Damaged stock, miscount"
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
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approved</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Corrected By</label>
                <input
                  type="text"
                  name="correctedBy"
                  value={formData.correctedBy}
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

export default StockCorrection;