import {
  FETCH_ALL_PRODUCTS,
  ADD_TO_CART,
  FILTER_BY_BRAND
} from '../actions';

//copie de l'ancien de state de App.js
const initialState = {
  products: [],
  //utilisé pour n'afficher chaque marque qu'une seule fois
  brands: [],
  brand: "",
  cartItems: []
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case FETCH_ALL_PRODUCTS: {
      const { products } = action;
      // tri avec reduce pour n'afficher chaque marque qu'une seule fois
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
    case FILTER_BY_BRAND: {
      const { brand } = action;
      return {
        ...state,
        brand
      }
    }
    default:
    return state;
  }
};

export default reducer;
