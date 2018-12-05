import React from 'react';
import ReactDOM from 'react-dom';
// import {Map, TileLayer,} from '../../src';
//import './App.css';

import 'leaflet/leaflet.css';
import icon from 'ghost-icon.png';
import ghost from './ghost2.geojson';
import './index.css';
// import App from '/App';
// import registerServiceWorker from './registerServiceWorker';

const center = [46.8797, -110.3626]

export default class OtherLayersExample extends Component<{}> {
  return (
    <Map center={center} zoom={7}>
    <TileLayer
    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
