import React, { useState } from 'react';
import CountUp from "react-countup";

import ScrollTrigger from 'react-scroll-trigger';
import screenCareImage from "../../assets/images/banner-images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png";
const ScreenCare = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="bg-secondary p-14 mt-5">
      <div className="max-w-7xl mx-auto p-3 grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center ">
        {/* banner left  */}
        <div className="">
          <img src={screenCareImage} alt="" className="w-96 lg:w-full" />
        </div>
        {/* banner right */}
        <div className="mb-5 order-first  md:order-none ">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-2 lg:mb-5">
            Let us handle your
          </h1>
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-2 lg:mb-5">
            screen <span className="text-primary">Professionally</span>.
          </h1>
          <blockquote></blockquote>
          <div className="grid grid-cols-2 gap-5 mt-12">
            {/* happy customer  */}
            <div className="">
              <span className="text-primary font-bold text-2xl md:text-3xl lg:text-5xl">
                <ScrollTrigger
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
                >
                  {counterOn && <CountUp start={0} end={500} duration={5} />}+ 
                </ScrollTrigger>
              </span>
              <h4 className="font-semibold mt-3">Happy Customer</h4>
            </div>
            {/* total service */}
            <div className="">
              <span className="text-primary font-bold text-2xl md:text-3xl lg:text-5xl">
                <ScrollTrigger
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
                >
                  {counterOn && <CountUp start={0} end={16} duration={5}/>}+
                </ScrollTrigger>
              </span>
              <h4 className="font-semibold mt-3">Total Service</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenCare;