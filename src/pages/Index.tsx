<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interior Design Management System</title>
  <script src="https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@babel/standalone@7.23.4/babel.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/react-router-dom@6.22.0/dist/umd/react-router-dom.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/lucide-react@0.312.0/dist/umd/lucide-react.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://cdn.jsdelivr.net/npm/@shadcn/ui@0.0.1/dist/shadcn-ui.umd.js"></script>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel">
    const { useState, useEffect } = React;
    const { BrowserRouter, Routes, Route, Link, useParams } = ReactRouterDOM;
    const { Card, CardContent, CardDescription, CardHeader, CardTitle } = window.shadcn_ui;
    const { Button } = window.shadcn_ui;
    const { Badge } = window.shadcn_ui;
    const { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } = window.shadcn_ui;
    const { 
      Users, Settings, BarChart3, FileText, ShoppingCart, 
      Warehouse, Calculator, UserCheck, ClipboardList, 
      TrendingUp, ChevronDown, Table
    } = Lucide;

    const mockData = {
      ageingReport: [
        { client: "John Doe", project: "Living Room Redesign", daysOverdue: 45, amount: 2500, status: "Critical" },
        { client: "Jane Smith", project: "Bedroom Makeover", daysOverdue: 30, amount: 1800, status: "Warning" },
      ],
      bankTransactionReport: [
        { date: "2025-06-01", description: "Payment for Furniture", amount: -15000, balance: 35000 },
        { date: "2025-06-03", description: "Client Payment - Kitchen Project", amount: 20000, balance: 55000 },
      ],
      bulkVendorPayment: [
        { vendor: "Furniture Co.", amount: 12000, dueDate: "2025-06-15", status: "Pending" },
        { vendor: "Textile Supplier", amount: 5000, dueDate: "2025-06-20", status: "Pending" },
      ],
      buyerReport: [
        { buyer: "Luxury Homes Inc.", projects: 3, totalSpent: 45000, lastPurchase: "2025-06-05" },
      ],
      cashbalanceReport: [
        { date: "2025-06-09", cashInHand: 15000, bankBalance: 40000, total: 55000 },
      ],
      dailyExpense: [
        { date: "2025-06-09", description: "Paint Supplies", amount: 1200, category: "Materials" },
        { date: "2025-06-09", description: "Designer Fee", amount: 3000, category: "Labor" },
      ],
      dailyExpenseReport: [
        { date: "2025-06-09", totalExpenses: 4200, categoryBreakdown: "Materials: 1200, Labor: 3000" },
      ],
      dailyFinancialReport: [
        { date: "2025-06-09", revenue: 20000, expenses: 4200, profit: 15800 },
      ],
      dailyFinancialSummaryReport: [
        { date: "2025-06-09", openingBalance: 50000, closingBalance: 55000, netChange: 5000 },
      ],
      dayBookTransactions: [
        { date: "2025-06-09", description: "Client Payment", amount: 10000, type: "Credit" },
        { date: "2025-06-09", description: "Vendor Payment", amount: -5000, type: "Debit" },
      ],
      daybook: [
        { date: "2025-06-09", totalCredit: 10000, totalDebit: 5000, net: 5000 },
      ],
      exportData: [
        { project: "Living Room Redesign", client: "John Doe", totalCost: 25000, exportDate: "2025-06-09" },
      ],
      financialReports: [
        { period: "Q2 2025", revenue: 75000, expenses: 30000, profit: 45000 },
      ],
      labourReport: [
        { designer: "Alice Brown", hoursWorked: 40, project: "Kitchen Renovation", cost: 2000 },
      ],
      materialConsumptionReport: [
        { material: "Paint", quantity: 10, unit: "liters", project: "Bedroom Makeover", cost: 500 },
        { material: "Fabric", quantity: 20, unit: "meters", project: "Living Room", cost: 800 },
      ],
      newProjects: [
        { project: "Office Redesign", client: "Tech Corp", startDate: "2025-06-10", estimatedCost: 30000 },
      ],
      plReport: [
        { period: "June 2025", revenue: 50000, expenses: 20000, profit: 30000 },
      ],
      pendingBills: [
        { client: "Jane Smith", project: "Bedroom Makeover", amount: 1800, dueDate: "2025-06-15" },
      ],
      pettyCashReport: [
        { date: "2025-06-09", description: "Office Supplies", amount: 200, balance: 1800 },
      ],
      projectPaymentReport: [
        { project: "Living Room Redesign", client: "John Doe", amountPaid: 20000, totalAmount: 25000 },
      ],
      projectReport: [
        { project: "Kitchen Renovation", status: "In Progress", completion: "75%", budgetUsed: 22500 },
      ],
      purchaseBillReport: [
        { billNo: "PB001", vendor: "Furniture Co.", amount: 12000, date: "2025-06-05" },
      ]
    };

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

    const ReportTable = ({ title, data, columns }) => (
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
          <Table className="h-6 w-6 mr-2" /> {title}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                {columns.map((col, index) => (
                  <th key={index} scope="col" className="px-6 py-3">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex} className="bg-white border-b hover:bg-gray-50">
                  {Object.values(row).map((value, colIndex) => (
                    <td key={colIndex} className="px-6 py-4">{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );

    const AgeingReport = () => (
      <ReportTable 
        title="Ageing Report" 
        data={mockData.ageingReport} 
        columns={["Client", "Project", "Days Overdue", "Amount", "Status"]} 
      />
    );

    const BankTransactionReport = () => (
      <ReportTable 
        title="Bank Transaction Report" 
        data={mockData.bankTransactionReport} 
        columns={["Date", "Description", "Amount", "Balance"]} 
      />
    );

    const BulkVendorPayment = () => (
      <ReportTable 
        title="Bulk Vendor Payment" 
        data={mockData.bulkVendorPayment} 
        columns={["Vendor", "Amount", "Due Date", "Status"]} 
      />
    );

    const BuyerReport = () => (
      <ReportTable 
        title="Buyer Report" 
        data={mockData.buyerReport} 
        columns={["Buyer", "Projects", "Total Spent", "Last Purchase"]} 
      />
    );

    const CashbalanceReport = () => (
      <ReportTable 
        title="Cash Balance Report" 
        data={mockData.cashbalanceReport} 
        columns={["Date", "Cash In Hand", "Bank Balance", "Total"]} 
      />
    );

    const DailyExpense = () => (
      <ReportTable 
        title="Daily Expense" 
        data={mockData.dailyExpense} 
        columns={["Date", "Description", "Amount", "Category"]} 
      />
    );

    const DailyExpenseReport = () => (
      <ReportTable 
        title="Daily Expense Report" 
        data={mockData.dailyExpenseReport} 
        columns={["Date", "Total Expenses", "Category Breakdown"]} 
      />
    );

    const DailyFinancialReport = () => (
      <ReportTable 
        title="Daily Financial Report" 
        data={mockData.dailyFinancialReport} 
        columns={["Date", "Revenue", "Expenses", "Profit"]} 
      />
    );

    const DailyFinancialSummaryReport = () => (
      <ReportTable 
        title="Daily Financial Summary Report" 
        data={mockData.dailyFinancialSummaryReport} 
        columns={["Date", "Opening Balance", "Closing Balance", "Net Change"]} 
      />
    );

    const DayBookTransactions = () => (
      <ReportTable 
        title="Day Book Transactions" 
        data={mockData.dayBookTransactions} 
        columns={["Date", "Description", "Amount", "Type"]} 
      />
    );

    const Daybook = () => (
      <ReportTable 
        title="Daybook" 
        data={mockData.daybook} 
        columns={["Date", "Total Credit", "Total Debit", "Net"]} 
      />
    );

    const ExportData = () => (
      <ReportTable 
        title="Export Data" 
        data={mockData.exportData} 
        columns={["Project", "Client", "Total Cost", "Export Date"]} 
      />
    );

    const FinancialReports = () => (
      <ReportTable 
        title="Financial Reports" 
        data={mockData.financialReports} 
        columns={["Period", "Revenue", "Expenses", "Profit"]} 
      />
    );

    const LabourReport = () => (
      <ReportTable 
        title="Labour Report" 
        data={mockData.labourReport} 
        columns={["Designer", "Hours Worked", "Project", "Cost"]} 
      />
    );

    const MaterialConsumptionReport = () => (
      <ReportTable 
        title="Material Consumption Report" 
        data={mockData.materialConsumptionReport} 
        columns={["Material", "Quantity", "Unit", "Project", "Cost"]} 
      />
    );

    const NewProjects = () => (
      <ReportTable 
        title="New Projects" 
        data={mockData.newProjects} 
        columns={["Project", "Client", "Start Date", "Estimated Cost"]} 
      />
    );

    const PLReport = () => (
      <ReportTable 
        title="P/L Report" 
        data={mockData.plReport} 
        columns={["Period", "Revenue", "Expenses", "Profit"]} 
      />
    );

    const PendingBills = () => (
      <ReportTable 
        title="Pending Bills" 
        data={mockData.pendingBills} 
        columns={["Client", "Project", "Amount", "Due Date"]} 
      />
    );

    const PettyCashReport = () => (
      <ReportTable 
        title="Petty Cash Report" 
        data={mockData.pettyCashReport} 
        columns={["Date", "Description", "Amount", "Balance"]} 
      />
    );

    const ProjectPaymentReport = () => (
      <ReportTable 
        title="Project Payment Report" 
        data={mockData.projectPaymentReport} 
        columns={["Project", "Client", "Amount Paid", "Total Amount"]} 
      />
    );

    const ProjectReport = () => (
      <ReportTable 
        title="Project Report" 
        data={mockData.projectReport} 
        columns={["Project", "Status", "Completion", "Budget Used"]} 
      />
    );

    const PurchaseBillReport = () => (
      <ReportTable 
        title="Purchase Bill Report" 
        data={mockData.purchaseBillReport} 
        columns={["Bill No", "Vendor", "Amount", "Date"]} 
      />
    );

    const App = () => (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pms" element={<div>Project Management System</div>} />
          <Route path="/sales" element={<div>Sales Management System</div>} />
          <Route path="/estimation" element={<div>Cost Estimation Module</div>} />
          <Route path="/quality-bqq" element={<div>Quality & Bill of Quantities</div>} />
          <Route path="/coms" element={<div>Communication Management</div>} />
          <Route path="/crm" element={<div>Customer Relationship Management</div>} />
          <Route path="/hrms" element={<div>Human Resource Management</div>} />
          <Route path="/dms" element={<div>Document Management System</div>} />
          <Route path="/procurement" element={<div>Procurement Management</div>} />
          <Route path="/inventory" element={<div>Inventory Management</div>} />
          <Route path="/task-management" element={<div>Task Management System</div>} />
          <Route path="/resource-management" element={<div>Resource Management</div>} />
          <Route path="/reports/ageing-report" element={<AgeingReport />} />
          <Route path="/reports/bank-transaction-report" element={<BankTransactionReport />} />
          <Route path="/reports/bulk-vendor-payment" element={<BulkVendorPayment />} />
          <Route path="/reports/buyer-report" element={<BuyerReport />} />
          <Route path="/reports/cashbalance-report" element={<CashbalanceReport />} />
          <Route path="/reports/daily-expense" element={<DailyExpense />} />
          <Route path="/reports/daily-expense-report" element={<DailyExpenseReport />} />
          <Route path="/reports/daily-financial-report" element={<DailyFinancialReport />} />
          <Route path="/reports/daily-financial-summary-report" element={<DailyFinancialSummaryReport />} />
          <Route path="/reports/day-book-transactions" element={<DayBookTransactions />} />
          <Route path="/reports/daybook" element={<Daybook />} />
          <Route path="/reports/export-data" element={<ExportData />} />
          <Route path="/reports/financial-reports" element={<FinancialReports />} />
          <Route path="/reports/labour-report" element={<LabourReport />} />
          <Route path="/reports/material-consumption-report" element={<MaterialConsumptionReport />} />
          <Route path="/reports/new-projects" element={<NewProjects />} />
          <Route path="/reports/pl-report" element={<PLReport />} />
          <Route path="/reports/pending-bills" element={<PendingBills />} />
          <Route path="/reports/petty-cash-report" element={<PettyCashReport />} />
          <Route path="/reports/project-payment-report" element={<ProjectPaymentReport />} />
          <Route path="/reports/project-report" element={<ProjectReport />} />
          <Route path="/reports/purchase-bill-report" element={<PurchaseBillReport />} />
        </Routes>
      </BrowserRouter>
    );

    ReactDOM.render(<App />, document.getElementById('root'));
  </script>
</body>
</html>
