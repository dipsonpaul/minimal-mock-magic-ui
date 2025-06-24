import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import TopNavigation from "@/components/shared/TopNavigation";
import Footer from "@/components/shared/Footer";

const MaterialsRequisition = () => {
  // State for requisitions
  const [requisitions, setRequisitions] = useState([
    {
      id: 1,
      project: "Living Room Redesign",
      item: "Velvet Upholstery Fabric",
      quantity: 15,
      unit: "Yards",
      status: "Pending",
      date: "2025-06-20",
      requestedBy: "Emma Johnson",
    },
    {
      id: 2,
      project: "Master Bedroom",
      item: "Oak Wood Flooring",
      quantity: 200,
      unit: "Sq Ft",
      status: "Approved",
      date: "2025-06-18",
      requestedBy: "Michael Chen",
    },
    {
      id: 3,
      project: "Kitchen Renovation",
      item: "Quartz Countertop",
      quantity: 30,
      unit: "Sq Ft",
      status: "Ordered",
      date: "2025-06-15",
      requestedBy: "Sarah Patel",
    },
    {
      id: 4,
      project: "Office Space",
      item: "Acoustic Wall Panels",
      quantity: 12,
      unit: "Panels",
      status: "Delivered",
      date: "2025-06-10",
      requestedBy: "David Kim",
    },
  ]);

  // State for modal visibility and form data
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    project: "",
    item: "",
    quantity: "",
    unit: "",
    status: "Pending",
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
    const newRequisition = {
      id: requisitions.length + 1,
      ...formData,
      quantity: Number(formData.quantity),
      date: new Date().toISOString().split('T')[0], // Current date
    };
    setRequisitions([newRequisition, ...requisitions]);
    setIsModalOpen(false);
    setFormData({
      project: "",
      item: "",
      quantity: "",
      unit: "",
      status: "Pending",
      requestedBy: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavigation />

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Materials Requisition</h1>
            <Button
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => setIsModalOpen(true)}
            >
              Add Requisition
            </Button>
          </div>

          {requisitions.length > 0 ? (
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Requested By</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {requisitions.map((req) => (
                    <tr key={req.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{req.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{req.project}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{req.item}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{req.quantity}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{req.unit}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{req.status}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{req.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{req.requestedBy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center text-gray-500 text-lg py-12">
              No materials requisitions found.
            </div>
          )}
        </div>
      </div>

      {/* Modal for Adding Requisition */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Requisition</h2>
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
                <label className="block text-sm font-medium text-gray-700">Item</label>
                <input
                  type="text"
                  name="item"
                  value={formData.item}
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
                  <option value="Ordered">Ordered</option>
                  <option value="Delivered">Delivered</option>
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

export default MaterialsRequisition;