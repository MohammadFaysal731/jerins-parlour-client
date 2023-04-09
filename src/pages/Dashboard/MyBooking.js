
import React, { useEffect, useState } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/icons/logo.png';
import { auth } from "../../firebase.init";
const MyBooking = () => {
  const [myBooking, setMyBooking] = useState([]);
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  const navigate =useNavigate();


    
  
  useEffect(() => {
    const email = user?.email;
    fetch(`http://localhost:5000/booking?email=${email}`,{
      method:"GET",
      headers:{
        'content-type':"application/json",
        "authorization":`Bearer ${localStorage.getItem("accessToken")}`
      },
    })
      .then((res) => {
        if(res.status ===401 || res.status ===403){
          signOut();
          localStorage.removeItem("accessToken");
          navigate('/')
        }
       return res.json()
      })
      .then((data) =>setMyBooking(data))
  }, [user]);
  return (
    <div className="">
      <h2 className="text-primary text-center font-bold text-sm md:text-lg mb-5">
        Welcome to my booking page
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {myBooking?.map(
          ({ fullName, email, serviceName, price, image }, index) => (
            <>
              {/* booking information */}
              <div className="max-w-lg border p-10" key={index}>
                <div className="flex justify-between items-center">
                  <img src={Logo} alt="" className="w-24" />
                  <img src={image} alt="" className="w-14 rounded-full" />
                </div>
                {/* Full Name */}
                <div className="w-full my-5">
                  <input
                    autoComplete="off"
                    value={fullName}
                    type="text"
                    name="fullName"
                    id="full-name"
                    placeholder="Full Name"
                    className="w-full h-10 px-4 placeholder-black text-sm peer border-2 border-accent outline-none"
                  />
                </div>
                {/* Email Address */}
                <div className="w-full my-5">
                  <input
                    autoComplete="off"
                    value={email}
                    type="email"
                    name="emailAddress"
                    id="email-address"
                    placeholder=" Email Address"
                    className="w-full h-10 px-4 placeholder-black text-sm peer border-2 border-accent outline-none"
                  />
                </div>
                {/* Service Name */}
                <div className="w-full my-5">
                  <input
                    autoComplete="off"
                    value={serviceName}
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
                <button className="btn-xs btn-primary rounded-md text-secondary">
                  Pay
                </button>
              </div>
            </>
          )
        )}
      </div>
    </div>
  );
};

export default MyBooking;
