import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';

const RecentPosts = () => {
  
  const [products, setProducts] = useState([])

  useEffect( () => {
    fetch("http://localhost:5000/products")
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
      <h1 className="text-4xl font-bold text-center my-10"> Our latest Blogs</h1>

      <div className="grid grid-cols-3 gap-4 mx-32">

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
