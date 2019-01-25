import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import Cart from '../components/Cart';

class CartContainer extends Component {
  render(){
    const { products, cartItems } = this.props;
    const selectedProducts = cartItems.map((cartItem, index) => {
        const product = products.find(product => product.id === cartItem.id);
        const { picture, label, price, slug } = product;
        const totalPrice = cartItem.quantity * price;
        return {...cartItem, picture, label, price, totalPrice, slug}
    })
    return(
      <Container>
        <Row d-flex justify-content-center>
          <Col>
            <Cart selectedProducts={selectedProducts}/>
          </Col>
        </Row>
      </Container>
    )
  }
};

const mapStateToProps = state => ({
  cartItems: state.cartItems,
  products: state.products
})

export default connect(mapStateToProps)(CartContainer);