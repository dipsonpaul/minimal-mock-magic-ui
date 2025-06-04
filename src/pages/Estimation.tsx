
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  ArrowLeft, 
  Plus, 
  Calculator, 
  FileText, 
  DollarSign,
  Edit,
  Trash2,
  Copy
} from "lucide-react";
import { Link } from "react-router-dom";

const Estimation = () => {
  const [activeTab, setActiveTab] = useState("estimates");
  const [editingId, setEditingId] = useState<number | null>(null);

  const [estimates, setEstimates] = useState([
    {
      id: 1,
      title: "Office Building Construction",
      client: "ABC Corporation",
      totalCost: 2500000,
      status: "Draft",
      createdDate: "2024-05-20",
      validUntil: "2024-06-20"
    },
    {
      id: 2,
      title: "Residential Complex Phase 1",
      client: "XYZ Developers",
      totalCost: 1800000,
      status: "Approved",
      createdDate: "2024-05-18",
      validUntil: "2024-06-18"
    },
    {
      id: 3,
      title: "Shopping Mall Renovation",
      client: "Retail Group",
      totalCost: 950000,
      status: "Pending",
      createdDate: "2024-05-15",
      validUntil: "2024-06-15"
    }
  ]);

  const costCategories = [
    { category: "Materials", amount: 1250000, percentage: 50 },
    { category: "Labor", amount: 750000, percentage: 30 },
    { category: "Equipment", amount: 375000, percentage: 15 },
    { category: "Overhead", amount: 125000, percentage: 5 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved": return "bg-green-100 text-green-800";
      case "Draft": return "bg-yellow-100 text-yellow-800";
      case "Pending": return "bg-blue-100 text-blue-800";
      case "Rejected": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const addNewEstimate = () => {
    const newEstimate = {
      id: Date.now(),
      title: "New Estimate",
      client: "New Client",
      totalCost: 0,
      status: "Draft",
      createdDate: new Date().toISOString().split('T')[0],
      validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    };
    setEstimates([...estimates, newEstimate]);
    setEditingId(newEstimate.id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Dashboard
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-2xl font-bold text-gray-900">Cost Estimation Module</h1>
            </div>
            <Button onClick={addNewEstimate} className="bg-emerald-600 hover:bg-emerald-700">
              <Plus className="h-4 w-4 mr-2" />
              New Estimate
            </Button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-8">
            {["estimates", "templates", "calculator", "reports"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? "border-emerald-500 text-emerald-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {activeTab === "estimates" && (
          <div className="space-y-6">
            {estimates.map((estimate) => (
              <Card key={estimate.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2 flex-1">
                      {editingId === estimate.id ? (
                        <div className="space-y-2">
                          <Input 
                            defaultValue={estimate.title}
                            className="font-semibold text-lg"
                            onBlur={() => setEditingId(null)}
                          />
                          <Input 
                            defaultValue={estimate.client}
                            placeholder="Client Name"
                          />
                        </div>
                      ) : (
                        <>
                          <div className="flex items-center space-x-4">
                            <h3 className="font-semibold text-lg">{estimate.title}</h3>
                            <Badge className={getStatusColor(estimate.status)}>
                              {estimate.status}
                            </Badge>
                          </div>
                          <p className="text-gray-600">Client: {estimate.client}</p>
                        </>
                      )}
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <span>Created: {estimate.createdDate}</span>
                        <span>Valid Until: {estimate.validUntil}</span>
                        <span className="font-semibold text-emerald-600 text-lg">
                          ₹{estimate.totalCost.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setEditingId(estimate.id)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <FileText className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "templates" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Residential Building", category: "Construction", items: 45 },
              { name: "Commercial Office", category: "Construction", items: 38 },
              { name: "Road Construction", category: "Infrastructure", items: 52 },
              { name: "Interior Design", category: "Interiors", items: 28 },
              { name: "Electrical Work", category: "Electrical", items: 35 },
              { name: "Plumbing & Sanitation", category: "Plumbing", items: 31 }
            ].map((template, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">{template.name}</CardTitle>
                  <CardDescription>{template.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">{template.items} cost items</p>
                    <Button size="sm" className="w-full">
                      Use Template
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "calculator" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="h-5 w-5 mr-2" />
                  Quick Calculator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Project Area (sq ft)</label>
                    <Input type="number" placeholder="Enter area" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Construction Type</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>Residential</option>
                      <option>Commercial</option>
                      <option>Industrial</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Quality Grade</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>Standard</option>
                      <option>Premium</option>
                      <option>Luxury</option>
                    </select>
                  </div>
                  <Button className="w-full">Calculate Estimate</Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Cost Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {costCategories.map((category, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span>{category.category}:</span>
                      <div className="text-right">
                        <p className="font-semibold">₹{category.amount.toLocaleString()}</p>
                        <p className="text-xs text-gray-500">{category.percentage}%</p>
                      </div>
                    </div>
                  ))}
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center font-bold text-lg">
                      <span>Total:</span>
                      <span className="text-emerald-600">
                        ₹{costCategories.reduce((sum, cat) => sum + cat.amount, 0).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "reports" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Total Estimates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-emerald-600">{estimates.length}</p>
                  <p className="text-sm text-gray-600">Created this month</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Total Value
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-green-600">
                    ₹{estimates.reduce((sum, est) => sum + est.totalCost, 0).toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600">Combined estimate value</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="h-5 w-5 mr-2" />
                  Approval Rate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-blue-600">
                    {Math.round((estimates.filter(e => e.status === "Approved").length / estimates.length) * 100)}%
                  </p>
                  <p className="text-sm text-gray-600">Estimates approved</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};

export default Estimation;
