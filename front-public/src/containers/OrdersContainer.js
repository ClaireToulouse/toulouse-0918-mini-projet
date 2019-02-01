import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Table, Input } from 'reactstrap';
import axios from 'axios';
import { fetchMyOrders } from '../actions';
import formatDate from '../helpers/formatDate';

class OrdersContainer extends Component {
  componentDidMount(){
    const { fetchMyOrders } = this.props;
    axios.get('/api/orders')
    .then(response => response.data)
    .then(orders =>
      fetchMyOrders(orders)
    );
  }

  render() {
    const { orders } = this.props;
    return(
      <Container style={{ marginTop: '68px'}}>
        <Row className="my-3 pt-5">
          {
            orders.map(order =>
              <div>
                <h4></h4>
                <Table hover>
                  <thead>
                    <tr>
                      <th>Ma commande du {formatDate(order.createDate)} :</th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <thead>
                    <tr>
                      <th>Qté</th>
                      <th>Produit</th>
                      <th>Prix unitaire</th>
                      <th>Prix total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>  
                      <td>{order.quantity}</td>
                      <td>
                        <Row>
                          <Col lg="3">
                            <img src={order.picture} alt={order.label} style={{ maxWidth:'60px' }} />
                          </Col>
                          <Col>{order.label}</Col>
                        </Row>
                      </td>
                      <td>{order.price} euros TTC</td>
                      <td><strong>{order.totalPrice} euros TTC</strong></td>
                    </tr>
                    <tr>
                      <td><strong>TOTAL</strong></td>
                      <td></td>
                      <td></td>
                      <td><strong> {order.totalPrice} euros TTC</strong></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            )
          }
        </Row>
      </Container>
    )
  };
};

const mapStateToProps = state => ({
  orders: state.orders
})

const mapDispatchToProps = dispatch => ({
  fetchMyOrders: orders => dispatch(fetchMyOrders(orders))
})

export default (connect(mapStateToProps, mapDispatchToProps)(OrdersContainer));
