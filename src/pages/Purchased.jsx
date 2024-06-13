import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Purchased = () => {
  const [products, setProducts] = useState([]);
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;

  useEffect(() => {
    fetch(`http://localhost:5000/purchased?email=${userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        const aggregatedProducts = aggregateProducts(data);
        setProducts(aggregatedProducts);
      });
  }, [userEmail]);

  const aggregateProducts = (products) => {
    const productMap = {};

    products.forEach(product => {
      if (productMap[product.title]) {
        productMap[product.title].quantity += product.quantity;
        productMap[product.title].totalPrice += product.price * product.quantity;
      } else {
        productMap[product.title] = { 
          ...product, 
          totalPrice: product.price * product.quantity 
        };
      }
    });

    return Object.values(productMap);
  };

  console.log(products);

  return (
    <div>
      <h1 className="text-orange-500 text-3xl font-bold text-center mb-5">
        Your Purchased {products.length} Products
      </h1>

      <div className="overflow-x-auto">
        <table className="table shadow-lg mt-6">
          <thead>
            <tr className="text-xl">
              <th>Product</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr key={index}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.img_url} alt={item.title} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.title}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-ghost badge-lg">{item.quantity}</span>
                </td>
                <td>{item.totalPrice.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Purchased;
