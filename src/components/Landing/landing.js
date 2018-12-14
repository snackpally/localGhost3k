import React from 'react';
import './landing.css';
import Leaflet from '../LeafletMap';

class Landing extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="Landing">
          <h1>Local Ghost 3000</h1>
          <p>Your haunted location finder</p>
          <Leaflet />
        </div>
      </div>
    );
  }
}

export default Landing;
