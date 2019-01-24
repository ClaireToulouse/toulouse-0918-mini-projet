import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cart extends Component {
  render() {
    const { cart } = this.props;
    return(
      <div>TEST{cart}</div> 
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart
})

export default connect(mapStateToProps)(Cart);