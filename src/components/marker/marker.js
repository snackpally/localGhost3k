import React from 'react';
import L from 'leaflet';
import {Marker, GeoJSON} from 'react-leaflet';
import icon from './ghost-icon.png'
import ghost2 from './ghost2.geojson';
// import MarkerLayer from 'react-leaflet-marker-layer';
// import * as PropTypes from 'prop-types';

const ghost = L.icon({
  iconUrl: "ghost-icon.png",
  iconSize: [30, 30]
});
class MarkerComponent extends React.Component {
  static propTypes = {
       ghost2: PropTypes.array.isRequired
     }
  render() {
    const style = {
      img: 'ghost-icon.png',
      width: '30px',
      height: '30px'
    };

    return (
      <div style={Object.assign({}, this.props.style, style)}></div>
    );
  }

}

class Markers extends React.Component {
  constructor(props) {
    super(props)
    this.feature = []


  }
  render() {
    const {key, position, geoJSON} = this.props;

    return (
      <MarkerLayer markers = {ghost2} data = {geoJSON} longitudeExtractor= {m => m.features.geometry.coordinates[0]}
        latitudeExtractor= {m => m.features.geometry.coordinates[1]} markerComponent={MarkerComponent}>
       </MarkerLayer>
    );
  }
}
export default Markers
