import React from 'react';

function ShippingStatus() {
  return (
    <div className="flex flex-row justify-between items-center pt-6 pb-4">
      <div className="flex flex-row space-x-4">
        <div className="text-xs font-light text-gray-500">Browse as per your convenience</div>
        <div className="flex flex-row space-x-2">
          <div className="w-6 h-6 bg-gray-200 rounded-full flex justify-center items-center">
            <svg
              className="w-4 h-4 text-blue-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.394 3.394a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0zm4.232 1.121a1 1 0 010 1.414l-7 7a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="text-xs font-light text-gray-500">Ready to Ship</div>
        </div>
        <div className="flex flex-row space-x-2">
          <div className="w-6 h-6 bg-gray-200 rounded-full flex justify-center items-center">
            <svg
              className="w-4 h-4 text-blue-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.394 3.394a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0zm4.232 1.121a1 1 0 010 1.414l-7 7a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="text-xs font-light text-gray-500">In Transit</div>
        </div>
        <div className="flex flex-row space-x-2">
          <div className="w-6 h-6 bg-gray-200 rounded-full flex justify-center items-center">
            <svg
              className="w-4 h-4 text-blue-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.394 3.394a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0zm4.232 1.121a1 1 0 010 1.414l-7 7a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="text-xs font-light text-gray-500">Delivered</div>
        </div>
      </div>
    </div>
  );
}

export default ShippingStatus;
