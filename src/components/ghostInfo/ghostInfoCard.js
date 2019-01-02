import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
// import '.profile/component.css';
//import Header from './components/navbar/HeaderNav';



export default class GhostInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      ghostData: {}
    };
  }

  getGhostData(id) {
    // fetch('http://localhost:3001/location/detail/'+ id).then(res => {
    //   console.log("RES.JSON", res.json());
    //   // return res.json();
    // });
    return axios.get('http://localhost:3001/location/detail/'+ id);
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    const id = this.props.match.params.id;
    console.log("ID", id);
    this.getGhostData(id).then((res)=>{
      console.log("THE JSON", res.data);
      this.setState({
        ghostData: res.data
      });
    });
  }

  render() {
    console.log('PROPS', this.props);

    return (
      <div>
        <Media>

          <Media object className="ghostDataImg" src={this.state.ghostData.loc_img_link} alt="Place Image" width="400px" height="400px"/>

          <Media>
            <h1 className="ghostDataPlaceName">{this.state.ghostData.place_name}</h1>
          </Media>
          <Media>
            <p className="ghostDataLocDesc">{ this.state.ghostData.loc_desc }</p>
          </Media>
        </Media>

      </div>
    );
  }
}
