import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

const CheckoutForm = ({ product }) => {
    const [error, setError] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [quantity, setQuantity] = useState(1); // Initialize quantity state
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);
    const { _id, uName, description, img_url, title, price, stock: initialStock } = product;
    const [stock, setStock] = useState(initialStock);
    const totalPrice = price * quantity * 100;

    useEffect(() => {
        if (!price) return;

        // Use axios to make the request
        axios.post('https://product-manager-server-1ewt.onrender.com/create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            });

    }, [totalPrice]);

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();  // Prevent default form submission
        const form = event.target;
        const img_url = form.img_url.value;
        const title = form.title.value;
        const uName = form.uName.value;
        const email = form.email.value;
        const quantity = parseInt(form.quantity.value, 10);
        const price = parseFloat(form.price.value);
        const totalPrice = price * quantity * 100;

        if (quantity > stock) {
            toast.error('Not enough stock available');
            return;
        }

        const data = { title, uName, img_url, email, quantity, price: totalPrice / 100, productId: _id };

        if (!window.confirm("Purchase the Product ?")) {
            return; // Exit if the user cancels
        }

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
        //  confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || "anonymous",
                    name: user?.displayName || "anonymous"
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
                await fetch("https://product-manager-server-1ewt.onrender.com/purchase", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(data),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.insertedId) {
                            setStock(stock - quantity);
                            toast.success('Successfully purchased');
                            form.reset();
                        } else {
                            toast.error('Purchase failed');
                        }
                    });

            }
        }
    };

    return (
        <div>
            <div><Toaster /></div>
            <form onSubmit={handleSubmit} method="post" className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Product Name</label>
                    <input
                        type="text"
                        defaultValue={title}
                        name="title"
                        disabled
                        className="input border-2 w-full border-gray-300 rounded p-2"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Customer Name</label>
                    <input
                        type="text"
                        placeholder="Customer Name"
                        name="uName"
                        defaultValue={user?.displayName}
                        className="input border-2 w-full border-gray-300 rounded p-2"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Price</label>
                    <input
                        type="text"
                        defaultValue={price}
                        name="price"
                        disabled
                        className="input border-2 w-full border-gray-300 rounded p-2"
                    />
                </div>

                <input
                    type="text"
                    defaultValue={img_url}
                    name="img_url"
                    hidden
                />

                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="text"
                        placeholder="email"
                        name="email"
                        defaultValue={user?.email}
                        disabled
                        className="input border-2 w-full border-gray-300 rounded p-2"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Quantity</label>
                    <input
                        type="number"
                        placeholder="quantity"
                        name="quantity"
                        required
                        className="input border-2 w-full border-gray-300 rounded p-2"
                        value={quantity}
                        onChange={handleQuantityChange} // Update quantity state
                    />
                </div>

                <CardElement
                    className="my-10 border-2 border-gray-300 rounded p-4"
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

                <button className="btn btn-primary w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>

                <p className="text-lg font-semibold">Total bill: ${totalPrice / 100}</p> {/* Display total bill */}

                <p className="text-red-700">{error}</p>
                {transactionId && <p className="text-green-600">
                    Your transaction id: <b>{transactionId}</b>
                </p>}
            </form>
        </div>
    );
};

export default CheckoutForm;
