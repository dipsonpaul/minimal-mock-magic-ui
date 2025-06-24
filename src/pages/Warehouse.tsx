import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import TopNavigation from "@/components/shared/TopNavigation";
import Footer from "@/components/shared/Footer";

const Warehouse = () => {
  // State for warehouse items
  const [warehouseItems, setWarehouseItems] = useState([
    {
      id: 1,
      itemName: "Velvet Upholstery Fabric",
      category: "Textiles",
      quantity: 50,
      unit: "Yards",
      location: "Aisle 1, Shelf B",
      status: "In Stock",
      lastUpdated: "2025-06-20",
      updatedBy: "Emma Johnson",
    },
    {
      id: 2,
      itemName: "Oak Wood Flooring",
      category: "Flooring",
      quantity: 500,
      unit: "Sq Ft",
      location: "Aisle 2, Shelf A",
      status: "In Stock",
      lastUpdated: "2025-06-18",
      updatedBy: "Michael Chen",
    },
    {
      id: 3,
      itemName: "Quartz Countertop",
      category: "Surfaces",
      quantity: 100,
      unit: "Sq Ft",
      location: "Aisle 3, Shelf C",
      status: "Low Stock",
      lastUpdated: "2025-06-15",
      updatedBy: "Sarah Patel",
    },
    {
      id: 4,
      itemName: "Acoustic Wall Panels",
      category: "Acoustics",
      quantity: 20,
      unit: "Panels",
      location: "Aisle 4, Shelf D",
      status: "In Stock",
      lastUpdated: "2025-06-10",
      updatedBy: "David Kim",
    },
  ]);

  // State for modal visibility and form data
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    itemName: "",
    category: "",
    quantity: "",
    unit: "",
    location: "",
    status: "In Stock",
    updatedBy: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: warehouseItems.length + 1,
      ...formData,
      quantity: parseInt(formData.quantity),
      lastUpdated: new Date().toISOString().split('T')[0], // Current date
    };
    setWarehouseItems([newItem, ...warehouseItems]);
    setIsModalOpen(false);
    setFormData({
      itemName: "",
      category: "",
      quantity: "",
      unit: "",
      location: "",
      status: "In Stock",
      updatedBy: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavigation />

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Warehouse</h1>
            <Button
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => setIsModalOpen(true)}
            >
              Add Item
            </Button>
          </div>

          {warehouseItems.length > 0 ? (
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Updated</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Updated By</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {warehouseItems.map((item) => (
                    <tr key={item.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.itemName}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.category}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.quantity}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.unit}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.status}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.lastUpdated}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.updatedBy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center text-gray-500 text-lg py-12">
              No warehouse items found.
            </div>
          )}
        </div>
      </div>

      {/* Modal for Adding Warehouse Item */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Warehouse Item</h2>
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
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                  placeholder="e.g., Aisle 5, Shelf E"
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
                  <option value="In Stock">In Stock</option>
                  <option value="Low Stock">Low Stock</option>
                  <option value="Out of Stock">Out of Stock</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Updated By</label>
                <input
                  type="text"
                  name="updatedBy"
                  value={formData.updatedBy}
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

export default Warehouse;