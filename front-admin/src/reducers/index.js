import {
  ADD_PRODUCT,
  FETCH_ALL_PRODUCTS
} from '../actions';

//copie de l'ancien de state de App.js
const initialState = {
  products: []
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case ADD_PRODUCT: {
      const { products } = state;
      const { product } = action;
      return {
        products: [...products, product]
      }
    }
    case FETCH_ALL_PRODUCTS: {
      const { products } = action
      return {
        products
      }
    }
    
    default:
    return state;

  }
};

export default reducer;
