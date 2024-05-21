import React from 'react';

const BrowseSection = () => {
  return (
    <div className="flex justify-between border-y-2 border-gray-300 py-4">
      <div className="flex flex-col items-center">
        <div className="mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M3.176 8.368a.75.75 0 01.528.528l1.417 4.25 4.25-1.417a.75.75 0 01.528-.528.75.75 0 01.528.528l2.336 7.008a.75.75 0 01-1.414.518l-2.123-6.367-4.25 1.417a.75.75 0 01-.528.528.75.75 0 01-.528-.528L2.5 9.896a.75.75 0 01.676-.928z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M8.354 5.712a.75.75 0 01.528-.528.75.75 0 01.528.528l2.336 7.008a.75.75 0 01-1.414.518l-2.123-6.367a.75.75 0 01.145-.159z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M14.192 2.064a.75.75 0 01.528.528l1.417 4.25 4.25-1.417a.75.75 0 01.528-.528.75.75 0 01.528.528l2.336 7.008a.75.75 0 01-1.414.518l-2.123-6.367-4.25 1.417a.75.75 0 01-.528.528.75.75 0 01-.528-.528L13.5 3.592a.75.75 0 01.692-.528z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="text-sm">Ready to Ship</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.875l-2.53 2.53a4.5 4.5 0 01-.707.706L7.875 14.25l-1.192-1.192a4.5 4.5 0 01-1.357-1.318 8.25 8.25 0 001.336-.18z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="text-sm">In Transit</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3.22 13.072a.75.75 0 010 1.06l-2.592 2.592a.75.75 0 01-1.06 0l-2.592-2.592a.75.75 0 011.06-1.06l1.842 1.842 1.842-1.842a.75.75 0 011.06 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="text-sm">At the Port</div>
      </div>
    </div>
  );
};

export default BrowseSection;