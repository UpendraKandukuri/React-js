import React, { useState } from 'react';

const ProductCard = () => {
  const [product, updateProduct] = useState({
    id: 1,
    name: 'Apple',
    price: 200,
  });
  return <div></div>;
};

export default ProductCard;
