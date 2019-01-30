import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import Cart from '../components/Cart';
import axios from 'axios';

class CartContainer extends Component {
  constructor(props){
    super(props)
    this.submitOrder=this.submitOrder.bind(this);
  }

  submitOrder(){
    const { cartItems } = this.props;
    axios.post('/api/orders', cartItems)
    .then(response => response.data)
    .then(order => 
    console.log(order)
    );

  }

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
            <Cart
              selectedProducts={selectedProducts}
              submitOrder={this.submitOrder}
            />
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