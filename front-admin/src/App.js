import React, { Component } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import products from './data/products.json';
import ProductForm from './containers/ProductForm';
import { Route, Switch, Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      products: products
    }
    this.addProduct=this.addProduct.bind(this);
  }

  addProduct(product) {
    this.setState(prevState => ({
      products: [...prevState.products, product]
    }));
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <ul>
          <li>
            <Link to="/">Produits</Link>
          </li>
          <li>
            <Link to="/new">Créer un produit</Link>
          </li>
        </ul>
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
            render={props => <ProductForm {... props}
            addProduct={this.addProduct}/>} 
          />
        </Switch>
      </div>
    );
  }
}

export default App;
