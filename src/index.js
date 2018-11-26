import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class HelloWorld extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello and Welcome to Local Ghost</h1>
				<p>This is the best damn ghost app on the web</p>
			</div>
		)
	}
}

ReactDOM.render(
	<HelloWorld />,
	document.getElementById('root')
);