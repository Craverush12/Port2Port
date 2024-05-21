import React from 'react';
import AuctionProduct from './pro';

const ProductRow = ({ products }) => {
  return (
    <div className="flex flex-nowrap overflow-x-auto align-middle justify-center">
      {products.map((product, index) => (
        <div key={index} className="mr-4">
          <AuctionProduct product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductRow;
