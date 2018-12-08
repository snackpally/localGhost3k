import React from 'react';
import "./index.css";


class Navbar extends React.Component{
  render(){
    return(

    <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
<a href="https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/01/ghost-car.jpg"><img src={require('./ghosty1.png')} alt="" width="27px"/></a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<a className="navbar-brand" href="https://trello.com/b/bqjihFDa/local-ghost-3000">LocalGhost3k</a>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav mr-auto">
    <li className="nav-item active">
      <a className="nav-link" href="https://www.taketours.com/usa/">Tour <span className="sr-only">(current)</span></a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="https://accounts.google.com/ServiceLogin">Sign in</a>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Where do you want to go?
      </a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <a className="dropdown-item" href="https://community.canvaslms.com/docs/DOC-13089-4152719730">Profile</a>
        <a className="dropdown-item" href="#">Hauntings</a>
        <a className="dropdown-item" href="#">Contact Us</a>
      </div>
    </li>
  </ul>
  <form className="form-inline my-2 my-lg-0">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</div>
</nav>
    )
  }
}

export default Navbar;
