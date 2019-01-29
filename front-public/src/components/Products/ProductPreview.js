import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';

class ProductPreview extends Component{
  render() {
    const {product} = this.props;
    const { label, picture, description, price, slug } = product;
    return(
      <Card className="border-0" height="100%">
        <Link to={`/product/${slug}`}>
          <CardImg top width="100%" src={picture} alt={label}/>
          <CardBody>
            <CardTitle><h3>{label}</h3></CardTitle>
            <CardSubtitle>{description}</CardSubtitle>
            <CardText className="my-2"><strong>{price} euros TTC</strong></CardText>
          </CardBody>
        </Link>
      </Card>
    )
  }
}

export default ProductPreview;
