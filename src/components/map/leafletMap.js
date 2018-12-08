import React from 'react';
import ReactDOM from 'react-dom';
import {Map, TileLayer, GeoJSON} from 'react-leaflet';
import northamerica from './northamerica.js';
import 'leaflet/dist/leaflet.css';
import Markers from '../marker/marker2.js'
//import './index.css';

const center = [46.8797, -110.3626];

const mapStyle = {
  height: "800px",
  zIndex: 999
};

class LeafletMap extends React.Component{
  constructor(props) {
    super(props)
    this.features = []
  }

  generateGeoJSON(feature) {
    for (let i = 0; i < northamerica.features.length; i++){
      this.features.push(<GeoJSON key={i} data={northamerica.features[i]}  style={this.borderStyle(northamerica.features[i])} ></GeoJSON>);
    }
  }

  borderStyle(feature) {
    if (feature.properties.STATE_NAME == 'Montana') {
      return {fillOpacity: 0, color: 'orange' }
    } else {
      return {fillOpacity: .5, color: 'orange' , fillColor: 'navy'}
    }
  }

  render() {
    this.generateGeoJSON();

    return (
      <Map className="map" center={center} style={mapStyle} zoom={7.25} zoomSnap={0} zoomDelta={.25} minZoom={6}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          id="mapbox.streets"
          url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic2hhcm9uZnVsbGVyIiwiYSI6ImNqcGJlZjk3ODA5ZnYzdnBodmh1c3ExZGcifQ.4ZhymN2kEj9qywb3P5f-1Q"
          />
        {this.features}
        <Markers />
      </Map>

    );
  }
}

export default LeafletMap
