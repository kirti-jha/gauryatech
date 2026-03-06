import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="pt-24 min-h-screen">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
