import React, { Component } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import products from './data/products.json';
import ProductForm from './containers/ProductForm';

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
      <ProductForm addProduct={this.addProduct}/>
      <ProductList products={products}/>
      </div>
    );
  }
}

export default App;
