import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Logo from "../../../assets/icons/logo.png";
import { auth } from '../../../firebase.init';


const ServiceDetail = () => {
  const [user]=useAuthState(auth);
  const [serviceDetail,setServiceDetail]=useState({});
  const {id}=useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  useEffect(()=>{
    fetch(`http://localhost:5000/services/${id}`)
      .then((res) => res.json())
      .then((data) => setServiceDetail(data));
  },[id])

  const onSubmit = async (data) => {
    const fullName = data.fullName;
    const emailAddress = data.emailAddress;
    const serviceName = data.serviceName;
    const phoneNumber = data.phoneNumber;
    reset()
    // booking data  
    const bookingData = {
      fullName,
      emailAddress,
      serviceName,
      phoneNumber,
    };  
    // send the data on mongodb
    fetch(`http://localhost:5000/booking`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged){
          toast.success(`Your ${serviceName} is booked.`)
        }
        else{
          toast.error(`Your ${serviceName} is not booked`)
        }
      });
  };
  return (
    <div className="max-w-lg md:max-w-7xl mx-auto p-10">
      <button className="btn-xs btn-primary rounded-md text-secondary">
        <Link to={`/`}>Back</Link>
      </button>

      <h2 className="mb-5 text-sm md:text-xl text-center font-semibold">
        Welcome to service detail page let's booked it thank you.
      </h2>

      <div className="border-2 rounded-md p-6">
        <div className="flex justify-between items-center">
          <img src={Logo} alt="" className="w-24" />
          <h2 className="text-sm md:text-xl text-primary font-bold ">
            {serviceDetail.title}
          </h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/*  Full Name */}
          <div className="w-full my-5 relative group">
            <input
              {...register("fullName", {
                required: {
                  value: true,
                  message: "Full name is required",
                }
              })}
              value={user?.displayName}
              readOnly
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Full Name"
              className="w-full h-10 px-4 placeholder-black text-sm peer border-b-2 border-accent outline-none"
            />
            <label htmlFor="fullName" className="">
              {errors.fullName?.type === "required" && (
                <p className="text-red-500">
                  <small>{errors.fullName.message}</small>
                </p>
              )}
              {errors.fullName?.type === "maxLength" && (
                <p className="text-red-500">
                  <small>{errors.fullName.message}</small>
                </p>
              )}
            </label>
          </div>
          {/* Email Address */}
          <div className="w-full my-5 relative group">
            <input
              {...register("emailAddress", {
                required: {
                  value: true,
                  message: "Email is required",
                },
              })}
              value={user?.email}
              readOnly
              type="email"
              name="emailAddress"
              id="emailAddress"
              placeholder="Email Address"
              className="w-full h-10 px-4 placeholder-black text-sm peer border-b-2 border-accent outline-none"
            />
            <label htmlFor="full-name" className="">
              {errors.emailAddress?.type === "required" && (
                <p className="text-red-500">
                  <small>{errors.emailAddress?.message}</small>
                </p>
              )}
            </label>
          </div>
          {/* Service Name */}
          <div className="w-full my-5 relative group">
            <input
              {...register("serviceName", {
                required: true,
              })}
              value={serviceDetail.title}
              type="text"
              readOnly
              name="serviceName"
              id="serviceName"
              placeholder="Service Name"
              className="w-full h-10 px-4 placeholder-black text-sm peer border-b-2 border-accent outline-none"
            />
            
          </div>
          {/* Phone Number */}
          <div className="w-full my-5 relative group">
            <input
              {...register("phoneNumber", {
                required: {
                  value: true,
                  message: "Phone umber is required",
                },

                maxLength: {
                  value: 11,
                  message: "MaxLength length is 11",
                },
              })}
              type="number"
              name="phoneNumber"
              placeholder="Phone Number"
              id="phoneNumber"
              className="w-full h-10 px-4 placeholder-black text-sm peer border-b-2 border-accent outline-none"
            />
            <label htmlFor="phoneNumber" className="">
              {errors.phoneNumber?.type === "required" && (
                <p className="text-red-500">
                  <small>{errors?.phoneNumber?.message}</small>
                </p>
              )}
              {errors.phoneNumber?.type === "maxLength" && (
                <p className="text-red-500">
                  <small>{errors?.phoneNumber?.message}</small>
                </p>
              )}
            </label>
          </div>
          <input
            type="submit"
            value="Submit"
            className="cursor-pointer text-sm md:text-lg text-white bg-primary px-8 py-2 rounded-md "
          />
        </form>
      </div>
    </div>
  );
};

export default ServiceDetail;