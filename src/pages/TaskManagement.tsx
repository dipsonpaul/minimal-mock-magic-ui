
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  ArrowLeft, 
  Plus, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  Edit,
  Trash2,
  User
} from "lucide-react";
import { Link } from "react-router-dom";

const TaskManagement = () => {
  const [activeTab, setActiveTab] = useState("tasks");
  const [editingId, setEditingId] = useState<number | null>(null);

const [tasks, setTasks] = useState([
  {
    id: 1,
    title: "Design Living Room Layout",
    description: "Create layout sketches and mood boards for the living room",
    assignee: "John Smith",
    priority: "High",
    status: "In Progress",
    dueDate: "2024-05-25",
    project: "Modern Apartment Renovation"
  },
  {
    id: 2,
    title: "Select Kitchen Materials",
    description: "Choose cabinets, countertops, and backsplashes",
    assignee: "Sarah Johnson",
    priority: "Medium",
    status: "Pending",
    dueDate: "2024-05-30",
    project: "Kitchen Remodel"
  },
  {
    id: 3,
    title: "Client Presentation",
    description: "Present design concepts and material samples to the client",
    assignee: "Mike Davis",
    priority: "Low",
    status: "Completed",
    dueDate: "2024-05-20",
    project: "Beach House Interior"
  }
]);
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800";
      case "In Progress": return "bg-blue-100 text-blue-800";
      case "Pending": return "bg-yellow-100 text-yellow-800";
      case "Overdue": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "bg-red-100 text-red-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const addNewTask = () => {
    const newTask = {
      id: Date.now(),
      title: "New Task",
      description: "Task description",
      assignee: "Unassigned",
      priority: "Medium",
      status: "Pending",
      dueDate: new Date().toISOString().split('T')[0],
      project: "General"
    };
    setTasks([...tasks, newTask]);
    setEditingId(newTask.id);
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
              <h1 className="text-2xl font-bold text-gray-900">Task Management System</h1>
            </div>
            <Button onClick={addNewTask} className="bg-gray-600 hover:bg-gray-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Task
            </Button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-8">
            {["tasks", "calendar", "team", "reports"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? "border-gray-500 text-gray-600"
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
        {activeTab === "tasks" && (
          <div className="space-y-6">
            {tasks.map((task) => (
              <Card key={task.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-3 flex-1">
                      {editingId === task.id ? (
                        <div className="space-y-2">
                          <Input 
                            defaultValue={task.title}
                            className="font-semibold text-lg"
                            onBlur={() => setEditingId(null)}
                          />
                          <Input 
                            defaultValue={task.description}
                            placeholder="Task description"
                          />
                        </div>
                      ) : (
                        <>
                          <h3 className="font-semibold text-lg">{task.title}</h3>
                          <p className="text-gray-600">{task.description}</p>
                        </>
                      )}
                      <div className="flex items-center space-x-4">
                        <Badge className={getPriorityColor(task.priority)}>
                          {task.priority}
                        </Badge>
                        <Badge className={getStatusColor(task.status)}>
                          {task.status}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {task.assignee}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          Due: {task.dueDate}
                        </div>
                        <span>Project: {task.project}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setEditingId(task.id)}
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

        {activeTab === "calendar" && (
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Deadlines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tasks.filter(task => task.status !== "Completed").map((task) => (
                    <div key={task.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium">{task.title}</h4>
                        <p className="text-sm text-gray-500">{task.assignee}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{task.dueDate}</p>
                        <Badge className={getPriorityColor(task.priority)} size="sm">
                          {task.priority}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "team" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["John Smith", "Sarah Johnson", "Mike Davis"].map((member) => {
              const memberTasks = tasks.filter(task => task.assignee === member);
              return (
                <Card key={member}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <User className="h-5 w-5 mr-2" />
                      {member}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Total Tasks:</span>
                        <span className="font-bold">{memberTasks.length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Completed:</span>
                        <span className="font-bold text-green-600">
                          {memberTasks.filter(t => t.status === "Completed").length}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>In Progress:</span>
                        <span className="font-bold text-blue-600">
                          {memberTasks.filter(t => t.status === "In Progress").length}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {activeTab === "reports" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Task Completion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-green-600">
                    {Math.round((tasks.filter(t => t.status === "Completed").length / tasks.length) * 100)}%
                  </p>
                  <p className="text-sm text-gray-600">Tasks completed</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Pending Tasks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-yellow-600">
                    {tasks.filter(t => t.status === "Pending").length}
                  </p>
                  <p className="text-sm text-gray-600">Tasks awaiting start</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  High Priority
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-red-600">
                    {tasks.filter(t => t.priority === "High").length}
                  </p>
                  <p className="text-sm text-gray-600">High priority tasks</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};

export default TaskManagement;
