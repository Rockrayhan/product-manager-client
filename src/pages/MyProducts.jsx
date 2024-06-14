import React, { useContext, useEffect, useState } from "react";
import SingleProduct from "../Components/SingleProduct";
import { AuthContext } from "../provider/AuthProvider";

const MyProducts = () => {
  
  const [products, setProducts] = useState([]);
  const { user } = useContext(AuthContext);
  const userEmail = user?.email ; 

  useEffect(() => {
    fetch(`https://product-manager-server-1ewt.onrender.com/myproducts?email=${userEmail}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [userEmail]);

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product._id !== id));
  };

  console.log(products);

  return (
    <div>
      <h1 className="text-orange-500 text-3xl font-bold text-center mb-5">
        Your Added {products.length} Products 
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((item) => (
          <div className="col-span-1" key={item._id}>
            <SingleProduct item={item} onDelete={handleDeleteProduct} userEmail={userEmail} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
