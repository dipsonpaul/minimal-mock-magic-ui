import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table as TableIcon, ArrowLeft, Trash } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import TopNavigation from "@/components/shared/TopNavigation";
import Footer from "@/components/shared/Footer";

const LabourEntries = () => {
  const [showForm, setShowForm] = useState(false);
  const [entries, setEntries] = useState([
    {
      id: uuidv4(),
      company: 'Company 1',
      project: 'Living Room Redesign',
      worker: 'John Doe',
      task: 'Painting',
      hoursWorked: 8,
      ratePerHour: 25.00,
      totalAmount: 200.00,
      entryDate: '2025-06-19',
    },
    {
      id: uuidv4(),
      company: 'Company 2',
      project: 'Master Bedroom',
      worker: 'Jane Smith',
      task: 'Carpentry',
      hoursWorked: 6,
      ratePerHour: 30.00,
      totalAmount: 180.00,
      entryDate: '2025-06-18',
    },
    {
      id: uuidv4(),
      company: 'Company 1',
      project: 'Kitchen Renovation',
      worker: 'Mike Johnson',
      task: 'Tiling',
      hoursWorked: 10,
      ratePerHour: 28.00,
      totalAmount: 280.00,
      entryDate: '2025-06-15',
    },
  ]);

  const [formData, setFormData] = useState({
    company: '',
    project: '',
    worker: '',
    task: '',
    hoursWorked: '',
    ratePerHour: '',
    entryDate: '2025-06-19',
  });

  const [selectedDate, setSelectedDate] = useState('2025-06-19'); // Default to provided date

  const handleAddEntry = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setFormData({
      company: '',
      project: '',
      worker: '',
      task: '',
      hoursWorked: '',
      ratePerHour: '',
      entryDate: '2025-06-19',
    });
  };

  const handleDelete = (id) => {
    setEntries(entries.filter(entry => entry.id !== id));
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (id) => (value) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hours = parseFloat(formData.hoursWorked) || 0;
    const rate = parseFloat(formData.ratePerHour) || 0;
    const newEntry = {
      id: uuidv4(),
      company: formData.company || 'Unknown',
      project: formData.project || 'Unknown',
      worker: formData.worker || 'Unknown',
      task: formData.task || 'Unknown',
      hoursWorked: hours,
      ratePerHour: rate,
      totalAmount: hours * rate,
      entryDate: formData.entryDate || new Date().toISOString().split('T')[0],
    };
    setEntries([newEntry, ...entries]);
    handleCancel();
  };

  const handlePreviousDate = () => {
    const currentDate = new Date(selectedDate);
    currentDate.setDate(currentDate.getDate() - 1);
    setSelectedDate(currentDate.toISOString().split('T')[0]);
  };

  const handleNextDate = () => {
    const currentDate = new Date(selectedDate);
    currentDate.setDate(currentDate.getDate() + 1);
    setSelectedDate(currentDate.toISOString().split('T')[0]);
  };

  const handleCurrentDate = () => {
    setSelectedDate(new Date().toISOString().split('T')[0]);
  };

  const handleSeeAll = () => {
    setSelectedDate(null); // Null indicates no date filter
  };

  const filteredEntries = selectedDate
    ? entries.filter((entry) => entry.entryDate === selectedDate)
    : entries;

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavigation />

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Labour Entries</h1>
            <div className="flex space-x-2">
              <Button className="bg-blue-600 hover:bg-blue-700">Entries</Button>
              <Button
                variant="outline"
                onClick={handleAddEntry}
                disabled={showForm}
              >
                Add Entries
              </Button>
              <Button variant="outline">Estimation</Button>
            </div>
          </div>

          
          {showForm && (
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" onClick={handleCancel}>
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <CardTitle>Add New Labour Entry</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <Label htmlFor="entryDate">Entry Date</Label>
                      <Input
                        id="entryDate"
                        type="date"
                        value={formData.entryDate}
                        onChange={handleInputChange}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Select value={formData.company} onValueChange={handleSelectChange('company')}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Company" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Company 1">Company 1</SelectItem>
                          <SelectItem value="Company 2">Company 2</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="project">Project</Label>
                      <Select value={formData.project} onValueChange={handleSelectChange('project')}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Project" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Living Room Redesign">Living Room Redesign</SelectItem>
                          <SelectItem value="Master Bedroom">Master Bedroom</SelectItem>
                          <SelectItem value="Kitchen Renovation">Kitchen Renovation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="worker">Worker</Label>
                      <Select value={formData.worker} onValueChange={handleSelectChange('worker')}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Worker" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="John Doe">John Doe</SelectItem>
                          <SelectItem value="Jane Smith">Jane Smith</SelectItem>
                          <SelectItem value="Mike Johnson">Mike Johnson</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <Label htmlFor="task">Task</Label>
                      <Select value={formData.task} onValueChange={handleSelectChange('task')}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Task" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Painting">Painting</SelectItem>
                          <SelectItem value="Carpentry">Carpentry</SelectItem>
                          <SelectItem value="Tiling">Tiling</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="hoursWorked">Hours Worked</Label>
                      <Input
                        id="hoursWorked"
                        type="number"
                        step="0.5"
                        value={formData.hoursWorked}
                        onChange={handleInputChange}
                        placeholder="0.0"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Label htmlFor="ratePerHour">Rate per Hour</Label>
                      <Input
                        id="ratePerHour"
                        type="number"
                        step="0.01"
                        value={formData.ratePerHour}
                        onChange={handleInputChange}
                        placeholder="0.00"
                        className="w-full"
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
              <CardTitle className="flex items-center">
                <TableIcon className="h-6 w-6 mr-2" />
                Labour Entries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex items-center space-x-4">
                <div>
                  <span className="text-sm font-medium">Entry Date:</span>
                  <span className="ml-2 text-sm">{selectedDate || 'All'}</span>
                </div>
                <div className="flex space-x-2">
                  <Button variant="link" className="text-blue-600 text-sm" onClick={handlePreviousDate}>
                    Previous
                  </Button>
                  <span className="text-sm">|</span>
                  <Button variant="link" className="text-blue-600 text-sm" onClick={handleCurrentDate}>
                    Current
                  </Button>
                  <span className="text-sm">|</span>
                  <Button variant="link" className="text-blue-600 text-sm" onClick={handleNextDate}>
                    Next
                  </Button>
                  <span className="text-sm">|</span>
                  <Button variant="link" className="text-blue-600 text-sm" onClick={handleSeeAll}>
                    See All
                  </Button>
                </div>
                <div className="ml-auto">
                  <span className="text-sm font-medium">Last Entry Date: 2024-07-26</span>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left text-gray-800">
                  <thead className="text-xs uppercase bg-gray-50 text-gray-700">
                    <tr>
                      <th className="px-3 py-3">ID</th>
                      <th className="px-3 py-3">Company</th>
                      <th className="px-3 py-3">Project</th>
                      <th className="px-3 py-3">Worker</th>
                      <th className="px-3 py-3">Task</th>
                      <th className="px-3 py-3 text-right">Hours Worked</th>
                      <th className="px-3 py-3 text-right">Rate per Hour</th>
                      <th className="px-3 py-3 text-right">Total Amount</th>
                      <th className="px-3 py-3">Entry Date</th>
                      <th className="px-3 py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEntries.length > 0 ? (
                      filteredEntries.map((entry) => (
                        <tr key={entry.id} className="border-b bg-white hover:bg-gray-50">
                          <td className="px-4 py-3">{entry.id.slice(0, 8)}</td>
                          <td className="px-4 py-3">{entry.company}</td>
                          <td className="px-4 py-3">{entry.project}</td>
                          <td className="px-4 py-3">{entry.worker}</td>
                          <td className="px-4 py-3">{entry.task}</td>
                          <td className="px-4 py-3 text-right">{entry.hoursWorked.toFixed(1)}</td>
                          <td className="px-4 py-3 text-right">₹{entry.ratePerHour.toFixed(2)}</td>
                          <td className="px-4 py-3 text-right font-semibold">₹{entry.totalAmount.toFixed(2)}</td>
                          <td className="px-4 py-3">{entry.entryDate}</td>
                          <td className="px-4 py-3">
                            <Button variant="ghost" size="sm" onClick={() => handleDelete(entry.id)}>
                              <Trash className="h-4 w-4" />
                            </Button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="10" className="px-4 py-3 text-center text-gray-500">
                          No labour entries found for the selected date.
                        </td>
                      </tr>
                    )}
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

export default LabourEntries;