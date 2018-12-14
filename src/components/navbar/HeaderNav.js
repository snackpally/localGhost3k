import React from 'react';
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, NavLink, Button } from 'reactstrap';
import Routes from '../../Routes/route';
import './headerNav.css';

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
  //TODO: space login and signup buttons apart
  render() {
    return (
      <div>
        <Navbar color="dark" dark>
          <NavbarToggler onClick={this.toggle} />
          <NavbarBrand href="/">LocalGhost3K</NavbarBrand>
          <Nav>
            <NavItem className="btnRight">
              <Button color="secondary" href="/Login">
                Log in
              </Button>
            </NavItem>
            <NavItem>
              <Button color="secondary" href="/Register">
                Sign Up
              </Button>
            </NavItem>
          </Nav>
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
