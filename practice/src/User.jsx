import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const User = () => {
  return (
    <div>
      <button>
        <Link to="cart">Cart</Link>
      </button>
      <button>
        <Link to="payment">Payment</Link>
      </button>
      <h1>Welcome to User</h1>
      <Outlet />
    </div>
  );
};

export function Cart() {
  return <h1>Welcome to Cart</h1>;
}

export function Payment() {
  return <h1>Welcome to Payment</h1>;
}

export default User;
