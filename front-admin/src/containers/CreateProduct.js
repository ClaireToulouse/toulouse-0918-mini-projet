import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
import axios from 'axios';

class CreateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: "",
      description: "",
      price: null,
      brand: "",
      picture: "",
      reference: null,
      stock: null,
      slug: ""
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
    const {
      label, description, price, brand, picture, reference, stock, createDate, slug
    } = this.state;
    axios.post('/api/products', {
      label, description, price, brand, picture, reference, stock, createDate, slug
    })
    .then(response => response.data)
    .then(product => {
      addProduct(product);
      this.setState({
        label: "", description: "", price: "", brand: "", picture: "", reference: "", stock: "", slug: ""
      })
    }
    );
  }

  render() {
    const { label, description, price, brand, picture, reference, stock, slug } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <InputGroup>
            <InputGroupAddon addonType="prepend">Titre produit</InputGroupAddon>
            <Input
            placeholder="Vélo électrique <marque> <nom>"
            type="text"
            name="label"
            onChange={this.handleChange}
            value={label}
            />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">Description produit</InputGroupAddon>
            <Input 
            placeholder="xxx"
            type="text"
            name="description"
            onChange={this.handleChange}
            value={description}
            />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">Prix</InputGroupAddon>
            <Input 
            placeholder="xxx euros"
            type="text"
            name="price"
            onChange={this.handleChange}
            value={price}
            />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">Marque</InputGroupAddon>
            <Input 
            placeholder="xxx"
            type="text"
            name="brand"
            onChange={this.handleChange}
            value={brand}
            />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">Lien photo</InputGroupAddon>
            <Input
            placeholder="https:..............jpg"
            type="url"
            name="picture"
            onChange={this.handleChange}
            value={picture}
            />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">Référence produit</InputGroupAddon>
            <Input 
            placeholder="0000000"
            type="text"
            name="reference"
            onChange={this.handleChange}
            value={reference}          
            />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">Stock</InputGroupAddon>
            <Input
            placeholder="x"
            type="text"
            name="stock"
            onChange={this.handleChange}
            value={stock}          
            />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">Slug</InputGroupAddon>
            <Input
            placeholder="xxx"
            type="text"
            name="slug"
            onChange={this.handleChange}
            value={slug}          
            />
          </InputGroup>
          <br />
          <Button type="submit">Créer produit</Button>
        </form>
      </div>

    )
  }
}
export default CreateProduct;