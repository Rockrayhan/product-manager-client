import React, { useContext } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from "../provider/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);

  const formSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const uName = form.uName.value;
    const email = form.email.value;
    const description = form.description.value;
    const img_url = form.img_url.value;
    const stock = parseInt(form.stock.value, 10); // Convert stock to an integer
    const price = parseInt(form.price.value) ;
    

    const data = {  title, uName, description, img_url, email, stock, price };
    // console.log(data);

    if (!window.confirm("Add the Product ?")) {
      return; // Exit if the user cancels
    }

    await fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset() ;
        toast.success('Successfully added...')

      });
  };

  return (
    <div>
      <div><Toaster/></div>

      <h1 className="text-orange-500 text-3xl font-bold text-center mb-10">
        Add a Product
      </h1>

      <form
        onSubmit={formSubmit}
        className="flex flex-col center gap-1"
        action=""
        method="post"
      >
        
        <input
          type="text"
          placeholder="Product Title"
          name="title"
          className="input border-2  w-2/3 border-orange-500"
        />
        <br />


        <textarea name="description" placeholder="Product Description" className="input border-2 h-36 w-2/3 border-orange-500"></textarea>
        <br />
        

    
        <input
          type="text"
          placeholder="Owner Name"
          name="uName"
          className="input border-2  w-2/3 border-orange-500"
        />
        <br />

        <input
          type="text"
          placeholder="Image URL"
          name="img_url"
          className="input border-2  w-2/3 border-orange-500"
        />
        <br />

        <input
          type="text"
          placeholder="price"
          name="price"
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
          placeholder="In Stock"
          name="stock"
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

export default AddProduct;
