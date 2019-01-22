import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';
import ProductList from './components/ProductList';
// import products from './data/products.json';
import CreateProduct from './containers/CreateProduct';
import ProductDetails from './components/ProductDetails';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import {
//   faBicycle
// } from '@fortawesome/free-solid-svg-icons';

// library.add(faBicycle);

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      products: [],
      nextId: 1
    }
    this.addProduct=this.addProduct.bind(this);
  }

  componentDidMount(){
    axios.get('/api/products')
    .then(response => response.data)
    .then(products => 
      this.setState({
        products
      })
    );
  }

  addProduct(productData) {
    this.setState(prevState => {
      const { products, nextId } = prevState;
      const product = { ...productData, id: nextId };
      return {
        products: [...products, product],
        nextID: nextId + 1
      }
    });
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Menu />
        <Switch>

          <Route
            path="/"
            exact
            render={props => <ProductList {... props}
            products={products}/>} 
          />

          <Route
            path="/new"
            exact
            render={props => <CreateProduct {... props} addProduct={this.addProduct} />} 
          />

          <Route
            path="/product/:slug"
            render={props => <ProductDetails {... props} />}
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

export default App;
