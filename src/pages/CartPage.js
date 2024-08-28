// src/pages/CartPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCarts } from '../services/api';
import CartItems from '../components/CartItems';
import AddItemForm from '../components/AddItemForm';

const CartPage = () => {
  const { cartId } = useParams();
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      const carts = await getCarts();
      const selectedCart = carts.find((c) => c.id === cartId);
      setCart(selectedCart);
    };

    fetchCart();
  }, [cartId]);

  const handleItemAdded = (newItem) => {
    setCart((prevCart) => ({
      ...prevCart,
      items: [...prevCart.items, newItem],
    }));
  };

  return (
    <div>
      {cart ? (
        <>
          <CartItems cart={cart} />
          <AddItemForm cartId={cart.id} onItemAdded={handleItemAdded} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CartPage;
