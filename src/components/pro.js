import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const AuctionProduct = ({ product = {} }) => {
  const {
    image = 'https://via.placeholder.com/150',
    name = 'Product Name',
    country = 'Dubai',
    price = 0,
    auctionEndTime = new Date(),
    totalBids = 0
  } = product;

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const difference = new Date(auctionEndTime) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  }

  function getTimerColorClass() {
    if (timeLeft.days > 5) {
      return 'bg-green-500';
    } else if (timeLeft.days > 2) {
      return 'bg-yellow-500';
    } else {
      return 'bg-red-500';
    }
  }

  return (
    <div className="max-w-md w-full border rounded-lg overflow-hidden shadow-lg relative bg-white" style={{ width: '250px' }}>
      <div className="relative">
        <img className="w-full h-48 object-cover" src={image} alt={name} />
        <div className={`absolute top-0 right-2 ${getTimerColorClass()} text-white p-2 rounded-lg`}>
          <div className="text-sm">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </div>
        </div>
      </div>
      <div className="p-6 flex flex-col justify-between">
        <div>
          <div className="font-bold text-xl mb-1 flex justify-between items-center">
            <div className="pr-2">{name}</div>
            <FontAwesomeIcon icon={faHeart} className="mr-2" />
          </div>
          <div className="text-sm mb-4">{country}</div> {/* Increased bottom margin */}
        </div>
        <div className="text-sm mb-1">Last Bid</div> {/* Reduced bottom margin */}
        <div className="font-bold text-2xl mb-4">${price}</div> {/* Increased bottom margin */}
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center">
            <div className="mr-2">Bids: {totalBids}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionProduct;
