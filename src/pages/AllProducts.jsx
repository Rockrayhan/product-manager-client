import React, { useContext, useEffect, useState } from "react";
import SingleProduct from "../Components/SingleProduct";
import { AuthContext } from "../provider/AuthProvider";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { user } = useContext(AuthContext);
  const userEmail = user?.email
  

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); // Initially, show all products
      });
  }, []);

  useEffect(() => {
    // Filter products based on search query
    setFilteredProducts(
      products.filter(
        (product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.uName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, products]);

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product._id !== id));
  };

  console.log(products);

  return (
    <div>
      <h1 className="text-orange-500 text-3xl font-bold text-center mb-5">
        Here are all {filteredProducts.length} Products
      </h1>
      <div className="flex justify-center mb-5">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mx-32 container">
        {filteredProducts.map((item) => (
          <div className="col-span-1" key={item._id}>
            <SingleProduct item={item} onDelete={handleDeleteProduct} userEmail={userEmail} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
