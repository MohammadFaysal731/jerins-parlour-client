import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";
import Loading from "../../../../components/Loading";
const AllBookingList = () => {
  const {
    isLoading,
    data: allBookings,
    refetch,
  } = useQuery({
    queryKey: ["allBookings"],
    queryFn: () =>
      fetch(`http://localhost:5000/bookings`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });

  if (isLoading) {
    return <Loading />;
  }

  const handleBookingDone = (id) => {
    fetch(`http://localhost:5000/booking-done/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          toast.error(`You do not able to delete this`);
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`this booking will be done now`);
        }
      });
  };
  const handleBookingOngoing = (id) => {
    fetch(`http://localhost:5000/booking-ongoing/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          toast.error(`You do not able to delete this`);
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`this booking will be on going now`);
        }
      });
  };
  const handleBookingRemove = (id) => {
    fetch(`http://localhost:5000/booking-remove/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          toast.error(`You do not able to delete this`);
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`this booking will be  pending now`);
        }
      });
  };
  const handleBookingDelete = (id) => {
    fetch(`http://localhost:5000/booking/${id}`, {
      method: "DELETE",
      headers:{
        "content-type":"application/json",
        "authorization":`Bearer ${localStorage.getItem("accessToken")}`
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          toast.error(`You do not able to delete this`);
        }
        return res.json();
      })
      .then((data) => {
        if (data.deletedCount) {
          refetch();
          toast.success(`this booking was deleted`);
        }
      });
  };
  return (
    <div>
      <h2 className="text-primary text-center font-bold text-sm md:text-lg mb-5">
        Welcome to order list page all orders:- {allBookings?.length}
      </h2>
      <div className="grid grid-cols-1">
        <div className="overflow-x-auto">
          <table className="table table-normal w-full">
            {/* head */}
            <thead>
              <tr>
                <th className="text-primary font-bold ">SL</th>
                <th className="text-sky-500 font-bold ">Name</th>
                <th className="text-teal-500  font-bold">Email ID</th>
                <th className="text-purple-500 font-bold ">Service</th>
                <th className="text-pink-500 font-bold ">Payment</th>
                <th className="text-cyan-500 font-bold ">Status</th>
                <th className="text-orange-500 font-bold ">On Going</th>
                <th className="text-green-500 font-bold ">Done</th>
                <th className="text-red-500 font-bold ">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {allBookings?.map(
                (
                  {
                    _id,
                    fullName,
                    email,
                    serviceName,
                    bookingStatus,
                    paid,
                    transactionId,
                  },
                  index
                ) => (
                  <tr key={index}>
                    <th className="text-primary font-bold ">{index + 1}</th>
                    <td className="text-sky-500 font-bold ">{fullName}</td>
                    <td className="text-teal-500 font-bold ">{email}</td>
                    <td className="text-purple-500 font-bold ">
                      {serviceName}
                    </td>
                    <td className="text-pink-500 font-bold">
                      {paid === true ? "Paid" : "Unpaid"}
                    </td>
                    {paid && (
                      <>
                        <td className="text-cyan-500 font-bold">
                          {bookingStatus ? bookingStatus : "Pending"}
                        </td>
                        <td className="text-orange-500 font-bold ">
                          {bookingStatus === "Done" ? (
                            ""
                          ) : (
                            <>
                              {bookingStatus === "On Going" ? (
                                <button
                                  className="text-green-500"
                                  onClick={() => handleBookingRemove(_id)}
                                >
                                  Remove
                                </button>
                              ) : (
                                <button
                                  onClick={() => handleBookingOngoing(_id)}
                                >
                                  On Going
                                </button>
                              )}
                            </>
                          )}
                        </td>
                        <td className="font-bold ">
                          {bookingStatus === "On Going" ? (
                            ""
                          ) : (
                            <>
                              {bookingStatus === "Done" ? (
                                <button
                                  className="text-orange-500"
                                  onClick={() => handleBookingRemove(_id)}
                                >
                                  Remove
                                </button>
                              ) : (
                                <button
                                  className="text-green-500"
                                  onClick={() => handleBookingDone(_id)}
                                >
                                  Done
                                </button>
                              )}
                            </>
                          )}
                        </td>
                      </>
                    )}
                    <td className="text-red-500 font-bold">
                      <button onClick={() => handleBookingDelete(_id)}>
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

export default AllBookingList;
