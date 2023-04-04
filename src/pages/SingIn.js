import React, { useEffect, useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/icons/logo.png";
import Loading from "../components/Loading";
import SocialSignIn from "../components/SocialSignIn";
import { auth } from "../firebase.init";

const SingIn = () => {
  const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, resetSending, resetError] =
    useSendPasswordResetEmail(auth);
  const emailRef = useRef("");
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
  if (emailLoading || resetSending) {
    return <Loading />;
  }
  if (emailError || resetError) {
    errorElement = (
      <p className="text-red-500 text-center m-2">
        <small>{emailUser?.message || resetError?.message}</small>
      </p>
    );
  }
  const onSubmit = (data) => {
    const email = data.emailAddress;
    const password = data.password;
    signInWithEmailAndPassword(email, password);
    reset();
  };
  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (email) {
      sendPasswordResetEmail(email);
      alert("Forget email send");
    } else {
      alert("Please put you email");
    }
  };

  return (
    <div className="p-6">
      <div className="mx-auto max-w-xl">
        <div className="border-2 rounded-md p-8">
          <div className="flex justify-between items-center">
            <img src={logo} alt="" className="w-24" />
            <h2 className="text-sm md:text-xl font-bold ">Sign</h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email Address */}
            <div className="w-full my-5 relative group">
              <input
                {...register("emailAddress", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                })}
                ref={emailRef}
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
            {errorElement}
            <input
              type="submit"
              value=" Sign in"
              className="text-sm md:text-lg text-white bg-primary px-8 py-2 rounded-md w-full"
            />
          </form>
          <div className="flex justify-between items-center">
            <p className="m-2 text-center text-sm md:text-lg whitespace-nowrap">
              Don't have an accent ? &nbsp;
              <span className="text-primary underline">
                <Link to="/sing-up">Create an account</Link>
              </span>
            </p>
            <button
              onClick={handleForgetPassword}
              className="m-2 text-sm md:text-lg whitespace-nowrap text-primary underline"
            >
              Forget Password
            </button>
          </div>
        </div>
        <SocialSignIn />
      </div>
    </div>
  );
};

export default SingIn;
