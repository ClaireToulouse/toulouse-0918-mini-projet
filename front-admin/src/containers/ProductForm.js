import React, { Component } from 'react';

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageurl: "",
      label: "" 
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value 
    });

  }

  handleSubmit(event) {
    event.preventDefault();
    const { addProduct } = this.props;
    addProduct(this.state);
    this.setState({
      imageurl: "", label: ""
    });
  }

  render() {
    const { imageurl, label} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
        type="url"
        name="imageurl"
        placeholder="enter your product image url"
        onChange={this.handleChange}
        value={imageurl}
        />
        <input 
        type="text"
        name="label"
        placeholder="enter your product name"
        onChange={this.handleChange}
        value={label}
        />
        <button type="submit">Créer produit</button>
      </form>
      
    )
  }
}
export default ProductForm;