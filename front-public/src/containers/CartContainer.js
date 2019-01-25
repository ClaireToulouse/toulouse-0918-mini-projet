import React from 'react';
import { connect } from 'react-redux';
import Cart from '../components/Cart';

const CartContainer = ({ cartItems }) => (
  <div>
    <Cart cartItems={cartItems}/>
  </div>
);

const mapStateToProps = state => ({
  cartItems: state.cartItems
})

export default connect(mapStateToProps)(CartContainer);