import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class MenuBar extends Component {
  render() {
    const style = {
      navbar: {
        borderRadius: '0px',
        margin: '0px'
      }
    };

    return (
      <Navbar collapseOnSelect style={style.navbar}>
        <Navbar.Header>
          <Navbar.Brand>
            <a>Recelle</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Profile</NavItem>
            <NavItem eventKey={2} href="#">Self Service</NavItem>
            {/* <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown> */}
          </Nav>
          <Nav pullRight>
            {/* <NavItem eventKey={1} href="#">Link Right</NavItem> */}
            <NavItem eventKey={2} onClick={() => window.location = '/'}>Logout</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MenuBar;