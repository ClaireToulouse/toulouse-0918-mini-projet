import React from 'react';
import { connect } from 'react-redux';
import ProductList from '../components/Products/ProductList';

const ProductListContainer = ({ products }) => (
  <div>
    <img src="/images/central-park-535645_960_720.jpg" alt="city park" className="homepage-image"/>
    <ProductList products={products} />
  </div>
);

const mapStateToProps = state => ({
  products: state.products.filter(product =>
    product.brand.includes(state.brand))
})

export default connect(mapStateToProps)(ProductListContainer);
