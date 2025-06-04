
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  ArrowLeft, 
  Plus, 
  FileText, 
  Download, 
  Upload, 
  Search,
  Folder,
  Edit,
  Trash2,
  Eye
} from "lucide-react";
import { Link } from "react-router-dom";

const DocumentManagement = () => {
  const [activeTab, setActiveTab] = useState("documents");
  const [searchTerm, setSearchTerm] = useState("");

  const documents = [
    {
      id: 1,
      name: "Project Proposal.pdf",
      type: "PDF",
      size: "2.5 MB",
      modified: "2024-05-20",
      version: "v1.2",
      status: "Final",
      category: "Proposals"
    },
    {
      id: 2,
      name: "Technical Specifications.docx",
      type: "DOCX",
      size: "1.8 MB",
      modified: "2024-05-18",
      version: "v2.0",
      status: "Draft",
      category: "Technical"
    },
    {
      id: 3,
      name: "Financial Report Q1.xlsx",
      type: "XLSX",
      size: "856 KB",
      modified: "2024-05-15",
      version: "v1.0",
      status: "Approved",
      category: "Financial"
    },
    {
      id: 4,
      name: "Site Photos.zip",
      type: "ZIP",
      size: "15.2 MB",
      modified: "2024-05-22",
      version: "v1.0",
      status: "Final",
      category: "Media"
    }
  ];

  const folders = [
    { name: "Proposals", count: 12, modified: "2024-05-20" },
    { name: "Technical Docs", count: 28, modified: "2024-05-19" },
    { name: "Financial", count: 15, modified: "2024-05-18" },
    { name: "Legal", count: 8, modified: "2024-05-17" },
    { name: "Media", count: 45, modified: "2024-05-22" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Final": return "bg-green-100 text-green-800";
      case "Draft": return "bg-yellow-100 text-yellow-800";
      case "Approved": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getFileIcon = (type: string) => {
    return <FileText className="h-8 w-8 text-blue-600" />;
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
              <h1 className="text-2xl font-bold text-gray-900">Document Management System</h1>
            </div>
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              <Upload className="h-4 w-4 mr-2" />
              Upload Document
            </Button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-8">
            {["documents", "folders", "recent", "shared"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search documents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {activeTab === "documents" && (
          <div className="space-y-6">
            {documents.map((doc) => (
              <Card key={doc.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {getFileIcon(doc.type)}
                      <div className="space-y-1">
                        <h3 className="font-semibold text-lg">{doc.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{doc.type}</span>
                          <span>{doc.size}</span>
                          <span>Modified: {doc.modified}</span>
                          <span>{doc.version}</span>
                        </div>
                        <Badge className="text-xs">{doc.category}</Badge>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge className={getStatusColor(doc.status)}>
                        {doc.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
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

        {activeTab === "folders" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {folders.map((folder, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Folder className="h-12 w-12 text-blue-600" />
                    <div className="space-y-1">
                      <h3 className="font-semibold text-lg">{folder.name}</h3>
                      <p className="text-sm text-gray-500">{folder.count} files</p>
                      <p className="text-xs text-gray-400">Modified: {folder.modified}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "recent" && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Recently Accessed</h2>
            {documents.slice(0, 3).map((doc) => (
              <Card key={doc.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {getFileIcon(doc.type)}
                      <div>
                        <h4 className="font-medium">{doc.name}</h4>
                        <p className="text-sm text-gray-500">Accessed: {doc.modified}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      Open
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "shared" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Shared Documents</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Share Document
              </Button>
            </div>
            {documents.filter(doc => doc.status === "Final").map((doc) => (
              <Card key={doc.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {getFileIcon(doc.type)}
                      <div className="space-y-1">
                        <h3 className="font-semibold">{doc.name}</h3>
                        <p className="text-sm text-gray-500">Shared with: Project Team</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Badge variant="outline">Read Only</Badge>
                      <Button variant="outline" size="sm">Manage Access</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default DocumentManagement;
