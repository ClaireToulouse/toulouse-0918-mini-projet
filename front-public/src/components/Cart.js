import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, Button, Alert } from 'reactstrap';

class Cart extends Component {
  constructor(props){
    super(props);
    this.calculateTotalPrice=this.calculateTotalPrice.bind(this);
  }

  calculateTotalPrice(){
    const { selectedProducts } = this.props;
    let totalPrice = 0;
    for (let i=0; i<selectedProducts.length; i++) {
      totalPrice += selectedProducts[i].totalPrice
    }
    return totalPrice;
  }

  render(){
    const { selectedProducts, history } = this.props;
    const totalPrice = this.calculateTotalPrice();
    console.log(selectedProducts);   
    return(
      <Container style={{ marginTop: '68px'}} className="cart">
        <Row mt-2>
          <Col xs="12">
            {
              totalPrice === 0 && (
                <Alert color="danger" className="text-center mt-5">
                  Votre panier est vide !
                </Alert>
              )
            }
          </Col>
          <Table hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Qté</th>
                <th>Produit</th>
                <th>Prix unitaire</th>
                <th>Prix total</th>
              </tr>
            </thead>
            <tbody>
              {
                selectedProducts.map((selectedProduct, index) =>
                  <tr key={index}
                  onClick={()=>history.push(`/product/${selectedProduct.slug}`)}>
                    <td scope="row"><strong>{index+1}</strong></td>
                    <td>{selectedProduct.quantity}</td>
                    <td>
                      <Row>
                        <Col lg="3">
                          <img src={selectedProduct.picture} alt={selectedProduct.label} style={{ maxWidth:'60px' }} />
                        </Col>
                        <Col>{selectedProduct.label}</Col>
                      </Row>
                    </td>
                    <td>{selectedProduct.price} euros TTC</td>
                    <td><strong>{selectedProduct.totalPrice} euros TTC</strong></td>
                  </tr>
                )
              }
              <tr>
                <td><strong>TOTAL</strong></td>
                <td></td>
                <td></td>
                <td></td>
                <td><strong> {totalPrice} euros TTC</strong></td>
              </tr>
            </tbody>
          </Table>
          <Button className="text-right">Valider la commande</Button>
        </Row>
      </Container>    
    )
  }
};

export default withRouter(Cart);