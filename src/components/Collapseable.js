import React from 'react';
import axios from 'axios';

export default class Collapseable extends React.Component {
  constructor(){
    super()
    this.state={
      data:"",
    }
    this.collapse =[]
  }

  generateInfoWindow() {
    for (let i=0; i< this.state.data.length; i++){
      this.collapse.push(<Collapse key={i} data={this.state.data[i]}/>)
      console.log("carousel", this.state.data[i])
    }
  }
  render() {
    return(
      <div className="collapse" id="collapseExample">
      <div className="card card-body">
          <h1> {this.state.data.place_name}</h1>
          <h2> {this.state.data.ghost_name}</h2>
          <p> {this.state.data.loc_desc}</p>
      </div>
      <button type="button" className="btn btn-primary btn-sm">Add to Profile</button>
      <button type="button" className="btn btn-secondary btn-sm">Add to tour</button>
      </div>
    )
  }
}
