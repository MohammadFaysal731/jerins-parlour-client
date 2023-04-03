import React, { useEffect, useState } from "react";
import PrimaryButton from "../../../components/PrimaryButton";
import Service from "./Service/Service";
const Services = () => {
  const [services, setServices]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  },[])
  return (
    <div className="max-w-7xl mx-auto p-3">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center m-10">
        Our Awesome <span className="text-primary">Services</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services?.map((service, index) => (
          <Service service={service} key={index} />
        ))}
      </div>
      <div className="text-center m-5">
        <PrimaryButton>Explore more</PrimaryButton>
      </div>
    </div>
  );
};

export default Services;
