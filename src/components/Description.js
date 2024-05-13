import React from 'react';
import { PaperClipIcon } from '@heroicons/react/20/solid';

export default function Description() {
  return (
    <div className="border border-black rounded-md p-4 shadow-sm">
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Verified Seller</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">CustoM Manufacturer Located in CN.</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
        <div className="px-4 py-6 sm:flex sm:justify-between">
  <div className="sm:w-1/3 text-sm font-medium leading-6 text-gray-900 px-2">
    <dt>Store Rating</dt>
    <dd className="mt-1 text-sm leading-6 text-gray-700">4.6/5</dd>
  </div>
  <div className="sm:w-1/3 text-sm font-medium leading-6 text-gray-900 px-2">
    <dt>On-time Delivery Rate</dt>
    <dd className="mt-1 text-sm leading-6 text-gray-700">100.0%</dd>
  </div>
  <div className="sm:w-1/3 text-sm font-medium leading-6 text-gray-900 px-2">
  <dt>Response time</dt>
    <dd className="mt-1 text-sm leading-6 text-gray-700">Less than 6hours</dd>
  </div>
</div>

<div className="px-4 py-6 sm:flex sm:justify-between">
  <div className="sm:w-1/3 text-sm font-medium leading-6 text-gray-900 px-2">
    <dt>Online Rating</dt>
    <dd className="mt-1 text-sm leading-6 text-gray-700">220,000</dd>
  </div>
  <div className="sm:w-1/3 text-sm font-medium leading-6 text-gray-900 px-2">
    <dt>FloorSpace</dt>
    <dd className="mt-1 text-sm leading-6 text-gray-700">100.0%</dd>
  </div>
  <div className="sm:w-1/3 text-sm font-medium leading-6 text-gray-900 px-2">
  <dt>Staff</dt>
    <dd className="mt-1 text-sm leading-6 text-gray-700">71</dd>
  </div>
</div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Order with Confidence</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700">Verified as customer manufacturer</dd>
          </div>
        
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">About</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
              pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </dd>
          </div>
      
        </dl>
      </div>
    </div>
  )
}
