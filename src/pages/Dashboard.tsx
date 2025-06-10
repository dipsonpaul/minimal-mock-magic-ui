import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { 
  TrendingUp, DollarSign, Users, ShoppingCart, 
  FileText, Calendar, ArrowUpRight, ArrowDownRight
} from 'lucide-react';

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('current-month');

  // Mock data based on the reference images
  const financialMetrics = {
    accountsPayable: { amount: '31.0L', change: 100, trend: 'up' },
    accountsReceivable: { amount: '0', change: 0, trend: 'neutral' },
    cashFlow: { amount: '0', change: 0, trend: 'neutral' },
    netProfit: { amount: '0', change: 0, trend: 'neutral' },
    grossProfit: { amount: '0', change: 0, trend: 'neutral' }
  };

  // Chart data
  const accountsBalanceData = [
    { name: 'April', Bank: 493, Cash: 493, Petty: 50 },
    { name: 'May', Bank: 493, Cash: 493, Petty: 50 },
    { name: 'June', Bank: 50, Cash: 50, Petty: 50 }
  ];

  const salesData = [
    { month: 'April', value: 0.8 },
    { month: 'May', value: 0.9 },
    { month: 'June', value: 0.7 }
  ];

  const profitLossData = [
    { month: 'Feb', Income: 0.8, Expenses: 0.4 },
    { month: 'Mar', Income: 0.6, Expenses: 0.3 },
    { month: 'Apr', Income: 0.9, Expenses: 0.5 },
    { month: 'May', Income: 0.7, Expenses: 0.4 },
    { month: 'Jun', Income: 0.8, Expenses: 0.3 }
  ];

  const colors = ['#3B82F6', '#EF4444', '#F59E0B'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <header className="bg-slate-900 text-white shadow-md">
        <div className="container mx-auto px-3">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center space-x-6">
              <div className="text-lg font-bold text-blue-400">CoMS</div>
              <nav className="hidden md:flex space-x-4">
                <Link to="/" className="text-gray-300 hover:text-white text-xs font-medium">HOME</Link>
                <Link to="/procurement" className="text-gray-300 hover:text-white text-xs font-medium">PURCHASE</Link>
                <Link to="/inventory" className="text-gray-300 hover:text-white text-xs font-medium">WAREHOUSE</Link>
                <Link to="/sales" className="text-gray-300 hover:text-white text-xs font-medium">SALES</Link>
                <Link to="/reports/daybook" className="bg-blue-600 text-white px-2 py-0.5 rounded text-xs font-medium">DAY BOOK</Link>
                <Link to="/reports/daily-expense" className="text-gray-300 hover:text-white text-xs font-medium">DAILY EXPENSES</Link>
                <Link to="/crm" className="text-gray-300 hover:text-white text-xs font-medium">BUYER</Link>
                <Link to="/hrms" className="text-gray-300 hover:text-white text-xs font-medium">LABOUR</Link>
                <Link to="/crm" className="text-gray-300 hover:text-white text-xs font-medium">VENDORS</Link>
                <Link to="/hrms" className="text-gray-300 hover:text-white text-xs font-medium">SUB CONTRACTORS</Link>
                <Link to="/resource-management" className="text-gray-300 hover:text-white text-xs font-medium">RMS</Link>
                <Link to="#" className="text-gray-300 hover:text-white text-xs font-medium">SETTINGS</Link>
                <Link to="#" className="text-gray-300 hover:text-white text-xs font-medium">REPORTS</Link>
              </nav>
            </div>
            <div className="flex items-center space-x-3">
              <Badge variant="secondary" className="bg-red-600 text-white text-xs">Admin Admin</Badge>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-3 py-4">
        {/* Dashboard Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-sm text-gray-600">From: 01-06-2025 To: 30-06-2025</p>
          </div>
          <div className="flex items-center space-x-3">
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-40 text-sm">
                <SelectValue placeholder="Current Month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="current-month">Current Month</SelectItem>
                <SelectItem value="last-month">Last Month</SelectItem>
                <SelectItem value="quarter">This Quarter</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="text-sm py-1 h-8">Select a Company</Button>
          </div>
        </div>

        {/* Financial Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          <Card className="relative">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xs font-medium text-gray-600">Accounts Payable</CardTitle>
                <Badge variant="secondary" className="bg-blue-600 text-white text-xs">99%</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <p className="text-lg font-bold">₹ 31.0L</p>
                <div className="flex items-center text-xs text-gray-600">
                  <TrendingUp className="h-2 w-2 mr-1" />
                  100% vs previous month
                </div>
                <div className="h-12 flex items-end justify-center">
                  <div className="w-full h-6 bg-gradient-to-t from-blue-200 to-blue-100 rounded"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xs font-medium text-gray-600">Accounts Receivable</CardTitle>
                <Badge variant="secondary" className="bg-blue-600 text-white text-xs">0%</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <p className="text-lg font-bold">₹0</p>
                <div className="flex items-center text-xs text-gray-600">
                  0% vs previous month
                </div>
                <div className="h-12 flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-medium text-gray-600">Cash Flow</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <p className="text-lg font-bold">₹0</p>
                <div className="flex items-center text-xs text-gray-600">
                  0% vs previous month
                </div>
                <div className="h-12 flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-medium text-gray-600">Net Profit</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <p className="text-lg font-bold">₹0</p>
                <div className="flex items-center text-xs text-gray-600">
                  0% vs previous month
                </div>
                <div className="h-12 flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-medium text-gray-600">Gross Profit</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <p className="text-lg font-bold">₹0</p>
                <div className="flex items-center text-xs text-gray-600">
                  0% vs previous month
                </div>
                <div className="h-12 flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Accounts Balance Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-semibold">Accounts Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={accountsBalanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="Bank" fill="#3B82F6" />
                  <Bar dataKey="Cash" fill="#EF4444" />
                  <Bar dataKey="Petty" fill="#F59E0B" />
                </BarChart>
              </ResponsiveContainer>
              <div className="flex justify-center space-x-3 mt-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded mr-1"></div>
                  <span className="text-xs">Bank</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded mr-1"></div>
                  <span className="text-xs">Cash</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-600 rounded mr-1"></div>
                  <span className="text-xs">Petty</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sales Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-semibold">Sales</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Profit & Loss Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-semibold">Profit & Loss</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={profitLossData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="Income" stroke="#22C55E" strokeWidth={2} />
                  <Line type="monotone" dataKey="Expenses" stroke="#EF4444" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
              <div className="flex justify-center space-x-3 mt-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded mr-1"></div>
                  <span className="text-xs">Income</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded mr-1"></div>
                  <span className="text-xs">Expenses</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Section - Expense */}
        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-semibold">Expense</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-6">
                <p className="text-sm text-gray-500">No expense data available for the selected period</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
