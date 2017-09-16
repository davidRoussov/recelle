import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class LandingMenuBar extends Component {
  render() {
    const style = {
      navbar: {
        width: '100%',
        borderRadius: '0px',
        marginBottom: '0px'
      }
    };

    return (
      <Navbar style={style.navbar}>
        <Navbar.Header>
          <Navbar.Brand>
            <a>Recelle</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem className={this.props.introActive ? "active" : ""} eventKey={1} href="/intro">Intro</NavItem>
          <NavItem className={this.props.pricingActive ? "active" : ""}  eventKey={2} href="/pricing">Pricing</NavItem>
          <NavItem className={this.props.blogActive ? "active" : ""}  eventKey={3} href="/blog">Blog</NavItem>
          <NavItem className={this.props.contactActive ? "active" : ""} m eventKey={4} href="/contact">Contact</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={5} href="/signup">Sign up</NavItem>
          <NavItem eventKey={6} href="/login">Login</NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default LandingMenuBar;