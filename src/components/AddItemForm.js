// src/components/AddItemForm.js
import React, { useState } from 'react';
import { updateCart } from '../services/api';

const AddItemForm = ({ cartId, onItemAdded }) => {
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState(1);
  const [itemPrice, setItemPrice] = useState(0);
  const [items, setItems] = useState([]);

  const handleAddItem = async (e) => {
    e.preventDefault();
    const newItem = {
      id: Math.random().toString(36).substr(2, 9), // UUID-like generation
      name: itemName,
      quantity: itemQuantity,
      price: itemPrice,
    };
    const updatedCart = await updateCart(cartId, {
      items: [...items, newItem],
    });
    if (updatedCart) {
      onItemAdded(newItem);
    }
  };

  return (
    <form onSubmit={handleAddItem}>
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
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItemForm;
