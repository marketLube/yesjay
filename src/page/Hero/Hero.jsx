import React from 'react';
import Landing from './Section/landing';
import Services from './Section/Services';
import Leading from './Section/Leading';
import Reason from './Section/Reason';
import Story from './Section/Story';
import ClientTestimonials from './Section/Testimonials';

function Hero() {
  return (
    <div>
      <Landing />
      <Services/>
      <Leading/>
      <Reason/>
      <Story/>
      <ClientTestimonials/>
    </div>
  );
}

export default Hero;
