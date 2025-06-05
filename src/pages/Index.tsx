import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Users, 
  Settings, 
  BarChart3, 
  FileText, 
  ShoppingCart, 
  Warehouse, 
  Calculator,
  UserCheck,
  ClipboardList,
  TrendingUp,
  ChevronDown
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [activeModule, setActiveModule] = useState<string | null>(null);

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
    },  {
      id: "estimation",
      title: "Estimation",
      description: "Cost Estimation Module",
      icon: Calculator,
      color: "bg-emerald-600",
      features: ["Cost Calculation", "Quote Generation", "Price Analysis", "Budget Planning"],
      route: "/estimation"
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
      id: "qms",
      title: "Q/BQQ",
      description: "Quality & Bill of Quantities",
      icon: FileText,
      color: "bg-teal-600",
      features: ["Quality Control", "Bill Generation", "Cost Estimation", "Standards"],
      route: "/quality-bqq"
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
    },
  
  ];

  const navigationItems = [
    { name: "HOME", route: "/" },
    { name: "PURCHASE", route: "/procurement" },
    { name: "WAREHOUSE", route: "/inventory" },
    { name: "BUYER", route: "/procurement" },
    { name: "RMS", route: "/resource-management" },
    { 
      name: "SALES & COMMUNICATION",
      isDropdown: true, 
      items: [
        { name: "Sales", route: "/sales" },
        { name: "CoMS", route: "/coms" }
      ]
    },
    { 
      name: "MODULES", 
      isDropdown: true, 
      items: [
        { name: "HM", route: "/pms" },
        { name: "CRM", route: "/crm" },
        { name: "HRMS", route: "/hrms" },
        { name: "Q/BQQ", route: "/quality-bqq" },
        { name: "DMS", route: "/dms" },
        { name: "ProMS", route: "/procurement" },
        { name: "IMS", route: "/inventory" },
        { name: "TMS", route: "/task-management" },
        { name: "RMS", route: "/resource-management" },
        { name: "Estimation", route: "/estimation" }
      ]
    },
    { name: "SETTINGS", route: "#" },
    { name: "REPORTS", route: "#" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation Header */}
      <header className="bg-slate-900 text-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x Thoreau-4">
              <div className="text-xl font-bold text-blue-400">Company name</div>
            </div>
            <nav className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                item.isDropdown ? (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">
                      {item.name}
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white border shadow-lg z-50">
                      {item.items?.map((subItem) => (
                        <DropdownMenuItem key={subItem.name} asChild>
                          <Link to={subItem.route} className="cursor-pointer">
                            {subItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={item.name}
                    to={item.route}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-blue-600 text-white">
                Consumption Request
              </Badge>
              <Badge variant="secondary" className="bg-red-600 text-white">
                Logout
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Welcome! Admin
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive Enterprise Management Platform - Streamline your business operations with our integrated suite of management tools
          </p>
        </div>

        {/* Module Grid */}
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

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "New Project", description: "Start a new project", color: "bg-blue-500", route: "/pms" },
              { title: "Generate Report", description: "Create custom reports", color: "bg-green-500", route: "#" },
              { title: "Manage Users", description: "User administration", color: "bg-purple-500", route: "/hrms" },
              { title: "System Settings", description: "Configure system", color: "bg-orange-500", route: "#" }
            ].map((action, index) => (
              <Link key={index} to={action.route}>
                <Button
                  variant="outline"
                  className="h-20 flex-col space-y-1 hover:shadow-md transition-all duration-300 w-full"
                >
                  <div className={`w-8 h-8 ${action.color} rounded-full mb-1`}></div>
                  <span className="font-medium">{action.title}</span>
                  <span className="text-xs text-gray-500">{action.description}</span>
                </Button>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { action: "Project Alpha started", time: "2 hours ago", type: "project" },
              { action: "New purchase order created", time: "4 hours ago", type: "purchase" },
              { action: "Inventory updated", time: "6 hours ago", type: "inventory" },
              { action: "Monthly report generated", time: "1 day ago", type: "report" }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-700">{activity.action}</span>
                </div>
                <span className="text-sm text-slate-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            Powered by <span className="text-blue-400 font-medium">Enterprise Suite</span> | 
            Copyright © 2025. All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
