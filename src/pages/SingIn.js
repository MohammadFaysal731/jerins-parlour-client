import React, { useEffect } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../assets/icons/logo.png";
import Loading from "../components/Loading";
import SocialSignIn from "../components/SocialSignIn";
import { auth } from "../firebase.init";
import useTitle from "../hooks/useTitle";
import useToken from "../hooks/useToken";

const SingIn = () => {
  useTitle("Sign in")
  const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, resetSending, resetError] =
    useSendPasswordResetEmail(auth);
  const [token] = useToken(emailUser);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  let errorElement;
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, navigate, from]);
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
  
  const handleForgetPassword = async ()=> {
    const forgetEmailSend = watch("emailAddress");
    // console.log(forgetEmailSend);
    if (forgetEmailSend) {
      await sendPasswordResetEmail(forgetEmailSend);
      toast(`Forget password email was send on ${forgetEmailSend}`);
      reset();
    }
    else{
      toast.error(`Please put your email`);
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
                  maxLength: {
                    value: 8,
                    message: "Maximum length is 8",
                  },
                })}
                autoComplete="off"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full h-10 px-4 placeholder-black text-sm peer border-b-2 border-accent outline-none"
              />
              <label htmlFor="first-name" className="">
                {errors?.password?.type === "required" && (
                  <p className="text-red-500">
                    <small>{errors?.password?.message}</small>
                  </p>
                )}
                {errors?.password?.type === "pattern" && (
                  <p className="text-red-500">
                    <small>{errors?.password?.message}</small>
                  </p>
                )}
                {errors?.password?.type === "maxLength" && (
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
              className="cursor-pointer text-sm md:text-lg text-white bg-primary px-8 py-2 rounded-md w-full"
            />
          </form>
            <p className="m-2 text-center text-sm md:text-lg">
              Don't have an accent ? &nbsp;
              <span className="text-primary underline">
                <Link to="/sing-up">Create an account</Link>
              </span>
            </p>
            <button
              onClick={handleForgetPassword}
              className="m-2 text-sm md:text-lg whitespace-nowrap text-primary underline"
            >
              Forget Password ?
            </button> 
          </div>
        <SocialSignIn />
      </div>
    </div>
  );
};

export default SingIn;
