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

  handleModalClick = event => {
    let modal = document.getElementById('modal');
    if (modal.style.display === 'none') {
      modal.style.display = 'block';
    } else {
      modal.style.display = 'none';
    }
  };

  render() {
    return (
      <div className="Home">
        <div className="Landing">
          <div className="homePageModal" id="modal" onClick={this.handleModalClick}>
            <div className="homePageInner">
              <h1 className="h1Styling">Local Ghost 3000</h1>
              <p className="pStyling">Your haunted location finder</p>
              <p className="pStyling">Click to explore!</p>
            </div>
          </div>
          <Leaflet handleMarkerClick={this.handleMarkerClick} className="leafZIndex" />
          {this.state.currentLocation}
          <Carousel />
        </div>
      </div>
    );
  }
}

export default Landing;
