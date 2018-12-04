import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Greeting from './greeting';
import UserForm from './components/login/login';

class HelloWorld extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello and Welcome to Local Ghost</h1>
				<Greeting />
				<UserForm />
			</div>
			
		)
	}
}

ReactDOM.render(
	<HelloWorld />,
	document.getElementById('root')
);