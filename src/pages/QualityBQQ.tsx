
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  ArrowLeft, 
  Plus, 
  Edit, 
  Trash2, 
  FileText, 
  CheckCircle,
  AlertCircle,
  Calculator
} from "lucide-react";
import { Link } from "react-router-dom";

const QualityBQQ = () => {
  const [activeTab, setActiveTab] = useState("quality");
  const [editingId, setEditingId] = useState<number | null>(null);

  const [qualityChecks, setQualityChecks] = useState([
    {
      id: 1,
      item: "Concrete Strength Test",
      standard: "IS 456:2000",
      status: "Passed",
      date: "2024-05-15",
      inspector: "John Smith"
    },
    {
      id: 2,
      item: "Steel Quality Check",
      standard: "IS 1786:2008",
      status: "Pending",
      date: "2024-05-20",
      inspector: "Sarah Johnson"
    },
    {
      id: 3,
      item: "Foundation Level Check",
      standard: "IS 13920:2016",
      status: "Failed",
      date: "2024-05-18",
      inspector: "Mike Davis"
    }
  ]);

  const [billItems, setBillItems] = useState([
    {
      id: 1,
      description: "Excavation for Foundation",
      unit: "Cum",
      quantity: 150,
      rate: 250,
      amount: 37500
    },
    {
      id: 2,
      description: "Concrete M25 Grade",
      unit: "Cum",
      quantity: 85,
      rate: 4500,
      amount: 382500
    },
    {
      id: 3,
      description: "Steel Reinforcement",
      unit: "Kg",
      quantity: 2500,
      rate: 65,
      amount: 162500
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Passed": return "bg-green-100 text-green-800";
      case "Pending": return "bg-yellow-100 text-yellow-800";
      case "Failed": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const addNewItem = () => {
    if (activeTab === "quality") {
      const newCheck = {
        id: Date.now(),
        item: "New Quality Check",
        standard: "IS XXXX:YYYY",
        status: "Pending",
        date: new Date().toISOString().split('T')[0],
        inspector: "New Inspector"
      };
      setQualityChecks([...qualityChecks, newCheck]);
      setEditingId(newCheck.id);
    } else {
      const newBillItem = {
        id: Date.now(),
        description: "New Item",
        unit: "Nos",
        quantity: 1,
        rate: 0,
        amount: 0
      };
      setBillItems([...billItems, newBillItem]);
      setEditingId(newBillItem.id);
    }
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
              <h1 className="text-2xl font-bold text-gray-900">Quality & Bill of Quantities</h1>
            </div>
            <Button onClick={addNewItem} className="bg-teal-600 hover:bg-teal-700">
              <Plus className="h-4 w-4 mr-2" />
              Add {activeTab === "quality" ? "Quality Check" : "Bill Item"}
            </Button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-8">
            {["quality", "boq", "standards", "reports"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? "border-teal-500 text-teal-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab === "boq" ? "Bill of Quantities" : tab}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {activeTab === "quality" && (
          <div className="space-y-6">
            {qualityChecks.map((check) => (
              <Card key={check.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2 flex-1">
                      {editingId === check.id ? (
                        <Input 
                          defaultValue={check.item}
                          className="font-semibold"
                          onBlur={() => setEditingId(null)}
                        />
                      ) : (
                        <h3 className="font-semibold text-lg">{check.item}</h3>
                      )}
                      <p className="text-gray-600">Standard: {check.standard}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>Date: {check.date}</span>
                        <span>Inspector: {check.inspector}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge className={getStatusColor(check.status)}>
                        {check.status}
                      </Badge>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setEditingId(check.id)}
                      >
                        <Edit className="h-4 w-4" />
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

        {activeTab === "boq" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Bill of Quantities</CardTitle>
                <CardDescription>Detailed cost breakdown for the project</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3">Description</th>
                        <th className="text-left p-3">Unit</th>
                        <th className="text-left p-3">Quantity</th>
                        <th className="text-left p-3">Rate</th>
                        <th className="text-left p-3">Amount</th>
                        <th className="text-left p-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {billItems.map((item) => (
                        <tr key={item.id} className="border-b">
                          <td className="p-3">
                            {editingId === item.id ? (
                              <Input 
                                defaultValue={item.description}
                                onBlur={() => setEditingId(null)}
                              />
                            ) : (
                              item.description
                            )}
                          </td>
                          <td className="p-3">{item.unit}</td>
                          <td className="p-3">{item.quantity}</td>
                          <td className="p-3">₹{item.rate}</td>
                          <td className="p-3 font-semibold">₹{item.amount.toLocaleString()}</td>
                          <td className="p-3">
                            <div className="flex space-x-2">
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => setEditingId(item.id)}
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="border-t-2 font-bold">
                        <td colSpan={4} className="p-3 text-right">Total Amount:</td>
                        <td className="p-3">₹{billItems.reduce((sum, item) => sum + item.amount, 0).toLocaleString()}</td>
                        <td></td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "standards" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { code: "IS 456:2000", title: "Plain and Reinforced Concrete", status: "Active" },
              { code: "IS 1786:2008", title: "High Strength Deformed Steel Bars", status: "Active" },
              { code: "IS 13920:2016", title: "Ductile Design and Detailing", status: "Updated" },
              { code: "IS 800:2007", title: "General Construction In Steel", status: "Active" }
            ].map((standard, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{standard.code}</CardTitle>
                  <CardDescription>{standard.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge className={standard.status === "Active" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}>
                    {standard.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "reports" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                  Quality Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Passed Tests:</span>
                    <span className="font-bold text-green-600">85%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pending Tests:</span>
                    <span className="font-bold text-yellow-600">10%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Failed Tests:</span>
                    <span className="font-bold text-red-600">5%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="h-5 w-5 mr-2 text-blue-600" />
                  Cost Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Material Cost:</span>
                    <span className="font-bold">₹5,82,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Labor Cost:</span>
                    <span className="font-bold">₹2,45,000</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span>Total Project Cost:</span>
                    <span className="font-bold text-lg">₹8,27,500</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};

export default QualityBQQ;
