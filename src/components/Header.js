import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-2">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <button className="text-xl">
            <i className="fas fa-bars"></i> {/* Menu Icon */}
          </button>
          <div className="relative">
            <button className="flex items-center text-gray-700 hover:text-gray-900">
              <span className="mr-1">All Categories</span>
              <i className="fas fa-chevron-down"></i> {/* Dropdown Icon */}
            </button>
            {/* Dropdown content can be added here */}
          </div>
          <nav className="flex space-x-4">
            <a href="#" className="flex items-center text-gray-700 hover:text-gray-900">
              <i className="fas fa-mobile-alt mr-1"></i> {/* Consumer Electronics Icon */}
              <span>Consumer Electronics</span>
            </a>
            <a href="#" className="flex items-center text-gray-700 hover:text-gray-900">
              <i className="fas fa-pen mr-1"></i> {/* Office & Stationery Icon */}
              <span>Office & Stationery</span>
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="flex items-center text-orange-500 hover:text-orange-700">
            <i className="fas fa-gift mr-1"></i> {/* Deals Icon */}
            <span>Deals</span>
          </a>
          <a href="#" className="flex items-center text-orange-500 hover:text-orange-700">
            <i className="fas fa-shipping-fast mr-1"></i> {/* Express Icon */}
            <span>Express</span>
          </a>
          <a href="#" className="flex items-center text-orange-500 hover:text-orange-700">
            <i className="fas fa-paper-plane mr-1"></i> {/* RFQ Marketplace Icon */}
            <span>RFQ Marketplace</span>
          </a>
          <a href="#" className="flex items-center text-orange-500 hover:text-orange-700">
            <i className="fas fa-briefcase mr-1"></i> {/* Enterprise Icon */}
            <span>Enterprise</span>
          </a>
          <button className="px-4 py-2 border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white rounded">
            BECOME A SELLER
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
