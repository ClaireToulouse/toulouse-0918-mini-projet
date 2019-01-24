import React from 'react';
import { connect } from 'react-redux';

const Cart = ({ cart }) => (
  <div>
    TEST {cart}
  </div> 
);

const mapStateToProps = state => ({
  cart: state.cart
})

export default connect(mapStateToProps)(Cart);