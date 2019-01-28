import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import FetchProducts from './containers/FetchProducts';
import ProductDetails from './components/Products/ProductDetails';
import Menu from './components/Menu';
import ProductListContainer from './containers/ProductListContainer';
import CartContainer from './containers/CartContainer';

import './App.css';

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
              path="/product/:slug"
              render={props => <ProductDetails {...props} />}
            />
            <Route
              path="/orders"
              exact
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
