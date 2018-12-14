import React from 'react';
import ReactDOM from 'react-dom';
import LeafletMap from './components/LeafletMap.js';
import Carousel from './components/carousel/carouselCont';
import Navbar from './components/navbar/nav1.js';
import style from './components/navbar/index.css';
import nearyou from './index.css';
class App extends React.Component {
  render() {
    return (
      <div>
        {/* <div className="navbar"> */}
        <Navbar />
        {/* </div> */}
        {/* <div className="map"> */}
        {/* <h2 className="map-introduction">Montana Hauntings</h2> */}
        <LeafletMap />
        {/* </div> */}
        {/* <div className="carousel"> */}
        <h1 className="hauntings-near-you">Hauntings near you</h1>
        <Carousel />
        {/* </div> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// A few of these divs are redundent and are overriding the css rules already being called with bootstrap.
//I commented them the out and we can work on the alignment from there.
//Just a thought.
