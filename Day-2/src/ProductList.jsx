import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-700 mb-3">Product List</h3>
      {products.length === 0 ? (
        <p className="text-red-500 font-medium">No products found.</p>
      ) : (
        <ul className="space-y-2">
          {products.map((product) => (
            <li
              key={product.id}
              className="bg-gray-50 hover:bg-gray-100 transition"
            >
              <span className="font-semibold">{product.name}</span>
              {' - '}
              <span className="text-gray-600">{product.category} </span> {' - '}
              <span className="text-blue-600 font-medium">
                {product.price}/-
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
