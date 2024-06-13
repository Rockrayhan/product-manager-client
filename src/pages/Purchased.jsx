import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Purchased = () => {
  const [products, setProducts] = useState([]);
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;

  useEffect(() => {
    fetch(`http://localhost:5000/purchased?email=${userEmail}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [userEmail]);


  console.log(products);

  return (
    <div>
      <h1 className="text-orange-500 text-3xl font-bold text-center mb-5">
        Your Purchased {products.length} Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((item) => (
          <div className="col-span-1" key={item._id}>
<div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={item.img_url} alt={item.title}/></figure>
  <div className="card-body">
    <h2 className="card-title">{item.title}</h2>
    <p> Price:  {item.price} </p>
    <p> Quantity:  {item.quantity} </p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Purchased;
