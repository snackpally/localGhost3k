import React from 'react';
import ReactDOM from 'react-dom';
import Leaflet from 'leaflet';
import {Map, TileLayer, GeoJSON} from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import Markers from './Markers.js';
import Collapsable from './Collapsable.js';
import 'react-leaflet-markercluster/dist/styles.min.css';
import 'leaflet/dist/leaflet.css';
import northamerica from './northamerica.js';
import ghostIcon from '../assets/image/ghost-icon.png';

const centerCoord = [46.8797, -110.3626];

const mapStyle = {
  height: "800px",
  zIndex: 999
};

const ghostClusterIcon = new Leaflet.Icon({
  iconUrl: './assets/image/ghost-icon.png',
  iconSize: [40,40]
});

export default class LeafletMap extends React.Component{
  constructor(props) {
    super(props)
    this.features = []
    this.highlightFeature.bind(this);
    this.resetHighlight.bind(this);
    this.clickToCollapse.bind(this);
    this.onEachFeature.bind(this);
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

  onEachFeature(ghosts, layer) {
    layer.on({
      mouseover: this.highlightFeature,
      mouseout: this.resetHighlight,
      click: this.clickToCollapse
    })
  };

  render() {
    this.generateGeoJSON();

    return (
      <Map className="map" center={centerCoord} style={mapStyle} zoom={7.25} zoomSnap={0} zoomDelta={.25} minZoom={6} maxZoom={20}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          id="mapbox.streets"
          url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic2hhcm9uZnVsbGVyIiwiYSI6ImNqcGJlZjk3ODA5ZnYzdnBodmh1c3ExZGcifQ.4ZhymN2kEj9qywb3P5f-1Q"
          />
          //below refers to northamerica geojson
        {this.features}
        <MarkerClusterGroup iconCreateFunction={ghostClusterIcon} showCoverageOnHover={true}>
          <Markers onEachFeature={this.onEachFeature.bind(this)}/>
          onEachFeature={this.onEachFeature}
        </MarkerClusterGroup>
      </Map>

    );
  }
}
