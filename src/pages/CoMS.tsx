
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  ArrowLeft, 
  Send, 
  Phone, 
  Video, 
  Users, 
  MessageCircle,
  Bell,
  Search,
  Plus
} from "lucide-react";
import { Link } from "react-router-dom";

const CoMS = () => {
  const [activeTab, setActiveTab] = useState("chat");
  const [message, setMessage] = useState("");

  const chats = [
    {
      id: 1,
      name: "Development Team",
      lastMessage: "The new feature is ready for testing",
      timestamp: "2 min ago",
      unread: 3,
      avatar: "DT"
    },
    {
      id: 2,
      name: "Alice Johnson",
      lastMessage: "Can we schedule a meeting for tomorrow?",
      timestamp: "15 min ago",
      unread: 1,
      avatar: "AJ"
    },
    {
      id: 3,
      name: "Project Alpha",
      lastMessage: "Budget approval needed",
      timestamp: "1 hour ago",
      unread: 0,
      avatar: "PA"
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "Alice Johnson",
      message: "Hey team! How's the progress on the new feature?",
      timestamp: "10:30 AM",
      isOwn: false
    },
    {
      id: 2,
      sender: "You",
      message: "Almost done! Just finishing up the testing phase.",
      timestamp: "10:32 AM",
      isOwn: true
    },
    {
      id: 3,
      sender: "Bob Smith",
      message: "Great work everyone! The client will be happy.",
      timestamp: "10:35 AM",
      isOwn: false
    }
  ];

  const meetings = [
    {
      id: 1,
      title: "Weekly Standup",
      time: "09:00 AM - 10:00 AM",
      date: "Today",
      participants: ["Alice", "Bob", "Carol", "David"],
      type: "recurring"
    },
    {
      id: 2,
      title: "Client Review",
      time: "02:00 PM - 03:00 PM",
      date: "Tomorrow",
      participants: ["Alice", "Client Team"],
      type: "meeting"
    },
    {
      id: 3,
      title: "Sprint Planning",
      time: "10:00 AM - 12:00 PM",
      date: "Friday",
      participants: ["Development Team"],
      type: "planning"
    }
  ];

  const notifications = [
    {
      id: 1,
      type: "message",
      title: "New message from Alice Johnson",
      time: "2 min ago"
    },
    {
      id: 2,
      type: "meeting",
      title: "Meeting starting in 30 minutes",
      time: "28 min ago"
    },
    {
      id: 3,
      type: "file",
      title: "Document shared in Project Alpha",
      time: "1 hour ago"
    }
  ];

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
              <h1 className="text-2xl font-bold text-gray-900">Communication Management</h1>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Phone className="h-4 w-4 mr-2" />
                Call
              </Button>
              <Button variant="outline" size="sm">
                <Video className="h-4 w-4 mr-2" />
                Video
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Plus className="h-4 w-4 mr-2" />
                New Chat
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-8">
            {["chat", "meetings", "notifications", "files"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? "border-purple-500 text-purple-600"
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
        {activeTab === "chat" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
            {/* Chat List */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Conversations</CardTitle>
                  <Button size="sm" variant="outline">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1">
                  {chats.map((chat) => (
                    <div key={chat.id} className="p-4 hover:bg-gray-50 cursor-pointer border-b">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold">
                          {chat.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="font-medium text-sm truncate">{chat.name}</p>
                            {chat.unread > 0 && (
                              <Badge className="bg-purple-500 text-white text-xs">
                                {chat.unread}
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-gray-500 truncate">{chat.lastMessage}</p>
                          <p className="text-xs text-gray-400">{chat.timestamp}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Chat Messages */}
            <Card className="lg:col-span-2">
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      DT
                    </div>
                    <div>
                      <CardTitle className="text-lg">Development Team</CardTitle>
                      <p className="text-sm text-gray-500">8 members online</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Video className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col h-96">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto space-y-4 p-4">
                  {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        msg.isOwn 
                          ? 'bg-purple-500 text-white' 
                          : 'bg-gray-100 text-gray-900'
                      }`}>
                        {!msg.isOwn && (
                          <p className="text-xs font-semibold mb-1">{msg.sender}</p>
                        )}
                        <p className="text-sm">{msg.message}</p>
                        <p className={`text-xs mt-1 ${msg.isOwn ? 'text-purple-100' : 'text-gray-500'}`}>
                          {msg.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Message Input */}
                <div className="border-t p-4">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Type a message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="flex-1"
                    />
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "meetings" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Scheduled Meetings</h2>
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Plus className="h-4 w-4 mr-2" />
                Schedule Meeting
              </Button>
            </div>
            <div className="grid gap-4">
              {meetings.map((meeting) => (
                <Card key={meeting.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">{meeting.title}</h3>
                        <p className="text-gray-600">{meeting.time}</p>
                        <p className="text-sm text-gray-500">{meeting.date}</p>
                        <div className="flex items-center mt-2">
                          <Users className="h-4 w-4 mr-2 text-gray-400" />
                          <span className="text-sm text-gray-600">
                            {meeting.participants.join(", ")}
                          </span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Video className="h-4 w-4 mr-2" />
                          Join
                        </Button>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === "notifications" && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Notifications</h2>
            <div className="space-y-4">
              {notifications.map((notification) => (
                <Card key={notification.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        {notification.type === "message" && <MessageCircle className="h-5 w-5 text-purple-600" />}
                        {notification.type === "meeting" && <Video className="h-5 w-5 text-purple-600" />}
                        {notification.type === "file" && <Bell className="h-5 w-5 text-purple-600" />}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{notification.title}</p>
                        <p className="text-sm text-gray-500">{notification.time}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === "files" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Shared Files</h2>
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Plus className="h-4 w-4 mr-2" />
                Upload File
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Project Requirements.pdf", size: "2.4 MB", shared: "Alice Johnson", date: "2 days ago" },
                { name: "Design Mockups.sketch", size: "15.7 MB", shared: "Bob Smith", date: "1 week ago" },
                { name: "Meeting Notes.docx", size: "1.2 MB", shared: "Carol Davis", date: "3 days ago" }
              ].map((file, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <h4 className="font-medium truncate">{file.name}</h4>
                      <p className="text-sm text-gray-500">{file.size}</p>
                      <p className="text-xs text-gray-400">Shared by {file.shared}</p>
                      <p className="text-xs text-gray-400">{file.date}</p>
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

export default CoMS;
