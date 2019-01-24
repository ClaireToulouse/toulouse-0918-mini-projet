export const ADD_PRODUCT = 'ADD_PRODUCT';
export const FETCH_ALL_PRODUCTS = 'FETCH_ALL_PRODUCTS';

export const addProduct = (product) => ({
  type: 'ADD_PRODUCT',
  product
});

export const fetchAllProducts = (products) => ({
  type : 'FETCH_ALL_PRODUCTS',
  products
})