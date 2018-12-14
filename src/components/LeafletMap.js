import React from "react";
// import ReactDOM from 'react-dom';
import axios from "axios";
import Leaflet from "leaflet";
import { Map, TileLayer, Marker, GeoJSON } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
// import Collapseable from './Collapseable.js';
import "react-leaflet-markercluster/dist/styles.min.css";
import "leaflet/dist/leaflet.css";
import northamerica from "../assets/maps/northamerica.js";
//import ghost2 from '../assets/dummyData/ghost2.js';

const centerCoord = [46.8797, -110.3626];

const mapStyle = {
  height: "550px",
  width: "1100px",
  zIndex: 999,
  margin: "auto",
  borderStyle: "solid",
};

const ghostSingleIcon = new Leaflet.Icon({
  iconUrl: "./assets/image/ghost-icon.png",
  iconSize: [30, 30]
});

const ghostClusterIcon = new Leaflet.Icon({
  iconUrl: "./assets/image/ghost-icon.png",
  iconSize: [80, 80]
});

// const markers =  new Leaflet.geoJson(localghost ,{
//       onEachFeature: ghostSingleIcon
//     })


export default class LeafletMap extends React.Component {
  constructor(props) {
    super(props);
    this.features = [];
    this.markers = [];
    this.state = {
      data: '',
    };
  }
  // map data? reduce via getnestedobjects
  componentDidMount() {
    axios.get('http://localhost:3001/location/allGhost').then(res => {
      console.log(res);
      console.log(res.data);
      this.setState({
        data: res.data,
        ready: true
      });
      this.generateMarkers();
    });
  }


  generateFeatures() {
    for (let i = 0; i < northamerica.features.length; i++) {
      this.features.push(<GeoJSON key={i} data={northamerica.features[i]} style={this.borderStyle(northamerica.features[i])} />);
    }
  }

  //const latlng = Leaflet.latLng({this.state.data[i].loc.coordinates});

  generateMarkers() {
    for (let i = 0; i < this.state.data.length; i++) {
      this.markers.push(<Marker key={i} riseOnHover={true} position={this.state.data[i].loc.coordinates} icon={ghostSingleIcon} />);
    }
  }

  borderStyle(feature) {
    if (feature.properties.STATE_NAME == "Montana") {
      return { fillOpacity: 0, color: "#ffcc66" };
    } else {
      return { fillOpacity: 0.5, color: "#ffcc66", fillColor: "navy" };
    }
  }

  // onEachFeature(ghostSingleMarker, layer) {
  // //   layer.on({
  // //     mouseover: this.highlightFeature,
  // //     mouseout: this.resetHighlight,
  // //     click: this.clickToCollapse
  // //   })
  //  };

  componentWillMount() {
    this.generateFeatures();
    this.generateMarkers();
  }
  render() {
    return (
      <Map className="map" center={centerCoord} style={mapStyle} zoom={6.75} zoomSnap={0} zoomDelta={0.1} minZoom={6.5} maxZoom={20}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          id="mapbox.streets"
          url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic2hhcm9uZnVsbGVyIiwiYSI6ImNqcGJlZjk3ODA5ZnYzdnBodmh1c3ExZGcifQ.4ZhymN2kEj9qywb3P5f-1Q"
          />

        {this.features}
        <MarkerClusterGroup iconCreateFunction={() => ghostClusterIcon} showCoverageOnHover={true}>
          {this.markers}
        </MarkerClusterGroup>
      </Map>
    );
  }
}
