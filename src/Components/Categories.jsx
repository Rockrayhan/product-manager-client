import React from 'react';

const Categories = () => {
  const categories = ['Technology', 'Lifestyle', 'Travel', 'Food', 'Education'];

  return (
    <div className="p-6 bg-base-100 my-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Categories</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {categories.map((category, index) => (
            <div key={index} className="badge badge-primary bg-orange-300 px-10 py-6">{category}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
