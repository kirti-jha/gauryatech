import React from 'react';
import ServicesHero from '../components/services/ServicesHero';
import ServiceItems from '../components/services/ServiceItems';
import ServicesCTA from '../components/services/ServicesCTA';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <div className="min-h-screen pt-20">
      <ServicesHero />
      <ServiceItems />
      <ServicesCTA />
      <Footer />
    </div>
  );
};

export default Services;
