export const FETCH_ALL_PRODUCTS = 'FETCH_ALL_PRODUCTS';
export const ADD_TO_CART = 'ADD_TO_CART';

export const fetchAllProducts = (products) => ({
  type : 'FETCH_ALL_PRODUCTS',
  products
});

export const addToCart = (quantity, id) => ({
  type : 'ADD_TO_CART',
  quantity, id
});
