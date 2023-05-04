import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";

const OurTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/team-members", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setTeamMembers(data));
  }, []);
  return (
    <div className="p-10 max-w-7xl mx-auto">
      <h2 className="text-sm md:text-xl lg:text-2xl text-center text-primary font-bold">
        Our Teams
      </h2>
      {teamMembers?.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {teamMembers?.map(({ name, img }, index) => (
            <div className="card max-w-lg ">
              <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl w-40" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default OurTeam;
