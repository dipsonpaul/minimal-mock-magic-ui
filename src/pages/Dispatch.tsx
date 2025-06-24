import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import TopNavigation from "@/components/shared/TopNavigation";
import Footer from "@/components/shared/Footer";

const Dispatch = () => {
  // State for dispatch records
  const [dispatchRecords, setDispatchRecords] = useState([
    {
      id: 1,
      project: "Living Room Redesign",
      itemDescription: "Velvet Upholstery Fabric",
      quantity: 10,
      unit: "Yards",
      destination: "Client Site - 123 Maple St",
      status: "In Transit",
      dispatchDate: "2025-06-20",
      dispatchedBy: "Emma Johnson",
    },
    {
      id: 2,
      project: "Master Bedroom",
      itemDescription: "Oak Wood Flooring",
      quantity: 150,
      unit: "Sq Ft",
      destination: "Client Site - 456 Oak Ave",
      status: "Delivered",
      dispatchDate: "2025-06-18",
      dispatchedBy: "Michael Chen",
    },
    {
      id: 3,
      project: "Kitchen Renovation",
      itemDescription: "Quartz Countertop",
      quantity: 25,
      unit: "Sq Ft",
      destination: "Client Site - 789 Pine Rd",
      status: "Scheduled",
      dispatchDate: "2025-06-15",
      dispatchedBy: "Sarah Patel",
    },
    {
      id: 4,
      project: "Office Space",
      itemDescription: "Acoustic Wall Panels",
      quantity: 8,
      unit: "Panels",
      destination: "Client Site - 101 Birch Ln",
      status: "Delivered",
      dispatchDate: "2025-06-10",
      dispatchedBy: "David Kim",
    },
  ]);

  // State for modal visibility and form data
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    project: "",
    itemDescription: "",
    quantity: "",
    unit: "",
    destination: "",
    status: "Scheduled",
    dispatchedBy: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newDispatch = {
      id: dispatchRecords.length + 1,
      ...formData,
      quantity: parseInt(formData.quantity),
      dispatchDate: new Date().toISOString().split('T')[0], // Current date
    };
    setDispatchRecords([newDispatch, ...dispatchRecords]);
    setIsModalOpen(false);
    setFormData({
      project: "",
      itemDescription: "",
      quantity: "",
      unit: "",
      destination: "",
      status: "Scheduled",
      dispatchedBy: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavigation />

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Dispatch</h1>
            <Button
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => setIsModalOpen(true)}
            >
              Create Dispatch
            </Button>
          </div>

          {dispatchRecords.length > 0 ? (
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dispatch ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destination</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dispatched By</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {dispatchRecords.map((dispatch) => (
                    <tr key={dispatch.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dispatch.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{dispatch.project}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{dispatch.itemDescription}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dispatch.quantity}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dispatch.unit}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dispatch.destination}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dispatch.status}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dispatch.dispatchDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dispatch.dispatchedBy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center text-gray-500 text-lg py-12">
              No dispatch records found.
            </div>
          )}
        </div>
      </div>

      {/* Modal for Creating Dispatch Record */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Create New Dispatch</h2>
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
                <label className="block text-sm font-medium text-gray-700">Destination</label>
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                  placeholder="e.g., Client Site - 123 Main St"
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
                  <option value="Scheduled">Scheduled</option>
                  <option value="In Transit">In Transit</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Dispatched By</label>
                <input
                  type="text"
                  name="dispatchedBy"
                  value={formData.dispatchedBy}
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

export default Dispatch;