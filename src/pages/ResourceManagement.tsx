
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Plus, 
  BarChart3, 
  Users, 
  Clock,
  Calendar,
  AlertCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const ResourceManagement = () => {
  const [activeTab, setActiveTab] = useState("allocation");

  const resources = [
    {
      id: 1,
      name: "John Smith",
      role: "Senior Developer",
      currentProject: "Website Redesign",
      utilization: 85,
      availability: "Partial",
      skills: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "UI/UX Designer",
      currentProject: "Mobile App",
      utilization: 90,
      availability: "Busy",
      skills: ["Figma", "Adobe XD", "Prototyping"]
    },
    {
      id: 3,
      name: "Mike Davis",
      role: "Project Manager",
      currentProject: "Cloud Migration",
      utilization: 70,
      availability: "Available",
      skills: ["Agile", "Scrum", "Leadership"]
    }
  ];

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "Available": return "bg-green-100 text-green-800";
      case "Partial": return "bg-yellow-100 text-yellow-800";
      case "Busy": return "bg-red-100 text-red-800";
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
              <h1 className="text-2xl font-bold text-gray-900">Resource Management</h1>
            </div>
            <Button className="bg-cyan-600 hover:bg-cyan-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Resource
            </Button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-8">
            {["allocation", "capacity", "planning", "reports"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? "border-cyan-500 text-cyan-600"
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
        {activeTab === "allocation" && (
          <div className="space-y-6">
            {resources.map((resource) => (
              <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                          <Users className="h-6 w-6 text-cyan-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{resource.name}</h3>
                          <p className="text-gray-600">{resource.role}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <span className="text-sm text-gray-500">Current Project:</span>
                          <p className="font-semibold">{resource.currentProject}</p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Utilization:</span>
                          <p className="font-semibold">{resource.utilization}%</p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Skills:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {resource.skills.map((skill, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge className={getAvailabilityColor(resource.availability)}>
                        {resource.availability}
                      </Badge>
                      <Button variant="outline" size="sm">
                        Assign
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "capacity" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Total Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-cyan-600">24</p>
                  <p className="text-sm text-gray-600">Active team members</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Average Utilization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-blue-600">82%</p>
                  <p className="text-sm text-gray-600">Across all resources</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  Over-allocated
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-red-600">3</p>
                  <p className="text-sm text-gray-600">Resources need rebalancing</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "planning" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Resource Calendar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                    <div key={day} className="p-2 text-center font-medium bg-gray-100 rounded">
                      {day}
                    </div>
                  ))}
                  {Array.from({length: 21}, (_, i) => (
                    <div key={i} className="p-2 text-center border rounded min-h-[60px]">
                      {i + 1}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "reports" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Utilization Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Optimal (70-85%):</span>
                    <span className="font-bold text-green-600">15 resources</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Under-utilized (<70%):</span>
                    <span className="font-bold text-yellow-600">6 resources</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Over-allocated (>85%):</span>
                    <span className="font-bold text-red-600">3 resources</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Skills Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {["Frontend Development", "Backend Development", "Design", "Project Management", "DevOps"].map((skill, index) => (
                    <div key={index} className="flex justify-between">
                      <span>{skill}:</span>
                      <span className="font-bold">{Math.floor(Math.random() * 10) + 1} people</span>
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

export default ResourceManagement;
