import { React, ProductList, Navbar, Features, Example, LandingSection, Faq, SecureCard, TimeCustomizedTimelineline, ProductCarousel, Header, AuctionProduct, ProductRow, RFQMarketplace, Roadmap, InfoSection} from './index'
const products = [
  {
    image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    name: 'Product 1',
    description: 'Description for product 1',
    price: 100,
    auctionEndTime: '2024-06-01T12:00:00'
  },
  {
    image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    name: 'Product 2',
    description: 'Description for product 2',
    price: 150,
    auctionEndTime: '2024-06-02T12:00:00'
  },
  {
    image: 'https://example.com/image1.jpg',
    name: 'Product 1',
    description: 'Description for product 1',
    price: 100,
    auctionEndTime: '2024-06-01T12:00:00'
  },
  
  {
    image: 'https://example.com/image3.jpg',
    name: 'Product 3',
    description: 'Description for product 3',
    price: 200,
    auctionEndTime: '2024-06-03T12:00:00'
  }
  // Add more products as needed
];


const Home = () => {
  return (
    <div>
    <Header />
    <Navbar />
    <LandingSection />
    <Example />
    <ProductCarousel />
    <Features />
    <SecureCard />
    <InfoSection />
    <Roadmap />

 
    <div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
  <div class="absolute inset-0">
    <img src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Background Image" class="object-cover object-center w-full h-full" />
    <div class="absolute inset-0 bg-black opacity-50"></div>
  </div>
  
  <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
    <h1 class="text-5xl font-bold leading-tight mb-4">Lets Get Started</h1>
    <p class="text-lg text-gray-300 mb-8">Discover amazing features and services that await you.</p>
    <a href="#" class="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Sign Up</a>
  </div>
</div>
    {/*<TimeCustomizedTimelineline />
    <RFQMarketplace />
    */}
    <div className="container mx-auto p-4">
      <ProductRow products={products} />
    </div>
      
    <Faq />
    <footer
      className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
      <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
        © 2024 Copyright:
        <a
          className="text-neutral-800 dark:text-neutral-400"
          href="https://tw-elements.com/"
        >PORT2PORT</a>
      </div>
    </footer>
    </div>
    

  )
}

export default Home
