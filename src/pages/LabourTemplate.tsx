import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Trash, Table as TableIcon, Pencil } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import TopNavigation from "@/components/shared/TopNavigation";
import Footer from "@/components/shared/Footer";

const LabourTemplate = () => {
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 5;

  const [templates, setTemplates] = useState([
    {
      id: uuidv4(),
      slNo: 1,
      templateName: 'Civil',
      description: '',
      labourTypes: 'Mason (1500), Electrician (1250), Helper (850)',
    },
    {
      id: uuidv4(),
      slNo: 2,
      templateName: 'Electrical',
      description: '',
      labourTypes: 'Electrician (1250), Helper (850)',
    },
    {
      id: uuidv4(),
      slNo: 3,
      templateName: 'Civil+Electrical',
      description: '',
      labourTypes: 'Mason (1500), Electrician (1250), Carpenter (1000), Helper (850)',
    },
    {
      id: uuidv4(),
      slNo: 4,
      templateName: 'Factory Related Works',
      description: 'Factory related works etc.',
      labourTypes: 'Carpenter (1000), Helper (850)',
    },
    {
      id: uuidv4(),
      slNo: 5,
      templateName: 'Office Cleaning',
      description: 'Office cleaning',
      labourTypes: 'Helper (850), Local Cleaning (900)',
    },
  ]);

  const [formData, setFormData] = useState({
    templateName: '',
    description: '',
    labourTypes: '',
  });

  const handleAddTemplate = () => {
    setShowForm(true);
    setEditId(null);
    setFormData({
      templateName: '',
      description: '',
      labourTypes: '',
    });
  };

  const handleEditTemplate = (template) => {
    setShowForm(true);
    setEditId(template.id);
    setFormData({
      templateName: template.templateName,
      description: template.description,
      labourTypes: template.labourTypes,
    });
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditId(null);
    setFormData({
      templateName: '',
      description: '',
      labourTypes: '',
    });
  };

  const handleDelete = (id) => {
    const updatedTemplates = templates
      .filter(template => template.id !== id)
      .map((template, index) => ({ ...template, slNo: index + 1 }));
    setTemplates(updatedTemplates);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      // Edit existing template
      const updatedTemplates = templates.map(template =>
        template.id === editId
          ? {
              ...template,
              templateName: formData.templateName || 'Unknown',
              description: formData.description || '',
              labourTypes: formData.labourTypes || 'N/A',
            }
          : template
      );
      setTemplates(updatedTemplates);
    } else {
      // Add new template
      const newTemplate = {
        id: uuidv4(),
        slNo: templates.length + 1,
        templateName: formData.templateName || 'Unknown',
        description: formData.description || '',
        labourTypes: formData.labourTypes || 'N/A',
      };
      setTemplates([...templates, newTemplate]);
    }
    handleCancel();
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  const filteredTemplates = templates.filter(template =>
    template.templateName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    template.labourTypes.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredTemplates.length / entriesPerPage);
  const paginatedTemplates = filteredTemplates.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavigation />

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Labour Template</h1>
            <Button
              className="bg-blue-600 hover:bg-blue-700"
              onClick={handleAddTemplate}
              disabled={showForm}
            >
              Add Labour Template
            </Button>
          </div>

          {showForm && (
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" onClick={handleCancel}>
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <CardTitle>{editId ? 'Edit Labour Template' : 'Add New Labour Template'}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="templateName">Template Name</Label>
                      <Input
                        id="templateName"
                        value={formData.templateName}
                        onChange={handleInputChange}
                        placeholder="Enter Template Name"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Enter Description"
                        className="h-20"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1">
                    <div>
                      <Label htmlFor="labourTypes">Labour Types</Label>
                      <Textarea
                        id="labourTypes"
                        value={formData.labourTypes}
                        onChange={handleInputChange}
                        placeholder="Enter Labour Types (e.g., Mason (1500), Helper (850))"
                        className="h-20"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button type="submit" className="bg-blue-600 hover:bg-blue-700">Save</Button>
                    <Button type="button" variant="outline" onClick={handleCancel}>Cancel</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          <Card className="mb-6">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center">
                  <TableIcon className="h-6 w-6 mr-2" />
                  Labour Templates
                </CardTitle>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">Search:</span>
                  <Input
                    placeholder="Search..."
                    className="w-48"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {paginatedTemplates.length === 0 ? (
                <p className="text-sm text-gray-600 text-center py-12">No labour templates found.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm text-left text-gray-800">
                    <thead className="text-xs uppercase bg-gray-50 text-gray-700">
                      <tr>
                        <th className="px-3 py-3">Action</th>
                        <th className="px-3 py-3">Sl No</th>
                        <th className="px-3 py-3">Template Name</th>
                        <th className="px-3 py-3">Description</th>
                        <th className="px-3 py-3">Labour Types</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedTemplates.map((template) => (
                        <tr key={template.id} className="border-b bg-white hover:bg-gray-50">
                          <td className="px-4 py-3">
                            <div className="flex space-x-1">
                              <Button
                                size="sm"
                                variant="ghost"
                                className="h-6 w-6 p-0"
                                onClick={() => handleEditTemplate(template)}
                              >
                                <Pencil className="h-4 w-4 text-blue-600" />
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                className="h-6 w-6 p-0"
                                onClick={() => handleDelete(template.id)}
                              >
                                <Trash className="h-4 w-4 text-red-600" />
                              </Button>
                            </div>
                          </td>
                          <td className="px-4 py-3">{template.slNo}</td>
                          <td className="px-4 py-3">{template.templateName}</td>
                          <td className="px-4 py-3">{template.description || 'N/A'}</td>
                          <td className="px-4 py-3">{template.labourTypes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              <div className="mt-4 text-sm text-gray-600">
                Showing {(currentPage - 1) * entriesPerPage + 1} to {Math.min(currentPage * entriesPerPage, filteredTemplates.length)} of {filteredTemplates.length} entries
              </div>
              <div className="mt-4 flex justify-end space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-blue-600 text-white"
                >
                  {currentPage}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LabourTemplate;