import {
  ADD_PRODUCT
} from '../actions';

//copie de l'ancien de state de App.js
const initialState = {
  products: [],
  nextId: 1
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PRODUCT:
      const { products, nextId } = state;
      const {
        label, description, price, brand, picture, reference, stock, createDate, slug
      } = action;
      const product = { id: nextId, label, description, price, brand, picture, reference, stock, createDate, slug };
      return {
        products: [...products, product],
        nextID: nextId + 1
      }

    default:
    return state;

  }
}

export default reducer;