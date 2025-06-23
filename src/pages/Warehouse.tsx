
import React from 'react';
import { Button } from "@/components/ui/button";
import TopNavigation from "@/components/shared/TopNavigation";
import Footer from "@/components/shared/Footer";

const Warehouse = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavigation />

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Warehouse</h1>
            <Button className="bg-blue-600 hover:bg-blue-700">Add Item</Button>
          </div>

          <div className="text-center text-gray-500 text-lg py-12">
            No warehouse items found.
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Warehouse;
