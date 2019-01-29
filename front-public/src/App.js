import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import FetchProducts from './containers/FetchProducts';
import ProductDetails from './components/Products/ProductDetails';
import Menu from './components/Menu';
import ProductListContainer from './containers/ProductListContainer';
import CartContainer from './containers/CartContainer';

import './App.css';
import SignupPage from './components/Connection/SignupPage';
import SigninPage from './components/Connection/SigninPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FetchProducts/>
        <Menu />
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
