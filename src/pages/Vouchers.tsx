
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import TopNavigation from "@/components/shared/TopNavigation";
import Footer from "@/components/shared/Footer";

const Vouchers = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavigation />

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800">VOUCHERS</h1>
            <Button className="bg-blue-600 hover:bg-blue-700">Add Entry</Button>
          </div>

          {/* Filter Section */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-6">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="-Select Voucher for-" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="vendor">Vendor</SelectItem>
                <SelectItem value="employee">Employee</SelectItem>
                <SelectItem value="contractor">Contractor</SelectItem>
              </SelectContent>
            </Select>
            <Input placeholder="Voucher Date" type="date" />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="-Select Company-" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="company1">Company 1</SelectItem>
                <SelectItem value="company2">Company 2</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="-Select Project-" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="project1">Project 1</SelectItem>
                <SelectItem value="project2">Project 2</SelectItem>
              </SelectContent>
            </Select>
            <Input placeholder="Voucher Number" />
            <div className="flex space-x-2">
              <Button className="bg-blue-600 hover:bg-blue-700 text-xs">Go</Button>
              <Button variant="outline" className="text-xs">Clear</Button>
            </div>
          </div>

          <div className="text-center text-gray-500 text-lg py-12">
            No results found
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Vouchers;
