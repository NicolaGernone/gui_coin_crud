// src/components/CartList.js
import React, { useEffect, useState } from 'react';
import { getCarts } from '../services/api';
import { useNavigate } from 'react-router-dom';

const CartList = () => {
  const [carts, setCarts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCarts = async () => {
      const cartsData = await getCarts();
      setCarts(cartsData);
    };

    fetchCarts();
  }, []);

  const handleSelectCart = (cartId) => {
    navigate(`/cart/${cartId}`);
  };

  return (
    <div>
      <h2>Carts</h2>
      {carts.length > 0 ? (
        <ul>
          {carts.map((cart) => (
            <li key={cart.id} onClick={() => handleSelectCart(cart.id)}>
              {cart.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No carts available.</p>
      )}
    </div>
  );
};

export default CartList;
