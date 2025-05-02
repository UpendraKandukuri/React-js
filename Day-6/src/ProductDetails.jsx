import React, { useEffect, useState } from 'react';

const ProductDetails = () => {
  const [id, setId] = useState('');
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    if (value === '' || (Number(value) >= 1 && Number(value) <= 20)) {
      setId(value);
      setError(null);
    } else {
      setError('Product ID must be between 1 and 20');
    }
  };

  useEffect(() => {
    if (id > 0) {
      getProductData();
    }
  }, [id]);

  const getProductData = async () => {
    try {
      setError(null);
      setLoading(true);
      let response = await fetch(`https://fakestoreapi.com/products/${id}`);

      if (!response.ok) {
        throw new Error('Failed to fetch product data');
      }

      let data = await response.json();
      setProduct(data);
    } catch (error) {
      setError(error.message);
      setProduct(null);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = () => {
    const newCartItem = {
      productId: product.id,
      quantity: 1,
    };

    setCartItems((prevItems) => {
      const index = prevItems.findIndex(
        (item) => item.productId === newCartItem.productId
      );

      if (index !== -1) {
        return prevItems.map((item, i) =>
          i === index ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, newCartItem];
      }
    });
  };

  return (
    <div className="">
      <h1 className="flex justify-center p-2 text-xl text-black">
        Product Details
      </h1>
      <div className="m-2 flex justify-center ">
        <input
          type="number"
          name="id"
          value={id}
          placeholder="Enter product id"
          onChange={handleChange}
          className="border border-gray-100 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 m-2 rounded-md p-1"
        />
        {loading && (
          <p className="text-blue-600 text-center">Loading product...</p>
        )}
        {error && <p className="text-red-500 text-center">{error}</p>}
      </div>
      <div className="flex flex-row">
        {product && (
          <div className="bg-white w-75 p-3 rounded-2xl shadow-xl space-y-2">
            <img
              src={product.image}
              alt={product.title}
              className="w-25 mx-auto"
            />
            <h1 className="font-semibold text-orange-600">{product.title}</h1>
            <p className="">{product.description}</p>
            <p className="text-red-500"> Price: ${product.price}</p>
            <button
              className="border border-gray-100 p-1 rounded-md bg-blue-400 hover:bg-blue-600 text-white text-l"
              onClick={addToCart}
            >
              Add to Cart
            </button>
          </div>
        )}
        {cartItems && cartItems.length > 0 && (
          <div className="m-5 bg-pink-50 p-3 rounded-xl shadow">
            <h1 className="text-center text-xl font-semibold mb-3">
              Cart Summary
            </h1>
            <table className="min-w-full border border-gray-300 text-left">
              <thead className="bg-pink-100">
                <tr>
                  <th className="border border-gray-300 p-2">S.No</th>
                  <th className="border border-gray-300 p-2">Product ID</th>
                  <th className="border border-gray-300 p-2">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((cartItem, index) => (
                  <tr key={cartItem.productId}>
                    <td className="border border-gray-300 p-2">{index + 1}</td>
                    <td className="border border-gray-300 p-2">
                      {cartItem.productId}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {cartItem.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
