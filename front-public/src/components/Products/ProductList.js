import React, { Component } from 'react';
import ProductPreview from './ProductPreview';
import { Container, Row, Col } from 'reactstrap';

class ProductList extends Component {
  render() {
    const {products} = this.props;
    return(
      <Container>
        <Row className="d-flex justify-content-around py-5" style={{ marginTop: '68px'}}>
          {
            products.map(product =>
              <Col lg="4" md="6" sm="12" key={product.id} className="my-3" style={{ minHeight: "100%" }}>
                <ProductPreview
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
