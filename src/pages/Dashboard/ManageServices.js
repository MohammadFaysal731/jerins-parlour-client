import React, { useEffect, useState } from 'react';

const ManageServices = () => {
  const [allService,setAllService]=useState([]);
  useEffect(()=>{
    fetch(`http://localhost:5000/services`)
      .then((res) => res.json())
      .then((data) => setAllService(data));
  },[])
  return (
    <div className="">
      <h2 className="text-primary text-center font-bold text-sm md:text-lg mb-5">
        Welcome to manage services page
      </h2>
      <div className="grid grid-cols-1">
        <div className="overflow-x-auto">
          <table className="table table-normal w-full ">
            {/* head */}
            <thead>
              <tr>
                <th>SL</th>
                <th>Service Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Image</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {allService?.map(
                ({ title, description, price, image }, index) => (
                  <tr>
                    <th>{index + 1}</th>
                    <td>{title}</td>
                    <td title={description}>{description.slice(0, 20)}</td>
                    <td>${price} /-</td>
                    <td>
                      <img src={image} alt="" className="w-12 rounded-full" />{" "}
                    </td>
                    <td>
                      Pending
                      
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