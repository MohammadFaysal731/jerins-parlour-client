import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { toast } from "react-toastify";
import useTitle from "../../../hooks/useTitle";
const AddReview = () => {
  useTitle("Add Review")
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm({ mode: "onChange" });
  const imgbbStorageApiKey = `45c46a1b32a1d6a38d670e42fa5d2349`;

  const onSubmit = (data) => {
    const name = data.name;
    const company = data.company;
    const description = data.description;

    // image host to imgbb
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgbbStorageApiKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) =>{
        if (res.status !== 200) {
          toast.error(`Error for response status is ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          const image = data.data.url;
          const reviewData = {
            name,
            company,
            image,
            description,
          };
          // send the data to mongodb
          fetch(`https://concerned-colt-skirt.cyclic.app/reviews`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              "authorization":`Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(reviewData),
          })
            .then((res) => {
              if (res.status === 401 || res.status === 403) {
                toast.error(`fail to add review please try agin`);
              }
              return res.json();
            })
            .then((result) => {
              if (result.acknowledged > 0) {
                toast.success(`Thanks to give us to your review`);
                reset();
              }
            });
        }
      });
  };
  return (
    <div>
      <h2 className="text-primary font-bold text-sm md:text-lg mb-5">
        Welcome to review page
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="max-w-xl grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Full Name */}
          <div className="form-control w-full">
            <input
              {...register("name", {
                required: {
                  value: true,
                  message: "You name is required",
                },
                maxLength: {
                  value: 16,
                  message: "Maximum word  is 16 ",
                },
              })}
              autoComplete="off"
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full  m-2"
            />
            <label htmlFor="name" className="">
              {errors?.name?.type === "required" && (
                <p className="text-red-500">
                  <small>{errors?.name?.message}</small>
                </p>
              )}
              {errors?.name?.type === "maxLength" && (
                <p className="text-red-500">
                  <small>{errors?.name.message}</small>
                </p>
              )}
            </label>
          </div>
          {/* Company Name */}
          <div className="form-control w-full">
            <input
              type="text"
              {...register("company", {
                required: {
                  value: true,
                  message: "Company name and designation is required",
                },
                maxLength: {
                  value: 16,
                  message: "Maximum word  is 16 ",
                },
              })}
              autoComplete="off"
              placeholder="Company Name, Designation"
              className="input input-bordered w-full m-2"
            />
            <label htmlFor="company" className="">
              {errors?.company?.type === "required" && (
                <p className="text-red-500">
                  <small>{errors?.company?.message}</small>
                </p>
              )}
              {errors?.company?.type === "maxLength" && (
                <p className="text-red-500">
                  <small>{errors?.company?.message}</small>
                </p>
              )}
            </label>
          </div>
          {/* image */}
          <div className="md:col-span-2">
            <div className="form-control text-secondary rounded-full bg-primary w-full">
              <input
                {...register("image", {
                  required: {
                    value: true,
                    message: "You image  is required",
                  },
                })}
                autoComplete="off"
                type="file"
                placeholder="image"
                id="image"
                className="hidden input input-bordered w-full m-2"
              />
              <label htmlFor="image" id="image">
                <span className="text-sm md:text-xl flex justify-center items-center">
                  <AiOutlineCloudUpload className="mx-2 text-2xl" />
                  Upload
                </span>
              </label>
            </div>
            <label>
              {errors?.image?.type === "required" && (
                <p className="text-red-500">
                  <small>{errors?.image?.message}</small>
                </p>
              )}
            </label>
          </div>
          {/* description */}
          <div className="md:col-span-2">
            <textarea
              {...register("description", {
                required: {
                  value: true,
                  message: "Description is required",
                },
                maxLength: {
                  value: 160,
                  message: "Maximum word  is 160",
                },
              })}
              autoComplete="off"
              placeholder="Description"
              className="textarea textarea-bordered textarea-md w-full m-2"
            ></textarea>
            <label htmlFor="company" className="">
              {errors?.description?.type === "required" && (
                <p className="text-red-500">
                  <small>{errors?.description?.message}</small>
                </p>
              )}
              {errors?.description?.type === "maxLength" && (
                <p className="text-red-500">
                  <small>{errors?.description?.message}</small>
                </p>
              )}
            </label>
          </div>
        </div>
        <input
          disabled={isSubmitSuccessful}
          className={`${
            isSubmitSuccessful
              ? "text-secondary-focus bg-gray-100 cursor-not-allowed"
              : "bg-primary text-secondary cursor-pointer "
          }  px-2 py-1 rounded-lg`}
          type="submit"
          value="Add Review"
        />
      </form>
    </div>
  );
};

export default AddReview;
