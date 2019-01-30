import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import AddToCart from '../../containers/AddToCart';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state={
      product: {}
    }
  }

  componentDidMount(){
    const { slug } = this.props.match.params;
    axios.get(`/api/products/${slug}`)
    .then(response => response.data)
    .then(product => 
      this.setState({
        product
      })
    );
  }

  render(){
    const { label, picture, description, price, id, specs } = this.state.product;
    return(
      <Container style={{ marginTop: '68px'}}>
        <p
          onClick={() => this.props.history.goBack()}
          className="hover d-inline-flex d-flex align-items-center px-2"
          style={{ cursor: 'pointer'}}>
          &larr;<small> Retour</small>
        </p>
        <Row d-flex align-items-center>
          <Col md="6">
            <img key={id} src={picture} alt={label} width="100%"/>
          </Col>
          <Col md="6">
            <div>
              <h3>{label}</h3>
              <br/>
              <p>{description}</p>
              <br/>
              <p><strong>{price} euros TTC</strong></p>
              <AddToCart product={this.state.product}/>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            {specs}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ProductDetails;
