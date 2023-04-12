import React, { useEffect, useState } from "react";
const ManageServices = () => {
  const [allService, setAllService] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/services`)
      .then((res) => res.json())
      .then((data) => setAllService(data));
  }, []);
  return (
    <div className="">
      <h2 className="text-primary text-center text-sm md:text-lg mb-5 font-bold">
        Welcome to manage services page
      </h2>
      <div className="grid grid-cols-1">
        <div className="overflow-x-auto">
          <table className="table table-normal w-full ">
            {/* head */}
            <thead>
              <tr>
                <th className="text-primary">SL</th>
                <th className="text-emerald-500">Service Name</th>
                <th className="text-sky-500">Description</th>
                <th className="text-purple-500">Price</th>
                <th className="">Image</th>
                <th className="text-green-500">Update</th>
                <th className="text-red-500">Delete</th>
              </tr>
            </thead>
            <tbody>
              {allService?.map(
                ({ title, description, price, image }, index) => (
                  <tr className="font-bold">
                    <th className="text-primary">{index + 1}</th>
                    <td className="text-emerald-500">{title}</td>
                    <td className="text-sky-500" title={description}>
                      {description.slice(0, 20)}
                    </td>
                    <td className="text-purple-500">${price} /-</td>
                    <td>
                      <img src={image} alt="" className="w-12 rounded-full" />
                    </td>
                    <td className="text-green-500">
                      <button>Update</button>
                    </td>
                    <td className="text-red-500">
                      <button>
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageServices;
