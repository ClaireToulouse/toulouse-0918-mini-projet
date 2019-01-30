export const FETCH_ALL_PRODUCTS = 'FETCH_ALL_PRODUCTS';
export const ADD_TO_CART = 'ADD_TO_CART';
export const FILTER_BY_BRAND = 'FILTER_BY_BRAND';
export const ADD_USER = 'ADD_USER';
export const SELECT_USER = 'SELECT_USER';

export const fetchAllProducts = (products) => ({
  type : 'FETCH_ALL_PRODUCTS',
  products
});

export const addToCart = (quantity, id, price) => ({
  type : 'ADD_TO_CART',
  quantity, id, price
});

export const filterByBrand = brand => ({
  type: 'FILTER_BY_BRAND',
  brand
})

export const addUser = user => ({
  type: 'ADD_USER',
  user
})

export const selectUser = user => ({
  type: 'SELECT_USER',
  user
})
