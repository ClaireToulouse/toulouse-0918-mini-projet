import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
  } from 'reactstrap';
  import { Link } from 'react-router-dom';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">MonVéloElectrique</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/" tag={Link}>Tous nos vélos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/new" tag={Link}>Créer un nouveau produit</NavLink>
              </NavItem>
              <NavItem>
              <NavLink to="/orders" tag={Link}>Historique des commandes</NavLink>
              </NavItem>
              <NavItem>
              <NavLink to="/unsubscribe" tag={Link}>Déconnexion</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Menu;
