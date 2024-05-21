import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

// Sample data
const products = [
  {
    id: 1,
    name: 'Pepsi 155ml x 30',
    createdOn: '16 May 2024',
    expiresOn: '23 May 2024',
    country: 'United Arab Emirates',
    quotes: 1,
    imageUrl: 'https://via.placeholder.com/100', // Placeholder image URL
  },
  {
    id: 2,
    name: 'Themra Turkish Honey Macun 240g x 15',
    createdOn: '15 May 2024',
    expiresOn: '01 Jul 2024',
    country: 'Qatar',
    quotes: 0,
    imageUrl: 'https://via.placeholder.com/100', // Placeholder image URL
  },
  {
    id: 3,
    name: 'Rainbow Evaporated Milk Original 170g, Carton of 96pcs',
    createdOn: '11 May 2024',
    expiresOn: '15 Jul 2024',
    country: 'United Arab Emirates',
    quotes: 1,
    imageUrl: 'https://via.placeholder.com/100', // Placeholder image URL
  },
];

const Categories1 = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">RFQ Marketplace</h1>
        <div className="flex">
          {/* Filters Section */}
          <div className="w-1/4 p-4 border-r">
            <h2 className="text-xl font-semibold mb-2">Filters</h2>
            <div>
              <label className="block mb-1 font-medium">Show only</label>
              <div className="mb-2">
                <input type="checkbox" id="expiring-soon" />
                <label htmlFor="expiring-soon" className="ml-2">Expiring Soon</label>
              </div>
              <div className="mb-2">
                <input type="checkbox" id="quote-submitted" />
                <label htmlFor="quote-submitted" className="ml-2">Quote Submitted</label>
              </div>
              <div className="mb-2">
                <input type="checkbox" id="pending-quote" />
                <label htmlFor="pending-quote" className="ml-2">Pending Quote</label>
              </div>
            </div>
            <div className="mt-4">
              <label className="block mb-1 font-medium">Categories</label>
              {['Food & Beverage', 'Baby Center', 'Personal Care', 'Consumer Electronics'].map((category, index) => (
                <div key={index} className="mb-2">
                  <input type="checkbox" id={`category-${index}`} />
                  <label htmlFor={`category-${index}`} className="ml-2">{category}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Products List Section */}
          <div className="w-3/4 p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">RFQs ({products.length})</h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search RFQs"
                  className="px-4 py-2 border rounded w-full"
                />
                <svg
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35M3 10a7 7 0 1014 0 7 7 0 00-14 0z"
                  ></path>
                </svg>
              </div>
            </div>
            {products.map(product => (
              <div key={product.id} className="flex items-center mb-4 p-4 border rounded">
                <img src={product.imageUrl} alt={product.name} className="w-24 h-24 object-cover mr-4" />
                <div className="flex-grow px-4"> {/* Added px-4 for uniform padding */}
                  <h3 className="text-lg font-bold text-blue-700">{product.name}</h3>
                  <div className="flex justify-between">
                    <p>Created on: <span className="font-semibold">{product.createdOn}</span></p>
                    <p>RFQ ID: <span className="font-semibold">{`RFQ${product.id}`}</span></p>
                  </div>
                  <div className="flex justify-between mt-2"> {/* Added mt-2 for spacing */}
                    <p>RFQ expires on: <span className="font-semibold">{product.expiresOn}</span></p>
                    <p>Ship to: <span className="font-semibold">{product.country}</span></p>
                  </div>
                </div>
                <div className="text-center">
                  <p className="mb-2">Received quotes: <span className="font-semibold">{product.quotes}</span></p>
                  <button className="px-4 py-2 bg-orange-500 text-white rounded">SUBMIT QUOTE</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories1;
