import React, { Component } from 'react';
import ProductPreview from './ProductPreview';
import { Container, Row, Col } from 'reactstrap';

class ProductList extends Component {
  render() {
    const {products} = this.props;
    return(
      <Container>
        <Row className="d-flex justify-content-around">
          {
            products.map(product =>
              <Col lg="4" md="6" sm="12">
                <ProductPreview
                  key={product.id}
                  product={product}
                />
              </Col>
            )
          }
        </Row>
      </Container>
    );
  }
}

export default ProductList;
