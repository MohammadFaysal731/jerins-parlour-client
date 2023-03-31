import React from 'react';
import Banner from './Banner';
import ContactUs from './ContactUs';
import ScreenCare from './ScreenCare';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
  return (
    <div>
      <Banner/>
      <Services/>
      <ScreenCare/>
      <Testimonials/>
      <ContactUs/>
    </div>
  );
};

export default Home;