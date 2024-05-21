import React from 'react';

const RFQMarketplace = ({ rfqs }) => {
  // Check if rfqs is defined before mapping over it
  if (!rfqs || rfqs.length === 0) {
    return <div>No RFQs available</div>;
  }

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">RFQ Marketplace</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {rfqs.map((rfq) => (
          <div
            key={rfq.RFQID}
            className="bg-white shadow-md rounded p-4"
          >
            <h2 className="text-lg font-bold">{rfq.productName}</h2>
            <p className="text-gray-600">{rfq.description}</p>
            <div className="flex justify-between mt-4">
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                Submit Quote
              </button>
              <span className="text-gray-600">
                Received quotes: {rfq.receivedQuotes}
              </span>
            </div>
            <div className="flex items-center mt-4">
              <p className="text-gray-600">Created on: {rfq.createdOn}</p>
              <p className="text-gray-600 ml-auto">RFQ expires on: {rfq.expiresOn}</p>
            </div>
            <p className="text-gray-600">Ship to: {rfq.shipTo}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RFQMarketplace;
