import React from 'react';
import ReactDOM from 'react-dom';
import {Map, TileLayer, GeoJSON} from 'react-leaflet';

import northamerica from './northamerica.js';
//import './App.css';

//import {L, GeoJSON as LeafletGeoJSON, type Layer} from 'leaflet';
import 'leaflet/dist/leaflet.css';
////import Ghost from 'ghost2.geojson';
//import './index.css';

const center = [46.8797, -110.3626];

const mapStyle = {
  height: "800px",
  zIndex: 999
};

// const states = new L.geoJSON.AJAX(states.responseJSON, {
//   style: borderStyle
// });






class LeafletMap extends React.Component{
  constructor(props) {
    super(props)
    this.features = []
  }

  generateGeoJSON(feature) {
    for (let i = 0; i < northamerica.features.length; i++){
      this.features.push(<GeoJSON data={northamerica.features[i]}  style={this.borderStyle(northamerica.features[i])} ></GeoJSON>);
    }
  }

  borderStyle(feature) {
    if (feature.properties.STATE_NAME == 'Montana') {
      return {fillOpacity: 0, color: 'orange' }
    } else {
      return {fillOpacity: .5, color: 'orange' , fillColor: 'blue'}
    }
  }

  render() {
    this.generateGeoJSON();

    return (
      <Map center={center} style={mapStyle} zoom={7}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          id="mapbox.streets"
          url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic2hhcm9uZnVsbGVyIiwiYSI6ImNqcGJlZjk3ODA5ZnYzdnBodmh1c3ExZGcifQ.4ZhymN2kEj9qywb3P5f-1Q"
          />
        {this.features}

      </Map>

    );
  }
}

export default LeafletMap
