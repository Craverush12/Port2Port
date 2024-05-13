import React from 'react';
import boat from './assets/Frame-36.png';

const SecureCard = () => {
  return (
    <div className="h-full bg-gray-50 flex items-center">
      <section
        className="bg-cover bg-center w-full "
        style={{ backgroundImage: `url(${boat})`, objectFit: 'cover' }}
      >
        <div className="container mx-auto text-left text-white">
          <div className="flex items-center h-full"> {/* Keep h-full on container for content */}
            <div className="w-1/2">
              <h1 className="text-5xl font-medium mb-7 mt-7">Welcome to My Agency</h1>
              <p className="text-xl mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
            </div>
            <div className="w-1/2 pl-16">
              {/* Rest of your content */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecureCard;
