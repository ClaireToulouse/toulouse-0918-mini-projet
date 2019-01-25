import React from 'react';
import { connect } from 'react-redux';
import ProductList from '../components/Products/ProductList';
import ByProduct from '../components/Products/ByProduct';

const ProductListContainer = ({ products, brands }) => (
  <div>
    <ByProduct brands={brands}/>
    <ProductList products={products} />
  </div>
);

const mapStateToProps = state => ({
  products: state.products,
  brands: state.brands
})

export default connect(mapStateToProps)(ProductListContainer);
