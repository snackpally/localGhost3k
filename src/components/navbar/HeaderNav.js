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
          <NavbarBrand tag={Link} to="/">
            LocalGhost3K
          </NavbarBrand>
          <Nav>
            {/* this neeeds to be its own component authentication button that will run "auth code and return either log in or sign out" */}
            <NavItem className="btnRight">
              <Button color="secondary" href="/Login">
                Log in
              </Button>
            </NavItem>
            {/* this can stay the same */}
            <NavItem>
              <Button color="secondary" href="/Register">
                Sign Up
              </Button>
            </NavItem>
          </Nav>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/Login">
                  Profile
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/">
                  Hauntings
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/">
                  Contact Us
                </NavLink>
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
