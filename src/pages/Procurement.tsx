
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  ArrowLeft, 
  Plus, 
  ShoppingCart, 
  Truck, 
  DollarSign,
  Edit,
  Trash2,
  Eye,
  Package
} from "lucide-react";
import { Link } from "react-router-dom";

const Procurement = () => {
  const [activeTab, setActiveTab] = useState("orders");
  const [editingId, setEditingId] = useState<number | null>(null);

  const [purchaseOrders, setPurchaseOrders] = useState([
    {
      id: 1,
      poNumber: "PO-2024-001",
      vendor: "Steel Suppliers Inc.",
      items: "Steel Rods, Cement",
      amount: 125000,
      status: "Approved",
      date: "2024-05-20",
      delivery: "2024-05-25"
    },
    {
      id: 2,
      poNumber: "PO-2024-002",
      vendor: "Hardware Solutions",
      items: "Electrical Items",
      amount: 45000,
      status: "Pending",
      date: "2024-05-18",
      delivery: "2024-05-22"
    },
    {
      id: 3,
      poNumber: "PO-2024-003",
      vendor: "Building Materials Co.",
      items: "Bricks, Sand, Gravel",
      amount: 85000,
      status: "Delivered",
      date: "2024-05-15",
      delivery: "2024-05-20"
    }
  ]);

  const vendors = [
    {
      id: 1,
      name: "Steel Suppliers Inc.",
      category: "Construction Materials",
      rating: 4.8,
      contact: "+1-555-0101",
      email: "contact@steelsuppliers.com",
      status: "Active"
    },
    {
      id: 2,
      name: "Hardware Solutions",
      category: "Electrical & Hardware",
      rating: 4.5,
      contact: "+1-555-0102",
      email: "sales@hardwaresol.com",
      status: "Active"
    },
    {
      id: 3,
      name: "Building Materials Co.",
      category: "Raw Materials",
      rating: 4.2,
      contact: "+1-555-0103",
      email: "orders@buildmat.com",
      status: "Inactive"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved": return "bg-blue-100 text-blue-800";
      case "Pending": return "bg-yellow-100 text-yellow-800";
      case "Delivered": return "bg-green-100 text-green-800";
      case "Active": return "bg-green-100 text-green-800";
      case "Inactive": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const addNewOrder = () => {
    const newOrder = {
      id: Date.now(),
      poNumber: `PO-2024-${String(purchaseOrders.length + 1).padStart(3, '0')}`,
      vendor: "New Vendor",
      items: "New Items",
      amount: 0,
      status: "Pending",
      date: new Date().toISOString().split('T')[0],
      delivery: new Date().toISOString().split('T')[0]
    };
    setPurchaseOrders([...purchaseOrders, newOrder]);
    setEditingId(newOrder.id);
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
              <h1 className="text-2xl font-bold text-gray-900">Procurement Management</h1>
            </div>
            <Button onClick={addNewOrder} className="bg-red-600 hover:bg-red-700">
              <Plus className="h-4 w-4 mr-2" />
              New Purchase Order
            </Button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-8">
            {["orders", "vendors", "inventory", "analytics"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? "border-red-500 text-red-600"
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
        {activeTab === "orders" && (
          <div className="space-y-6">
            {purchaseOrders.map((order) => (
              <Card key={order.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center space-x-4">
                        <h3 className="font-semibold text-lg">{order.poNumber}</h3>
                        <Badge className={getStatusColor(order.status)}>
                          {order.status}
                        </Badge>
                      </div>
                      {editingId === order.id ? (
                        <div className="space-y-2">
                          <Input 
                            defaultValue={order.vendor}
                            placeholder="Vendor Name"
                            onBlur={() => setEditingId(null)}
                          />
                          <Input 
                            defaultValue={order.items}
                            placeholder="Items"
                          />
                        </div>
                      ) : (
                        <>
                          <p className="text-gray-600">Vendor: {order.vendor}</p>
                          <p className="text-gray-600">Items: {order.items}</p>
                        </>
                      )}
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <span>Order Date: {order.date}</span>
                        <span>Delivery: {order.delivery}</span>
                        <span className="font-semibold text-green-600">₹{order.amount.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setEditingId(order.id)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
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

        {activeTab === "vendors" && (
          <div className="space-y-6">
            {vendors.map((vendor) => (
              <Card key={vendor.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">{vendor.name}</h3>
                      <p className="text-gray-600">{vendor.category}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>Rating: {vendor.rating}/5</span>
                        <span>{vendor.contact}</span>
                        <span>{vendor.email}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge className={getStatusColor(vendor.status)}>
                        {vendor.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                      <Button variant="outline" size="sm">
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        Order
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "inventory" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { item: "Steel Rods", quantity: 150, unit: "Tonnes", reorder: 50, status: "In Stock" },
              { item: "Cement Bags", quantity: 25, unit: "Bags", reorder: 100, status: "Low Stock" },
              { item: "Electrical Wire", quantity: 500, unit: "Meters", reorder: 200, status: "In Stock" },
              { item: "Paint Buckets", quantity: 15, unit: "Buckets", reorder: 30, status: "Out of Stock" }
            ].map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Package className="h-5 w-5 mr-2" />
                    {item.item}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Quantity:</span>
                      <span className="font-semibold">{item.quantity} {item.unit}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Reorder Level:</span>
                      <span>{item.reorder} {item.unit}</span>
                    </div>
                    <Badge className={getStatusColor(item.status)}>
                      {item.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "analytics" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Total Spending
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-red-600">₹2,55,000</p>
                  <p className="text-sm text-gray-600">This month</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Truck className="h-5 w-5 mr-2" />
                  Pending Deliveries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-yellow-600">8</p>
                  <p className="text-sm text-gray-600">Orders awaiting delivery</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Active Vendors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-blue-600">24</p>
                  <p className="text-sm text-gray-600">Registered vendors</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};

export default Procurement;
