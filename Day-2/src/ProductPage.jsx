import React, { useState } from 'react';
import FilterControls from './FilterControls';
import ProductList from './ProductList';

const ProductPage = () => {
  const [products] = useState([
    { id: 1, name: 'Laptop', category: 'Electronic', price: 35000 },
    { id: 2, name: 'Bike', category: 'Vehicle', price: 45000 },
    { id: 3, name: 'Apple', category: 'Fruit', price: 100 },
    { id: 4, name: 'Mobile', category: 'Electronic', price: 15000 },
    { id: 5, name: 'Orange', category: 'Fruit', price: 80 },
  ]);

  const [category, setCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(Infinity);

  const filteredProducts = products.filter((product) => {
    const categoryMatch = category === 'All' || product.category === category;
    const priceMatch = product.price <= maxPrice;
    return categoryMatch && priceMatch;
  });

  const categoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Product Page
      </h2>
      <div className="mx-auto bg-white p-3 rounded-xl shadow-md space-y-4 mb-3">
        <FilterControls
          category={category}
          maxPrice={maxPrice}
          onCategoryChange={categoryChange}
          onMaxPriceChange={setMaxPrice}
        />
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
};

export default ProductPage;
