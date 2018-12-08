import React from 'react';
import "./index.css";


class Navbar extends React.Component{
  render(){
    return(

    <nav className="navbar navbar-light navbar-custom">
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true"  aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<a href="https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/01/ghost-car.jpg" className="navbar-left"><img src={require('./ghosty1.png')} alt="" width="27px"/></a>
<a className="navbar-brand" href="https://trello.com/b/bqjihFDa/local-ghost-3000">LocalGhost3k</a>
<form className="form-inline my-2 my-lg-0">
<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
<button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
</form>
<div className="navbar-collapse collapse" id="navbarSupportedContent">
  <ul className="navbar-nav mr-auto">
    <li className="nav-item">
      <a className="nav-link" href="https://accounts.google.com/ServiceLogin">Sign in</a>
    </li>
        <li className="nav-item">
        <a className="nav-link" href="https://community.canvaslms.com/docs/DOC-13089-4152719730">Profile</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Hauntings</a>
        </li>
        <li className="nav-item active">
        <a className="nav-link" href="https://www.taketours.com/usa/">Tour <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Contact Us</a>
        </li>
  </ul>
</div>
</nav>
    )
  }
}

export default Navbar;
