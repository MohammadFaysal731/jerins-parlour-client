import React, { useEffect, useState } from "react";
import Loading from "../../../components/Loading";
import useTitle from "../../../hooks/useTitle";
import Service from "./Service/Service";
const Services = () => {
   useTitle("Services");
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://concerned-colt-skirt.cyclic.app/services", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto p-3">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center m-10">
        Our Awesome <span className="text-primary">Services</span>
      </h2>
      {services.length ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services?.map((service) => (
              <Service service={service} key={service._id} />
            ))}
          </div>
          {/* <div className="text-center m-5">
            <PrimaryButton>Explore more</PrimaryButton>
          </div> */}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Services;
