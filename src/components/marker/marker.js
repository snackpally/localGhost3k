import React from 'react';
import {Marker} from 'react-leaflet';

const myIcon = L.icon({
  iconUrl: "ghost-icon.png",
  iconSize: [30, 30]
});

class Marker extends React.Component {
  constructor(props) {
    super(props)
  }
   render() {
    return (
      <Marker />
}
