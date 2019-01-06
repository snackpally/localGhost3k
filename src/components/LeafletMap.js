import React from 'react';
import axios from 'axios';
import Leaflet from 'leaflet';
import { Map, TileLayer, Marker, GeoJSON } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'react-leaflet-markercluster/dist/styles.min.css';
import './component.css';
import 'leaflet/dist/leaflet.css';
import northamerica from '../assets/maps/northamerica.js';
//import ghostIconImage from '../assets/image/ghost-icon.png';
import ghostIcon from '../assets/image/Spookyghost.png';

const centerCoord = [46.8797, -110.3626];

const northEastCorner = Leaflet.latLng(48.933, -103.868);
const southWestCorner = Leaflet.latLng(44.659, -103.925);
const bounds = Leaflet.latLngBounds(southWestCorner, northEastCorner);

const mapStyle = {
  height: '590px',
  width: 'auto',
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
  iconSize: [33.3, 33.3]
});

const ghostClusterIcon = new Leaflet.Icon({
  iconUrl: ghostIcon,
  iconSize: [55, 55]
});

export default class LeafletMap extends React.Component {
  constructor(props) {
    super(props);
    this.features = [];
    this.markers = [];
    this.state = {
      data: '',
      markers: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3001/location/allGhost').then(res => {
      this.setState(
        {
          data: res.data,
          ready: true
        },
        () => this.generateMarkers()
      );
    });
  }

  generateFeatures() {
    for (let i = 0; i < northamerica.features.length; i++) {
      this.features.push(<GeoJSON key={i} data={northamerica.features[i]} style={this.borderStyle(northamerica.features[i])} />);
    }
  }

  generateMarkers() {
    for (let i = 0; i < this.state.data.length; i++) {
      this.markers.push(
        <Marker
          className="markers"
          key={i}
          riseOnHover={true}
          position={this.state.data[i].loc.coordinates}
          maxBounds={this.state.bounds}
          icon={ghostSingleIcon}
          bubblingMouseEvents={true}
          onClick={() => this.props.handleMarkerClick(this.state.data[i])}
        />
      );
      console.log('this here', this.state.data[i]);
    }
    this.setState({
      markers: this.markers
    });
  }

  borderStyle(feature) {
    if (feature.properties.STATE_NAME === 'Montana') {
      return { fillOpacity: 0, color: '#2B3038' };
    } else {
      return { fillOpacity: 0.6, color: '#2B3038', fillColor: '#2B3038' };
    }
  }

  render() {
    this.generateFeatures();

    return (
      <div>
        <Map
          className="map"
          center={centerCoord}
          style={mapStyle}
          scrollWheelZoom={false}
          zoom={6.75}
          zoomSnap={0}
          zoomDelta={2}
          minZoom={6.75}
          maxZoom={20}
          maxBoundsViscosity={1}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            id="mapbox.streets"
            url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic2hhcm9uZnVsbGVyIiwiYSI6ImNqcGJlZjk3ODA5ZnYzdnBodmh1c3ExZGcifQ.4ZhymN2kEj9qywb3P5f-1Q"
          />
          {this.features}
          <MarkerClusterGroup iconCreateFunction={() => ghostClusterIcon}>{this.state.markers}</MarkerClusterGroup>
        </Map>
      </div>
    );
  }
}
