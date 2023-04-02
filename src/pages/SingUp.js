import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const SingUp = () => {
const {
  register,
  formState: { errors },
  handleSubmit,
  reset
} = useForm();
const onSubmit = (data) =>{
  console.log(data);
  reset();
};

  return (
    <div className="p-6">
      <div className="border-2 rounded-md mx-auto p-8 max-w-lg">
          <h2 className="text-sm md:text-xl font-bold ">Create an account</h2>
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
      </div>
    </div>
  );
};

export default SingUp;
