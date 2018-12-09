import React from "react";
import "./index.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light navbar-custom">
        <button
          className="navbar-toggler navbar-left"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <a className="navbar-brand" href="https://trello.com/b/bqjihFDa/local-ghost-3000">
          <img src={require("./ghosty2.gif")} alt="" width="54px" /> LocalGhost
        </a>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-dark btn-sm my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
        <button className="btn btn-outline-dark btn-sm" type="button">
          Sign in
        </button>
        <div className="navbar-collapse collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="https://community.canvaslms.com/docs/DOC-13089-4152719730">
                Profile<span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Hauntings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
