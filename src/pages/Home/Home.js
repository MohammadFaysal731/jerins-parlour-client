import React from 'react';
import ContactUs from '../ContactUs';
import Banner from './Banner';
import ScreenCare from './ScreenCare';
import Services from './Services/Services';
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <ScreenCare />
      <Testimonials />
      <ContactUs />
    </div>
  );
};

export default Home;