
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-8 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-sm text-gray-600">
          Version 25.06.3
        </div>
        <div className="text-sm text-gray-600 text-center">
          Powered by <span className="text-blue-600">bluehorizoninfotech.com</span><br />
          Copyright © 2025. All Rights Reserved.
        </div>
        <div className="text-sm text-gray-600">
          <select className="bg-transparent border-none">
            <option>Admin Admin</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
