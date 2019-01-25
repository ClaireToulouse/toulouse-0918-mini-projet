import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class ByProduct extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    const {brands} = this.props;
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Filtrer par marque
        </DropdownToggle>
        <DropdownMenu> {
          brands.map((brand, index) => (
            <DropdownItem key={index}>{brand}</DropdownItem>
          ))
        }
        </DropdownMenu>
      </Dropdown>
    );
  }
}


export default ByProduct;