import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import FetchProducts from './containers/FetchProducts';
import ProductDetails from './components/Products/ProductDetails';
import Menu from './components/Menu';
import ProductListContainer from './containers/ProductListContainer';
import CartContainer from './containers/CartContainer';
import OrdersContainer from './containers/OrdersContainer';

import './App.css';
import SignupPage from './components/Connection/SignupPage';
import SigninPage from './components/Connection/SigninPage';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
library.add(faTrashAlt);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <FetchProducts/>
        <Switch>
          <Route
            path="/"
            exact
            component={ProductListContainer}
          />
          <Route
            path="/filter"
            exact
          >
          </Route>
          <Route
            path="/product/:slug"
            render={props => <ProductDetails {...props} />}
          />
          <Route
            path="/orders"
            exact
            component={OrdersContainer}
          />
          <Route
            path="/signup"
            exact
            component={SignupPage}
          />
          <Route
            path="/signin"
            exact
            component={SigninPage}
          />

          <Route
            path="/cart"
            exact
            component={CartContainer}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
