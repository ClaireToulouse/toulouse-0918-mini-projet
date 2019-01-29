import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem 
  } from 'reactstrap';
  import { connect } from 'react-redux';
  import { Link } from 'react-router-dom';
  import { filterByBrand } from '../actions';

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
    const {brands, filterByBrand} = this.props;
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand >MonVéloElectrique</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Filtrer par marque
                </DropdownToggle>
                <DropdownMenu right>
                  {
                    brands.map((brand, index) => (
                      <DropdownItem 
                      key={index}
                      onClick={() => filterByBrand(brand)}>{brand}</DropdownItem>
                    ))
                  }
                  <DropdownItem
                    onClick={() => filterByBrand('')}><strong>Tous nos vélos</strong>  
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink to="/orders" tag={Link}>Mes commandes</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Connexion
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <div>
                      <input type="email" value="email" placeholder="votre email" />
                      <br/>
                      <input type="password" value="password" placeholder="votre mot de passe" />
                    {/* onClick={() => filterByBrand('')}><strong>Tous nos vélos</strong>   */}
                    </div>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to='/signup' tag={Link}>Pas encore inscrit?</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink to="/cart" tag={Link}>Mon panier</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  brands: state.brands
})

const mapDispatchToProps = dispatch => ({
  filterByBrand: brand => dispatch(filterByBrand(brand))
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu);