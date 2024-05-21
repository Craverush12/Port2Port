import React, { useEffect, useState } from 'react';

const AuctionDetails = () => {
  const [auctionData, setAuctionData] = useState([]);

  useEffect(() => {
    // Retrieve auction data from local storage
    const data = localStorage.getItem('auctionData');
    if (data) {
      setAuctionData(JSON.parse(data));
    }
  }, []);

  if (!Array.isArray(auctionData) || auctionData.length === 0) {
    return <div>No auction data found.</div>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Auction Details</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {auctionData.map((auction, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
            <img
              src={URL.createObjectURL(auction.images[0])}
              alt={`Product ${index + 1}`}
              className="w-full h-48 object-cover object-center"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{auction.name}</h2>
              <p className="text-gray-600 mb-2">Time Left: {auction.duration}</p>
              <p className="text-gray-600">Guide Price: {auction.guidePrice}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuctionDetails;
