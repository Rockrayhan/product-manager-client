import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const CheckoutForm = () => {
  const [error, setError] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const { product, user } = useContext(AuthContext);
  const { price, quantity, productId, title } = product;
  const totalPrice = price;
  console.log(price);

  useEffect(() => {
    if (!price) return;

    // Use axios to make the request
    axios.post('http://localhost:5000/create-payment-intent', { price: totalPrice })
      .then(res => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      })
      .catch(error => {
        console.error("Error creating payment intent:", error);
        setError("Failed to create payment intent. Please try again.");
      });
  }, [totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    if (error) {
      console.log('payment error', error);
      setError(error.message);
    } else {
      console.log('payment method', paymentMethod);
      setError('');
    }
    // Confirm payment
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || "anonimus",
          name: user?.displayName || "anonimus"
        }
      }
    });

    if (confirmError) {
      console.log('confirm error', confirmError);
    } else {
      console.log('payment intent', paymentIntent);
      if (paymentIntent.status === 'succeeded') {
        console.log('transaction id', paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // Complete the purchase after successful payment
        await fetch("http://localhost:5000/purchase", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            title,
            uName: user.displayName,
            img_url: product.img_url,
            email: user.email,
            quantity,
            price: totalPrice,
            productId
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              toast.success('Successfully purchased');
            } else {
              toast.error('Purchase failed');
            }
          });
      }
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
        <button className="btn btn-primary my-5 custom-btn" type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>

        <p> Total bill: {price ? price : ""} </p>

        <p className="text-red-700">{error}</p>
        {transactionId && <p className="text-green-600"> 
          Your transaction id :  <b>{transactionId}</b>
        </p>}
      </form>
    </div>
  );
};

export default CheckoutForm;
