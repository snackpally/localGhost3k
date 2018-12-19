import React from 'react';
import './landing.css';
import Leaflet from '../LeafletMap';
import Carousel from '../carousel/carouselCont';
import GhostCard from '../carousel/cardNew';
import Collapseable from '../Collapseable'

class Landing extends React.Component {
  constructor(){
    super();

    this.state = {
      currentLocation: null,
    }
    this.handleMarkerClick=this.handleMarkerClick.bind(this);
  }

  handleMarkerClick(marker) {
    console.log("clicked marker! info now available in Landing");
    let collapse = <Collapseable data={marker}/>;

   	this.setState({
     	currentLocation: collapse
    });
  }

  render() {
    return (
      <div className="Home">
        <div className="Landing">
          <h1>Local Ghost 3000</h1>
          <p>Your haunted location finder</p>
          <Leaflet handleMarkerClick={()=>this.handleMarkerClick}/>
          {this.state.currentLocation}
          <Carousel />
          {/* <GhostCard /> */}
        </div>
      </div>
    );
  }
}

export default Landing;
