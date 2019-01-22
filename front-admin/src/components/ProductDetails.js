import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const ProductDetails = ({ label, picture, id, description, price, slug }) =>
  <Container>
    <Row>
      <Col md="6">
        <img key={id} src={picture} alt={label} width="100%"/>
      </Col>
      <Col md="6">
        TEST
      </Col>
    </Row>
  </Container>

export default ProductDetails;