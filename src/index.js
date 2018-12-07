import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './greeting';
//import UserForm from './components/login/login';
import LeafletMap from './components/map/leafletMap.js';


class HelloWorld extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello and Welcome to Local Ghost</h1>
				<Greeting />

			<div id='map'>
				<h1>Ghost Map Attempt</h1>
				<LeafletMap />
			</div>
		</div>
		)
	}
}

ReactDOM.render(
	<HelloWorld />,
	document.getElementById('root')
);
