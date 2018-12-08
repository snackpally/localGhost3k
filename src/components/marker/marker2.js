import React from 'react';
import Leaflet from 'leaflet';
import {Marker, GeoJSON} from 'react-leaflet';
import ghost from './ghost-icon.png';
import ghost2 from './ghost2.js';



const ghosts = new Leaflet.Icon({
    iconUrl: require('./ghost-icon.png'),
    iconSize: [30,30]
  });


class Markers extends React.Component {
  constructor(props) {
    super(props)
    this.features = []
  }


  generateMarkers() {
    for (let i = 0; i < ghost2.features.length; i++){
      this.features.push(<Marker key={i} position={ghost2.features[i].geometry.coordinates} riseOnHover={true} icon={ghosts}/>);
    }
  }

render() {
  this.generateMarkers()
  console.log(this.features)

  return (
  this.features
  );
 }
}

export default Markers
