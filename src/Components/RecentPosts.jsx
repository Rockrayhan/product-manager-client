import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';

const RecentPosts = () => {
  
  const [products, setProducts] = useState([])

  useEffect( () => {
    fetch("https://product-manager-server-1ewt.onrender.com/products")
    .then( (res) => res.json() )
    .then ( (data) => setProducts(data)) ;
  }, []) ;


  const handleDeleteProduct = (id) => {
    setProducts(products.filter( (product) => product.id !== id )) ;
  };

  // const bags = useLoaderData();
  console.log(products);

  return (

<div className='my-20'>
      <h1 className="text-4xl font-bold text-center my-10"> Our latest Products</h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-4 mx-32">

      {products.slice(0, 3).map((item) => (
    <div className="col-span-1">
        <SingleProduct item={item} onDelete={handleDeleteProduct}></SingleProduct>
    </div>
))}

      </div>
    </div>

  );
};

export default RecentPosts;
