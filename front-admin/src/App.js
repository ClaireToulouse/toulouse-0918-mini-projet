import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import axios from 'axios';
import Menu from './components/Menu';
import ProductListContainer from './containers/ProductListContainer';
import CreateProduct from './containers/CreateProduct';
import ProductDetails from './components/Products/ProductDetails';
import { fetchAllProducts } from './actions';
import './App.css';

// import { library } from '@fortawesome/fontawesome-svg-core';
// import {
//   faBicycle
// } from '@fortawesome/free-solid-svg-icons';

// library.add(faBicycle);

class App extends Component {

  componentDidMount(){
    const { fetchAllProducts } = this.props;
    axios.get('/api/products')
    .then(response => response.data)
    .then(products => 
      fetchAllProducts(products)
    );
  }

  render() {
    return (
      <div className="App">
        <Menu />
        <Switch>

          <Route
            path="/"
            exact
            component={ProductListContainer} 
          />

          <Route
            path="/new"
            exact
            render={props => <CreateProduct {...props} />} 
          />

          <Route
            path="/product/:slug"
            render={props => <ProductDetails {...props} />}
          />

          <Route
            path="/orders"
            exact
          />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAllProducts: products => dispatch(fetchAllProducts(products))
})

export default withRouter(connect(null, mapDispatchToProps)(App));
