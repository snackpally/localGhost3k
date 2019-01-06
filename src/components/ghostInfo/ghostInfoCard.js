import React from 'react';
import { Media, Button } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ghostInfo.css';

export default class GhostInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      ghostData: ''
    };
  }

  getGhostData(id) {
    return axios.get('http://localhost:3001/location/detail/' + id);
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    const id = this.props.match.params.id;
    console.log('ID', id);
    this.getGhostData(id).then(res => {
      console.log('THE JSON', res.data);
      this.setState({
        ghostData: res.data
      });
    });
  }
  ghostStreet() {
    if (this.state.ghostData) {
      let address = this.state.ghostData.address;
      // console.log(this.state.ghostData);
      // console.log('FAIL', address.city);
      if (address.street) {
        return address.street;
      } else {
        return '';
      }
    }
  }
  ghostSource() {
    if (this.state.ghostData.info_source) {
      return this.state.ghostData.info_source;
    } else {
      return 'Unknown';
    }
  }
  ghostCity() {
    if (this.state.ghostData) {
      let address = this.state.ghostData.address;
      console.log(this.state.ghostData);
      console.log('FAIL', address.city);
      if (address.city) {
        return address.city;
      } else {
        return '';
      }
    }
  }

  render() {
    console.log('PROPS', this.props);
    return (
      <div className="GhostInfo">
        <Media>
          <Media left href="#">
            <Media object className="ghostDataImg" src={this.state.ghostData.loc_img_link} alt="Place Image" width="550px" height="550px" />
          </Media>
          <Media body className="ghostDataInfo">
            <Media className="ghostDataPlaceName">
              <h1>{this.state.ghostData.place_name}</h1>
            </Media>
            <Media className="ghostDataAddress">
              <h3>{this.ghostStreet()}</h3>
            </Media>
            <Media className="ghostDataCity">
              <h3>{this.ghostCity()}</h3>
            </Media>
            <Media className="ghostDataLocDesc">
              <p>{this.state.ghostData.loc_desc}</p>
            </Media>
            <Media>
              <h5>Source: {this.ghostSource()}</h5>
            </Media>
            <Button outline color="secondary" tag={Link} to='/'>  Back </Button>
          </Media>
        </Media>
      </div>
    );
  }
}
