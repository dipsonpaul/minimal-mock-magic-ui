import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Users, Calendar, DollarSign, Award, Mail, Phone } from "lucide-react";

const EmployeeDetail = () => {
  const { id } = useParams();

  const DEFAULT_PROFILE_PIC = "https://via.placeholder.com/150?text=Default+Avatar";

  const employees = [
    {
      id: 1,
      name: "Alice Johnson",
      position: "Lead Interior Designer",
      department: "Design",
      salary: "$95,000",
      startDate: "2022-03-15",
      status: "Active",
      performance: "Excellent",
      email: "alice.johnson@example.com",
      phone: "+1 (555) 123-4567",
      address: "123 Design St, Creative City, CC 90210",
      profilePic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      recentActivities: [
        { date: "2025-06-01", activity: "Completed project design for Client X" },
        { date: "2025-05-28", activity: "Led team meeting on new design trends" },
      ],
    },
    {
      id: 2,
      name: "Bob Smith",
      position: "Project Coordinator",
      department: "Project Management",
      salary: "$85,000",
      startDate: "2021-08-10",
      status: "Active",
      performance: "Good",
      email: "bob.smith@example.com",
      phone: "+1 (555) 234-5678",
      address: "456 Project Ave, Management Town, MT 90320",
      profilePic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      recentActivities: [
        { date: "2025-06-02", activity: "Coordinated project timeline for Client Y" },
        { date: "2025-05-30", activity: "Updated project management software" },
      ],
    },
    {
      id: 3,
      name: "Carol Davis",
      position: "Junior Designer",
      department: "Design",
      salary: "$75,000",
      startDate: "2023-01-20",
      status: "Active",
      performance: "Excellent",
      email: "carol.davis@example.com",
      phone: "+1 (555) 345-6789",
      address: "789 Art Rd, Designville, DV 90430",
      profilePic: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      recentActivities: [
        { date: "2025-06-01", activity: "Submitted initial sketches for Client Z" },
        { date: "2025-05-29", activity: "Attended design workshop" },
      ],
    },
  ];

  const getStatusColor = (status) => {
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

  const getPerformanceColor = (performance) => {
    switch (performance) {
      case "Excellent": return "bg-green-100 text-green-800";
      case "Good": return "bg-blue-100 text-blue-800";
      case "Average": return "bg-yellow-100 text-yellow-800";
      case "Poor": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const employee = employees.find((emp) => emp.id === parseInt(id));

  if (!employee) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4 py-8">
          <Card>
            <CardHeader>
              <CardTitle>Employee Not Found</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">No employee found with ID {id}.</p>
              <Link to="/hrms">
                <Button className="mt-4">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to HRMS
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/hrms" className="flex items-center text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to HRMS
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-2xl font-bold text-gray-900">{employee.name}'s Profile</h1>
            </div>
            <Button className="bg-orange-600 hover:bg-orange-700">
              Edit Profile
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Employee Info Card */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Employee Information</CardTitle>
              <CardDescription>Details about {employee.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
                {/* Profile Picture */}
                <div className="flex-shrink-0">
                  <img
                    src={employee.profilePic || DEFAULT_PROFILE_PIC}
                    alt={`${employee.name}'s profile`}
                    className="w-32 h-32 rounded-full object-cover border-2 border-gray-200"
                    onError={(e) => {
                      e.target.src = DEFAULT_PROFILE_PIC;
                    }}
                  />
                </div>
                {/* Employee Details */}
                <div className="flex-1 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Users className="h-5 w-5 mr-2 text-gray-500" />
                        <span className="font-medium">Position:</span>
                        <span className="ml-2">{employee.position}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 mr-2 text-gray-500" />
                        <span className="font-medium">Department:</span>
                        <span className="ml-2">{employee.department}</span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-5 w-5 mr-2 text-gray-500" />
                        <span className="font-medium">Salary:</span>
                        <span className="ml-2">{employee.salary}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-gray-500" />
                        <span className="font-medium">Start Date:</span>
                        <span className="ml-2">{employee.startDate}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">Status:</span>
                        <Badge className={`ml-2 ${getStatusColor(employee.status)}`}>
                          {employee.status}
                        </Badge>
                      </div>
                      <div className="flex items-center">
                        <Award className="h-5 w-5 mr-2 text-gray-500" />
                        <span className="font-medium">Performance:</span>
                        <Badge className={`ml-2 ${getPerformanceColor(employee.performance)}`}>
                          {employee.performance}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-lg mb-2">Contact Information</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 mr-2 text-gray-500" />
                        <span className="font-medium">Email:</span>
                        <span className="ml-2">{employee.email}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 mr-2 text-gray-500" />
                        <span className="font-medium">Phone:</span>
                        <span className="ml-2">{employee.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">Address:</span>
                        <span className="ml-2">{employee.address}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activities Card */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>Latest updates and tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {employee.recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="h-2 w-2 mt-2 bg-orange-600 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium">{activity.activity}</p>
                      <p className="text-sm text-gray-500">{activity.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default EmployeeDetail;
