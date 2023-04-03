import React from 'react';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import facebook from "../assets/icons/facebook.png";
import google from "../assets/icons/google.png";
import { auth } from '../firebase.init';
import Loading from './Loading';

const SocialSignIn = () => {
const [signInWithGoogle, googleUser, googleLoading, googleError] =useSignInWithGoogle(auth);
const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =useSignInWithFacebook(auth);
const navigate = useNavigate();
let errorElement;

  if (googleUser || facebookUser) {
    navigate("/dashboard");
  }
  if (googleLoading || facebookLoading) {
    return <Loading />;
  }
  if (googleError || facebookError) {
    errorElement = (
      <p className="text-red-500 text-center m-2">
        <small>
          {googleError?.message || facebookError?.message}
        </small>
      </p>
    );
  }
  return (
    <div>
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
            onClick={() => signInWithGoogle()}
            className="flex justify-center items-center mx-auto "
          >
            <img src={google} alt="" className="w-4 md:w-6 mx-2" />
            <span className="text-sm md:text-lg">Continue with Google</span>
          </button>
        </div>
        {/* facebook */}
        <div className="border rounded-3xl py-3 whitespace-nowrap mb-3 w-[300px] ml-[-25px] md:ml-0">
          <button
            onClick={() => signInWithFacebook()}
            className="flex justify-center items-center mx-auto "
          >
            <img src={facebook} alt="" className="w-4 md:w-6 mx-2" />
            <span className="text-sm md:text-lg">Continue with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialSignIn;