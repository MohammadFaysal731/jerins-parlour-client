import React, { useEffect, useState } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../assets/icons/logo.png";
import Loading from "../../../components/Loading";
import { auth } from "../../../firebase.init";
import useTitle from "../../../hooks/useTitle";
const MyBooking = () => {
  useTitle("My Booking");
  const [myBooking, setMyBooking] = useState([]);
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  const navigate = useNavigate();
  useEffect(() => {
    const email = user?.email;
    fetch(`https://concerned-colt-skirt.cyclic.app/booking?email=${email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          signOut();
          localStorage.removeItem("accessToken");
          navigate("/");
        }
        return res.json();
      })
      .then((data) => setMyBooking(data));
  }, [user]);
  return (
    <div className="">
      <h2 className="text-primary text-center font-bold text-sm md:text-lg mb-5">
        Welcome to my booking page
      </h2>
      {myBooking.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 max-w-7xl mx-auto">
          {myBooking?.map(
            (
              {
                _id,
                fullName,
                email,
                serviceName,
                price,
                image,
                paid,
                transactionId,
              },
              index
            ) => (
              <div className="card  bg-secondary shadow-xl" key={index}>
                <div className="card-body" key={index}>
                  <div className="flex justify-between items-center">
                    <img src={Logo} alt="" className="w-24" />
                    <img src={image} alt="" className="w-14 rounded-full" />
                  </div>
                  {/* Full Name */}
                  <div className="w-full md:my-5">
                    <input
                      readOnly
                      autoComplete="off"
                      defaultValue={fullName}
                      type="text"
                      name="fullName"
                      id="full-name"
                      placeholder="Full Name"
                      className="w-full h-10 px-4 placeholder-black text-sm peer border-2 border-accent outline-none"
                    />
                  </div>
                  {/* Email Address */}
                  <div className="w-full md:my-5">
                    <input
                      autoComplete="off"
                      readOnly
                      defaultValue={email}
                      type="email"
                      name="emailAddress"
                      id="email-address"
                      placeholder=" Email Address"
                      className="w-full h-10 px-4 placeholder-black text-sm peer border-2 border-accent outline-none"
                    />
                  </div>
                  {/* Service Name */}
                  <div className="w-full md:my-5">
                    <input
                      autoComplete="off"
                      readOnly
                      defaultValue={serviceName}
                      type="text"
                      name="serviceName"
                      id="service-name"
                      placeholder=" Service Name"
                      className="w-full h-10 px-4 placeholder-black text-sm peer border-2 border-accent outline-none"
                    />
                  </div>
                  <p className="font-bold mb-2">
                    Your service charged will be $ &nbsp;
                    <span className="text-primary">{price}</span> /-
                  </p>
                  {price && !paid && (
                    <Link to={`/dashboard/payment/${_id}`}>
                      <button className="btn-xs btn-primary rounded-md text-secondary">
                        Pay
                      </button>
                    </Link>
                  )}
                  {price && paid && (
                    <span className="">
                      <p>
                        <span className="text-green-500">Paid</span>
                      </p>
                      <p>
                        Transaction Id: -
                        <span className="hidden md:block text-green-500">
                          {transactionId}
                        </span>
                        <small className="md:hidden text-green-500">
                          {transactionId}
                        </small>
                      </p>
                    </span>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default MyBooking;
