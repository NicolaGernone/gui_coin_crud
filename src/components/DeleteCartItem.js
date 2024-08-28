// Ejemplo de cómo utilizar deleteCartItem en un componente React
import { deleteCartItem } from '../services/api';

// Supongamos que tienes el cartId, itemId y cantidad seleccionados
const handleDeleteItem = async (cartId, itemId, quantity) => {
  const updatedCart = await deleteCartItem(cartId, itemId, quantity);
  if (updatedCart) {
    console.log('Item eliminado correctamente:', updatedCart);
    // Actualiza el estado del carrito en tu frontend
  } else {
    console.error('Error al eliminar el item.');
  }
};

// Ejemplo de llamado
handleDeleteItem('cart-id', 'item-id', 2);
