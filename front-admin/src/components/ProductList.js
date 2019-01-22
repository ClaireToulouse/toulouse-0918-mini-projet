import React from 'react';
import ProductPreview from './ProductPreview';
import { Container, Row, Col } from 'reactstrap';

const ProductList = ({ products }) => 
  <Container>
    <Row d-flex justify-content-around>
      {
        products.map(product =>
          <Col lg="4" md="6" sm="12">
            <ProductPreview
              key={product.id}
              {...product}
            />
          </Col>
        )
      }
    </Row>
  </Container>

export default ProductList;
