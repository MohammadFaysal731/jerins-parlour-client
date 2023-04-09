import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Logo from "../../assets/icons/logo.png";
import { auth } from "../../firebase.init";
const MakeAdmin = () => {
  const [user]=useAuthState(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const email = data.emailAddress;
    console.log(email);
    reset();
  };
  return (
    <div className="">
      <h2 className="text-primary text-center font-bold text-sm md:text-lg mb-5">
        Welcome to make admin page
      </h2>
      <div className="max-w-3xl mx-auto">
        <>
          {/* booking information */}
          <div className="border p-10">
            <div className="flex justify-between items-center">
              <img src={Logo} alt="" className="w-24" />
              <img src={user?.photoURL} alt="" className="w-14 rounded-full" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Email Address */}
              <div className="w-full my-5">
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
                  placeholder=" Email Address"
                  className="w-full h-10 px-4 placeholder-black text-sm peer border-2 border-accent outline-none"
                />
                <label htmlFor="email-address">
                  {errors.emailAddress?.type === "required" && (
                    <p className="text-red-500">
                      <small>{errors.emailAddress?.message}</small>
                    </p>
                  )}
                </label>
              </div>
              <button className="btn-xs btn-primary rounded-md text-secondary">
                Make Admin
              </button>
            </form>
          </div>
        </>
      </div>
    </div>
  );
};

export default MakeAdmin;
