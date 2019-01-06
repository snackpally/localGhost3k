import React from 'react';
import { Media, Button } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ghostInfo.css';
import Leaflet from 'leaflet';
import { Map, TileLayer, Marker, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import ghostIcon from '../../assets/image/ghost.png';

const littleMapStyle = {
  height: '250px',
  width: '250px',
  position: 'relative',
  outline: 'none',
  marginLeft: '2em',
  marginRight: '2em',
  marginBottom: '2em',
  border: 'solid',
  borderRadius: '.5em'
};

const ghostSingleIcon = new Leaflet.Icon({
  iconUrl: ghostIcon,
  iconSize: [30, 30]
});

export default class GhostInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      ghostData: '',
      mapCenter: ''
    };
  }
  //const coordinates = {loc: [this.state.ghostData.loc.coordinates[0], this.state.ghostData.loc.coordinates[1]]};

  getGhostData(id) {
    return axios.get('http://localhost:3001/location/detail/' + id);
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    const id = this.props.match.params.id;
    console.log('ID', id);
    this.getGhostData(id).then(res => {
      console.log('THE JSON', res.data);
      console.log('coord', res.data.loc.coordinates);
      this.setState({
        ghostData: res.data,
        mapCenter: res.data.loc.coordinates
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
      if (address.city) {
        return address.city;
      } else {
        return '';
      }
    }
  }

  render() {
    console.log(this.state);
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
            <Button color="secondary" tag={Link} to="/">
              {' < '}
              Back{' '}
            </Button>
          </Media>
        </Media>
        <Map
          className="littleMap"
          center={this.state.mapCenter}
          style={littleMapStyle}
          scrollWheelZoom={false}
          zoom={6.75}
          zoomSnap={0}
          zoomDelta={2}
          minZoom={15}
          maxZoom={16}
          maxBoundsViscosity={1}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            id="mapbox.streets"
            url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic2hhcm9uZnVsbGVyIiwiYSI6ImNqcGJlZjk3ODA5ZnYzdnBodmh1c3ExZGcifQ.4ZhymN2kEj9qywb3P5f-1Q"
          />
          <Marker icon={ghostSingleIcon} position={this.state.mapCenter} />
        </Map>
      </div>
    );
  }
}
