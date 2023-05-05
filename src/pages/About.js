import React from 'react';
import useTitle from '../hooks/useTitle';

const About = () => {
    useTitle("About");
  return (
    <div>
      <h2 className="text-center text-primary font-bold text-sm md:text-5xl m-32 p-32">coming soon</h2>
    </div>
  );
};

export default About;