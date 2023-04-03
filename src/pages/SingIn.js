import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import google from "../assets/icons/google.png";
import logo from "../assets/icons/logo.png";
import Loading from "../components/Loading";
import { auth } from "../firebase.init";

const SingIn = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const navigate =useNavigate();

  if(googleUser){
    navigate("/dashboard")
  }
  if(googleLoading){
    return <Loading/>
  }
  if(googleError){
    return <p className="text-7xl">{googleError.message}</p>
  }
  return (
    <div className="my-20 px-20 md:max-w-md mx-auto">
      <div className="">
        <div className="mb-16 ">
          <img src={logo} alt="" className="w-40 mx-7" />
        </div>
        <h2 className="text-xl md:text-2xl m-8 mx-20 whitespace-nowrap">
          Sign With
        </h2>
        <div className="border rounded-3xl py-3 whitespace-nowrap mb-3 w-[300px] ml-[-25px] md:ml-0">
          <button onClick={()=>signInWithGoogle()} className="flex justify-center items-center mx-auto ">
            <img src={google} alt="" className="w-4 md:w-6 mx-2" />
            <span className="text-sm md:text-lg">Continue with Google</span>
          </button>
        </div>
        <p className="text-sm md:text-lg whitespace-nowrap">
          Don't have an accent ? &nbsp;
          <span className="text-primary underline">
            <Link to="/sing-up">Create an account</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SingIn;