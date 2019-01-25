import {
  FETCH_ALL_PRODUCTS,
  ADD_TO_CART,
} from '../actions';

//copie de l'ancien de state de App.js
const initialState = {
  products: [],
  brands: [],
  cartItems: []
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case FETCH_ALL_PRODUCTS: {
      const { products } = action;
      const brands = products.reduce(
        (carry, product) => 
        carry.includes(product.brand) ? carry : [...carry, product.brand],
        []
      )
      return {
        ...state,
        products,
        brands
      }
    }
    case ADD_TO_CART: {
      const { quantity, id } = action;
      const cartItems = [...state.cartItems, {quantity, id}];
      return {
        ...state,
        cartItems
      }
    }

    default:
    return state;
  }
};

export default reducer;
