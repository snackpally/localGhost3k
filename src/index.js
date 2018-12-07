import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './greeting';
import UserForm from './components/login/login';
import Navbar from './components/navbar/nav1';

class HelloWorld extends React.Component {
	render() {
		return (
			<div>
			<Navbar />
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
