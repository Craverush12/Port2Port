import React from 'react';

const Roadmap = () => {
  const steps = [
    { id: 'A', content: 'Step A content goes here' },
    { id: 'B', content: 'Step B content goes here' },
    { id: 'C', content: 'Step C content goes here' },
    { id: 'D', content: 'Step D content goes here' },
  ];

  return (
    <div className="container mx-auto my-10 p-5">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold">Quick <span className="text-orange-500">Guide</span></h2>
        <h1 className="text-4xl font-bold mt-2">How does <span className="text-orange-500">Port2Port</span> work?</h1>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1 bg-gray-300"></div>
        </div>
        <div className="relative flex flex-col items-center space-y-10">
          {steps.map((step, index) => (
            <div key={step.id} className="flex w-full">
              {index % 2 === 0 ? (
                <>
                  <div className="w-1/2 flex justify-end pr-10">
                    <div className="bg-gray-100 p-5 rounded-lg shadow-md w-64">
                      {step.content}
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-6 h-6 bg-white border-4 border-gray-300 rounded-full z-10 shadow-md"></div>
                  </div>
                  <div className="w-1/2"></div>
                </>
              ) : (
                <>
                  <div className="w-1/2"></div>
                  <div className="relative">
                    <div className="w-6 h-6 bg-white border-4 border-gray-300 rounded-full z-10 shadow-md"></div>
                  </div>
                  <div className="w-1/2 flex justify-start pl-10">
                    <div className="bg-gray-100 p-5 rounded-lg shadow-md w-64">
                      {step.content}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
