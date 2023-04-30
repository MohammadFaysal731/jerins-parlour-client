import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../../../../components/Loading';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
const stripePromise = loadStripe(
  "pk_test_51LtrOxFHsxQagk8q7KH5tMqR0lbAucQ4rM0NsVJ5OqAtztQoISHfeML2AczQzpzMBgA6CZqaySmZBFA3evxaHCJI00vCx2El0R"
);

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
  return (
    <div>
      <button className="btn-xs btn-primary rounded-md text-secondary">
        <Link to={`/dashboard/my-booking`}>Back</Link>
      </button>
      <div className="card  max-w-md shadow-xl font-bold">
        <div className="card-body">
          <h2 className="card-title">
            Pay for :-
            <span className="text-primary">{booking.serviceName}</span>
          </h2>
          <p>
            Please pay: $
            <span className="text-primary ">{booking.price} /-</span>
          </p>
        </div>
      </div>
      <div className="card  max-w-md shadow-xl mt-8">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm booking={booking}/>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;