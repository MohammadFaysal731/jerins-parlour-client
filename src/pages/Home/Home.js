import React from 'react';
import Banner from './Banner';
import ScreenCare from './ScreenCare';
import Services from './Services/Services';

const Home = () => {
  return (
    <div>
      <Banner/>
      <Services/>
      <ScreenCare/>
    </div>
  );
};

export default Home;