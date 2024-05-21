import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';
import Header from '../components/Header'; // Import the OrangeHeader component

const AuctionForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [productName, setProductName] = useState('');
  const [guidePrice, setGuidePrice] = useState(0);
  const [lotSize, setLotSize] = useState(0);
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'productName':
        setProductName(value);
        break;
      case 'guidePrice':
        setGuidePrice(value);
        break;
      case 'lotSize':
        setLotSize(value);
        break;
      case 'description':
        setDescription(value);
        break;
      default:
        break;
    }
  };

  const handleImageUpload = (event) => {
    setImages([...images, ...event.target.files]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Basic validation for email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    // Prepare auction data
    const auctionData = {
      description: description,
      start_time: new Date().toISOString(), // Use current time for start_time
      end_time: new Date().toISOString(), // Use current time for end_time (adjust if needed)
      initial_price: guidePrice,
      good_id: lotSize, // Assuming `lotSize` corresponds to `good_id` in your API
      product_name: productName, // Added product name to auction data
    };
  
    try {
      const response = await axios.post('/auction/Create Auction', auctionData);
  
      if (response.status === 200) {
        // Handle successful auction creation (e.g., redirect, confirmation message)
        console.log('Auction created successfully!', response.data);
        navigate('/auction-details'); // Or your desired success page
      } else {
        // Handle API errors (e.g., display error message)
        console.error('Error creating auction:', response.data);
        alert('An error occurred while creating the auction. Please try again.');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error:', error);
      alert('An error occurred. Please check your network connection and try again.');
    }
  };

  return (
    <div>
      <Header>
        <h1 className="text-2xl font-bold">Your Page Title</h1>
      </Header>
      <Navbar />
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">Start Your Auction</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1">
                <label htmlFor="name" className="mb-2 text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex-1">
                <label htmlFor="email" className="mb-2 text-gray-700">
                  Email Address (required)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            {/* Additional form fields */}
            <div className="flex flex-col">
              <label htmlFor="productName" className="mb-2 text-gray-700">
                Product Name
              </label>
              <input
                type="text"
                id="productName"
                name="productName"
                value={productName}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="guidePrice" className="mb-2 text-gray-700">
                Guide Price (optional)
              </label>
              <input
                type="number"
                id="guidePrice"
                name="guidePrice"
                value={guidePrice}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lotSize" className="mb-2 text-gray-700">
                Lot Size (optional)
              </label>
              <input
                type="number"
                id="lotSize"
                name="lotSize"
                value={lotSize}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="description" className="mb-2 text-gray-700">
                Description (optional)
              </label>
              <textarea
                id="description"
                name="description"
                value={description}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="images" className="mb-2 text-gray-700">
                Upload Images (optional)
              </label>
              <input
                type="file"
                id="images"
                name="images"
                onChange={handleImageUpload}
                multiple
                accept="image/*"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <footer
        className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
        <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
          © 2024 Copyright:
          <a
            className="text-neutral-800 dark:text-neutral-400"
            href="https://tw-elements.com/"
          >Port2Port</a>
        </div>
      </footer>
    </div>
  );
};

export default AuctionForm;
