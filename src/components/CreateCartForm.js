// src/components/CreateCartForm.js
import React, { useState } from 'react';
import { createCart } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const CreateCartForm = () => {
  const [cartName, setCartName] = useState('');
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState(1);
  const [itemPrice, setItemPrice] = useState(0);
  const navigate = useNavigate();

  const handleCreateCart = async (e) => {
    e.preventDefault();

    // Crear un nuevo cart con un item
    const newCart = {
      items: [
        {
          id: uuidv4(),
          name: itemName,
          quantity: itemQuantity,
          price: itemPrice,
        },
      ],
    };

    const createdCart = await createCart(newCart);

    if (createdCart) {
      // Redirigir a la página del carrito recién creado
      navigate(`/cart/${createdCart.id}`);
    }
  };

  return (
    <form onSubmit={handleCreateCart}>
      <h3>Create New Cart</h3>
      <h4>Add Initial Item</h4>
      <input
        type="text"
        placeholder="Item Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Quantity"
        value={itemQuantity}
        onChange={(e) => setItemQuantity(parseInt(e.target.value))}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={itemPrice}
        onChange={(e) => setItemPrice(parseFloat(e.target.value))}
        required
      />
      <button type="submit">Create Cart</button>
    </form>
  );
};

export default CreateCartForm;
