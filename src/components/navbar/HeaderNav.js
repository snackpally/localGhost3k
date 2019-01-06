import React from 'react';
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, NavLink, Button } from 'reactstrap';
import Routes from '../../Routes/route';
import { Link } from 'react-router-dom';

import './headerNav.css';

class Header extends React.Component {
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

  //TODO: render profile if user is logged in else render Sign in
  //TODO: space login and signup buttons apart
  render() {
    return (
      <div>
        <Navbar color="dark" dark className="navBar">
          <NavbarToggler onClick={this.toggle} />
          <NavbarBrand tag={Link} to="/" className="localGhostLogo">
            LocalGhost3K
          </NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/addHaunting">
                  Add Hauntings
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/contact">
                  Contact Us
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
