import React from 'react';
import './landing.css';
import Leaflet from '../LeafletMap';
import Carousel from '../carousel/carouselCont';
import GhostCard from '../carousel/cardNew';
class Landing extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="Landing">
          <h1>Local Ghost 3000</h1>
          <p>Your haunted location finder</p>
          <Leaflet />
          <Carousel />
          {/* <GhostCard /> */}
        </div>
      </div>
    );
  }
}

export default Landing;
