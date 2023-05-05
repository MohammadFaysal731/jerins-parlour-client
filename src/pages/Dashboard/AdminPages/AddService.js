import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { toast } from "react-toastify";
import PrimaryButton from "../../../components/PrimaryButton";
const AddService = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const imgbbStoreApiKey = `45c46a1b32a1d6a38d670e42fa5d2349`;
  const onSubmit = (data) => {
    const title = data.title;
    const price = data.price;
    const description = data.description;
    // host the image to imgbb
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgbbStoreApiKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const image = data.data.url;
          // console.log(image);
          const serviceData = {
            title,
            price,
            image,
            description,
          };
          // send the data to mongodb
          fetch(`https://concerned-colt-skirt.cyclic.app/services`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              "authorization": `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(serviceData),
          })
            .then((res) => {
              if (res.status === 401 || res.status === 403) {
                toast.error(`Your ${title} service was not added`);
              }
              return res.json();
            })
            .then((result) => {
              if (result.acknowledged) {
                toast.success(`You will add ${title} service`);
                reset();
              }
            });
        }
      });
  };
  return (
    <div>
      <h2 className="text-primary font-bold text-sm md:text-lg mb-5">
        Welcome to add service page
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="max-w-xl grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Service Title */}
          <div className="form-control w-full">
            <input
              {...register("title", {
                required: {
                  value: true,
                  message: "Service title is required",
                },
                maxLength: {
                  value: 16,
                  message: "Maximum word  is 16 ",
                },
              })}
              autoComplete="off"
              type="text"
              placeholder="Service Title"
              className="input input-bordered w-full  m-2"
            />
            <label htmlFor="name" className="">
              {errors?.title?.type === "required" && (
                <p className="text-red-500">
                  <small>{errors?.title?.message}</small>
                </p>
              )}
              {errors?.title?.type === "maxLength" && (
                <p className="text-red-500">
                  <small>{errors?.title.message}</small>
                </p>
              )}
            </label>
          </div>
          {/* Service price */}
          <div className="form-control w-full">
            <input
              type="number"
              {...register("price", {
                required: {
                  value: true,
                  message: "Service price is required",
                },
                maxLength: {
                  value: 16,
                  message: "Maximum word  is 16 ",
                },
              })}
              autoComplete="off"
              placeholder="Service price"
              className="input input-bordered w-full m-2"
            />
            <label htmlFor="price" className="">
              {errors?.price?.type === "required" && (
                <p className="text-red-500">
                  <small>{errors?.price?.message}</small>
                </p>
              )}
              {errors?.price?.type === "maxLength" && (
                <p className="text-red-500">
                  <small>{errors?.price?.message}</small>
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
                  value: 300,
                  message: "Maximum word  is 360",
                },
              })}
              autoComplete="off"
              placeholder="Description"
              className="textarea textarea-bordered textarea-md w-full m-2"
            ></textarea>
            <label htmlFor="price" className="">
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
        <div className="m-2 text-sm">
          <PrimaryButton>Add Service</PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default AddService;
