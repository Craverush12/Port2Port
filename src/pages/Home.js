import React from 'react'
import ProductList from '../components/ProductList'
import Navbar from '../components/Navbar'
import Features from '../components/Features'
import Example from '../components/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingSection from '../components/LandinSection'
import Faq from '../components/Faq'
import SecureCard from '../components/SecureCard'
import TimeCustomizedTimelineline from '../components/Timeline'
import ProductCarousel from '../components/ProductCarousel'

const Home = () => {
  return (
    <div>
    <Navbar />
    <LandingSection />
    <Example />
    <ProductCarousel />
    <Features />
    <TimeCustomizedTimelineline />
    <SecureCard />
    <ProductList />
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
