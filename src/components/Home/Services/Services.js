import React from "react";
import Service from "./Service";
import { servicesData } from "./ServicesData";
const Services = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto p-3">
        <h2 className="text-3xl font-bold text-center m-10">
          Our Awesome <span className="text-primary">Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {servicesData?.map((service, index) => (
            <Service service={service} key={index} />
          ))}
        </div>
        <div className="text-center m-5">
          <button className="btn btn-primary">Explore more</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
