import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import LoadingSpinner from "../../../../assets/icons/loading-spinner-image.gif";
const CheckoutForm = ({ booking }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const { _id, email, fullName, serviceName, price } = booking;

  useEffect(() => {
    fetch(`https://concerned-colt-skirt.cyclic.app/create-payment-intent`,{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({price})
    })
    .then(res =>res.json())
    .then(data =>{
      if(data?.clientSecret){
        setClientSecret(data.clientSecret)
      }
    });
  }, [price]);


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    //card error
    setCardError(error?.message || "");
    setSuccess("");
    setProcessing(true);

      //confirm card payment
      const { paymentIntent, error:intentError } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name:fullName,
              email:email,
            },
          },
        }
      );
      if(intentError){
        setCardError(intentError?.message);
        setProcessing(false);
      }
      else{
        setCardError('');
        setTransactionId(paymentIntent.id)
        // console.log(paymentIntent);
        setSuccess(`Congrats! your payment is completed .`)
        // send payment info on mongodb
        const payment ={
          booking: _id,
          transactionId: paymentIntent.id,
        }
        fetch(`https://concerned-colt-skirt.cyclic.app/booking/${_id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            "authorization":`Bearer ${localStorage.getItem("accessToken")}`
          },
          body: JSON.stringify(payment),
        })
          .then((res) =>{
           if(res.status ===401 || res.status ===403){
            toast.error(`your payment was not success`)
           }
            return res.json();
          })
          .then((data) => {
            setProcessing(false);
            if (data.modifiedCount >0){
              toast.success(`Congrats you will pay for ${serviceName}`);
            }
          });
      }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-xs btn-primary my-5"
          type="submit"
          disabled={!stripe || !clientSecret || success}
        >
          Pay
        </button>
      </form>
      <div className="flex justify-center items-center ">
        {processing && <img src={LoadingSpinner} alt="" className="w-24" />}
        {cardError && (
          <p className="text-red-500">
            <small>{cardError}</small>
          </p>
        )}
        {success && (
          <div className="text-green-500">
            <p>
              <small>{success}</small>
            </p>
            <p>
              <small>
                Your transactionId:
                <span className="text-orange-500 font-semibold">
                  {transactionId}
                </span>
              </small>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CheckoutForm;
