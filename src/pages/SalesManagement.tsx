
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  ArrowLeft, 
  Plus, 
  TrendingUp, 
  DollarSign, 
  Target,
  Edit,
  Eye,
  Phone,
  Mail
} from "lucide-react";
import { Link } from "react-router-dom";

const SalesManagement = () => {
  const [activeTab, setActiveTab] = useState("opportunities");

  const opportunities = [
    {
      id: 1,
      title: "Enterprise Software License",
      client: "Tech Corp",
      value: 250000,
      stage: "Proposal",
      probability: 75,
      closeDate: "2024-06-15",
      owner: "John Smith"
    },
    {
      id: 2,
      title: "Cloud Migration Project",
      client: "Finance Inc",
      value: 180000,
      stage: "Negotiation",
      probability: 90,
      closeDate: "2024-05-30",
      owner: "Sarah Johnson"
    },
    {
      id: 3,
      title: "Security Audit Service",
      client: "Healthcare Ltd",
      value: 75000,
      stage: "Qualified",
      probability: 60,
      closeDate: "2024-07-10",
      owner: "Mike Davis"
    }
  ];

  const getStageColor = (stage: string) => {
    switch (stage) {
      case "Qualified": return "bg-blue-100 text-blue-800";
      case "Proposal": return "bg-yellow-100 text-yellow-800";
      case "Negotiation": return "bg-orange-100 text-orange-800";
      case "Closed Won": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
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
              <h1 className="text-2xl font-bold text-gray-900">Sales Management System</h1>
            </div>
            <Button className="bg-pink-600 hover:bg-pink-700">
              <Plus className="h-4 w-4 mr-2" />
              New Opportunity
            </Button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-8">
            {["opportunities", "pipeline", "forecasting", "reports"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? "border-pink-500 text-pink-600"
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
        {activeTab === "opportunities" && (
          <div className="space-y-6">
            {opportunities.map((opp) => (
              <Card key={opp.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center space-x-4">
                        <h3 className="font-semibold text-lg">{opp.title}</h3>
                        <Badge className={getStageColor(opp.stage)}>
                          {opp.stage}
                        </Badge>
                      </div>
                      <p className="text-gray-600">Client: {opp.client}</p>
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <span>Owner: {opp.owner}</span>
                        <span>Close Date: {opp.closeDate}</span>
                        <span className="font-semibold text-pink-600">₹{opp.value.toLocaleString()}</span>
                        <span>{opp.probability}% probability</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Phone className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "pipeline" && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { stage: "Qualified", count: 8, value: 650000 },
              { stage: "Proposal", count: 5, value: 850000 },
              { stage: "Negotiation", count: 3, value: 450000 },
              { stage: "Closed Won", count: 12, value: 1200000 }
            ].map((stage, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{stage.stage}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-2xl font-bold">{stage.count}</p>
                    <p className="text-sm text-gray-600">opportunities</p>
                    <p className="text-lg font-semibold text-pink-600">₹{stage.value.toLocaleString()}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "forecasting" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  Monthly Target
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-pink-600">₹15,00,000</p>
                  <p className="text-sm text-gray-600">Target for May 2024</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Projected Revenue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-green-600">₹12,75,000</p>
                  <p className="text-sm text-gray-600">85% of target</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Actual Revenue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-blue-600">₹8,50,000</p>
                  <p className="text-sm text-gray-600">57% achieved</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "reports" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Sales Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Won Deals:</span>
                    <span className="font-bold text-green-600">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lost Deals:</span>
                    <span className="font-bold text-red-600">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Win Rate:</span>
                    <span className="font-bold">80%</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span>Total Revenue:</span>
                    <span className="font-bold text-lg">₹1,20,00,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Top Performers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {["John Smith - ₹4,50,000", "Sarah Johnson - ₹3,80,000", "Mike Davis - ₹3,70,000"].map((performer, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <p className="font-medium">{performer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};

export default SalesManagement;
