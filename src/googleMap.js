import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'react-google-maps';
import icon from './ghost-icon.png';
//import './HelloWorld.css';
import {Collapse, Card, CardBody} from 'reactstrap';
import ghosts from 'ghost2.geojson';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends React.Component {
  state = {
    showingCollapse: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingCollapse: true
    });

    onClose = props => {
      if(this.state.showingCollapse) {
        this.setState({
          showingCollapse: false,
          activeMarker: null
        });
      }
    };
  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={7}
          style={mapStyles}
          initialCenter={{
            lat: 46.8797,
            lng: -110.3626}
        >
        <Marker onClick={this.onMarkerClick}
        marker={this.state.activeMarker}
        visible={this.state.showingCollapse}/>
        <div>
        <Collapse isOpen={this.state.collapse}>
            <Card>
              <CardBody>
                <h4>{this.state.selectedPlace.} + {this.state.ghost2.ghost_name}</h4>
              </CardBody>
            </Card>
          </Collapse>
          </div>
        </div>
    );
  }
}
export default GoogleApiWrapper({
  (props) => ({
  apiKey: 'AIzaSyBuKPHJxYxFfGhfoR1sJQTPoTIVjpN4xyg'
}))(MapContainer);
