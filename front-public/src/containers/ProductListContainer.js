import React from 'react';
import { connect } from 'react-redux';
import ProductList from '../components/Products/ProductList';

const ProductListContainer = ({ products }) => (
  <ProductList products={products} />
);

const mapStateToProps = state => ({
  products: state.products
})

export default connect(mapStateToProps)(ProductListContainer);
