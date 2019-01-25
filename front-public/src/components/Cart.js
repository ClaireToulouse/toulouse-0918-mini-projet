import React from 'react';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

const Cart = ({ selectedProducts }) => (
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
            <tr key={index}>
              <Link to={`/product/${selectedProduct.slug}`}/>
              <th scope="row">{index+1}</th>
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
      </tbody>
  </Table>
);

export default Cart;