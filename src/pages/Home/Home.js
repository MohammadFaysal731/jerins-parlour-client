import React from 'react';
import Banner from './Banner';
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
    </div>
  );
};

export default Home;