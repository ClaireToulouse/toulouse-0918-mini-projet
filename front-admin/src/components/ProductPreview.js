import React from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const ProductPreview = ({ label, picture, description, price, slug }) =>
  <Card className="noborder" height="100%">
    <Link to={`/product/${slug}`} tag={Link}>
      <CardImg top width="100%" src={picture} alt={label}/>
      <CardBody>
        <CardTitle><h3>{label}</h3></CardTitle>
        <CardSubtitle>{description}</CardSubtitle>
        <CardText my-2><strong>{price}</strong></CardText>
      </CardBody>
    </Link>
  </Card>

export default ProductPreview;
