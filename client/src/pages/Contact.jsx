import React from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactFormMap from '../components/contact/ContactFormMap';
import ServicesCTA from '../components/services/ServicesCTA';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      <ContactHero />
      <ContactFormMap />
      <ServicesCTA />
      <Footer />
    </div>
  );
};

export default Contact;
