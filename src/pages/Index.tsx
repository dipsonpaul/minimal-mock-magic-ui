import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, Settings, BarChart3, FileText, ShoppingCart, 
  Warehouse, Calculator, UserCheck, ClipboardList, 
  TrendingUp
} from 'lucide-react';
import TopNavigation from "@/components/shared/TopNavigation";
import Footer from "@/components/shared/Footer";

const Index = () => {
  const [activeModule, setActiveModule] = useState(null);

  const modules = [
    {
      id: "hm",
      title: "PMS",
      description: "Project Management System",
      icon: ClipboardList,
      color: "bg-blue-600",
      features: ["Project Tracking", "Task Management", "Timeline View", "Resource Allocation"],
      route: "/pms"
    }, {
      id: "sms",
      title: "SMS",
      description: "Sales Management System",
      icon: TrendingUp,
      color: "bg-pink-600",
      features: ["Sales Tracking", "Revenue Analytics", "Customer Insights", "Forecasting"],
      route: "/sales"
    }, {
      id: "estimation",
      title: "Estimation",
      description: "Cost Estimation Module",
      icon: Calculator,
      color: "bg-emerald-600",
      features: ["Cost Calculation", "Quote Generation", "Price Analysis", "Budget Planning"],
      route: "/estimation"
    }, {
      id: "qms",
      title: "Q/BQQ",
      description: "Quality & Bill of Quantities",
      icon: FileText,
      color: "bg-teal-600",
      features: ["Quality Control", "Bill Generation", "Cost Estimation", "Standards"],
      route: "/quality-bqq"
    },
    {
      id: "coms",
      title: "CoMS",
      description: "Communication Management",
      icon: Users,
      color: "bg-purple-600",
      features: ["Team Chat", "Video Calls", "Document Sharing", "Notifications"],
      route: "/coms"
    },
    {
      id: "crm",
      title: "CRM",
      description: "Customer Relationship Management",
      icon: UserCheck,
      color: "bg-green-600",
      features: ["Lead Management", "Customer Database", "Sales Pipeline", "Analytics"],
      route: "/crm"
    },
    {
      id: "hrms",
      title: "HRMS",
      description: "Human Resource Management",
      icon: Users,
      color: "bg-orange-600",
      features: ["Employee Records", "Payroll", "Attendance", "Performance"],
      route: "/hrms"
    },
    {
      id: "dms",
      title: "DMS",
      description: "Document Management System",
      icon: FileText,
      color: "bg-indigo-600",
      features: ["File Storage", "Version Control", "Access Rights", "Search"],
      route: "/dms"
    },
    {
      id: "proms",
      title: "ProMS",
      description: "Procurement Management",
      icon: ShoppingCart,
      color: "bg-red-600",
      features: ["Purchase Orders", "Vendor Management", "Inventory", "Cost Control"],
      route: "/procurement"
    },
    {
      id: "ims",
      title: "IMS",
      description: "Inventory Management",
      icon: Warehouse,
      color: "bg-yellow-600",
      features: ["Stock Tracking", "Warehouse Management", "Supply Chain", "Reports"],
      route: "/inventory"
    },
    {
      id: "tms",
      title: "TMS",
      description: "Task Management System",
      icon: Settings,
      color: "bg-gray-600",
      features: ["Task Assignment", "Progress Tracking", "Deadlines", "Collaboration"],
      route: "/task-management"
    },
    {
      id: "rms",
      title: "RMS",
      description: "Resource Management",
      icon: BarChart3,
      color: "bg-cyan-600",
      features: ["Resource Allocation", "Capacity Planning", "Utilization Reports", "Optimization"],
      route: "/resource-management"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavigation />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Welcome! Admin
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive Interior Design Management Platform - Streamline your design operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {modules.map((module) => {
            const IconComponent = module.icon;
            return (
              <Card 
                key={module.id}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border-0 shadow-md"
                onMouseEnter={() => setActiveModule(module.id)}
                onMouseLeave={() => setActiveModule(null)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-lg ${module.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Active
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-800">
                    {module.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-slate-600">
                    {module.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {module.features.map((feature, index) => (
                      <div 
                        key={index}
                        className="flex items-center text-sm text-slate-600"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link to={module.route}>
                    <Button 
                      className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                      size="sm"
                    >
                      Launch {module.title}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
