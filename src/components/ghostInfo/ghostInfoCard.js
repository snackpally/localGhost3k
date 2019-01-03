import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import './ghostInfo.css';
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
        ghostData: res.data,
      });
    });
  }
  // ghostStreet(){
  //   if (this.state.ghostData.address.street) {
  //     return this.state.ghostData.address.street;
  //   } else {
  //     return '';
  //   }
  // }
  ghostCity() {
    if (this.state.ghostData.city) {
      return this.state.ghostData.city
    }
    else {
      return ("NOWHERE LAND");
    }
  }

  ghostSource() {
    if (this.state.ghostData.info_source) {
      return this.state.ghostData.info_source;
    } else {
      return ("Unknown");
    }
  }


  render() {
    console.log('PROPS', this.props);

    return (
      <div className="GhostInfo">
        <Media>
          <Media left href="#">
            <Media object className="ghostDataImg" src={this.state.ghostData.loc_img_link} alt="Place Image" width="450px" height="450px"/>
          </Media>
          <Media body className="ghostDataInfo">
            <Media className="ghostDataPlaceName">
              <h1 >{this.state.ghostData.place_name}</h1>

            </Media>
            <Media className="ghostDataAddress">
              {/*}<h3>{this.ghostStreet()}</h3>*/}
              <h3>{this.ghostCity()}</h3>
            </Media>
            <Media className="ghostDataLocDesc">
              <p >{ this.state.ghostData.loc_desc }</p>
            </Media>
            <Media>
              <h5>Source: {this.ghostSource()}</h5>
          </Media>
        </Media>
      </Media>
    </div>
  );
}
}
