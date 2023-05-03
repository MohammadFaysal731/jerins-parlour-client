import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";

const MyBookingList = () => {
   const [myBooking, setMyBooking] = useState([]);
   const [user] = useAuthState(auth);
   useEffect(() => {
    const email = user?.email;
     fetch(`http://localhost:5000/booking?email=${email}`, {
       method: "GET",
       headers: {
         "content-type": "application/json",
         authorization: `Bearer ${localStorage.getItem("accessToken")}`,
       },
     })
       .then((res) => res.json())
       .then((data) => setMyBooking(data));
   }, [user]);
  return (
    <div className="">
      <h2 className="text-primary text-center font-bold text-sm md:text-lg mb-5">
        Welcome to booking list page
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {myBooking?.map(({ serviceName }, index) => (
          <div className="card  bg-secondary shadow-xl">
            <div className="card-body">
              <h2 className="text-sm md:text-xl">
                Hello,
                <span className="text-primary text-sm md:text-xl">
                  {user?.email}
                </span>
                .thanks to choose us.
              </h2>
              <p className="font-bold text-sm md:text-xl">
                Please,for your
                <span className="text-primary text-sm md:text-xl">
                  {serviceName}
                </span>
              </p>
              <div className="card-actions justify-end btn-xs">
               <button>jlkjkl</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookingList;
