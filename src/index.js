import React from "react";
import ReactDOM from "react-dom";
import LeafletMap from "./components/LeafletMap.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="map">
          <h1>Ghost Map Attempt</h1>
          <LeafletMap />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
