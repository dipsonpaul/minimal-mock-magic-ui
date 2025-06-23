
import React from 'react';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';

const TopNavigation = () => {
  return (
    <header className="bg-slate-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center space-x-6">
            <div className="text-lg font-bold text-blue-400">CoMS</div>
            <nav className="hidden md:flex space-x-4">
              <Link to="/" className="text-gray-300 hover:text-white text-xs font-medium">HOME</Link>
              
              {/* PURCHASE Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-gray-300 hover:text-white text-xs font-medium">
                  PURCHASE <ChevronDown className="ml-1 h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white">
                  <DropdownMenuItem>
                    <Link to="/materials-requisition" className="text-gray-700 hover:text-gray-900">Materials Requisition</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/purchase-orders" className="text-gray-700 hover:text-gray-900">Purchase Orders</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/purchase-bill" className="text-gray-700 hover:text-gray-900">Purchase Bill</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/preview-purchase" className="text-gray-700 hover:text-gray-900">Preview Purchase</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* WAREHOUSE Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-gray-300 hover:text-white text-xs font-medium">
                  WAREHOUSE <ChevronDown className="ml-1 h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white">
                  <DropdownMenuItem>
                    <Link to="/warehouse" className="text-gray-700 hover:text-gray-900">Warehouse</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/dispatch" className="text-gray-700 hover:text-gray-900">Dispatch</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/stock-correction" className="text-gray-700 hover:text-gray-900">Stock Correction</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/effect-return" className="text-gray-700 hover:text-gray-900">Effect Return</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* SALES Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-gray-300 hover:text-white text-xs font-medium">
                  SALES <ChevronDown className="ml-1 h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white">
                  <DropdownMenuItem>
                    <Link to="/quotation" className="text-gray-700 hover:text-gray-900">Quotation</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/sales" className="text-gray-700 hover:text-gray-900">Sales</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/quotation-generation" className="text-gray-700 hover:text-gray-900">Quotation Generation</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/terms-and-conditions" className="text-gray-700 hover:text-gray-900">Terms and Conditions</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/reports/daybook" className="text-gray-300 hover:text-white text-xs font-medium">DAY BOOK</Link>
              <Link to="/reports/daily-expense" className="text-gray-300 hover:text-white text-xs font-medium">DAILY EXPENSES</Link>
              
              {/* BUYERS Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-gray-300 hover:text-white text-xs font-medium">
                  BUYERS <ChevronDown className="ml-1 h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white">
                  <DropdownMenuItem>
                    <Link to="/buyer-transactions" className="text-gray-700 hover:text-gray-900">Transactions</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/buyer-invoices" className="text-gray-700 hover:text-gray-900">Invoices</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* LABOUR Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-gray-300 hover:text-white text-xs font-medium">
                  LABOUR <ChevronDown className="ml-1 h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white">
                  <DropdownMenuItem>
                    <Link to="/labour-master" className="text-gray-700 hover:text-gray-900">Master</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/labour-template" className="text-gray-700 hover:text-gray-900">Templates</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/labour-entries" className="text-gray-700 hover:text-gray-900">Entries</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              {/* VENDORS Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-gray-300 hover:text-white text-xs font-medium">
                  VENDORS <ChevronDown className="ml-1 h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white">
                  <DropdownMenuItem>
                    <Link to="/vendors-list" className="text-gray-700 hover:text-gray-900">Vendors List</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/vendor-payments" className="text-gray-700 hover:text-gray-900">Payments</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/vouchers" className="text-gray-700 hover:text-gray-900">Vouchers</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* SUB CONTRACTORS Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-gray-300 hover:text-white text-xs font-medium">
                  SUB CONTRACTORS <ChevronDown className="ml-1 h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white">
                  <DropdownMenuItem>
                    <Link to="/subcontractors-quotations" className="text-gray-700 hover:text-gray-900">Quotations</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/subcontractor-payments" className="text-gray-700 hover:text-gray-900">Payments</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/subcontractor-bills" className="text-gray-700 hover:text-gray-900">Bills</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* RMS Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-gray-300 hover:text-white text-xs font-medium">
                  RMS <ChevronDown className="ml-1 h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white">
                  <DropdownMenuItem>
                    <Link to="/consumption-reports" className="text-gray-700 hover:text-gray-900">Consumption Reports</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/estimation" className="text-gray-700 hover:text-gray-900">Estimation</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/labour-entries" className="text-gray-700 hover:text-gray-900">Labour Entries</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* SETTINGS Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-gray-300 hover:text-white text-xs font-medium">
                  SETTINGS <ChevronDown className="ml-1 h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white">
                  <DropdownMenuItem>
                    <Link to="/media-settings" className="text-gray-700 hover:text-gray-900">Media Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/menu-permissions" className="text-gray-700 hover:text-gray-900">Menu Permissions</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/pdf-layouts" className="text-gray-700 hover:text-gray-900">PDF Layouts</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/petty-cash-payment" className="text-gray-700 hover:text-gray-900">Petty Cash Payment</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/projects" className="text-gray-700 hover:text-gray-900">Projects</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/purchase-item" className="text-gray-700 hover:text-gray-900">Purchase Item</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/quotation-category" className="text-gray-700 hover:text-gray-900">Quotation Category</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/quotation-finish" className="text-gray-700 hover:text-gray-900">Quotation Finish</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/quotation-footer-template" className="text-gray-700 hover:text-gray-900">Quotation Footer Template</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/quotation-item" className="text-gray-700 hover:text-gray-900">Quotation Item</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/quotation-item-rate" className="text-gray-700 hover:text-gray-900">Quotation Item Rate</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/quotation-worktype" className="text-gray-700 hover:text-gray-900">Quotation Worktype</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/ratecard" className="text-gray-700 hover:text-gray-900">Ratecard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/sales-executive" className="text-gray-700 hover:text-gray-900">Sales Executive</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/tax-slab" className="text-gray-700 hover:text-gray-900">Tax Slab</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/unit" className="text-gray-700 hover:text-gray-900">Unit</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/update-delete-log" className="text-gray-700 hover:text-gray-900">Update/Delete Log</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/user-roles" className="text-gray-700 hover:text-gray-900">User Roles</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/users" className="text-gray-700 hover:text-gray-900">Users</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/work-type" className="text-gray-700 hover:text-gray-900">Work Type</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* REPORTS Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-gray-300 hover:text-white text-xs font-medium">
                  REPORTS <ChevronDown className="ml-1 h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white max-h-96 overflow-y-auto">
                  <DropdownMenuItem>
                    <Link to="/reports/ageing-report" className="text-gray-700 hover:text-gray-900">Ageing Report</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/reports/bank-transaction-report" className="text-gray-700 hover:text-gray-900">Bank Transaction Report</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/reports/bulk-vendor-payment" className="text-gray-700 hover:text-gray-900">Bulk Vendor Payment</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/reports/buyer-report" className="text-gray-700 hover:text-gray-900">Buyer Report</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/reports/cashbalance-report" className="text-gray-700 hover:text-gray-900">Cashbalance Report</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/reports/daily-expense" className="text-gray-700 hover:text-gray-900">Daily Expense</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/reports/daily-expense-report" className="text-gray-700 hover:text-gray-900">Daily Expense Report</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/reports/daily-financial-report" className="text-gray-700 hover:text-gray-900">Daily Financial Report</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/reports/daily-financial-summary-report" className="text-gray-700 hover:text-gray-900">Daily Financial Summary Report</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/reports/day-book-transactions" className="text-gray-700 hover:text-gray-900">Day Book Transactions</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/reports/daybook" className="text-gray-700 hover:text-gray-900">Daybook</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/reports/export-data" className="text-gray-700 hover:text-gray-900">Export Data</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/reports/financial-reports" className="text-gray-700 hover:text-gray-900">Financial Reports</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/reports/labour-report" className="text-gray-700 hover:text-gray-900">Labour Report</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/reports/material-consumption-report" className="text-gray-700 hover:text-gray-900">Material Consumption Report</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/reports/new-projects" className="text-gray-700 hover:text-gray-900">New Projects</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/reports/pl-report" className="text-gray-700 hover:text-gray-900">P&L Report</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/reports/pending-bills" className="text-gray-700 hover:text-gray-900">Pending Bills</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/reports/petty-cash-report" className="text-gray-700 hover:text-gray-900">Petty Cash Report</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/reports/project-payment-report" className="text-gray-700 hover:text-gray-900">Project Payment Report</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/reports/project-report" className="text-gray-700 hover:text-gray-900">Project Report</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/reports/purchase-bill-report" className="text-gray-700 hover:text-gray-900">Purchase Bill Report</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/reports/purchase-report" className="text-gray-700 hover:text-gray-900">Purchase Report</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/reports/quantity-estimation-report" className="text-gray-700 hover:text-gray-900">Quantity Estimation Report</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/reports/receipt-report" className="text-gray-700 hover:text-gray-900">Receipt Report</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/reports/reconciliation-report" className="text-gray-700 hover:text-gray-900">Reconciliation Report</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/reports/salary-report" className="text-gray-700 hover:text-gray-900">Salary Report</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/reports/sales-quotation-report" className="text-gray-700 hover:text-gray-900">Sales Quotation Report</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/reports/stock-correction-report" className="text-gray-700 hover:text-gray-900">Stock Correction Report</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/reports/stock-status-report" className="text-gray-700 hover:text-gray-900">Stock Status Report</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/reports/stock-value-report" className="text-gray-700 hover:text-gray-900">Stock Value Report</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/reports/subcontractor-payment" className="text-gray-700 hover:text-gray-900">Subcontractor Payment</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/reports/subcontractor-payment-report" className="text-gray-700 hover:text-gray-900">Subcontractor Payment Report</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/reports/tax-report" className="text-gray-700 hover:text-gray-900">Tax Report</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/reports/tds-report" className="text-gray-700 hover:text-gray-900">TDS Report</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/reports/transfer-report" className="text-gray-700 hover:text-gray-900">Transfer Report</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/reports/vendor-payment-report" className="text-gray-700 hover:text-gray-900">Vendor Payment Report</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/reports/work-status-report" className="text-gray-700 hover:text-gray-900">Work Status Report</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-white text-xs">Admin Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavigation;
