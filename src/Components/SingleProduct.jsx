import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const SingleProduct = ({ item, onDelete, userEmail }) => {
  const { _id, uName, title, description, img_url, stock, price, email } = item;
  // console.log(id);

  // if (window.confirm(" are you sure you want to Delete ? ")) {
  //   return; // Exit if the user cancels
  // }

  const handleDelete = async () => {
    await fetch(`http://localhost:5000/products/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("deleted Successfully");
        onDelete(_id);
      });
  };

  return (
    <div
      className="card bg-base-100 shadow-xl"
      style={{ width: "auto", height: "450px" }}
    >
      <figure style={{ height: "200px", overflow: "hidden" }}>
        <img
          src={img_url}
          alt={name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </figure>
      <div
        className="card-body"
        style={{
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <h2
          className="card-title"
          style={{ fontSize: "1.5rem", fontWeight: "bold" }}
        >
          {title}
        </h2>
        <div>
          <h3 className="text-lg text-orange-900"> Price: {price} $ </h3>
        </div>
        <div className="flex gap-4 justify-between">
          <h3 className="text-lg text-orange-900"> Owner: { userEmail == email ? "me" : uName }  </h3>
          <h3 className="text-base text-orange-900">  {stock === 0 ? "Out Of Stock" : `In Stock: ${stock}`} </h3>
        </div>
        <p> {description} </p>
        <div className=" flex">
          {userEmail !== email && (
            <Link to={`/products/${_id}`}>
              <button className="btn bg-orange-300 border-0">Purchase</button>
            </Link>
          )}

          {userEmail == email && (
            <span className="flex gap-3">
              <button
                onClick={handleDelete}
                className="btn bg-red-500 border-0 "
              >
                Delete
              </button>
              <Link to={`/products/edit/${_id}`}>
                <button className="btn bg-yellow-300 border-0 ">Edit</button>
              </Link>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
