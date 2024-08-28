import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

// -------------------------------------
// Cart Endpoints
// -------------------------------------

/**
 * Fetches all carts.
 * @returns {Array} List of carts.
 */
export const getCarts = async () => {
  try {
    const response = await axios.get(`${baseUrl}/carts/`);
    return response.data;
  } catch (error) {
    alert('Error al obtener los carts:', error);
    return [];
  }
};

/**
 * Creates a new cart.
 * @param {Object} cartData - The data for the new cart (e.g., name, description).
 * @returns {Object} The newly created cart.
 */
export const createCart = async (cartData) => {
  try {
    const response = await axios.post(`${baseUrl}/carts/`, cartData);
    return response.data;
  } catch (error) {
    alert('Error al crear el cart:', error);
    return null;
  }
};

/**
 * Updates an existing cart.
 * @param {number} cartId - The ID of the cart to update.
 * @param {Object} cartData - The updated data for the cart.
 * @returns {Object} The updated cart.
 */
export const updateCart = async (cartId, cartData) => {
  try {
    const response = await axios.put(`${baseUrl}/carts/${cartId}/`, cartData);
    return response.data;
  } catch (error) {
    alert('Error al actualizar el cart:', error);
    return null;
  }
};

/**
 * Deletes a cart.
 * @param {number} cartId - The ID of the cart to delete.
 * @returns {boolean} True if the cart was deleted successfully, false otherwise.
 */
export const deleteCart = async (cartId) => {
  try {
    await axios.delete(`${baseUrl}/carts/${cartId}/`);
    return true;
  } catch (error) {
    alert('Error al eliminar el cart:', error);
    return false;
  }
};

/**
 * Deletes a specific quantity of an item from a cart.
 * @param {number} cartId - The ID of the cart.
 * @param {number} itemId - The ID of the item to delete.
 * @param {number} quantity - The quantity of the item to delete.
 * @returns {Object} Updated cart data if successful, null otherwise.
 */
export const deleteCartItem = async (cartId, itemId, quantity) => {
  try {
    const response = await axios.post(`${baseUrl}/carts/${cartId}/delete-item/`, {
      item_id: itemId,
      quantity: quantity
    });
    return response.data;
  } catch (error) {
    alert('Error al eliminar el artículo:', error);
    return null;
  }
};