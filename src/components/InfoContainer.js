import React from 'react';

const InfoContainer = ({ svg, header, text }) => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="mb-2">
        {svg}
      </div>
      <div className="text-center">
        <h2 className="text-lg font-semibold mb-1">{header}</h2>
        <p className="text-sm text-gray-600">{text}</p>
      </div>
    </div>
  );
};

const InfoSection = () => {
  return (
    <div className="flex flex-row justify-around p-6 space-x-4">
      <InfoContainer
        svg={
          <svg className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7v9a1 1 0 001 1h6v4a1 1 0 001 1h4a1 1 0 001-1v-4h6a1 1 0 001-1V7l-10-5zm-1 10h2v2h-2v-2zm0-6h2v4h-2V6z" />
          </svg>
        }
        header="Header 1"
        text="This is a short paragraph about the first SVG."
      />
      <InfoContainer
        svg={
          <svg className="w-12 h-12 text-green-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 10V7h2v5h-2zm0 4h2v2h-2v-2z" />
          </svg>
        }
        header="Header 2"
        text="This is a short paragraph about the second SVG."
      />
      <InfoContainer
        svg={
          <svg className="w-12 h-12 text-red-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 4.5C6.485 4.5 2 9.005 2 14.5S6.485 24.5 12 24.5 22 20.995 22 15.5 17.515 4.5 12 4.5zM12 2c7.177 0 13 5.823 13 13S19.177 28 12 28 2 22.177 2 15 4.823 2 12 2z" />
          </svg>
        }
        header="Header 3"
        text="This is a short paragraph about the third SVG."
      />
    </div>
  );
};

export default InfoSection;
