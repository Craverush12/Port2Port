import React from 'react';
import { categories } from './constants';
import './assets/Ellipse-2.png'

const LandingSection = () => {
  

  return (
    <div style={{ background: 'white',height: '70vh' }} className="py-16">
    <div style={{ background: 'linear-gradient(to bottom, #FFFFFF 15%, #FF3F01 200%)',height: '50vh' }} className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl  bg-black inline-block text-transparent bg-clip-text pr-40"> {/* Adjusted padding */}
            <span className="inline-block pt-4 pr-8">WELCOME TO</span>
          </h1>
          <h1 className="text-5xl  bg-black text-transparent bg-clip-text pl-40"> {/* Adjusted padding */}
            <span className="inline-block pl-18">GLOBAL MARKETPLACE</span>
          </h1>
        </div>
        <div className="flex justify-center mb-7">
          <div className="flex items-center">
            <button className="bg-black text-white py-2 px-4 rounded mr-12">Browse Auctions</button>
            <p className="text-white w-full max-w-md">
              Streamline your buying and selling process with our secure, efficient, and globally accessible marketplace.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center mx-5">
          {categories.map((category, index) => (
            <div key={index} className="w-1/2 sm:w-1/3 md:w-1/5 px-4 mb-8 flex flex-col items-center">
              <div className="bg-white rounded-full shadow-md overflow-hidden" style={{ width: '120px', height: '120px', marginTop: '-10px', zIndex: '1'}}>
                <img
                  src={`/images/${category.image}`}
                  alt={category.name}
                  className="w-full h-48 object-cover rounded-full"
                />
              </div>
              <div className="text-center -mt-1">
                <h3 className="text-lg font-semibold">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default LandingSection;
