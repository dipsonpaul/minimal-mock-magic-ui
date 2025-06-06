
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Plus, 
  Users, 
  Calendar, 
  DollarSign, 
  Clock,
  Award,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

const HRMS = () => {
  const [activeTab, setActiveTab] = useState("employees");

  const employees = [
    {
      id: 1,
      name: "Alice Johnson",
      position: "Lead Interior Designer",
      department: "Design",
      salary: "$95,000",
      startDate: "2022-03-15",
      status: "Active",
      performance: "Excellent"
    },
    {
      id: 2,
      name: "Bob Smith",
      position: "Project Coordinator",
      department: "Project Management",
      salary: "$85,000",
      startDate: "2021-08-10",
      status: "Active",
      performance: "Good"
    },
    {
      id: 3,
      name: "Carol Davis",
      position: "Junior Designer",
      department: "Design",
      salary: "$75,000",
      startDate: "2023-01-20",
      status: "Active",
      performance: "Excellent"
    }
  ];

  const attendance = [
    { date: "2025-06-01", employee: "Alice Johnson", status: "Present", hours: "8.5" },
    { date: "2025-06-01", employee: "Bob Smith", status: "Present", hours: "8.0" },
    { date: "2025-06-01", employee: "Carol Davis", status: "Late", hours: "7.5" },
    { date: "2025-06-02", employee: "Alice Johnson", status: "Present", hours: "8.0" },
    { date: "2025-06-02", employee: "Bob Smith", status: "Absent", hours: "0" }
  ];

  const leaveRequests = [
    {
      id: 1,
      employee: "Alice Johnson",
      type: "Vacation",
      startDate: "2025-06-15",
      endDate: "2025-06-20",
      days: 5,
      status: "Pending",
      reason: "Family vacation"
    },
    {
      id: 2,
      employee: "Bob Smith",
      type: "Sick Leave",
      startDate: "2025-06-10",
      endDate: "2025-06-12",
      days: 3,
      status: "Approved",
      reason: "Medical appointment"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-800";
      case "Inactive": return "bg-red-100 text-red-800";
      case "Present": return "bg-green-100 text-green-800";
      case "Absent": return "bg-red-100 text-red-800";
      case "Late": return "bg-yellow-100 text-yellow-800";
      case "Approved": return "bg-green-100 text-green-800";
      case "Pending": return "bg-yellow-100 text-yellow-800";
      case "Rejected": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getPerformanceColor = (performance: string) => {
    switch (performance) {
      case "Excellent": return "bg-green-100 text-green-800";
      case "Good": return "bg-blue-100 text-blue-800";
      case "Average": return "bg-yellow-100 text-yellow-800";
      case "Poor": return "bg-red-100 text-red-800";
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
              <h1 className="text-2xl font-bold text-gray-900">Human Resource Management</h1>
            </div>
            <Button className="bg-orange-600 hover:bg-orange-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Employee
            </Button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-8">
            {["employees", "attendance", "payroll", "leaves", "performance"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? "border-orange-500 text-orange-600"
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
        {activeTab === "employees" && (
          <div className="space-y-6">
            <div className="grid gap-4">
              {employees.map((employee) => (
                <Card key={employee.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <h3 className="font-semibold text-lg">{employee.name}</h3>
                        <p className="text-gray-600">{employee.position}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>Department: {employee.department}</span>
                          <span>Started: {employee.startDate}</span>
                          <span>Salary: {employee.salary}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className={getStatusColor(employee.status)}>
                          {employee.status}
                        </Badge>
                        <Badge className={getPerformanceColor(employee.performance)}>
                          {employee.performance}
                        </Badge>
                          <Link to={`/employee/${employee.id}`}>
                            <Button variant="outline" size="sm">
                              View Profile
                            </Button>
                          </Link>    
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === "attendance" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Attendance Records</h2>
              <Button className="bg-orange-600 hover:bg-orange-700">
                <Clock className="h-4 w-4 mr-2" />
                Mark Attendance
              </Button>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Daily Attendance</CardTitle>
                <CardDescription>Employee attendance tracking</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {attendance.map((record, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="space-y-1">
                        <p className="font-medium">{record.employee}</p>
                        <p className="text-sm text-gray-600">{record.date}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge className={getStatusColor(record.status)}>
                          {record.status}
                        </Badge>
                        <span className="text-sm font-medium">{record.hours} hours</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "payroll" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="h-5 w-5 mr-2" />
                    Total Payroll
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-3xl font-bold text-orange-600">$42,500</p>
                    <p className="text-sm text-gray-600">This month</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    Employees Paid
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-3xl font-bold text-blue-600">42</p>
                    <p className="text-sm text-gray-600">Out of 45 employees</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Average Salary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-3xl font-bold text-green-600">$85,000</p>
                    <p className="text-sm text-gray-600">Annual average</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "leaves" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Leave Requests</h2>
              <Button className="bg-orange-600 hover:bg-orange-700">
                <Plus className="h-4 w-4 mr-2" />
                New Request
              </Button>
            </div>
            <div className="grid gap-4">
              {leaveRequests.map((request) => (
                <Card key={request.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <h3 className="font-semibold text-lg">{request.employee}</h3>
                        <p className="text-gray-600">{request.type}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{request.startDate} to {request.endDate}</span>
                          <span>{request.days} days</span>
                        </div>
                        <p className="text-sm text-gray-600">Reason: {request.reason}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className={getStatusColor(request.status)}>
                          {request.status}
                        </Badge>
                        {request.status === "Pending" && (
                          <div className="flex space-x-2">
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              Approve
                            </Button>
                            <Button size="sm" variant="outline">
                              Reject
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === "performance" && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Performance Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {employees.map((employee) => (
                <Card key={employee.id}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {employee.name}
                      <Badge className={getPerformanceColor(employee.performance)}>
                        {employee.performance}
                      </Badge>
                    </CardTitle>
                    <CardDescription>{employee.position}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Technical Skills</span>
                          <span>4.5/5</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Communication</span>
                          <span>4.2/5</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Leadership</span>
                          <span>4.0/5</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        <Award className="h-4 w-4 mr-2" />
                        View Full Review
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default HRMS;
