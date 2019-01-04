import React from 'react';
import './landing.css';
import Leaflet from '../LeafletMap';
import Carousel from '../carousel/carouselCont';
import GhostCard from '../carousel/cardNew';
import Collapseable from '../Collapseable';

class Landing extends React.Component {
  constructor() {
    super();

    this.state = {
      currentLocation: null
    };
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
  }

  handleMarkerClick(e) {
    console.log('clicked marker! info now available in Landing', e);
    let collapse = <Collapseable collapse="true" data={e} />;
    // for some reason, data, passed above, is showing up 'undefined' in collapseable.
    //
    this.setState({
      currentLocation: collapse
    });
    let newView = document.getElementById('ghostCollapse');
    newView.scrollIntoView();
    //todo scroll transition
  }

  render() {
    return (
      <div className="Home">
        <div className="Landing">
          <h1>Local Ghost 3000</h1>
          <p>Your haunted location finder</p>
          <Leaflet handleMarkerClick={this.handleMarkerClick} />
          {this.state.currentLocation}
          <Carousel />
        </div>
      </div>
    );
  }
}

export default Landing;
