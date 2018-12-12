import React from 'react';
import Leaflet from 'leaflet';
import {Marker, GeoJSON} from 'react-leaflet';
import ghost from '../assets/image/ghost-icon.png';
import ghost2 from './ghost2.js';
import axios from 'axios';

const ghosts = new Leaflet.Icon({
  iconUrl: require('./ghost-icon.png'),
  iconSize: [30,30]
});

// onEachFeature = (feature, layer) => {
//    layer.on({
//      click: this.clickToFeature.bind(this)
//    });
//  }
//
//  clickToFeature = (e) => {
//     var ghost_info = e.target;
//     <Collapse />;
//   }


export default class Markers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ghosts: [],
      data: ""
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/location/test').then(res => {
      console.log(res);
      console.log(res.data);
      this.setState({
        data: res.data
      })
    })
  }
  //
  // generateMarkers() {
  //   console.log(this.state.data.place_name)
  //   for (let i = 0; i < this.state.data.length; i++){
  //     this.state.ghosts.push(<Marker key={i} riseOnHover={true} position={this.state.data[i].loc.coordinates.type}  icon={ghosts}/>);
  //   }
  // }
  // changed array name to ghosts instead of features
  generateMarkers() {
    for (let i = 0; i < ghost2.features.length; i++){
      this.state.ghosts.push(<Marker key={i} riseOnHover={true} position={ghost2.features[i].geometry.coordinates}  icon={ghosts}/>);
    }
  }

  render() {
    this.generateMarkers()
    console.log(this.state.ghosts)

    return (
      this.state.ghosts
    );
  }
}
