import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../../../components/Loading';

const Payment = () => {
  const {id}=useParams()
  const url = `http://localhost:5000/bookings/${id}`;
  const { data: booking, isLoading } = useQuery({
    queryKey: ["booking", id],
    queryFn: () =>
      fetch(url, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          "authorization": `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });
  if(isLoading){
    return <Loading/>
  }
  console.log(booking);
  return (
    <div>
      <button className="btn-xs btn-primary rounded-md text-secondary">
        <Link to={`/dashboard/my-booking`}>Back</Link>
      </button>
      {id}
      <div className="card  max-w-md shadow-xl font-bold">
        <div className="card-body">
          <h2 className="card-title">
            Pay for :-
            <span className="text-primary">{booking.serviceName}</span>
          </h2>
          <p>
            Please pay: ${" "}
            <span className="text-primary ">{booking.price} /-</span>
          </p>
        </div>
      </div>
      <div className="card  max-w-md shadow-xl mt-8">
        <div className="card-body"></div>
      </div>
    </div>
  );
};

export default Payment;