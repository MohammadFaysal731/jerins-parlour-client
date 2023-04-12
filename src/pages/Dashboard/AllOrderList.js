import React, { useEffect, useState } from 'react';

const AllOrderList = () => {
  const [allOrders, setAllOrders]=useState([]);
  useEffect(() =>{
    fetch(`http://localhost:5000/bookings`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  },[])
  return (
    <div>
      <h2 className="text-primary text-center font-bold text-sm md:text-lg mb-5">
        Welcome to order list page all orders: {allOrders.length}
      </h2>
      <div className="grid grid-cols-1">
        <div className="overflow-x-auto">
          <table className="table table-normal w-full">
            {/* head */}
            <thead>
              <tr>
                <th>SL</th>
                <th>Name</th>
                <th>Email ID</th>
                <th>Service</th>
                <th>Pay With</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {allOrders?.map(({ fullName, email, serviceName }, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>{fullName}</td>
                  <td>{email}</td>
                  <td> {serviceName}</td>
                  <td>Creadit Card</td>
                  <td>Pending</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllOrderList;