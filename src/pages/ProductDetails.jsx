import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const ProductDetails = () => {
  const product = useLoaderData();
  const { _id, uName, description, img_url, title, price, stock } = product;

  const { user } = useContext(AuthContext);

  const formSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const uName = form.uName.value;
    const email = form.email.value;
    // const img_url = form.img_url.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    

    const data = {  title, uName,  email, quantity, price };
    // console.log(data);

    if (!window.confirm("Purchase the Product ?")) {
      return; // Exit if the user cancels
    }

    await fetch("http://localhost:5000/purchase", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success('Successfully added...')
        form.reset() ;

      });
  };

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 h-96 overflow-hidden">
            <img
              src={img_url}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
            <p className="text-lg text-gray-800 mb-6">{description}</p>
            <p className='text-xl text-red-700'> In Stock : {stock} </p>
          </div>
        </div>
      </div>

      <div><Toaster/></div>
      <form
        onSubmit={formSubmit}
        className="flex flex-col center gap-1 my-6"
        action=""
        method="post"
      >
        <p>Product Name :</p>
        <input
          type="text"
          defaultValue={title}
          name="title"
          disabled
          className="input border-2  w-2/3 border-orange-500"
        />
        <br />


    <p> Customer Name: </p>
        <input
          type="text"
          placeholder="Customer Name"
          name="uName"
          defaultValue={user?.displayName}
          className="input border-2  w-2/3 border-orange-500"
        />
        <br />


        <input
          type="text"
          defaultValue={price}
          name="price"
          disabled
          className="input border-2  w-2/3 border-orange-500"
        />
        <br />

        <input
          type="text"
          placeholder="email"
          name="email"
          defaultValue={user?.email}
          disabled
          className="input border-2  w-2/3 border-orange-500"
        />
        <br />

        <input
          type="number"
          placeholder="quantity "
          name="quantity"
          className="input border-2  w-2/3 border-orange-500"
        />
        <br />

        <input
          type="submit"
          value="SUBMIT"
          className="input border-2  w-1/5 bg-orange-500 custom-btn text-white cursor-pointer"
        />
      </form>
      
      
    </div>
  );
};

export default ProductDetails;
