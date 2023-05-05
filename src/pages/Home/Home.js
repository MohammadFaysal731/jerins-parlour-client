import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../components/PrimaryButton';
import ContactUs from '../ContactUs';
import Banner from './Banner';
import ScreenCare from './ScreenCare';
import Services from './Services/Services';
import Testimonials from './Testimonials';
import useTitle from '../../hooks/useTitle';

const Home = () => {
  useTitle("Home")
  return (
    <div>
      <Banner />
      <Services />
      <div className="text-center m-5">
        <PrimaryButton>
          <Link to="/services">Explore more</Link> 
        </PrimaryButton>
      </div>
      <ScreenCare />
      <Testimonials />
      <ContactUs />
    </div>
  );
};

export default Home;