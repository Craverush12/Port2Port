import React from 'react';

function FilterList() {
  return (
    <ul className="divide-y divide-slate-100">
      <li className="py-4">
        <label className="block text-sm">Category:</label>
        <select className="block w-full pl-10 text-sm text-slate-500">
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="home-goods">Home Goods</option>
        </select>
      </li>
      <li className="py-4">
        <label className="block text-sm">Price:</label>
        <input type="range" min="0" max="100" className="w-full pl-10 text-sm text-slate-500" />
      </li>
      <li className="py-4">
        <label className="block text-sm">Brand:</label>
        <input type="text" className="w-full pl-10 text-sm text-slate-500" />
      </li>
      // Add more filters here
    </ul>
  );
}

export default FilterList;