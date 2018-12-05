import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Greeting from './greeting';
// import MapContainer from './googleMap';
import OtherLayersExample from './leafletMap.js'
class HelloWorld extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello and Welcome to Local Ghost</h1>
				<Greeting />

			<div>
				<h1>Ghost Map Attempt</h1>
				<OtherLayersExample />
			</div>
		</div>
		)
	}
}

ReactDOM.render(
	<HelloWorld />,
	document.getElementById('root')
);
