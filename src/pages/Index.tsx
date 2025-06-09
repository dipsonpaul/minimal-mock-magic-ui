
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { 
  Users, Settings, BarChart3, FileText, ShoppingCart, 
  Warehouse, Calculator, UserCheck, ClipboardList, 
  TrendingUp, ChevronDown, Table
} from 'lucide-react';

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

  const reportItems = [
    { name: "AGEING REPORT", route: "/reports/ageing-report" },
    { name: "BANK TRANSACTION REPORT", route: "/reports/bank-transaction-report" },
    { name: "BULK VENDOR PAYMENT", route: "/reports/bulk-vendor-payment" },
    { name: "BUYER REPORT", route: "/reports/buyer-report" },
    { name: "CASHBALANCE REPORT", route: "/reports/cashbalance-report" },
    { name: "DAILY EXPENSE", route: "/reports/daily-expense" },
    { name: "DAILY EXPENSE REPORT", route: "/reports/daily-expense-report" },
    { name: "DAILY FINANCIAL REPORT", route: "/reports/daily-financial-report" },
    { name: "DAILY FINANCIAL SUMMARY REPORT", route: "/reports/daily-financial-summary-report" },
    { name: "DAY BOOK TRANSACTIONS", route: "/reports/day-book-transactions" },
    { name: "DAYBOOK", route: "/reports/daybook" },
    { name: "EXPORT DATA", route: "/reports/export-data" },
    { name: "FINANCIAL REPORTS", route: "/reports/financial-reports" },
    { name: "LABOUR REPORT", route: "/reports/labour-report" },
    { name: "MATERIAL CONSUMPTION REPORT", route: "/reports/material-consumption-report" },
    { name: "NEW PROJECTS", route: "/reports/new-projects" },
    { name: "P/L REPORT", route: "/reports/pl-report" },
    { name: "PENDING BILLS", route: "/reports/pending-bills" },
    { name: "PETTY CASH REPORT", route: "/reports/petty-cash-report" },
    { name: "PROJECT PAYMENT REPORT", route: "/reports/project-payment-report" },
    { name: "PROJECT REPORT", route: "/reports/project-report" },
    { name: "PURCHASE BILL REPORT", route: "/reports/purchase-bill-report" },
  ];

  const navigationItems = [
    { name: "HOME", route: "/" },
    { name: "DASHBOARD", route: "/dashboard" },
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
    { 
      name: "REPORTS", 
      isDropdown: true, 
      items: reportItems
    },
    { name: "SETTINGS", route: "#" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-slate-900 text-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="text-xl font-bold text-blue-400">Interior Design Co.</div>
            </div>
            <nav className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                item.isDropdown ? (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">
                      {item.name}
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white border shadow-lg z-50 max-h-96 overflow-y-auto">
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
              <Badge variant="secondary" className="bg-red-600 text-white">
                Logout
              </Badge>
            </div>
          </div>
        </div>
      </header>

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

      <footer className="bg-slate-900 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            Powered by <span className="text-blue-400 font-medium">Interior Design Suite</span> | 
            Copyright © 2025. All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
