export const ADD_PRODUCT = 'ADD_PRODUCT';

export const addProduct = (label, description, price, brand, picture, reference, stock, createDate, slug) => ({
  type: ADD_PRODUCT, label, description, price, brand, picture, reference, stock, createDate, slug
});