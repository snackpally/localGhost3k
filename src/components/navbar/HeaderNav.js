import React from 'react';
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import Routes from '../../Routes/route';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      loggedIn: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  //TODO: render profile if user is logged in else render Sign in
  render() {
    return (
      <div>
        <Navbar color="dark" dark>
          <NavbarToggler onClick={this.toggle} />
          <NavbarBrand href="/">LocalGhost3K</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/Login">Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Hauntings</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Contact Us</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default Header;
