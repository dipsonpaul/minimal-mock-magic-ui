
import React from 'react';
import { Button } from "@/components/ui/button";
import TopNavigation from "@/components/shared/TopNavigation";
import Footer from "@/components/shared/Footer";

const EquipmentEntries = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavigation />

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Equipments Entries</h1>
            <div className="flex space-x-2">
              <Button className="bg-blue-600 hover:bg-blue-700 text-xs">EQUIPMENTS ENTRIES</Button>
              <Button variant="outline" className="text-xs">Entries</Button>
              <Button variant="outline" className="text-xs">Estimation</Button>
            </div>
          </div>

          <div className="mb-4 flex items-center space-x-4">
            <div>
              <span className="text-sm font-medium">Entry Date:</span>
              <span className="ml-2 text-sm">19-06-2025</span>
            </div>
            <div className="flex space-x-2">
              <Button variant="link" className="text-blue-600 text-sm">Previous</Button>
              <span className="text-sm">|</span>
              <Button variant="link" className="text-blue-600 text-sm">Current</Button>
              <span className="text-sm">|</span>
              <Button variant="link" className="text-blue-600 text-sm">Next</Button>
            </div>
            <div className="ml-auto">
              <span className="text-sm font-medium">Last Entry date</span>
            </div>
          </div>

          <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-2 rounded mb-4">
            ■ Quantity or Amount exceeds estimation
          </div>

          <div className="text-center text-gray-500 text-lg py-12">
            No results found
          </div>

          <div className="flex space-x-2 mt-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-xs">ESTIMATION</Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-xs">LABOUR ENTRIES</Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EquipmentEntries;
