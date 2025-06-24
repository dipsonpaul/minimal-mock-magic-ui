import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table } from 'lucide-react';
import TopNavigation from "@/components/shared/TopNavigation";
import Footer from "@/components/shared/Footer";

const TermsAndConditions = () => {
  // State for terms and conditions
  const [terms, setTerms] = useState([
    {
      id: 1,
      title: "Payment Terms",
      description: "50% advance payment required before project commencement, remaining 50% upon completion.",
      category: "Financial",
      status: "Active",
      createdDate: "2025-06-20",
      createdBy: "Emma Johnson",
    },
    {
      id: 2,
      title: "Material Delivery",
      description: "Client responsible for ensuring access for material delivery; delays may incur additional costs.",
      category: "Logistics",
      status: "Active",
      createdDate: "2025-06-18",
      createdBy: "Michael Chen",
    },
    {
      id: 3,
      title: "Project Timeline",
      description: "Project completion within 8 weeks, subject to client approvals and material availability.",
      category: "Timeline",
      status: "Draft",
      createdDate: "2025-06-15",
      createdBy: "Sarah Patel",
    },
    {
      id: 4,
      title: "Warranty",
      description: "1-year warranty on installation; does not cover damages due to misuse or natural wear.",
      category: "After-Service",
      status: "Active",
      createdDate: "2025-06-10",
      createdBy: "David Kim",
    },
  ]);

  // State for form visibility and form data
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
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
    const newTerm = {
      id: terms.length + 1,
      ...formData,
      createdDate: new Date().toISOString().split('T')[0], // Current date
    };
    setTerms([newTerm, ...terms]);
    setFormData({
      title: "",
      description: "",
      category: "",
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
            <h1 className="text-3xl font-bold text-gray-800">Terms and Conditions</h1>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center">
                  <Table className="h-6 w-6 mr-2" />
                  Add New Term
                </CardTitle>
                <Button
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={toggleForm}
                >
                  {isFormVisible ? 'Hide Form' : 'Add Terms'}
                </Button>
              </div>
            </CardHeader>
            {isFormVisible && (
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full border rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full border rounded-md"
                      required
                      rows="4"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Category</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full border rounded-md"
                      required
                    >
                      <option value="">Select Category</option>
                      <option value="Financial">Financial</option>
                      <option value="Logistics">Logistics</option>
                      <option value="Timeline">Timeline</option>
                      <option value="After-Service">After-Service</option>
                    </select>
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
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
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
                Terms and Conditions Log
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left text-gray-800">
                  <thead className="text-xs uppercase bg-gray-50 text-gray-700">
                    <tr>
                      <th className="px-3 py-3">ID</th>
                      <th className="px-3 py-3">Title</th>
                      <th className="px-3 py-3">Description</th>
                      <th className="px-3 py-3">Category</th>
                      <th className="px-2 py-3">Status</th>
                      <th className="px-3 py-3">Date</th>
                      <th className="px-3 py-3">Created</th>
                    </tr>
                  </thead>
                  <tbody>
                    {terms.map((term) => (
                      <tr key={term.id} className="border-b bg-white hover:bg-gray-50">
                        <td className="px-4 py-3">{term.id}</td>
                        <td className="px-4 py-3">{term.title}</td>
                        <td className="px-4 py-3 text-sm">{term.description}</td>
                        <td className="px-4 py-3">{term.category}</td>
                        <td className="px-2 py-3">
                          <span
                            className={`px-2 py-1 rounded text-xs font-semibold ${
                              term.status === 'Active'
                                ? 'bg-green-100 text-green-800'
                                : term.status === 'Draft'
                                ? 'bg-gray-100 text-gray-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {term.status}
                          </span>
                        </td>
                        <td className="px-4 py-3">{term.createdDate}</td>
                        <td className="px-4 py-3">{term.createdBy}</td>
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

export default TermsAndConditions;