import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import useTitle from "../hooks/useTitle";

const OurTeam = () => {
  useTitle("Our Team")
  const [teamMembers, setTeamMembers] = useState([]);
  useEffect(() => {
    fetch("https://concerned-colt-skirt.cyclic.app/team-members", {
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
      <h2 className="text-sm md:text-xl lg:text-2xl text-center text-primary font-bold mb-5">
        Our Teams
      </h2>
      {teamMembers?.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {teamMembers?.map(({ _id, name, image }) => (
            <div className="card max-w-lg " key={_id}>
              <div className="avatar">
                <div className=" mask mask-hexagon">
                  <img src={image} alt={name} className="rounded-xl w-40" />
                </div>
              </div>
              <div className="card-body items-center text-center">
                <h2 className="text-sm md:text-xl lg:text-2xl text-primary font-bold">{name}</h2>
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
