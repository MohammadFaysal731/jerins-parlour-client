import React from 'react';
import bannerRight from "../../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png";
const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
      {/* banner left  start*/}
      <div className="mb-5">
        <h1 className="text-2xl lg:text-5xl font-bold mb-2 lg:mb-5">
          BEAUTY SALON
        </h1>
        <h1 className="text-2xl lg:text-5xl font-bold mb-2  lg:mb-5">
          FOR EVERY WOMEN
        </h1>
        <blockquote></blockquote>
        <button className="btn btn-primary text-white">
          Get an Appointment
        </button>
      </div>
      {/* banner left end */}
      {/* banner right start */}
      <div className="w-96 lg:w-full">
        <img src={bannerRight} alt="" />
      </div>
      {/* banner right end  */}
    </div>
  );
};

export default Banner;