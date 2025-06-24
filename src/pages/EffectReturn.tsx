import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import TopNavigation from "@/components/shared/TopNavigation";
import Footer from "@/components/shared/Footer";

const EffectReturn = () => {
  // State for effect returns
  const [effectReturns, setEffectReturns] = useState([
    {
      id: 1,
      itemName: "Velvet Upholstery Fabric",
      project: "Living Room Redesign",
      quantityReturned: 5,
      unit: "Yards",
      reason: "Defective stitching",
      status: "Pending",
      returnDate: "2025-06-20",
      processedBy: "Emma Johnson",
    },
    {
      id: 2,
      itemName: "Oak Wood Flooring",
      project: "Master Bedroom",
      quantityReturned: 30,
      unit: "Sq Ft",
      reason: "Color mismatch",
      status: "Approved",
      returnDate: "2025-06-18",
      processedBy: "Michael Chen",
    },
    {
      id: 3,
      itemName: "Quartz Countertop",
      project: "Kitchen Renovation",
      quantityReturned: 10,
      unit: "Sq Ft",
      reason: "Cracked during installation",
      status: "Processed",
      returnDate: "2025-06-15",
      processedBy: "Sarah Patel",
    },
    {
      id: 4,
      itemName: "Acoustic Wall Panels",
      project: "Office Space",
      quantityReturned: 3,
      unit: "Panels",
      reason: "Incorrect size",
      status: "Rejected",
      returnDate: "2025-06-10",
      processedBy: "David Kim",
    },
  ]);

  // State for modal visibility and form data
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    itemName: "",
    project: "",
    quantityReturned: "",
    unit: "",
    reason: "",
    status: "Pending",
    processedBy: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newReturn = {
      id: effectReturns.length + 1,
      ...formData,
      quantityReturned: parseInt(formData.quantityReturned),
      returnDate: new Date().toISOString().split('T')[0], // Current date
    };
    setEffectReturns([newReturn, ...effectReturns]);
    setIsModalOpen(false);
    setFormData({
      itemName: "",
      project: "",
      quantityReturned: "",
      unit: "",
      reason: "",
      status: "Pending",
      processedBy: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavigation />

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Effect Return</h1>
            <Button
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => setIsModalOpen(true)}
            >
              Process Return
            </Button>
          </div>

          {effectReturns.length > 0 ? (
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Return ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qty Returned</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reason</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Processed By</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {effectReturns.map((returnItem) => (
                    <tr key={returnItem.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{returnItem.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{returnItem.itemName}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{returnItem.project}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{returnItem.quantityReturned}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{returnItem.unit}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{returnItem.reason}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{returnItem.status}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{returnItem.returnDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{returnItem.processedBy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center text-gray-500 text-lg py-12">
              No effect returns found.
            </div>
          )}
        </div>
      </div>

      {/* Modal for Processing Effect Return */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Process New Effect Return</h2>
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
                <label className="block text-sm font-medium text-gray-700">Quantity Returned</label>
                <input
                  type="number"
                  name="quantityReturned"
                  value={formData.quantityReturned}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                  min="1"
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
                  placeholder="e.g., Defective, incorrect size"
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
                  <option value="Processed">Processed</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Processed By</label>
                <input
                  type="text"
                  name="processedBy"
                  value={formData.processedBy}
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

export default EffectReturn;