import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const EditProduct =  () => {
  const product = useLoaderData();
  const { user } = useContext(AuthContext);

  const [title, setTitle] = useState(product.title);
  const [uName, setUname] = useState(product.uName);
  const [description, setDescription] = useState(product.description);
  const [img_url, setImg_url] = useState(product.img_url);
  const [stock, setStock] = useState(product.stock);
  const [price, setPrice] = useState(product.price);



  
  const formSubmit = async(e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const uName = form.uName.value;
    const description = form.description.value;
    const img_url = form.img_url.value;
    const stock = parseInt(form.stock.value, 10);
    const price = parseInt(form.price.value) ;
    

    const data = {  title, uName, description, img_url, stock, price };

    // if (!window.confirm("Add the product?")) {
    //     return; // Exit if the user cancels
    //   }

    await fetch(`http://localhost:5000/products/${product._id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => { 
        console.log(data);
      form.reset() ;
      toast.success('Updated Successfully ...');
    });

    // console.log(data);

 
  };

  return (
    <div>
      <div>
        <Toaster />
      </div>

      <h1 className="text-orange-500 text-3xl font-bold text-center mb-10">
        Edit Product 
      </h1>

      <form
        onSubmit={formSubmit}
        className="flex flex-col container gap-2"
        action=""
        method="post"
      >
        <label htmlFor=""> Blog Title : </label>
        <input
          type="text"
          placeholder={title}
          name="title"
          className="input border-2  w-2/3 border-orange-500"
          value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <br />


    <label htmlFor=""> Author:  </label>
        <input
          type="text"
          placeholder="Enter Owner Name"
          name="uName"
          className="input border-2  w-2/3 border-orange-500"
          value={user?.displayName}
        onChange={(e) => setUname(e.target.value)}
        />
        <br />

    <label htmlFor=""> Blog Description: </label>
        <textarea
          type="text"
          placeholder={description}
          name="description"
          className="input border-2 h-36 w-2/3 border-orange-500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        >
        </textarea>

        <br />

        Blog Image url: 
        <input
          type="text"
          placeholder="Image URL"
          name="img_url"
          className="input border-2  w-2/3 border-orange-500"
          value={img_url}
          onChange={(e) => setImg_url(e.target.value)}
        />
        <br />




    Stock :
        <input
          type="number"
          placeholder="In Stock"
          name="stock"
          className="input border-2  w-2/3 border-orange-500"
          defaultValue={stock}
          onChange={(e) => setStock(e.target.value)}
        />
        <br />


    Price :
        <input
          type="text"
          placeholder="price"
          name="price"
          className="input border-2  w-2/3 border-orange-500"
          defaultValue={price}
          onChange={(e) => setPrice(e.target.value)}
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

export default EditProduct;
