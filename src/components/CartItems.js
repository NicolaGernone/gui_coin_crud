// src/components/CartItems.js
import React, { useEffect, useState } from 'react';
import { deleteCartItem } from '../services/api';

const CartItems = ({ cart }) => {
  const [items, setItems] = useState(cart.items);

  const handleDeleteItem = async (itemId, quantity) => {
    const updatedItem = await deleteCartItem(cart.id, itemId, quantity);
    if (updatedItem) {
      // Si la cantidad restante es 0, eliminamos el item completamente de la lista
      setItems(items.map(item => 
        item.id === itemId 
          ? { ...item, quantity: item.quantity - quantity } 
          : item
      ).filter(item => item.quantity > 0));
    }
  };

  return (
    <div>
      <h3>Items in {cart.name}</h3>
      {items.length > 0 ? (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} - {item.quantity} x ${item.price}
              <div>
                <input 
                  type="number" 
                  min="1" 
                  max={item.quantity} 
                  defaultValue="1" 
                  id={`quantity-${item.id}`}
                />
                <button 
                  onClick={() => {
                    const quantity = parseInt(document.getElementById(`quantity-${item.id}`).value);
                    handleDeleteItem(item.id, quantity);
                  }}
                >
                  Remove Quantity
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No items in this cart.</p>
      )}
    </div>
  );
};

export default CartItems;
