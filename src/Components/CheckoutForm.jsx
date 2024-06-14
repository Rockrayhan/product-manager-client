import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = () => {
    const [error, setError] = useState('') ;
    const stripe = useStripe();
    const elements = useElements();


    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, []);


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }


      const card = elements.getElement(CardElement);

      if (card == null) {
        return;
      }

      // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        console.log('payment error', error);
        setError(error.message)
      } else {
        console.log('PaymentMethod', paymentMethod);
        setError('');
      }
  };

  return (
    <div>
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

        <button className="btn btn-primary my-5 custom-btn" type="submit" disabled={!stripe}>
          Pay
        </button>

          <p className="text-red-700"> {error} </p>

      </form>
    </div>
  );
};

export default CheckoutForm;
