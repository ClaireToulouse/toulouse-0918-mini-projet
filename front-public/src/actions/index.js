export const FETCH_ALL_PRODUCTS = 'FETCH_ALL_PRODUCTS';
export const ADD_TO_CART = 'ADD_TO_CART';
export const FILTER_BY_BRAND = 'FILTER_BY_BRAND';

export const fetchAllProducts = (products) => ({
  type : 'FETCH_ALL_PRODUCTS',
  products
});

export const addToCart = (quantity, id) => ({
  type : 'ADD_TO_CART',
  quantity, id
});

export const filterByBrand = brand => ({
  type: 'FILTER_BY_BRAND',
  brand
})
