import React from 'react';
class Collapse extends React.Component {
  render() {
    return(
      <p>
      // <a className="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
      // Link with href
      // </a>
      // <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
      // Button with data-target
      // </button>
      </p>
      <div className="collapse" id="collapseExample">
      <div className="card card-body">
      <h1 {this.props.data.place_name}></h1>
      <h2 {this.props.data.ghost_name}</h2>
      <p {this.props.data.loc_desc}></p>
      </div>
      <button type="button" className="btn btn-primary btn-sm">Add to Profile</button>
      <button type="button" className="btn btn-secondary btn-sm">Add to tour</button>
      </div>
    )
  }
}

expont default Collapse;
