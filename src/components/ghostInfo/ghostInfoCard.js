import React from 'react';
import { Media } from 'reactstrap';
import axios from 'axios';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

export default class GhostInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ghostData: ''
    };
  }

  componentDidMount() {
    let ghostId = this.props.match.params.id;
    axios
      .get(`http://localhost:3001/location/detail/${ghostId}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({ ghostData: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log('PROPS', this.props);

    return (
      <div>
        <Media>
          <Media left href="#">
            <Media object data-src={this.state.ghostData.loc_img_link} alt="Generic placeholder image" />
          </Media>
          <Media body>
            <Media heading>Media heading</Media>
            {this.state.ghostData.place_name}
            <h1> {this.state.ghostData.place_name}</h1>
          </Media>
        </Media>
      </div>
    );
  }
}
