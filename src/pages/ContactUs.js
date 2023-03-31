import React from "react";
import { useForm } from "react-hook-form";
import PrimaryButton from "../components/PrimaryButton/PrimaryButton";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-secondary p-14 ">
      <div className="text-center pb-10">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-2 lg:mb-5">
          Let contact us for your
        </h2>
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-2 lg:mb-5">
          Next, screen treatment professionally.
        </h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="max-w-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="form-control w-full">
            <input
              {...register("firstName", { required: true })}
              type="text"
              placeholder="First Name"
              className="input input-bordered w-full  m-2"
            />
          </div>
          <div className="form-control w-full">
            <input
              type="text"
              {...register("lastName", { required: true })}
              placeholder=" Last Name"
              className="input input-bordered w-full m-2"
            />
          </div>
          <div className="form-control w-full">
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder=" Email Address"
              className="input input-bordered w-full m-2"
            />
          </div>
          <div className="form-control w-full ">
            <input
              {...register("phonNumber", { required: true })}
              type="number"
              placeholder=" Phone Number"
              className="input input-bordered w-full m-2"
            />
          </div>
          <div className="md:col-span-2">
            <textarea
              placeholder=" Your Message"
              className="textarea textarea-bordered textarea-md w-full m-2"
            ></textarea>
          </div>
        </div>
        <div className="text-center m-2">
          <PrimaryButton>Send Message</PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
