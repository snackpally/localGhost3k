import React from "react";
import ReactDOM from "react-dom";
import LeafletMap from "./components/LeafletMap.js";
import Carousel from "./components/carousel/carouselCont";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="map">
          <h1>Ghost Map Attempt</h1>
          <LeafletMap />
          <Carousel />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
