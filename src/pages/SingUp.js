import React from "react";
import {
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import facebook from "../assets/icons/facebook.png";
import google from "../assets/icons/google.png";
import logo from "../assets/icons/logo.png";
import Loading from "../components/Loading";
import { auth } from "../firebase.init";
const SingUp = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =useSignInWithGoogle(auth);
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =useSignInWithFacebook(auth);
    
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const navigate = useNavigate();
  let errorElement;
  
  
    


  if (googleUser || facebookUser) {
    navigate("/dashboard");
  }
  if(googleLoading ||facebookLoading){
    return <Loading/>
  }
  if(googleError || facebookError){
    errorElement = <p className="text-red-500 text-center m-2"><small>{googleError?.message || facebookError?.message}</small></p> 
  }
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="p-6">
      <div className="border-2 rounded-md mx-auto p-8 max-w-lg">
        <div className="flex justify-between items-center">
          <img src={logo} alt="" className="w-24" />
          <h2 className="text-sm md:text-xl font-bold ">Create an account</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/*  First Name */}
          <div className="w-full my-5 relative group">
            <input
              {...register("firstName", {
                required: {
                  value: true,
                  message: "First name is required",
                },
                maxLength: {
                  value: 8,
                  message: "Maximum word  is 8 ",
                },
              })}
              type="text"
              name="firstName"
              id="first-name"
              placeholder="First Name"
              className="w-full h-10 px-4 placeholder-black text-sm peer border-b-2 border-accent outline-none"
            />
            <label htmlFor="first-name" className="">
              {errors.firstName?.type === "required" && (
                <p className="text-red-500">
                  <small>{errors.firstName.message}</small>
                </p>
              )}
              {errors.firstName?.type === "maxLength" && (
                <p className="text-red-500">
                  <small>{errors.firstName.message}</small>
                </p>
              )}
            </label>
          </div>
          {/* Last Name */}
          <div className="w-full my-5 relative group">
            <input
              {...register("lastName", {
                required: {
                  value: true,
                  message: "Last name is required",
                },
                maxLength: {
                  value: 8,
                  message: "Maximum word  is 8 ",
                },
              })}
              type="text"
              name="lastName"
              id="last-name"
              placeholder="Last Name"
              className="w-full h-10 px-4 placeholder-black text-sm peer border-b-2 border-accent outline-none"
            />
            <label htmlFor="first-name" className="">
              {errors.lastName?.type === "required" && (
                <p className="text-red-500">
                  <small>{errors.lastName?.message}</small>
                </p>
              )}
              {errors.lastName?.type === "maxLength" && (
                <p className="text-red-500">
                  <small>{errors.lastName?.message}</small>
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
              type="email"
              name="emailAddress"
              id="email-address"
              placeholder="Email Address"
              className="w-full h-10 px-4 placeholder-black text-sm peer border-b-2 border-accent outline-none"
            />
            <label htmlFor="first-name" className="">
              {errors.emailAddress?.type === "required" && (
                <p className="text-red-500">
                  <small>{errors.emailAddress?.message}</small>
                </p>
              )}
            </label>
          </div>
          {/* Password */}
          <div className="w-full my-5 relative group">
            <input
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
                pattern: {
                  value:
                    /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/,
                  message:
                    "At least one special, tow uppercase, tow digit, three lowercase, minimum character length is 8",
                },
                minLength: {
                  value: 8,
                  message: "Minimum length is 8",
                },
              })}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full h-10 px-4 placeholder-black text-sm peer border-b-2 border-accent outline-none"
            />
            <label htmlFor="first-name" className="">
              {errors.password?.type === "required" && (
                <p className="text-red-500">
                  <small>{errors?.password?.message}</small>
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500">
                  <small>{errors?.password?.message}</small>
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500">
                  <small>{errors?.password?.message}</small>
                </p>
              )}
            </label>
          </div>
          {/* Confirm Password */}
          <div className="w-full my-5 relative group">
            <input
              {...register("confirmPassword", {
                required: {
                  value: true,
                  message: "Password is required",
                },
                pattern: {
                  value:
                    /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/,
                  message:
                    "At least one special, tow uppercase, tow digit, three lowercase, minimum character length is 8",
                },
                minLength: {
                  value: 8,
                  message: "Minimum length is 8",
                },
              })}
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              id="confirm-password"
              className="w-full h-10 px-4 placeholder-black text-sm peer border-b-2 border-accent outline-none"
            />
            <label htmlFor="first-name" className="">
              {errors.confirmPassword?.type === "required" && (
                <p className="text-red-500">
                  <small>{errors?.confirmPassword?.message}</small>
                </p>
              )}
              {errors.confirmPassword?.type === "pattern" && (
                <p className="text-red-500">
                  <small>{errors?.confirmPassword?.message}</small>
                </p>
              )}
              {errors.confirmPassword?.type === "minLength" && (
                <p className="text-red-500">
                  <small>{errors?.confirmPassword?.message}</small>
                </p>
              )}
            </label>
          </div>
          <input
            type="submit"
            value=" Create an account"
            className="text-sm md:text-lg text-white bg-primary px-8 py-2 rounded-md w-full"
          />
        </form>
        <p className="text-center text-sm md:text-lg m-2 ">
          Already have an account ? &nbsp;
          <Link to="/sign-in" className="text-primary underline">
            Sign in
          </Link>
        </p>
        {/* divider */}
        <div className="flex justify-center items-center">
          <div className="h-[1px] w-full bg-accent" />
          <span className="m-2">Or</span>
          <div className="h-[1px] w-full bg-accent" />
        </div>
        {errorElement}
        {/* social sing up */}
        <div className="flex flex-col items-center">
          {/* google  */}
          <div className="border rounded-3xl py-3 whitespace-nowrap mb-3 w-[300px] ml-[-25px] md:ml-0">
            <button
              onClick={()=>signInWithGoogle()}
              className="flex justify-center items-center mx-auto "
            >
              <img src={google} alt="" className="w-4 md:w-6 mx-2" />
              <span className="text-sm md:text-lg">Continue with Google</span>
            </button>
          </div>
          {/* facebook */}
          <div className="border rounded-3xl py-3 whitespace-nowrap mb-3 w-[300px] ml-[-25px] md:ml-0">
            <button onClick={()=>signInWithFacebook()} className="flex justify-center items-center mx-auto ">
              <img src={facebook} alt="" className="w-4 md:w-6 mx-2" />
              <span className="text-sm md:text-lg">Continue with Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
