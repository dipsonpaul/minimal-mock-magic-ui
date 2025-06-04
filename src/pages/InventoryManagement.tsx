
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  ArrowLeft, 
  Plus, 
  Package, 
  Warehouse, 
  TrendingDown,
  TrendingUp,
  Edit,
  AlertTriangle
} from "lucide-react";
import { Link } from "react-router-dom";

const InventoryManagement = () => {
  const [activeTab, setActiveTab] = useState("stock");
  const [editingId, setEditingId] = useState<number | null>(null);

  const [inventory, setInventory] = useState([
    {
      id: 1,
      item: "Steel Rods 12mm",
      category: "Construction",
      currentStock: 150,
      minStock: 50,
      maxStock: 300,
      unit: "Pieces",
      location: "Warehouse A",
      lastUpdated: "2024-05-20"
    },
    {
      id: 2,
      item: "Cement Portland",
      category: "Materials",
      currentStock: 25,
      minStock: 100,
      maxStock: 500,
      unit: "Bags",
      location: "Warehouse B",
      lastUpdated: "2024-05-19"
    },
    {
      id: 3,
      item: "Electrical Cables",
      category: "Electrical",
      currentStock: 800,
      minStock: 200,
      maxStock: 1000,
      unit: "Meters",
      location: "Warehouse C",
      lastUpdated: "2024-05-18"
    }
  ]);

  const getStockStatus = (current: number, min: number, max: number) => {
    if (current <= min) return { status: "Low Stock", color: "bg-red-100 text-red-800" };
    if (current >= max * 0.9) return { status: "High Stock", color: "bg-blue-100 text-blue-800" };
    return { status: "Normal", color: "bg-green-100 text-green-800" };
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
              <h1 className="text-2xl font-bold text-gray-900">Inventory Management</h1>
            </div>
            <Button className="bg-yellow-600 hover:bg-yellow-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Item
            </Button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-8">
            {["stock", "movements", "alerts", "reports"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? "border-yellow-500 text-yellow-600"
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
        {activeTab === "stock" && (
          <div className="space-y-6">
            {inventory.map((item) => {
              const stockStatus = getStockStatus(item.currentStock, item.minStock, item.maxStock);
              return (
                <Card key={item.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center space-x-4">
                          <Package className="h-8 w-8 text-yellow-600" />
                          <div>
                            {editingId === item.id ? (
                              <Input 
                                defaultValue={item.item}
                                className="font-semibold"
                                onBlur={() => setEditingId(null)}
                              />
                            ) : (
                              <h3 className="font-semibold text-lg">{item.item}</h3>
                            )}
                            <p className="text-gray-600">{item.category}</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="text-gray-500">Current Stock:</span>
                            <p className="font-semibold">{item.currentStock} {item.unit}</p>
                          </div>
                          <div>
                            <span className="text-gray-500">Min Stock:</span>
                            <p className="font-semibold">{item.minStock} {item.unit}</p>
                          </div>
                          <div>
                            <span className="text-gray-500">Location:</span>
                            <p className="font-semibold">{item.location}</p>
                          </div>
                          <div>
                            <span className="text-gray-500">Last Updated:</span>
                            <p className="font-semibold">{item.lastUpdated}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className={stockStatus.color}>
                          {stockStatus.status}
                        </Badge>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setEditingId(item.id)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {activeTab === "movements" && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Recent Stock Movements</h2>
            {[
              { type: "IN", item: "Steel Rods 12mm", quantity: 50, date: "2024-05-20", reason: "Purchase Order PO-001" },
              { type: "OUT", item: "Cement Portland", quantity: 25, date: "2024-05-19", reason: "Project Alpha" },
              { type: "IN", item: "Electrical Cables", quantity: 200, date: "2024-05-18", reason: "Purchase Order PO-002" },
              { type: "OUT", item: "Steel Rods 12mm", quantity: 30, date: "2024-05-17", reason: "Project Beta" }
            ].map((movement, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {movement.type === "IN" ? 
                        <TrendingUp className="h-6 w-6 text-green-600" /> : 
                        <TrendingDown className="h-6 w-6 text-red-600" />
                      }
                      <div>
                        <h4 className="font-medium">{movement.item}</h4>
                        <p className="text-sm text-gray-500">{movement.reason}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{movement.type === "IN" ? "+" : "-"}{movement.quantity}</p>
                      <p className="text-sm text-gray-500">{movement.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "alerts" && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Stock Alerts</h2>
            {inventory.filter(item => item.currentStock <= item.minStock).map((item) => (
              <Card key={item.id} className="border-red-200">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                    <div className="flex-1">
                      <h4 className="font-medium text-red-800">{item.item}</h4>
                      <p className="text-sm text-red-600">
                        Current stock ({item.currentStock} {item.unit}) is below minimum level ({item.minStock} {item.unit})
                      </p>
                    </div>
                    <Button variant="outline" size="sm" className="text-red-600 border-red-600">
                      Reorder
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "reports" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Warehouse className="h-5 w-5 mr-2" />
                  Total Items
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-yellow-600">{inventory.length}</p>
                  <p className="text-sm text-gray-600">Items in inventory</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Low Stock Items
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-red-600">
                    {inventory.filter(item => item.currentStock <= item.minStock).length}
                  </p>
                  <p className="text-sm text-gray-600">Items need reordering</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="h-5 w-5 mr-2" />
                  Total Value
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-green-600">₹8,45,000</p>
                  <p className="text-sm text-gray-600">Estimated inventory value</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};

export default InventoryManagement;
