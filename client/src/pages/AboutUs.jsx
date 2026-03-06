import React from 'react';
import DigitalExcellence from '../components/about/DigitalExcellence';
import TailoredSolutions from '../components/about/TailoredSolutions';
import MissionValues from '../components/about/MissionValues';
import OurJourney from '../components/about/OurJourney';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div className="pt-24 min-h-screen">
      <DigitalExcellence />
      <TailoredSolutions />
      <MissionValues />
      <OurJourney />
      <Footer />
    </div>
  );
};

export default AboutUs;
