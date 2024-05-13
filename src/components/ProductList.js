import React, { useState, useEffect } from 'react';

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '/product',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
    country: 'USA', // Now visible
    endTime: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2), // Set demo end time 2 days from now
    numBids: 12, // Simulate number of bids (assuming logged in)
  },
  {
    id: 2,
    name: 'Denim Jacket',
    href: '/product',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
    imageAlt: 'Front of denim jacket.',
    price: '$120',
    color: 'Blue',
    country: 'Japan', // Now visible
    endTime: new Date(Date.now() + 1000 * 60 * 60 * 12), // Set demo end time 12 hours from now
    numBids: 5,
  },
  // More products...
];

export default function ProductList() {
  const [currentTime, setCurrentTime] = useState(Date.now());
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Assume initial login state

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000); // Update time every second

    return () => clearInterval(intervalId); // Cleanup function to stop timer on mount
  }, []);

  const calculateRemainingTime = (endTime) => {
    const now = new Date(currentTime);
    const endDate = new Date(endTime);
    const difference = endDate.getTime() - now.getTime();

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  // Assuming you have a login function
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const Timer = ({ endTime }) => {
    const { days, hours, minutes, seconds } = calculateRemainingTime(endTime);
    const now = new Date(currentTime);
    const endDate = new Date(endTime);
    const difference = endDate.getTime() - now.getTime();
    const getColor = () => {
      if (difference < (1000 * 60 * 60 * 24)) { // Less than a day
        return 'bg-yellow-500';
      } else if (difference < (1000 * 60 * 60 * 12)) { // Less than 12 hours
        return 'bg-red-500';
      } else {
        return 'bg-green-500';
      }
    };

    return (
      <div className={`absolute inset-0 top-0 right-0 flex items-center justify-center ${getColor()} p-1 rounded-full`}>
        <span className="text-xs font-bold text-white">
          {days > 0 ? `${days}d ` : ''}
          {hours > 0 ? `${hours}h ` : ''}
          {minutes > 0 ? `${minutes}m ` : ''}
          {seconds}s
        </span>
      </div>
    );
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Trending Auctions</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
                        <div key={product.id} className="group relative">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                          {/* Timer in top corner */}
                          {product.endTime && <Timer endTime={product.endTime} />}
          
                          <img
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            className="object-cover pointer-events-none group-hover:opacity-75 lg:w-full lg:h-full"
                          />
                        </div>
                        <div className="mt-4 flex justify-between">
                          <div>
                            <h3 className="text-sm text-gray-700">
                              <a href={product.href}>
                                <span aria-hidden="true" className="absolute inset-0" />
                                {product.name}
                              </a>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">{product.price}</p>
                            <p className="mt-1 text-xs text-gray-500">Country: {product.country}</p>
                          </div>
                          {isLoggedIn && (
                            <button className="bg-gray-900 py-2 px-2 text-xs font-semibold text-white rounded h-8">
                              Bid now
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  {!isLoggedIn && (
                    <button
                      onClick={handleLogin}
                      className="mt-8 bg-gray-900 py-2 px-4 text-sm font-semibold text-white rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-gray-100"
                    >
                      Log in to bid
                    </button>
                  )}
                </div>
              </div>
            );
          }
          
