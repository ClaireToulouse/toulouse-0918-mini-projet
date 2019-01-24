import {
  FETCH_ALL_PRODUCTS,
  ADD_TO_CART
} from '../actions';

//copie de l'ancien de state de App.js
const initialState = {
  products: [],
  cart: []
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case FETCH_ALL_PRODUCTS: {
      const { products } = action
      return {
        products
      }
    }
    case ADD_TO_CART: {
      const { quantity, id } = action;
      return {
        quantity, id
      }
    }
    default:
    return state;
  }
};

export default reducer;
