// src/pages/HomePage.js
import React from 'react';
import CartList from '../components/CartList';
import CreateCartForm from '../components/CreateCartForm';

const HomePage = () => {
  return (
    <div>
      <h1>Shopping Carts</h1>
      {/* Formulario para crear un nuevo carrito */}
      <CreateCartForm />
      
      {/* Lista de carritos existentes */}
      <CartList />
    </div>
  );
};

export default HomePage;
