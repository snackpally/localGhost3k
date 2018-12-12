import React from "react";
import ReactDOM from "react-dom";
import LeafletMap from "./components/LeafletMap.js";
import Carousel from "./components/carousel/carouselCont";
import Navbar from "./components/navbar/nav1.js"
import style from "./components/navbar/index.css"
class App extends React.Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <Navbar />
        </div>
        <div className="map">
          <h2 className="map-introduction">Montana Hauntings</h2>
          <LeafletMap />
        </div>
        <div className="carousel">
          <h3 className="hauntings-near-you">Hauntings near you</h3>
          <Carousel />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
