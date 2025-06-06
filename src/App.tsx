
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
