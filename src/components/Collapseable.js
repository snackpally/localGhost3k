import React from 'react';
import axios from 'axios';

export default class Collapseable extends React.Component {

  render() {
    return(
      <div className="collapse" id="collapseExample">
      <div className="card card-body">
          <h1> {this.params.data.place_name}</h1>
          <h2> {this.params.data.ghost_name}</h2>
          <p> {this.params.data.loc_desc}</p>
      </div>
      <button type="button" className="btn btn-primary btn-sm">Add to Profile</button>
      <button type="button" className="btn btn-secondary btn-sm">Add to tour</button>
      </div>
    )
  }
}
