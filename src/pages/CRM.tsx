
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, 
  Plus, 
  Phone, 
  Mail, 
  DollarSign, 
  TrendingUp,
  Users,
  Target
} from "lucide-react";
import { Link } from "react-router-dom";

const CRM = () => {
  const [activeTab, setActiveTab] = useState("leads");

  const leads = [
    {
      id: 1,
      name: "Acme Corporation",
      contact: "John Smith",
      email: "john@acme.com",
      phone: "+1 (555) 123-4567",
      value: "$50,000",
      stage: "Qualified",
      probability: 75,
      lastContact: "2 days ago"
    },
    {
      id: 2,
      name: "Tech Solutions Inc",
      contact: "Sarah Johnson",
      email: "sarah@techsol.com",
      phone: "+1 (555) 987-6543",
      value: "$125,000",
      stage: "Proposal",
      probability: 60,
      lastContact: "1 week ago"
    },
    {
      id: 3,
      name: "Global Enterprises",
      contact: "Mike Davis",
      email: "mike@global.com",
      phone: "+1 (555) 456-7890",
      value: "$200,000",
      stage: "Negotiation",
      probability: 90,
      lastContact: "Yesterday"
    }
  ];

  const customers = [
    {
      id: 1,
      name: "InnovateCorp",
      industry: "Technology",
      revenue: "$2.5M",
      lastOrder: "2024-05-15",
      status: "Active"
    },
    {
      id: 2,
      name: "BuildRight Co",
      industry: "Construction",
      revenue: "$1.8M",
      lastOrder: "2024-05-20",
      status: "Active"
    },
    {
      id: 3,
      name: "RetailMax",
      industry: "Retail",
      revenue: "$3.2M",
      lastOrder: "2024-04-30",
      status: "Inactive"
    }
  ];

  const getStageColor = (stage: string) => {
    switch (stage) {
      case "Qualified": return "bg-blue-100 text-blue-800";
      case "Proposal": return "bg-yellow-100 text-yellow-800";
      case "Negotiation": return "bg-orange-100 text-orange-800";
      case "Closed Won": return "bg-green-100 text-green-800";
      case "Closed Lost": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-800";
      case "Inactive": return "bg-red-100 text-red-800";
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
              <h1 className="text-2xl font-bold text-gray-900">Customer Relationship Management</h1>
            </div>
            <Button className="bg-green-600 hover:bg-green-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Lead
            </Button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-8">
            {["leads", "customers", "pipeline", "analytics"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? "border-green-500 text-green-600"
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
        {activeTab === "leads" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {leads.map((lead) => (
                <Card key={lead.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{lead.name}</CardTitle>
                      <Badge className={getStageColor(lead.stage)}>
                        {lead.stage}
                      </Badge>
                    </div>
                    <CardDescription>{lead.contact}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-green-600">{lead.value}</span>
                        <span className="text-sm text-gray-500">{lead.probability}% probability</span>
                      </div>
                      <Progress value={lead.probability} className="h-2" />
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 mr-2" />
                          {lead.email}
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-2" />
                          {lead.phone}
                        </div>
                        <p className="text-xs">Last contact: {lead.lastContact}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Phone className="h-4 w-4 mr-1" />
                          Call
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <Mail className="h-4 w-4 mr-1" />
                          Email
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === "customers" && (
          <div className="space-y-6">
            <div className="grid gap-4">
              {customers.map((customer) => (
                <Card key={customer.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <h3 className="font-semibold text-lg">{customer.name}</h3>
                        <p className="text-gray-600">{customer.industry}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>Revenue: {customer.revenue}</span>
                          <span>Last Order: {customer.lastOrder}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className={getStatusColor(customer.status)}>
                          {customer.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === "pipeline" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { stage: "Qualified", count: 12, value: "$480,000" },
                { stage: "Proposal", count: 8, value: "$720,000" },
                { stage: "Negotiation", count: 5, value: "$950,000" },
                { stage: "Closed Won", count: 15, value: "$2,100,000" }
              ].map((stage, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{stage.stage}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-2xl font-bold">{stage.count}</p>
                      <p className="text-sm text-gray-600">leads</p>
                      <p className="text-lg font-semibold text-green-600">{stage.value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === "analytics" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Revenue This Month
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-green-600">$425,000</p>
                  <p className="text-sm text-gray-600">+15% from last month</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  Conversion Rate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-blue-600">24.5%</p>
                  <p className="text-sm text-gray-600">+2.1% from last month</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Active Customers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-purple-600">284</p>
                  <p className="text-sm text-gray-600">+12 new this month</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};

export default CRM;
