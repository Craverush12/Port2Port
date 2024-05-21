import React from 'react';
import products from './products';

function ProductList2() {
  return (
    <ul className="divide-y divide-slate-100">
      {products.map((product) => (
        <li key={product.id} className="py-4">
          <h3 className="text-lg">{product.title}</h3>
          <p className="text-sm">{product.description}</p>
          <p className="text-lg">${product.price}</p>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ProductList2;