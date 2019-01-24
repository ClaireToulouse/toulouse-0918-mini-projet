import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { fetchAllProducts } from '../actions';


class FetchProducts extends Component {

  componentDidMount(){
    const { fetchAllProducts } = this.props;
    axios.get('/api/products')
    .then(response => response.data)
    .then(products => 
      fetchAllProducts(products)
    );
  }

  render(){
    return(
      <div />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAllProducts: products => dispatch(fetchAllProducts(products))
})

export default withRouter(connect(null, mapDispatchToProps)(FetchProducts));
