import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../../../components/Loading";
import { auth } from "../../../firebase.init";

const MyBookingList = () => {
  const [myBookingStatus, setMyBookingStatus] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const email = user?.email;
    fetch(`https://concerned-colt-skirt.cyclic.app/booking?email=${email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setMyBookingStatus(data));
  }, [user]);
  return (
    <div className="">
      <h2 className="text-primary text-center font-bold text-sm md:text-lg mb-5">
        Welcome to booking list page
      </h2>
      {myBookingStatus.length > 0 ?  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {myBookingStatus?.map(
          (
            {
              fullName,
              email,
              serviceName,
              price,
              image,
              phoneNumber,
              paid,
              transactionId,
              bookingStatus,
            },
            index
          ) => (
            <div className="card  bg-secondary shadow-xl" key={index}>
              <div className="card-body">
                {/* uper part of card*/}
                <div className="flex justify-between">
                  {/* image */}
                  <div className="avatar">
                    <div className="w-24 mask mask-hexagon">
                      <img src={image} alt={serviceName} />
                    </div>
                  </div>
                  {/* bookingStatus */}
                  <div className="">
                    {bookingStatus === "Pending" && (
                      <span className="bg-primary px-3 py-1 rounded-md text-secondary font-bold">
                        {bookingStatus}
                      </span>
                    )}
                    {bookingStatus === "Done" && (
                      <span className="bg-green-500 px-3 py-1 rounded-md text-secondary font-bold">
                        {bookingStatus}
                      </span>
                    )}
                    {bookingStatus === "On Going" && (
                      <span className="bg-orange-500 px-3 py-1 rounded-md text-secondary font-bold">
                        {bookingStatus}
                      </span>
                    )}
                  </div>
                </div>
                <h4 className="text-primary text-sm md:text-lg font-semibold">
                  {serviceName}
                </h4>
                <div>
                  <h3 className="text-sm md:text-md font-bold">
                    Booking info : -
                  </h3>
                  <p className="font-bold text-sm md:text-md">
                    User Name :<span className="text-primary"> {fullName}</span>
                  </p>
                  <p className="font-bold text-sm md:text-md">
                    User Email : <span className="text-primary"> {email}</span>
                  </p>
                  <p className="font-bold text-sm md:text-md">
                    User Phone :
                    <span className="text-primary"> {phoneNumber}</span>
                  </p>
                  <p className="font-bold text-sm md:text-md">
                    Price : <span className="text-primary"> $ {price}</span>
                  </p>
                  <p className="font-bold text-sm md:text-md">
                    Payment:
                    <span className="text-primary">
                      {paid === "true" ? "Paid" : "Unpaid"}
                    </span>
                  </p>
                  {transactionId && (
                    <p className="font-bold text-sm md:text-md">
                      Payment Id :
                      <span className="text-primary"> {transactionId}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          )
        )}
      </div> :<Loading/>}
     
    </div>
  );
};

export default MyBookingList;
