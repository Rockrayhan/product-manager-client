import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
  const product = useLoaderData();
  const { _id, uName, description, img_url, title } = product;

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 h-96 overflow-hidden">
            <img
              src={img_url}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
            <h2 className="text-2xl text-gray-700 mb-2">Author <span className="text-gray-900 font-semibold">{uName}</span></h2>
            <p className="text-lg text-gray-800 mb-6">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
