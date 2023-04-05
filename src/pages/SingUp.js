import React, { useEffect } from "react";
import {
  useCreateUserWithEmailAndPassword, useUpdateProfile
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Logo from "../assets/icons/logo.png";
import Loading from "../components/Loading";
import SocialSignIn from "../components/SocialSignIn";
import { auth } from "../firebase.init";
const SingUp = () => {
  const [createUserWithEmailAndPassword, emailUser, emailUserLoading, emailUserError] =useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
  const [updateProfile, updating, updatingError] = useUpdateProfile(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  let errorElement;
  const from = location.state?.from?.pathname || "/"; 
useEffect(() => {
  if (emailUser) {
    navigate(from, { replace: true });
  }
}, [emailUser, navigate, from]);
  if (emailUserLoading || updating) {
    return <Loading />;
  }
  if(emailUserError ||updatingError){
    errorElement = (
      <p className="text-red-500 text-center m-2">
        <small>{emailUser?.message || updatingError.message}</small>
      </p>
    ); 
  }
  const onSubmit = async (data) => {
   const name= data.fullName;
   const email = data.emailAddress;
   const password = data.password;
   const confirmPassword = data.confirmPassword;
    if(password === confirmPassword){
     await createUserWithEmailAndPassword(email, password)
     const success = await updateProfile({ displayName: name });
     if(success){
      toast.success(`${email}s profile was updated`)
      reset(); 
     }
    }
  };

  return (
    <div className="p-6">
      <div className="mx-auto max-w-xl">
        <div className="border-2 rounded-md p-8">
          <div className="flex justify-between items-center">
            <img src={Logo} alt="" className="w-24" />
            <h2 className="text-sm md:text-xl font-bold ">Create an account</h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/*  Full Name */}
            <div className="w-full my-5 relative group">
              <input
                {...register("fullName", {
                  required: {
                    value: true,
                    message: "Full name is required",
                  },
                  maxLength: {
                    value: 16,
                    message: "Maximum word  is 16 ",
                  },
                })}
                autoComplete="off"
                type="text"
                name="fullName"
                id="full-name"
                placeholder="Full Name"
                className="w-full h-10 px-4 placeholder-black text-sm peer border-b-2 border-accent outline-none"
              />
              <label htmlFor="full-name" className="">
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
                autoComplete="off"
                type="email"
                name="emailAddress"
                id="email-address"
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
                autoComplete="off"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full h-10 px-4 placeholder-black text-sm peer border-b-2 border-accent outline-none"
              />
              <label htmlFor="full-name" className="">
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
                autoComplete="off"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                id="confirm-password"
                className="w-full h-10 px-4 placeholder-black text-sm peer border-b-2 border-accent outline-none"
              />
              <label htmlFor="full-name" className="">
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
            {errorElement}
            <input
              type="submit"
              value=" Create an account"
              className="text-sm md:text-lg text-white bg-primary px-8 py-2 rounded-md w-full"
            />
          </form>
          <p className="text-center text-sm md:text-lg m-2 ">
            Already have an account ? &nbsp;
            <Link to="/sign-in" className="text-primary underline">
              Sing in
            </Link>
          </p>
        </div>
        <SocialSignIn />
      </div>
    </div>
  );
};

export default SingUp;
