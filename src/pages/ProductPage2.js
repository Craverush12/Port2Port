import React, { useState } from 'react';
import boy from '../components/assets/boy.jpg';
import boat from '../components/assets/Frame-36.png';
import Description from '../components/Description';

const ProductPage2 = () => {
  const [mainImage, setMainImage] = useState('../components/assets/boy.jpg');
  const [signedIn, setSignedIn] = useState(false);

  const relatedProducts = [
    {
      image: {boat},
      name: 'Related Product 1',
      price: '$100',
    },
    {
      image: {boat},
      name: 'Related Product 2',
      price: '$200',
    },
    {
      image: '../components/assets/boy.jpg',
      name: 'Related Product 3',
      price: '$300',
    },
  ];

  const handleSignIn = () => {
    setSignedIn(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <div className="flex">
          {/* Product Gallery */}
          <div className="w-2/3">
            <div className="mb-4">
              <img
                src="path_to_thumbnail_2"
                alt="Main Product"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="flex space-x-2">
              <img
                src={boy}
                alt="Thumbnail 1"
                className="w-20 h-20 rounded-lg cursor-pointer"
                onMouseOver={() => setMainImage('../components/assets/boy.jpg')}
              />
              <img
                src="path_to_thumbnail_2"
                alt="Thumbnail 2"
                className="w-20 h-20 rounded-lg cursor-pointer"
                onMouseOver={() => setMainImage('path_to_thumbnail_2')}
              />
              <img
                src="path_to_thumbnail_3"
                alt="Thumbnail 3"
                className="w-20 h-20 rounded-lg cursor-pointer"
                onMouseOver={() => setMainImage('path_to_thumbnail_3')}
              />
              <img
                src="path_to_thumbnail_4"
                alt="Thumbnail 4"
                className="w-20 h-20 rounded-lg cursor-pointer"
                onMouseOver={() => setMainImage('path_to_thumbnail_4')}
              />
            </div>
          </div>

       {/* Seller Card */}
     {/* Seller Card */}
<div className="w-1/3 p-4 bg-white rounded-lg shadow-lg">
  <h2 className="text-xl font-bold mb-2">Big thing</h2>
  <p className="text-gray-600 mb-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
    turpis molestie, dictum est a, mattis tellus.
  </p>
  <div className="flex flex-col mb-2">
    <div className="flex items-center ">
      <span className="text-gray-600 text-sm mr-2">
        <svg className="w-4 h-4 inline-block mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a1 1 0 000 2h.293l2.36 6.775a1 1 0 01-.528 1.262l-3.75 1.563a1 1 0 00-.492 1.354l2 5a1 1 0 001.354.492l3.75-1.563a1 1 0 011.262.528l2.36 6.775A1 1 0 0014.707 18H18a1 1 0 000-2h-.293l-2.36-6.775a1 1 0 01.528-1.262l3.75-1.563a1 1 0 00.492-1.354l-2-5a1 1 0 00-1.354-.492l-3.75 1.563a1 1 0 01-1.262-.528L7.707 4H6zM3 14.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm10.5-1.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clipRule="evenodd" />
        </svg>
        <span id="timer" className="text-gray-600 text-sm font-bold">1d 6h 30m</span>
      </span>
      <span className="text-gray-600 text-sm mr-2">
        <svg className="w-4 h-4 inline-block mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M9 2a7 7 0 00-7 7v4a7 7 0 006 6.93V19a1 1 0 102 0v-1.07A7 7 0 1018 11V9a7 7 0 00-7-7zm-5 7a5 5 0 1110 0v2H4V9zM5 11v4a5 5 0 1010 0v-4H5zm5 7a5 5 0 01-5-5v-2h10v2a5 5 0 01-5 5z" clipRule="evenodd" />
        </svg>
        Helsinki, Finland
      </span>
    </div>
    <div className="flex items-center">
      <span className="text-gray-600 text-sm mr-2">
        <svg className="w-4 h-4 inline-block mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.293 9.293a1 1 0 011.414 0L17 12.586V9a1 1 0 112 0v6a1 1 0 01-1 1H12a1 1 0 110-2h3.586l-3.293-3.293a1 1 0 010-1.414zM7 7H4a1 1 0 00-1 1v3.586L1.707 10.293a1 1 0 10-1.414 1.414l3.586 3.586A1 1 0 005 15h3.586l1.707-1.707A1 1 0 009 11V8a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        In-Transit
      </span>
      <span className="text-gray-600 text-sm">
        <svg className="w-4 h-4 inline-block mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-9.707a1 1 0 10-1.414 1.414L10.586 12H7a1 1 0 000 2h5a1 1 0 000-2h-3.586l1.293-1.293zM10 4a1 1 0 00-1 1v4a1 1 0 102 0V5a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        18 Bids
      </span>
    </div>
  </div>
  <div className="mb-4">
    <span className="text-gray-700 font-bold">Base Price:</span>{' '}
    <span className="text-gray-900 font-bold">$54,340</span>
  </div>
  <button className="w-full bg-orange-500 text-white py-2 rounded-lg">
    Place Bid
  </button>
</div>
</div>
        {/* Related Products */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">Related Products</h3>
          <div className="grid grid-cols-3 gap-4">
            {relatedProducts.map((product, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto mb-2 rounded-lg"
                />
                <h4 className="text-lg font-bold">{product.name}</h4>
                <p className="text-gray-700">{product.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Supplier Information */}
        <div className="mt-8 p-4 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Supplier Information</h3>
          {signedIn ? (
            <Description />
            
          ) : (
            <div>
              <p className="text-gray-700 mb-4">
                Sign-in to get the supplier information.
              </p>
              <button
                onClick={handleSignIn}
                className="w-full bg-black text-white py-2 rounded-lg"
              >
                Sign In
              </button>
              
            </div>
          )}
        </div>
      </div>
      <div>
        
      </div>

      {/* Footer */}
      <footer className="mt-12 p-4 bg-gray-800 text-white text-center">
        &copy; 2024 PORT2PORT Org. All rights reserved.
      </footer>
      
    </div>
  );
};

export default ProductPage2;
