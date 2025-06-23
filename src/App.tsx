
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import PMS from "./pages/PMS";
import CoMS from "./pages/CoMS";
import CRM from "./pages/CRM";
import HRMS from "./pages/HRMS";
import QualityBQQ from "./pages/QualityBQQ";
import DocumentManagement from "./pages/DocumentManagement";
import Procurement from "./pages/Procurement";
import InventoryManagement from "./pages/InventoryManagement";
import TaskManagement from "./pages/TaskManagement";
import SalesManagement from "./pages/SalesManagement";
import ResourceManagement from "./pages/ResourceManagement";
import Estimation from "./pages/Estimation";
import EmployeeDetails from "./pages/EmployeeDetails";

// Import new module pages
import BuyerTransactions from "./pages/BuyerTransactions";
import BuyerInvoices from "./pages/BuyerInvoices";
import EquipmentEntries from "./pages/EquipmentEntries";
import SubcontractorsQuotations from "./pages/SubcontractorsQuotations";
import SubcontractorPayments from "./pages/SubcontractorPayments";
import SubcontractorBills from "./pages/SubcontractorBills";
import Vouchers from "./pages/Vouchers";
import VendorPayments from "./pages/VendorPayments";
import VendorsList from "./pages/VendorsList";
import LabourEntries from "./pages/LabourEntries";
import LabourTemplate from "./pages/LabourTemplate";
import LabourWorkType from "./pages/LabourWorkType";
import ConsumptionReports from "./pages/ConsumptionReports";

// Import settings pages
import MediaSettings from "./pages/settings/MediaSettings";
import MenuPermissions from "./pages/settings/MenuPermissions";
import PdfLayouts from "./pages/settings/PdfLayouts";

// Import all report pages
import AgeingReport from "./pages/reports/AgeingReport";
import BankTransactionReport from "./pages/reports/BankTransactionReport";
import BulkVendorPayment from "./pages/reports/BulkVendorPayment";
import BuyerReport from "./pages/reports/BuyerReport";
import CashbalanceReport from "./pages/reports/CashbalanceReport";
import DailyExpense from "./pages/reports/DailyExpense";
import DailyExpenseReport from "./pages/reports/DailyExpenseReport";
import DailyFinancialReport from "./pages/reports/DailyFinancialReport";
import DailyFinancialSummaryReport from "./pages/reports/DailyFinancialSummaryReport";
import DayBookTransactions from "./pages/reports/DayBookTransactions";
import Daybook from "./pages/reports/Daybook";
import ExportData from "./pages/reports/ExportData";
import FinancialReports from "./pages/reports/FinancialReports";
import LabourReport from "./pages/reports/LabourReport";
import MaterialConsumptionReport from "./pages/reports/MaterialConsumptionReport";
import NewProjects from "./pages/reports/NewProjects";
import PLReport from "./pages/reports/PLReport";
import PendingBills from "./pages/reports/PendingBills";
import PettyCashReport from "./pages/reports/PettyCashReport";
import ProjectPaymentReport from "./pages/reports/ProjectPaymentReport";
import ProjectReport from "./pages/reports/ProjectReport";
import PurchaseBillReport from "./pages/reports/PurchaseBillReport";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pms" element={<PMS />} />
          <Route path="/coms" element={<CoMS />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/hrms" element={<HRMS />} />
          <Route path="/quality-bqq" element={<QualityBQQ />} />
          <Route path="/dms" element={<DocumentManagement />} />
          <Route path="/procurement" element={<Procurement />} />
          <Route path="/inventory" element={<InventoryManagement />} />
          <Route path="/task-management" element={<TaskManagement />} />
          <Route path="/sales" element={<SalesManagement />} />
          <Route path="/resource-management" element={<ResourceManagement />} />
          <Route path="/estimation" element={<Estimation />} />
          <Route path="/employee/:id" element={<EmployeeDetails />} />
          
          {/* New Module Pages */}
          <Route path="/buyer-transactions" element={<BuyerTransactions />} />
          <Route path="/buyer-invoices" element={<BuyerInvoices />} />
          <Route path="/equipment-entries" element={<EquipmentEntries />} />
          <Route path="/subcontractors-quotations" element={<SubcontractorsQuotations />} />
          <Route path="/subcontractor-payments" element={<SubcontractorPayments />} />
          <Route path="/subcontractor-bills" element={<SubcontractorBills />} />
          <Route path="/vouchers" element={<Vouchers />} />
          <Route path="/vendor-payments" element={<VendorPayments />} />
          <Route path="/vendors-list" element={<VendorsList />} />
          <Route path="/labour-entries" element={<LabourEntries />} />
          <Route path="/labour-template" element={<LabourTemplate />} />
          <Route path="/labour-work-type" element={<LabourWorkType />} />
          <Route path="/consumption-reports" element={<ConsumptionReports />} />
          
          {/* Settings Routes */}
          <Route path="/media-settings" element={<MediaSettings />} />
          <Route path="/menu-permissions" element={<MenuPermissions />} />
          <Route path="/pdf-layouts" element={<PdfLayouts />} />
          
          {/* Report Routes */}
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
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
