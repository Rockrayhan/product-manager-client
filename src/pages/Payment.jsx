import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckoutForm from "../Components/CheckoutForm";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  return (
    <div>
      <h1 className="text-orange-500 text-3xl font-bold text-center mb-10">
        Make Payment
      </h1>


        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm/>
            </Elements>

        </div>

    </div>
  );
};

export default Payment;
